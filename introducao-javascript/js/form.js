var botaoAdd = document.querySelector("#adicionar-paciente");
botaoAdd.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPctDoFormulario(form);
    
    var erros = validaPaciente(paciente);
    console.log(erros);
    if (erros.length > 0) {
        exibeMensagensErros(erros);
        return;
    }
    adicionaPacienteNaTabela(paciente);

    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erros");
    mensagensErro.innerHTML = "";
});
function exibeMensagensErros(erros) {
    var ul = document.querySelector("#mensagens-erros");
    ul.innerHTML = "";

    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });

    /*for (var i = 0; i < erros.length; i++) {
            var erro = erros[i];
            
        }*/
}
function adicionaPacienteNaTabela(paciente){
    var pacienteTR = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTR);
}

function obtemPctDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente) {
    var pacienteTR = document.createElement("tr");
    pacienteTR.classList.add("paciente");

    pacienteTR.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTR.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTR.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTR.appendChild(montaTd(paciente.gordura, "info-gorduraTd"));
    pacienteTR.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTR;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {
    var erros = [];

    if (paciente.peso.length != 0 && !validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }
    if (paciente.altura.length != 0 && !validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }
    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }
    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }
    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    }
    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }

    return erros;
} 