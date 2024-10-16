'use client'


import {useRef ,useState, useEffect} from 'react'

export default function HomePage() {
    // logica do meu compenente para funcionar

    // nosso primeiro hook(useState)
    let [lista, setLista] = useState(["corolla", "civic", "fusca", "marea 2.4 5 cilindros 20v"]);

    // hook useRef
    let carro = useRef('');

    useEffect(() => {
        //hook que será executado ao término do carregamento da tela
        console.log("Interface carregada!")
    })


    function addCarro() {
        if(carro.current.value != ""){
            setLista([...lista, carro.current.value]);
            carro.current.value = ""
        }
        else{
            alert("Informe o nome do carro")
        }
        
    }
    // class = className = '';

    // --------------------------------

   // visual do meu componente
    return (
        <div>
            <h1>titulo</h1>
            <span>span</span>
            <hr></hr>

            <div>
                <label>Carro:</label>
                <input ref={carro} type="text"></input>
                <button onClick={addCarro} >Adicionar</button>
            </div>
            <ul>
                {
                    lista.map((value, index) => {
                        return <li key={index}>{value}</li>
                    })
                }
            </ul>
        </div>
    )
}