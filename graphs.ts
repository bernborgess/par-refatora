import { StrategyResultOption } from "./strategy";


type ContentHeader = [string, string, string, string];
type ContentData = [string, number, number, number];
export type ContentGraph = [ContentHeader, ContentData];

export async function getContentGraphData(pdiId: string, conteudo: string): Promise<ContentGraph> {
  //@ts-ignore
  const { data } = await api.get(`/api/graficos/conteudo/pdi/${pdiId}?conteudo=${conteudo}`);
  return data;
}



type IGeneralGraph = Array<(number | string)[]>;

export type JoinedGeneralGraph = {
  [Property in Exclude<StrategyResultOption, "Não Finalizada">]: IGeneralGraph
};

export async function getGeneralGraphData(studentId: string): Promise<JoinedGeneralGraph> {
  //@ts-ignore
  const { data } = await api.get(`/api/graficos/geral/aluno/${studentId}`);
  return {
    "Não Alcançado": data.nao_alcancado,
    Parcialmente: data.parcialmente,
    Totalmente: data.totalmente
  }
}



export async function getHabilityGraphData(pdiId: string, habilidade: string): Promise<ContentGraph> {
  //@ts-ignore
  const { data } = await api.get(`/api/graficos/habilidade/pdi/${pdiId}?habilidade=${habilidade}`);
  return data;
}