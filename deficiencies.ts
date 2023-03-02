
export type HandicapChip = {
  id: string;
  nome: string;
  descricao: string;
  url: string;
}

export async function listDeficiencies(): Promise<HandicapChip[]> {
  //@ts-ignore
  const { data } = await api.get(`/api/deficiencias/`);
  return data;
}