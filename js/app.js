// Guarda o conteúdo do formulário
const formulario = document.querySelector("#formulario");
// const formulario = document.getElementById('formulario');    // equivalente

// Envia os dados quando o usuário clica no botão Adicionar Evento
formulario.addEventListener("submit", (evento) => {
    // Previne a ação padrão do evento (submit/envio do form)
    evento.preventDefault();

    adicionarEvento();
    formulario.reset();
    formulario.nomeEvento.focus();
});

function adicionarEvento() {
    // Busca os dados da LocalStorage (se houver), senão cria um array vazio
    const eventos = JSON.parse(localStorage.getItem("eventos")) || [];

    // Guarda os dados informados no formulário (destructuring)
    const nomeEvento = formulario.nomeEvento.value;
    const dataEvento = formulario.dataEvento.value;

    eventos.push({
        nomeEvento,
        dataEvento

        // O mesmo que:
        // nomeEvento: nomeEvento,
        // dataEvento: dataEvento,
    });

    // Guarda a lista atualizada no LocalStorage
    localStorage.setItem("eventos", JSON.stringify(eventos));

    mostrarEventos();
}

function mostrarEventos() {
    // Busca os dados da LocalStorage (se houver), senão cria um array vazio
    const eventos = JSON.parse(localStorage.getItem("eventos")) || [];
    const listaEventos = document.querySelector("#lista");
    listaEventos.textContent = "";

    eventos.forEach(evento => {
        const li = document.createElement("li");
        li.textContent = evento.nomeEvento + " - " + evento.dataEvento;
        listaEventos.appendChild(li);
    });

    // eventos.forEach(evento => {
    //     const li = document.createElement("li");
    //     li.textContent = `
    //         ${evento.nomeEvento}
    //         (${new Date(evento.dataEvento).toLocaleDateString("pt-Br")})
    //     `;
    //     listaEventos.appendChild(li);
    // });
}

mostrarEventos();
