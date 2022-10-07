export const retrievePosts = async(id) => {

  const reponse = await fetch(`http://localhost:8080/posts/getPosts/${id}`);
  return await reponse.json();
}