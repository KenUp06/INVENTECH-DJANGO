function editField(fieldId) {
    document.getElementById('edit-' + fieldId).style.display = 'block';
}

function saveField(fieldId) {
    var input = document.getElementById(fieldId + '-input').value;
    document.getElementById(fieldId).innerText = input;
    document.getElementById('edit-' + fieldId).style.display = 'none';
}