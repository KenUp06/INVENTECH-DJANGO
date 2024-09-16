document.getElementById('addSlotButton').addEventListener('click', function() {
    openModal();
});

document.getElementsByClassName('close-button')[0].addEventListener('click', function() {
    closeModal();
});

window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        closeModal();
    }
};

document.getElementById('addItemForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const icon = document.getElementById('icon').value;
    const name = document.getElementById('name').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const unitPrice = parseFloat(document.getElementById('unitPrice').value);
    const totalPrice = quantity * unitPrice;

    const editIndex = document.getElementById('editIndex').value;

    if (editIndex !== '') {
        const row = document.querySelector(`#inventory tr[data-index='${editIndex}']`);
        row.innerHTML = generateRowContent(icon, name, quantity, unitPrice, totalPrice, editIndex);
    } else {
        const rowCount = document.getElementById('inventory').rows.length;
        const newRow = document.createElement('tr');
        newRow.setAttribute('data-index', rowCount);
        newRow.innerHTML = generateRowContent(icon, name, quantity, unitPrice, totalPrice, rowCount);
        document.getElementById('inventory').appendChild(newRow);
    }

    closeModal();
    document.getElementById('addItemForm').reset();
    document.getElementById('editIndex').value = '';
    document.getElementById('submitButton').innerText = 'Agregar';
    document.getElementById('modal-title').innerText = 'Agregar nueva fruta';
});

function generateRowContent(icon, name, quantity, unitPrice, totalPrice, index) {
    return `
        <td><img src="${icon}" alt="${name}" style="width:50px;height:50px;"></td>
        <td>${name}</td>
        <td>${quantity}</td>
        <td>$${unitPrice.toFixed(2)}</td>
        <td>$${totalPrice.toFixed(2)}</td>
        <td>
            <button onclick="editItem(${index})">Editar</button>
            <button onclick="deleteItem(${index})">Borrar</button>
        </td>
    `;
}

function openModal() {
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function editItem(index) {
    const row = document.querySelector(`#inventory tr[data-index='${index}']`);
    const cells = row.getElementsByTagName('td');

    document.getElementById('icon').value = cells[0].querySelector('img').src;
    document.getElementById('name').value = cells[1].innerText;
    document.getElementById('quantity').value = cells[2].innerText;
    document.getElementById('unitPrice').value = cells[3].innerText.replace('$', '');

    document.getElementById('editIndex').value = index;
    document.getElementById('submitButton').innerText = 'Guardar cambios';
    document.getElementById('modal-title').innerText = 'Editar fruta';
    openModal();
}

function deleteItem(index) {
    const row = document.querySelector(`#inventory tr[data-index='${index}']`);
    row.remove();
}
