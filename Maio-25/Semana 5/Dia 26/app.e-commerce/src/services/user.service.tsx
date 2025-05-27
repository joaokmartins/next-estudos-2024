import { ISignin, ISignup } from "@/interfaces";
import axios from "axios";

function signin(data: ISignin): Promise<any> {
  return new Promise((resolve, reject) => {
    const url = 'http://localhost:3000/users/signin';
    axios
      .post(url, data)
      .then((response) => resolve(response.data))
      .catch(() => reject('Erro ao tentar autenticar usuário.'));
  });
}

function signup(data: ISignup): Promise<any> {
  return new Promise((resolve, reject) => {
    const url = 'http://localhost:3000/users/signup';
    axios
      .post(url, data)
      .then((response) => resolve(response.data))
      .catch(() => reject('Erro ao tentar criar usuário.'));
  });
}

export const UserService = {
  signin,
  signup,
};