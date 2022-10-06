export const retrieveUserPassword = async(username) => {

    const reponse = await fetch(`http://localhost:8080/users/password/${username}`);
    return await reponse.json();
  }