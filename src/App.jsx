import Hashtaurante from "./assets/hashtaurante.webp";
import './App.css';
import { Navegacao } from "./Navegacao";
import { ItemCardapio } from "./ItemCardapio";

export function App() {

  return <>
    <img src={Hashtaurante} alt="Hashtaurante" className="capa"/>
    <Navegacao></Navegacao>
    <ItemCardapio></ItemCardapio>
  
  </>
}