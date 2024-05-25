window.onload = function (e) {


    var listado = []

    listado.push({ comando: 'git add .', descripcion: 'Alamacena lo que se va a subir' })
    listado.push({ comando: 'git commit -m "algun comentario"', descripcion: 'Prepara el paquete y define el comentario de los cambios que se hara' })
    listado.push({ comando: "git push origin main", descripcion: "Sube al repositorio desdela pc a la rama main" })
    listado.push({ comando: "git pull", descripcion: "Baja del servidor todos los cambios que hayan realizado a la rama donde se este" })
    
 

    var tableBody = document.getElementById('tbodyCommands');

    tableBody.innerHTML = "<tr><td>Comando</td><td>Descripcion</td></tr>"
    tableBody.innerHTML += "<tr><td>" + listado[0].comando + "</td><td>" + listado[0].descripcion + "</td></tr>"
    tableBody.innerHTML += "<tr><td>" + listado[1].comando + "</td><td>" + listado[1].descripcion + "</td></tr>"
    tableBody.innerHTML += "<tr><td>" + listado[2].comando + "</td><td>" + listado[2].descripcion + "</td></tr>"
    tableBody.innerHTML += "<tr><td>" + listado[3].comando + "</td><td>" + listado[3].descripcion + "</td></tr>"


/*utiliznado ciclos*/
    var tableBodyConCiclo = document.getElementById('tbodyCommandsConCiclo');

    var i = 0;
    while (i < listado.length) {
        tableBodyConCiclo.innerHTML += "<tr><td>" + listado[i].comando + "</td><td>" + listado[i].descripcion + "</td></tr>";
        i++;
    }


    lista2 = [2, 3, 4, 5, 34, 1, 56]

    z = 0;
    while (z < lista2.length) {
        alert(lista2[z])
        z++;
    }


}