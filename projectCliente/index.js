import { Cliente } from "./Cliente.js";
import { ContaC } from "./ContaC.js";
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
contaCR.cliente = cliente1;
contaCR.depositar(500);

const contaCL = new ContaC();
contaCL.cliente = cliente2;
contaCL.agencia = 102;
contaCR.transferir(200, contaCL)
//opereções 




//final
console.log(contaCR);
console.log(contaCL);