window.onload = async function() { // Cargar los datos al cargar la página
    try { // Manejar errores
        const response = await fetch('/api/data');  // Obtener los datos del servidor
        const data = await response.json(); // Parsear los datos

        const tbody = document.querySelector('#userTable tbody'); // Obtener el tbody de la tabla
        data.forEach(user => { // Iterar sobre los datos
            const tr = document.createElement('tr'); // Crear una fila

            const tdId = document.createElement('td'); // Crear una celda
            tdId.textContent = user.id; // Asignar el id del usuario
            tr.appendChild(tdId); // Agregar la celda a la fila

            const tdName = document.createElement('td'); // Crear una celda
            tdName.textContent = user.name; // Asignar el nombre del usuario
            tr.appendChild(tdName); // Agregar la celda a la fila

            const tdEmail = document.createElement('td'); // Crear una celda
            tdEmail.textContent = user.email; // Asignar el email del usuario
            tr.appendChild(tdEmail); // Agregar la celda a la fila

            tbody.appendChild(tr); // Agregar la fila al tbody
        }); // Fin del bucle
    } catch (error) { // Capturar errores
        console.error('Error al cargar los datos:', error); // Imprimir el error en consola
    } // Fin del bloque try...catch
}; // Fin de la función onload