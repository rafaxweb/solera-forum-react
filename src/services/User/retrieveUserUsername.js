export const retrieveUserUsername = async(id) => {

    const reponse = await fetch(`http://localhost:8080/users/password/${id}`);
    console.log(await reponse.json());
    return await reponse.json();
  }