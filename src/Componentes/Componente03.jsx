
function Componente03(props){
    return(
        <>
        <h3>COMPONENTE 03</h3>
        <p>INFORMAÇÃO ENVIADA PELO COMPONENTE PAI: {props.textoPai}
        </p>

        <button onClick={props.clicouPai}>CLIQUE AQUI</button>
        </>        
    )
}
export default Componente03;