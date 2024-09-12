import { Injectable } from "@nestjs/common";
import { IExternalAuthenticationRepository, ISignInDto } from "../contract/authentication.contract";
import { UserCredential, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import { FirebaseApp } from "../authentication.service";

@Injectable()
export class ExternalAuthenticationService implements IExternalAuthenticationRepository {
    constructor(
        private readonly app: FirebaseApp
    ){}
    signIn(input: ISignInDto): Promise<UserCredential> {
        return signInWithEmailAndPassword(this.app.auth(), input.email, input.password)
    }

    signUp(input: ISignInDto): Promise<UserCredential> {
        return createUserWithEmailAndPassword(this.app.auth(), input.email, input.password)
    }
}