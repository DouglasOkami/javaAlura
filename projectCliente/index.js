class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
}
const cliente1 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 1122334455;
cliente1.agencia = 1001;
cliente1.saldo = 0;

const cliente2 = new Cliente();
cliente2.nome = "Lara"
cliente2.cpf = 9922334455;
cliente2.agencia = 1001;
cliente2.saldo = 100;

console.log(cliente1);