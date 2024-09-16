// Obtener los modales
var createModal = document.getElementById("Create-modal");
var renameModal = document.getElementById("Rename-modal");
var deleteModal = document.getElementById("Delete-modal");

// Obtener los enlaces que abren los modales
var createLink = document.getElementById("createInventoryLink");
var renameLink = document.getElementById("renameInventoryLink");
var removeLink = document.getElementById("removeInventoryLink");
var invoiceBankLink = document.getElementById("invoiceBankLink");
var logoutLink = document.getElementById("logoutLink");

// Obtener los elementos <span> que cierran los modales
var closeButtons = document.getElementsByClassName("close");

// Obtener formularios
var createForm = document.getElementById("createInventoryForm");
var renameForm = document.getElementById("renameInventoryForm");
var deleteForm = document.getElementById("deleteInventoryForm");

// Obtener la lista de inventarios
var inventoryList = document.getElementById("inventoryList");

// Función para abrir un modal
function openModal(modal) {
    modal.style.display = "block";
}

// Función para cerrar un modal
function closeModal(modal) {
    modal.style.display = "none";
}

// Asignar eventos a los enlaces
createLink.onclick = function(event) {
    event.preventDefault();
    openModal(createModal);
}

renameLink.onclick = function(event) {
    event.preventDefault();
    openModal(renameModal);
}

removeLink.onclick = function(event) {
    event.preventDefault();
    openModal(deleteModal);
}

// Asignar eventos a los botones de cierre
Array.from(closeButtons).forEach(button => {
    button.onclick = function() {
        closeModal(this.parentElement.parentElement);
    }
});

// Cerrar modal al hacer clic fuera de él
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        closeModal(event.target);
    }
}

createForm.onsubmit = function(event) {
    event.preventDefault();
    var newInventoryName = document.getElementById("newInventoryName").value;
    var newInventory = document.createElement("a"); 
    newInventory.href = "inventary.html";  // Enlace a la página de inventario
    newInventory.className = "inventory-card";
    newInventory.innerHTML = `<img src="Photos/inventory-icon.png" alt="inventory icon"><p>${newInventoryName}</p>`;
    inventoryList.appendChild(newInventory);
    closeModal(createModal);
}

// Función para renombrar inventario
renameForm.onsubmit = function(event) {
    event.preventDefault();
    var currentName = document.getElementById("currentInventoryName").value;
    var newName = document.getElementById("newInventoryNameRename").value;
    var inventories = inventoryList.getElementsByClassName("inventory-card");
    Array.from(inventories).forEach(inventory => {
        if (inventory.getElementsByTagName("p")[0].textContent === currentName) {
            inventory.getElementsByTagName("p")[0].textContent = newName;
        }
    });
    closeModal(renameModal);
}

//
