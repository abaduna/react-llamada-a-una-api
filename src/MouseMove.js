import { useState,useEffect} from "react"

const MouseMove = () => {
    const [moueCoords,setMouseCoords] = useState({x:null,y:null})


    useEffect(()=>{
        window.addEventListener("mousemove", handeleMosuseCoords)
        console.log("hola mundo")

        return ()=>{
            window.removeEventListener("mousemove",handeleMosuseCoords)
        }
    })

  return (
    <div className="mosue-area">
        <h1>ENcontra la cordenada secreta</h1>
        <h2>Frio Frio //Caliente caliente</h2>
            <h3>
                X: {mouse}
            </h3>
    </div>
  )
}
export default MouseMove