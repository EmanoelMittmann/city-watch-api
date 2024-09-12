
export interface IExternalAuthenticationRepository {
    signIn(input: any): Promise<any>
    signUp(input: any): Promise<any>
}

export interface ISignInDto {
    email: string,
    password: string
}