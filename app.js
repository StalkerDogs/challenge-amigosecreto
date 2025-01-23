let friends = [];
let friendName;
let listSize;

function adicionarAmigo() {
    friendName = document.getElementById('amigo').value;

    if (friendName === '') {
        alert('Insira um nome.');
    } else {
        updateFriend(friendName);
        addFriendToList();
    }
    clearInput();
}

function updateFriend(friendName) {
    friends.push(friendName);
}

function clearInput() {
    let inputField = document.getElementById('amigo');
    inputField.value = '';
}

function addFriendToList() {
    let displayList = document.getElementById('listaAmigos');
    displayList.innerHTML = '';  // Limpa a lista existente

    for (let friend of friends) {
        let text = `<li id="${friend}">
                        ${friend}
                        <button onclick="removeFriend('${friend}')">Remover</button>
                    </li>`;
        displayList.innerHTML += text;
    }
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
    if (friends.length == 0) {
        alert('A lista de nomes para o sorteio está vazia');
        return;
    }

    let drawButton = Math.floor(Math.random() * friends.length);
    let drawnFriend = friends[drawButton];
    showDraw(drawnFriend);
}

function showDraw(friend) {
    let drawn = document.getElementById('resultado');
    drawn.innerHTML = `<li> O jogador sorteado foi: 👻  ${friend}  👻</li>`;
    launchConfetti();
}

function removeFriend(friend) {
    let index = friends.indexOf(friend);
    if (index !== -1) {
        friends.splice(index, 1);  // Remove o amigo da lista
        addFriendToList();  // Atualiza a lista no HTML
    }
}

function launchConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.5, y: 0.5 }
    });
}

