type post = {
      autor: string,
      texto: string
}
const post1: post = {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!"
}

const post2: post =   {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!"
  }

  const post3: post =  {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!"
  }

  const post4: post = {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!"
  }

  const posts: post[] = [];
  posts.push(post1);
  posts.push(post2);
  posts.push(post3);
  posts.push(post4);

  function buscarPostsPorAutor(posts: post[], autorInformado: string) {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
  }

  console.log("posts:", posts)

  const autorBusca: post[] = buscarPostsPorAutor(posts, "Lord Voldemort")

  console.log(autorBusca)