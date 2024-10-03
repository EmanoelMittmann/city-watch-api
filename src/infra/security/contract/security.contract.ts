

export interface SecurityContract {
    comparePass(inputpass: string, storedPass: string): boolean 
    hashPass(input: string): string
}