async function getPosts() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      
      if (!response.ok) {
        throw new Error('Erro ao obter os posts');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
}

  
getPosts()
.then(posts => {
    console.log(posts); // Aqui você pode trabalhar com os posts
})
.catch(error => {
    console.error(error);
});

// OU com async/await:

async function obterPosts() {
  try {
    const posts = await getPosts();
    console.log(posts); // Aqui você pode trabalhar com os posts
  } catch (error) {
    console.error(error);
  }
}

obterPosts();
