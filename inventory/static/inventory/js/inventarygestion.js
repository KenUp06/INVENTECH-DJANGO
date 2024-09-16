const participantsList = document.getElementById('participantsList');
const addUserForm = document.getElementById('addUserForm');
const removeUserForm = document.getElementById('removeUserForm');

let participants = [
    { id: 91873, name: 'Usuario1' },
    { id: 21634, name: 'Usuario2' },
    { id: 81672, name: 'Usuario3' },
    { id: 62994, name: 'Usuario4' }
];

function renderParticipants() {
    participantsList.innerHTML = '';
    participants.forEach(participant => {
        const participantDiv = document.createElement('div');
        participantDiv.className = 'participant';
        participantDiv.innerHTML = `
            <img src="https://via.placeholder.com/50" alt="${participant.name}">
            <span>ID: ${participant.id}</span>
            <span>${participant.name}</span>
        `;
        participantsList.appendChild(participantDiv);
    });
}

addUserForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const newId = Math.floor(Math.random() * 100000);
    participants.push({ id: newId, name: username });
    renderParticipants();
    addUserForm.reset();
});

removeUserForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const userId = parseInt(document.getElementById('userId').value);
    participants = participants.filter(participant => participant.id !== userId);
    renderParticipants();
    removeUserForm.reset();
});

renderParticipants();
