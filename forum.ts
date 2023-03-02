
export interface ContentData {
  conteudo: string,
}


export async function createContent(studentId: string, conteudo: string) {
  //@ts-ignore
  await api.post(`/api/anotacoes/${studentId}`, { conteudo });
}


export interface ContentDataGet extends ContentData {
  id: string,
  professor: string,
  data: string
}

export const emptyContentDataGet: ContentDataGet = {
  id: '0',
  professor: '',
  data: '',
  conteudo: ''
};

export async function getContents(studentId: string): Promise<ContentDataGet[]> {
  console.log(`Getting contents for ${studentId}`)
  // TODO: Alinhamento back
  // const { data: { anotacoes } } = await api.get(`/api/anotacoes/${studentId}`);
  // return anotacoes;
  return [
    { id: "1", professor: "Professor Muriarte", data: "03/02/2023", conteudo: "Sherlock Holmes e um aluno atrevido" },
    { id: "2", professor: "Professor Lestrade", data: "03/02/2023", conteudo: "Sherlock Holmes e um aluno dedicado" },
    { id: "3", professor: "Professor Xavier", data: "03/02/2023", conteudo: "Logan nunca foi um aluno exemplar" }
  ];
}



interface NewTopic {
  alunoId: string,
  title: string,
}

interface Topic {
  id: string,
  title: string,
  professor: string,
  data: string,
}

interface NewAnnotation {
  topicId: string
  conteudo: string,
}

interface Annotation {
  id: string,
  conteudo: string,
  professor: string,
  ProfessorId: string,
  data: string
}


