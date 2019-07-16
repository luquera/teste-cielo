import { LancamentoContaCorrenteCliente } from './lancamento-conta-corrente-cliente.interface';

export interface itemControleLancamento {
    lancamentoContaCorrenteCliente: LancamentoContaCorrenteCliente;
    dataEfetivaLancamento: string;
    dataLancamentoContaCorrenteCliente: string;
    numeroEvento: number;
    descricaoGrupoPagamento: string;
    codigoIdentificadorUnico: string;
    nomeBanco: string;
    quantidadeLancamentoRemessa: number;
    numeroRaizCNPJ: string;
    numeroSufixoCNPJ: string;
    valorLancamentoRemessa: number;
    dateLancamentoContaCorrenteCliente: any;
    dateEfetivaLancamento: any;
}