export class Funcionario{
    constructor(nome , salario , cpf){
        this.nome = nome;
        this.salario = salario;
        this.cpf = cpf;

        this._bonificacao = 1;
        this._senha;
    }
    get senha(){
        return this._senha;
    }
    cadastrarSenha(senha){
        this._senha = senha;
    }
}