import {Injectable} from "@nestjs/common";

@Injectable({})
export class AuthService{

    login(){
        return {msg:'I am signin in'}
    }

    signup(){
        return {msg:'I am signed up'}
    }
}

