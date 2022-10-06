export const createNewPostDB = async(post) => {

	const body = JSON.stringify(post);

	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: body
	}

  const reponse= await fetch("http://localhost:8080/posts/new", options);
	return
}