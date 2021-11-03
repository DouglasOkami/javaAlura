var campoFiltro = document.querySelectorAll("#filtrar-tabela");

campoFiltro.addEventListener("input",function(){
    console.log(this.value);
    var pacientes = document.querySelector(".paciente");
    for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes [i];
        var TdNome = paciente.querySelector(".info-nome");
        var nome = paciente.textContent;
    }
});