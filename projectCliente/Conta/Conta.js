export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        //classe abstrata
        if(this.constructor == Conta){
            throw new Error("Você não deveria instânciar um objeto do tipo conta diretamente");
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }
    //parâmetros
    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }
    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }
    //Mêtodo abstrato
    sacar(valor) {
        throw new Error("O método Sacar da conta é abstrato");
        
    }
    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
    }
    depositar(valor) {
        if (valor <= 100) {
            return valor;
        }
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}