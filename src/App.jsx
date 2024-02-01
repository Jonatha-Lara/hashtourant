import { useState } from "react";
import Hashtaurante from "./assets/hashtaurante.webp";
import './App.css';
import { Navegacao } from "./Navegacao";
import { ItemCardapio } from "./ItemCardapio";
import {pratosPrincipais, sobremesas, bebidas} from "./cardapio.js";

export function App() {

  const paginasMenu = [pratosPrincipais, sobremesas, bebidas];
  const [paginaSelecionada, atuzalizarPaginaSelecionada] = useState(0);
  return <>
    <img src={Hashtaurante} alt="Hashtaurante" className="capa"/>
    <Navegacao atuzalizarPaginaSelecionada={atuzalizarPaginaSelecionada}></Navegacao>
      <div className="menu">
        { paginasMenu[paginaSelecionada].map(item => <ItemCardapio nome={item.nome} descricao={item.descricao} preco={item.preco} imagem={item.imagem} /> )};
        { paginasMenu[paginaSelecionada].map(item => <ItemCardapio nome={item.nome} descricao={item.descricao} preco={item.preco} imagem={item.imagem} /> )};
        { paginasMenu[paginaSelecionada].map(item => <ItemCardapio nome={item.nome} descricao={item.descricao} preco={item.preco} imagem={item.imagem} /> )};
      </div>
    </>
}