let friends = [];
let listSize;

function adicionarAmigo() {
    let input = document.getElementById('amigo').value;
    if (input === '' || input.length < 3) {
        alert('Por favor, insira um nome válido de 3 caracteres');
        clearInput();
        return;
    }
    
    friends.push(input);
    atualizarLista();
    clearInput();
}

function atualizarLista() {
    let displayList = document.getElementById('listaAmigos');
    displayList.innerHTML = ''; 

    
    for (let i = 0; i < friends.length; i++) {
        let text = document.createElement('li');
        text.textContent = friends[i];
        text.setAttribute('data-index', i);

        text.onclick = function () {
            removerAmigo(i);
        };

        displayList.appendChild(text);  
    }
}

function removerAmigo(index) {
    friends.splice(index, 1);
    atualizarLista();  
}

function validateFriends() {
    if (friends.length > 0) {
        listSize = friends.length;
        return true;
    } else {
        alert('Adicione um amigo antes do Sorteio');
        return false;
    }
}

function sortearAmigo() {
    if (friends.length === 0) {
        alert('A lista de nomes para o sorteio está vazia');
        return;
    }

    let drawnIndex = Math.floor(Math.random() * friends.length);
    let drawnFriend = friends[drawnIndex];

    friends.splice(drawnIndex, 1);
    atualizarLista();  
    showDraw(drawnFriend);
}

function showDraw(drawnFriend) {
    let drawn = document.getElementById('resultado');
    drawn.innerHTML = `😎 Amigo sorteado: ${drawnFriend} 😎`;  
    launchConfetti();
}

function launchConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.5, y: 0.5 }
    });
}

function clearInput() {
    let inputField = document.getElementById('amigo');
    inputField.value = '';
}

function resetDraw() {
    friends = [];
    atualizarLista();  
    document.getElementById('resultado').innerHTML = '';
}
