import estilos from './Principal.module.css';
import { Children } from "react";
import Vinculo from './Vinculo'
import { ReactComponent as ListaSVG } from '../../img/lista.svg';
import { ReactComponent as NuevaSVG } from '../../img/nueva.svg';


function Principal({children}) {
    return (
      <>
      <div className={estilos.principal}>
      <aside className={estilos.aside}>
        <Vinculo href="/lista" 
        texto="Lista de Metas"
        Icon={ListaSVG} /> 
          <Vinculo href="/lista" 
          texto="Nueva Meta"
          Icon={NuevaSVG} /> 
      </aside>
      <main className="main">
        {children}
      </main>
      </div>
      </>
    );
  }
  
  export default Principal;
  