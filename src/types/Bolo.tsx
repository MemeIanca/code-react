export interface Bolo { // tipo de dado
    nome: string;
    id: string | undefined;
    categorias: string[];
    imagens: string[];
    preco: number;
    peso: number | null;
}