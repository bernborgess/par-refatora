import { StudentDataGet } from "./student";
import { TeacherDataGet } from "./teacher";

export async function listStudentsByTeacherId(teacherId: string): Promise<StudentDataGet[]> {
  //@ts-ignore
  const { data: { alunos } } = await api
    .get(`/api/alunos/lista/professor/${teacherId}`);
  return alunos.map((aluno: any) => aluno.Aluno) as StudentDataGet[];
}


export async function listTeachersBySchoolId(schoolId: string): Promise<TeacherDataGet[]> {
  //@ts-ignore
  const { data: { professor } } = await api
    .get(`/api/professores/lista/escola/${schoolId}`);
  return professor.map((professor: any): TeacherDataGet => ({
    ...professor,
    escola_id: professor.EscolaId,
    disciplinas: professor.disciplinas.split(",")
  }));
}