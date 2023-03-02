// get(`/api/documentos/${studentId}`);
export interface DocumentChipData {
  id: string;
  nome: string;
  tipo: "alteravel" | "fixo";
  url: string;
  onDelete?: () => void;
}
