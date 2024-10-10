import { DEFAULT_USERS_MOCKS } from '@databases/mocks/users/default-user.mock'
import {PRISMA} from './main.seed'
import { SecurityRepository } from 'src/infra/security/repository/security.repository'

export function generateMastersUsersSeed(){
    console.info("\x1b[32m", "-----SEED:USERS------")

    return DEFAULT_USERS_MOCKS.map(async (iterable) => {
        const securityRepository = new SecurityRepository()

        await PRISMA.users.create({
            data: {
                name: iterable.name,
                email: iterable.email,
                password: securityRepository.hashPass(iterable.password),
                role: iterable.role
            }
        })
    } )
}