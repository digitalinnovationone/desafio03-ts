import { IUser } from './services/interfaces/user.interface';

const conta = {
    email: 'vini@dio.bank',
    password: '123456789',
    name: 'Vinicius de Lima',
    balance: 2000.00,
    id: '1'
}

export const api = new Promise<IUser>((resolve) => {
    setTimeout(() => {
        resolve(conta);
    }, 3000)
});
