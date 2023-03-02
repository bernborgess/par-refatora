
export const possibleBases = [
  "PBH",
  "BNCC",
] as const;

// post(`/api/escolas`, body);
export interface SchoolData {
  name: string;
  email: string;
  password: string;
  base_de_dados: string;
  codigo: string;
  municipio: string;
  //! REF: Back usar boolean
  sala_de_aee: 1 | 0;
  predio_acessivel: 1 | 0;
}


// put(`/api/escolas/${schoolId}`, body);
export interface SchoolDataEdit extends Omit<SchoolData, 'password'> { }

// get(`/api/escolas/${schoolId}`);
// get(`/api/escolas`);
export interface SchoolDataGet extends SchoolDataEdit {
  id: string,
  status: 'Desativada' | 'Ativa',
}


export const emptySchoolDataGet: SchoolDataGet = {
  id: '',
  name: '',
  email: '',
  base_de_dados: '',
  codigo: '',
  municipio: '',
  sala_de_aee: 0,
  predio_acessivel: 0,
  status: 'Ativa',
}

// get(`/api/escolas/codigo/${schoolCode}`);
type SchoolChip = {
  name: string;
  municipio: string;
}
