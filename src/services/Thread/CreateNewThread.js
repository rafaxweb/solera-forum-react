export const createNewThread = async(thread) => {
    const body = JSON.stringify(thread);
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: body
    }
  const reponse= await fetch("http://localhost:8080/thread/new", options);
    return
}