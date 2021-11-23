import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";
//parte 1
//dados
//const cliente1 = new Cliente( "Ricardo", 1122334455);

//valores
//const contaCR = new ContaC(cliente1,1001);
//contaCR.depositar(500);
//contaCR.sacar(100);

//conta Poupança
//const contaPoupanca = new ContaPoupanca(50,cliente1, 1001);
//contaPoupanca.sacar(10);

//criando conta diretamente
//const conta = new Conta(0, cliente1, 1001)

////////////////////////////////////////////////////////////////////////////////////

//conta Salário
//const contaSalario = new ContaSalario(cliente1);
//contaSalario.depositar(100);
//contaSalario.sacar(10);

//final
//console.log(contaSalario);

//parte 2

//Diretor
const diretor = new Diretor("Diretor",10000, 123456789);
diretor.cadastrarSenha("123456")
//Gerente
const gerente = new Gerente("Nicolas", 2000, 98989898);
gerente.cadastrarSenha("123")
//Cliente
const cliente = new Cliente ("Debora",87878787, "456")
//login
const diretorLogin = SistemaAutenticacao.login(diretor, "123456"); 
const gerenteLogin = SistemaAutenticacao.login(gerente, "123");
const clienteLogin = SistemaAutenticacao.login(cliente, "456"); 

console.log(diretorLogin);
console.log(gerenteLogin);
console.log(clienteLogin);