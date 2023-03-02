
export interface SupervisorData {
  email: string;
  name: string;
  turno: string;
  escola_id: string;
}

// post(`/api/coordenadores`, body);
export interface SupervisorDataCreate extends SupervisorData {
  password: string
}


// put(`/api/coordenadores/${supervisorId}`, body)
export interface SupervisorDataEdit {
  name: string;
  turno: string;
  email: string;
}


export interface SupervisorDataGet extends SupervisorData {
  id: string,
  escola_id: string,
}

// .get(`/api/coordenadores/${supervisorId}`);
export const emptySupervisorDataGet: SupervisorDataGet = {
  id: '',
  name: '',
  email: '',
  turno: '',
  escola_id: ''
}