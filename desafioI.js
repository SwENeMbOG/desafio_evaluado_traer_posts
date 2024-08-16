async function getPosts() {
    const postContainer = document.getElementById('post-data');
    postContainer.innerHTML = ''; // Limpiar el contenedor antes de mostrar nuevos posts
  
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      
      // Verificar si la respuesta es exitosa
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const posts = await response.json(); // Parsear los datos de la API
  
      // Crear una lista desordenada para mostrar los posts
      const ul = document.createElement('ul');
  
      posts.forEach(post => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${post.title}</strong><br>${post.body}`;
        ul.appendChild(li);
      });
  
      // Añadir la lista al contenedor en el HTML
      postContainer.appendChild(ul);
  
    } catch (error) {
      postContainer.innerHTML = `<p>Error al cargar los posts: ${error.message}</p>`; // Mostrar error por pantalla, en caso de no poder obtener los datos desde la API
    }
  }
  