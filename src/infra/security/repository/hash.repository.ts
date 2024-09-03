import { ISecurityRepository } from "../contract/security.contract";
import {hashSync, compare} from 'bcrypt'

export class HashRepository implements ISecurityRepository {

    async comparePass(storedPass: string, inputPass: string): Promise<boolean> {
        return compare(inputPass, storedPass)    
    }

    generateHash(input: string): string {
        return hashSync(input, 12)
    }
}