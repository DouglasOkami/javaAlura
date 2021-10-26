//métodos
class Cliente {
    nome;
    cpf;
}
class ContaC{
    agencia;
    _saldo = 0;
    //parâmetros
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }
    depositar(valor){
        if(valor <= 0){
            return valor;
        }
        this._saldo += valor;
    }
}
//dados
const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 1122334455;

const cliente2 = new Cliente();
cliente2.nome = "Lara";
cliente2.cpf = 9922334455;

//valor
const contaCR = new ContaC();
contaCR.agencia = 1001;

//opereções 
contaCR.depositar(100);
contaCR.sacar(50);


//final
console.log(contaCR);
console.log(cliente1,"\n",cliente2);