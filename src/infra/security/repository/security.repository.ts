import { Injectable } from "@nestjs/common";
import { SecurityContract } from "../contract/security.contract";
import {compareSync,hashSync} from 'bcrypt'

@Injectable()
export class SecurityRepository implements SecurityContract {
    comparePass(inputpass: string, storedPass: string): boolean {
        const isValid =  compareSync(inputpass, storedPass)
    
        return isValid
    }
    
    hashPass(input: string): string {
        const DEFAULT_SALTS = 12
        return hashSync(input, DEFAULT_SALTS)
    }
}