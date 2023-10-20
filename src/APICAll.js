import { useFetch } from "./hooks/useFetch"

const APICall = () => {
    const names = useFetch("https://jsonplaceholder.typicode.com/todos/")

  return (
    <div>

      <h1>Titulos</h1>

      {names?.map((name) => (
        <p key={name.id}>{name.title}</p>
      ))}
    </div>
  )
}
export default APICall
