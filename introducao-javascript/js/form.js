var botaoAdd = document.querySelector("#adicionar-paciente");
botaoAdd.addEventListener("click", function (event) {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPctDoFormulario(form);

    var pacienteTR = montaTr(paciente);

    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        var mensagemErro = document.querySelector("#mensagem-erro");
        mensagemErro.textContent = erros;
        return;
    }

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTR);
    form.reset();
});

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

    if (!valisaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }
    if (!valisaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    return erros;
} 