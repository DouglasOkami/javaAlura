import { Cliente } from "./Cliente.js";
import { ContaC } from "./ContaC.js";
//dados
const cliente1 = new Cliente( "Ricardo", 1122334455);
const cliente2 = new Cliente("Lara", 8811223344);

//valor
const contaCR = new ContaC(cliente1,1001);
contaCR.depositar(500);

const contaCL = new ContaC(cliente2,102);
contaCR.transferir(200, contaCL)

//final
console.log(ContaC.numeroDeContas);