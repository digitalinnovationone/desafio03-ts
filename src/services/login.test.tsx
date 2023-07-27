import { login } from "./login";

describe("login", () => {
  const mock = {
    email: "nath@dio.bank",
    password: "123456",
    wrongMail: "email@invalido.com",
    wrongPassword: "senhaInvalida",
  };

  it("Deve exibir um alert com boas vindas caso o email seja válido", async () => {
    const response = await login(mock.email, mock.password);
    expect(response).toBeTruthy();
  });

  it("Deve exibir um erro caso o email seja inválido", async () => {
    const response = await login(mock.wrongMail, mock.wrongPassword);
    expect(response).toBeFalsy();
  });
});
