// get(`/api/banco_de_estrategias/verifica/${strategyId}/${studentId}`)
export interface getCheckPDITeacherData {
  id: string | undefined;
}

// get(`/api/banco_de_estrategias/${strategyId}`);
export interface IStrategyBankProfile extends StrategyBankData {
  EscolaId: string;
  conteudo: string;
  descricao: string;
  habilidades: string;
  objetivo: string;
}

// get(`/api/banco_de_estrategias`);
export interface StrategyBankData {
  id: string;
  nome: string;
  disciplina: string;
  aluno: string;
  deficiencia: string;
}

export interface StrategyData {
  conteudo: string,
  nome: string,
  objetivo: string,
  data_final: Date,
  alerta: number,
  descricao: string,
  habilidades: string,
}

export const emptyStrategyData: StrategyData = {
  conteudo: '',
  nome: '',
  objetivo: '',
  data_final: new Date(),
  alerta: 0,
  descricao: '',
  habilidades: ''
}


// get(`/api/estrategias/aluno/${studentId}`);
// get(`/api/estrategias/pdi/${pdiId}`);
// get(`/api/estrategias/lista/coordenador`);
export interface StrategyDataGet {
  alerta: number;
  conteudo: string;
  data_final: Date;
  descricao: string;
  disciplina: string;
  habilidades: string;
  id: string;
  nome: string;
  objetivo: string;
  resultado: string;

  //TODO
  sourceID: null | string
}


export const strategyResults = [
  "Não Finalizada",
  "Totalmente",
  "Parcialmente",
  "Não Alcançado"] as const;


// put(`/api/estrategias/${strategyId}`, { resultado });
export type StrategyResultOption = typeof strategyResults[number];



export interface SingleStrategyDataGet {
  PdiId: string;
  conteudo: string,
  data_final: Date,
  descricao: string;
  habilidades: string;
  id: string;
  alerta: number;
  justificativa: string | null;
  nome: string,
  objetivo: string,
  resultado: StrategyResultOption
  visivel: number;
}


// get(`/api/estrategias/percursos/${pdiId}`);
// get(`/api/estrategias/percursos/${pdiId}?conteudo=${conteudo}`);
// get(`/api/estrategias/percursos/${pdiId}?conteudo=${conteudo}&objetivo=${objetivo}`);
export type StrategyFields = Pick<StrategyData, 'conteudo' | 'objetivo' | 'habilidades'>

export async function editStrategyExtend(
  strategyId: string,
  data_final: string,
  alerta?: number) {
  // @ts-ignore
  return await api.put(`/api/estrategias/estender/${strategyId}`, { data_final, alerta });
}


/*
CLONADA

if(NAO_ALCANCADO){
  ESTENDER => Muda prazo
  CANCELAR => Justificativa
}
FINALIZAR => (status) Posso mandar pro banco
  if(CLONADA) Posso mandar recomendacao
*/


export async function editStrategyCancel(strategyId: string, justificativa: string) {
  // @ts-ignore
  await api.put(`/api/estrategias/cancelar/${strategyId}`, { justificativa });
}


export async function editStrategyFinish(strategyId: string, resultado: StrategyResultOption) {
  await api.put(`/api/estrategias/${strategyId}`, { resultado });
}





