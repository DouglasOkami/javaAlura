import { Cliente } from "./Cliente.js";
export class ContaC {
    static numeroDeContas = 0;
    agencia;
    _cliente;
    _saldo = 0;
    //parâmetros
    


    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }
    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    constructor(cliente,agencia){
        this.cliente = cliente;
        this.agencia = agencia;
        ContaC.numeroDeContas += 1;   
    }
    
    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return valor;
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}