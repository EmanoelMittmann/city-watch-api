import { RoleEnum } from "../../../../app/shared/enums/role.enum";


export const DEFAULT_USERS_MOCKS = [
    {
        email: 'emanoelmittmann@rede.ulbra.br',
        name: 'Emanoel Dimer Leffa Mittmann de Oliveira',
        password: '12345678',    
        role: RoleEnum.ADMIN
    },
    {
        email: 'gustavo.7@rede.ulbra.br',
        name: 'Gustavo Rosa Duarte',
        password: '12345678',
        role: RoleEnum.ADMIN
    }
    ,{
        email: 'leohuemaster@gmail.com',
        name: 'Leonardo Cardoso',
        password: '12345678',
        role: RoleEnum.ADMIN    
    },
    {
        email: 'luizvictorcprs@rede.ulbra.br',
        name: 'Luiz Victor Hoffmann Likoski',
        password: '12345678',
        role: RoleEnum.ADMIN
    }
]