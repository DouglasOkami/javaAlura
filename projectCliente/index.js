class Cliente {
    nome;
    cpf;
}
class ContaC{
    agencia;
    saldo;
}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 1122334455;

const cliente2 = new Cliente();
cliente2.nome = "Lara";
cliente2.cpf = 9922334455;

const contaCR = new ContaC();
contaCR.saldo = 0;
contaCR.agencia = 1001;

console.log(contaCR.saldo);
contaCR.saldo = 100;

console.log(contaCR.saldo);
let valorSacado = 200;
contaCR.saldo -= valorSacado;


console.log(contaCR.saldo);
console.log(cliente1,"\n",cliente2);