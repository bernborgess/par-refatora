
// get(`/api/professores/aee/lista`);
export interface TeacherAEEChip {
  professor_aee_id: string;
  professorAEE: string;
}

export interface TeacherData {
  name: string,
  email: string,
  disciplinas: string[],
  professor_aee: 1 | 0
}


// post(`/api/professores`, body);
export interface TeacherDataCreate extends Omit<TeacherData, 'disciplinas'> {
  password: string;
  // TODO Verificar com o back se array
  disciplinas: string;
}


// get(`/api/professores/lista/escola/f`);
// get(`/api/professores/${teacherId}`);
export interface TeacherDataGet extends TeacherData {
  id: string,
  escola_id: string,
  turmas: string[],
}

export const emptyTeacherDataGet: TeacherDataGet = {
  id: '',
  name: '',
  email: '',
  disciplinas: [],
  turmas: [],
  professor_aee: 0,
  escola_id: ''
}