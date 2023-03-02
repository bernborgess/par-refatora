
// post(`/api/pdis`, { pdis });
export interface PdisData {
  aluno_id: string,
  professor_id: string,
  disciplina_id: string,
  professor_aee_id: string | null,
}

// put(`/api/pdis/${pdiId}`, body);
export interface PdisDataEdit {
  ProfessorId: string,
  DisciplinaId: string,
  ProfessorAeeId: string | null,
}

// get(`api/pdis/pdi/${pdiId}`);
// get(`/api/disciplinas/pdi/escola/${studentId}`,);
export interface PDIChipData {
  id: string;
  disciplina: string;
  professorRegente: string;
  hasProfessorAEE: boolean;
  professorAEE: string | undefined;
  aluno_id?: string;
  escola_id?: string;
  disciplina_id?: string;
  professor_id?: string;
  professor_aee_id?: string | undefined;
}

export const emptyPDI: PDIChipData = {
  id: '0',
  disciplina: "",
  professorRegente: "",
  hasProfessorAEE: false,
  professorAEE: "",
  aluno_id: "",
  escola_id: "",
  disciplina_id: "",
  professor_id: "",
  professor_aee_id: ""
};