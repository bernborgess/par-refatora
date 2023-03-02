import { SchoolDataGet } from "./school";
import { SupervisorDataGet } from "./supervisor";
import { TeacherDataGet } from "./teacher";

// post(`/api/users/redefinir-senha`, body)
export interface ResetPasswordData {
  token: string,
  senha: string,
  repeticao_senha: string,
}

export type AdminDataGet = {
  email: string;
  name: string;
  role: "admin"
}

export type ResponsibleDataGet = {
  email: string;
  name: string;
  role: "responsavel"
}

// get(`/api/users/user`);
export type UserGet =
  SupervisorDataGet | TeacherDataGet |
  SchoolDataGet | AdminDataGet
  | ResponsibleDataGet;


// get(`/api/users/user`);
export interface getUserStudentData {
  EscolaUserid: string,
  EscolaUsername: string,
  ano_ciclo: number,
  id: string,
  idade: number,
  nome: string,
}

// put(`/api/users/senha`, body);
export interface EditPasswordData {
  senha_atual: string,
  senha: string,
  repeticao_senha: string,
}