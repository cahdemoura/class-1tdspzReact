import { TitlePage } from "../Estilos/Estilo"
import Menu from '../Componentes/menu'
import axios from "axios"
import { useState } from "react"


export default () => {
    //Vamos criar os estados para armazenas o cep
    const [cep, setCep] = useState('');

    //Estado para armazenas os dados retornados da nossa api VIACEP
    const [data, setData] = useState({});

    //Estado para manipular erro
    const [error, setError] = useState(null);

    function handleCepChange(e) {
        setCep(e.target.value)

    }

    function pesquisaCep() {
        //Usar AXIOS: Manipula o get
        axios.get(`https://viacep.com.br/ws/${cep}/json/ `)
            //Define uma função CALLBACK será bem-sucedida
            .then(
                function (response) {
                    if (response.data && !response.data.erro) {
                        setData(response.data)
                        setError(null);
                    }
                    else {
                        setData({})
                        setError('CEP não encontrado')
                    }
                })
            .catch(function (error) {
                setData({})
                setError('CEP não encontrado')
            })
    }

    return (
        <>
            <Menu />
            <TitlePage> PESQUISA CEP </TitlePage>

            <input type="text" placeholder="Texto" value={cep} onChange={handleCepChange} />
            <button onClick={pesquisaCep}>Pesquisar</button>

            {error && <p>{error}</p>}
            {data.cep && (
                <div>
                    <p>CEP:{data.cep}</p>
                    <p>Logradouro: {data.logradouro}</p>
                    <p>Complemento: {data.complemento}</p>
                    <p>Bairro: {data.bairro} </p>
                    <p>UF: {data.uf}</p>
                    <p>DDD: {data.ddd}</p>
                </div>
            )
            }



            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, labore.</p>
        </>
    )

}