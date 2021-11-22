import { Cliente } from "./Cliente.js";
import { ContaC } from "./ContaC.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./contaSalario.js";

//dados
const cliente1 = new Cliente( "Ricardo", 1122334455);

//valores
const contaCR = new ContaC(cliente1,1001);
contaCR.depositar(500);
contaCR.sacar(100);

//conta Poupança
const contaPoupanca = new ContaPoupanca(50,cliente1, 1001);
contaPoupanca.sacar(10);

//criando conta diretamente
//const conta = new Conta(0, cliente1, 1001)

////////////////////////////////////////////////////////////////////////////////////

//conta Salário
const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);

//final
console.log(contaSalario);
