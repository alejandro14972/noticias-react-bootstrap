async function obtenerDatos() {
    try {
      // Realizar la petición a la URL
      const response = await fetch('https://rickandmortyapi.com/api/character'); // Reemplaza con tu link
  
      // Comprobar si la petición fue exitosa
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
  
      // Convertir la respuesta a formato JSON
      const datos = await response.json();
  
      // Guardar los datos en una constante
      const misDatos = datos;
  
      console.log('Datos obtenidos:', misDatos); // Puedes ver los datos en la consola o usarlos como quieras
      return misDatos;
      
    } catch (error) {
      console.error('Hubo un error en la solicitud:', error);
    }
  }
  
  // Llamar a la función para obtener los datos
  obtenerDatos();
  