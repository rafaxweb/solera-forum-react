export const retrieveUserPassword = async(id) => {

    const reponse = await fetch(`http://localhost:8080/username/${id}`);
    return await reponse.json();
  }