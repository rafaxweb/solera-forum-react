export async function RetrieveThreads() {

    const res = await fetch("http://localhost:8080/thread/list")
    const result = await res.json()
    console.log(result)
}