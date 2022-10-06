export const retrievePosts = async() => {

  const reponse = await fetch("http://localhost:8080/posts/get/");
  return await reponse.json();
}