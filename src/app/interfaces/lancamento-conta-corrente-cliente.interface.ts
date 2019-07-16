import { DadosDomicilioBancario } from './dados-domicilio-bancario.interface';

export interface LancamentoContaCorrenteCliente {
    numeroRemessaBanco: any;
    nomeSituacaoRemessa: string;
    dadosDomicilioBancario: DadosDomicilioBancario;
    nomeTipoOperacao: string;
    dadosAnaliticoLancamentoFinanceiroCliente: any[];
}