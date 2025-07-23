let amigos = [];

function adicionarAmigo() {
    const nomeAmigoInput = document.getElementById('amigo');
    const nomeAmigo = nomeAmigoInput.value.trim();
    if (nomeAmigo === '') {
        alert('Por favor, digite um nome para adicionar.');
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado na lista!');
        nomeAmigoInput.value = '';
        return;
    }

    amigos.push(nomeAmigo);
    exibirAmigos();
    nomeAmigoInput.value = '';
}

function exibirAmigos() {
    const listaAmigosUl = document.getElementById('listaAmigos');
    listaAmigosUl.innerHTML = '';

    if (amigos.length === 0) {
        listaAmigosUl.innerHTML = '<li class="empty-list-message">Nenhum amigo adicionado ainda.</li>';
        return;
    }

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigosUl.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos 4 amigos para realizar o sorteio!');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    const resultadoUl = document.getElementById('resultado');
    resultadoUl.innerHTML = ''; 

    const li = document.createElement('li');
    li.innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong>`;
    resultadoUl.appendChild(li);
}

function reiniciar() {
    amigos = [];
    document.getElementById('amigo').value = '';
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';

    exibirAmigos();
}

document.addEventListener('DOMContentLoaded', exibirAmigos);