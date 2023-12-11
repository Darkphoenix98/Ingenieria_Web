
document.addEventListener('DOMContentLoaded', function () {
   
    const formulario = document.getElementById('formulario');
    const boton = document.getElementById('boton');

  
    boton.addEventListener('click', function () {
        // Validar cada campo del formulario
        const name = document.getElementById('Name').value;
        const price = document.getElementById('Price').value;
        const inventory = document.getElementById('Inventory').value;

        // Reiniciar mensajes de error
        document.getElementById('nameError').textContent = '';
        document.getElementById('priceError').textContent = '';
        document.getElementById('inventoryError').textContent = '';

        if (name.trim() === '') {
            document.getElementById('nameError').textContent = 'Campo requerido';
        } 

        if (price.trim() === '') {
            document.getElementById('priceError').textContent = 'Campo requerido';
        }

        if (inventory.trim() === '') {
            document.getElementById('inventoryError').textContent = 'Campo requerido';
        }

        // Verificar si no hay mensajes de error
        if (
            document.getElementById('nameError').textContent === '' &&
            document.getElementById('priceError').textContent === '' &&
            document.getElementById('inventoryError').textContent === ''
        ) {
            // Si no hay mensajes de error, mostrar la alerta de éxito
            alert('Producto creado correctamente');
        }
    });
});