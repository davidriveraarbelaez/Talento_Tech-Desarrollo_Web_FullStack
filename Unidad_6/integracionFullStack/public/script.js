window.onload = async function () {
    try{
        const response = await fetch('/api/data');
        const data = await response.json();

        const tbody = document.querySelector('#userTable tbody');
        data.forEach(user => {
            const tr = document.createElement('tr');

            const tdId = document.createElement('td');
            tdId.textContent = user.id;
            tr.appendChild(tdId);
 
/*
            const tdName = document.createElement('td');
            tdId.textContent = user.name;
            tr.appendChild(tdName);

            const tdEmail = document.createElement('td');
            tdId.textContent = user.email;
            tr.appendChild(tdEmail);
*/
            tbody.appendChild(tr);
        });

    }catch(error){
        console.error('Error al cargar los datos', error)
    }    
}