import { TotalControleLancamento } from './total-controle-lancamento.interface';
import { itemControleLancamento } from './item-controle-lancamento.interface';

export interface BaseLancamentos {
    totalControleLancamento: TotalControleLancamento;
    listaControleLancamento: itemControleLancamento[];
    indice: number;
    tamanhoPagina: number;
    totalElements: number;
}
