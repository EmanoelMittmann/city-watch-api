
export interface ISecurityRepository {
    generateHash(input: string) : string 
    comparePass(storedPass:string, inputPass: string): Promise<boolean>
}