let amigos = [];

// Função que será chamada pelo botão "Adicionar"
function adicionarAmigo() {
    let amigoInput = document.getElementById('amigo');
    let nome = amigoInput.value.trim();

    if (nome === '') {
        alert('Por favor, digite um nome válido!');
        return;
    }

    amigos.push(nome);

    const listaAmigos = document.getElementById('listaAmigos');
    const li = document.createElement('li');
    li.textContent = nome;
    listaAmigos.appendChild(li);

    amigoInput.value = '';
}

// Função que será chamada pelo botão "Sortear amigo"
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para fazer o sorteio!');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const nomeSorteado = amigos[indiceSorteado];

    const resultadoSorteio = document.getElementById('resultado');
    resultadoSorteio.innerHTML = `O amigo sorteado é: <span>${nomeSorteado}</span>`;
}

// Função que será chamada pelo botão "Reiniciar"
function reiniciar() {
    // Reseta o array de amigos
    amigos = [];

    // Limpa a lista visível na tela
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    // Limpa o resultado do sorteio, deixando a área vazia
    const resultadoSorteio = document.getElementById('resultado');
    resultadoSorteio.innerHTML = '';
}