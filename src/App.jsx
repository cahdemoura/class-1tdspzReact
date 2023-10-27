import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import React, { useState } from 'react';
import ListaCarros from './Pages/ListaCarros';
import { Container,Button,lightTheme,darkTheme } from './Estilos/Estilo';
import { ThemeProvider } from 'styled-components';
import Cep from './Pages/cep';

function App() {
  const [theme,setTheme]= useState('light')
  const mudarTheme = () => {
      setTheme(mudar => mudar === 'light'? 'dark' : 'light')
  }
  return (
    <> 
    <ThemeProvider theme={theme ==='light' ? lightTheme : darkTheme}>
     <h1>CONFIGURAÇÃO DE UM LOGO</h1>
    <Button onClick={mudarTheme}>BOTÃO</Button>
    <hr/>
    <Container>
                  <BrowserRouter>
                    <Routes>
                          <Route path='/' element={<Home />} />
                          <Route path='/sobre' element={<Sobre />} />
                          <Route path='/listacarros' element={<ListaCarros />} />
                          <Route path='/cep' element={<Cep />} />
                    </Routes>
                  </BrowserRouter>
    </Container>
    </ThemeProvider>
    </>
  );
}

export default App;
