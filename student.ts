// put(`/api/alunos/${studentId}`, body)
export interface StudentData {
  data_de_nascimento: string,
  ano_ciclo: string,
  nome_pai: string,
  nome_mae: string,
  nome: string,
  email: string,
  Deficiencias: string[],
  turma: string;
}

// .post(`/api/alunos`
export interface StudentDataCreate extends Omit<StudentData, 'Deficiencias'> {
  cadastrado: boolean;
  nome_responsavel: string,
  password: string;
  deficiencia: string[]
}

// get(`/api/alunos/${studentId}`);
// get(`/api/alunos/${schoolId}`);
// get(`/api/alunos/lista/professor/qualquercoisa`);
export interface StudentDataGet extends StudentData {
  escola_id: string;
  responsavel_id: string;
  id: string;
}

export const emptyStudentDataGet: StudentDataGet = {
  escola_id: '',
  responsavel_id: '',
  id: '',
  data_de_nascimento: '20-04-2005',
  ano_ciclo: '',
  nome_pai: '',
  nome_mae: '',
  nome: '',
  email: '',
  Deficiencias: [],
  turma: '',
}
