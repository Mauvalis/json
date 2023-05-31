function cargarTabla() {
    fetch('producto.json')
        .then(response => response.json())
        .then(data => {
            mostrarProductos(data.productos);
        })
        .catch(error => {
            console.log('Error:', error);
        });
}

function mostrarProductos(productos) {
    const tabla = document.getElementById('tabla-productos');
    const tbody = tabla.getElementsByTagName('tbody')[0];

    for (let i = 0; i < productos.length; i++) {
        
        const fila = document.createElement('tr');
        const producto = productos[i];

        const nombreCelda = document.createElement('td');
        nombreCelda.textContent = producto.nombre;
        fila.appendChild(nombreCelda);

        const precioCelda = document.createElement('td');
        precioCelda.textContent = producto.precio;
        fila.appendChild(precioCelda);

        const descripcionCelda = document.createElement('td');
        descripcionCelda.textContent = producto.descripcion;
        fila.appendChild(descripcionCelda);

        const fotoCelda = document.createElement('td');
        const foto = document.createElement('img');
        foto.src = producto.foto;
        fotoCelda.appendChild(foto);
        fila.appendChild(fotoCelda);

        tbody.appendChild(fila);
    }
}

