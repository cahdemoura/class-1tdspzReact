


function menu() {
    const menu = {
        background: 'red',
        display: 'flex',
        justifyContent: 'center'
    }
    const link = {
        display: 'inlineBlock',
        textDecoration: 'none',
        padding: '20px',
        color: '#fff',
        fontSize: '15px'
    }
    return (
        <>
            <nav style={menu}>
                <ul style={{ display: 'flex', listStyle: 'none' }}>
                    <li><a href="/" style={link}>HOME</a>  </li>
                    <li><a href="/listacarros" style={link}>LISTA CARROS</a>  </li>
                    <li><a href="/sobre"style={link} >SOBRE</a>  </li>
                    <li><a href="/cep"style={link} >CEP</a>  </li>
                </ul>
            </nav>
        </>
    )

}
export default menu;