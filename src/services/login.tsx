import { api } from "../api";

export const login = async (
  email: string,
  password: string
): Promise<boolean> => {
  const data: any = await api;

  if (email !== data.email || password !== data.password) {
    return false;
  }

  return true;
};
