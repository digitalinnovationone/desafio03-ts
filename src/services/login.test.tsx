import { login } from "./login"

describe('login', () => {

    const truthyEmail = 'vini@dio.bank';
    const truthyPass = '123456789';

    it('Deve receber verdadeiro caso o email e senha sejam verdadeiros', async() => {
        const response = await login(truthyEmail, truthyPass);
        expect(response).toBeTruthy();
    })

    it('Deve receber false caso o email ou senha sejam inválidos', async() => {
        const response = await login('email@invalido.com', 'senhaInvalida');
        expect(response).not.toBeTruthy();
    })
})