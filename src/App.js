import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './componentes/compartidos/Layout';
import Lista from './componentes/compartidos/lista/Lista';
import Detalles from './componentes/compartidos/nueva/Detalles';
import NoEncontrado from './componentes/compartidos/NoEncontrado';
import Modal from './componentes/compartidos/Modal';
import { useContext, useEffect } from 'react';
import { Contexto } from './servicios/Memoria';
import { pedirMetas } from './servicios/Pedidos';

function App() {
  const [, enviar] = useContext(Contexto);



useEffect(()=> {
  async function fetchData() {
  const metas = await pedirMetas();
  enviar({tipo: 'colocar', metas});
  }
  fetchData();
  }, [enviar]);

  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        
      <Route index element={<Lista />} />
      <Route path="/lista" element={<Lista />} >
      <Route path="/lista/:id" element={
      <Modal>
        <Detalles />
      </Modal>} />
      </Route>
      <Route path="/nueva" element={<Detalles />} />
      </Route>
      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  );
}

export default App;

