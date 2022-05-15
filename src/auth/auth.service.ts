import {Injectable, ForbiddenException} from "@nestjs/common";
import {PrismaService} from "../prisma/prisma.service";
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { AuthDto } from "./dto";
import * as argon from 'argon2';

@Injectable()
export class AuthService{

    constructor(private prisma: PrismaService) {
    }

    async signup(dto: AuthDto){
        try{
            // generate password hash
            const hash = await argon.hash(dto.password);
            // save the new user in the db
            const user = await this.prisma.user.create({
                data: {
                    email: dto.email,
                    hash
                }
            });

            delete user.hash;
            // return the saved user
            return user;
        }catch (error){
            if (error instanceof PrismaClientKnownRequestError){
                if(error.code === 'P2002'){
                    throw new ForbiddenException(
                        'Credential taken',
                    )
                }
            }
            throw error;
        }
    }

    async login(dto: AuthDto){
        // find User by Email
        const user =
            await this.prisma.user.findUnique({
                where: {
                    email: dto.email,
                },
            });

        // if user does not exist throw Exception
        if (!user)
            throw new ForbiddenException(
                'Credential incorrect',
            );

        // compare password
        const pwMatches = await argon.verify(
            user.hash,
            dto.password,
        )

        // if password incorrect throw Exception
        if(!pwMatches){
            throw new ForbiddenException(
                'Credential incorrect',
            );
        }

        // send back the user
        delete user.hash;
        return user;
    }


}

