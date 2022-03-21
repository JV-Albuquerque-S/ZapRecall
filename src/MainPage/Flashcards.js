import RenderCards from "./RenderCards";
import Footer from "../Footer";
import React from "react";

const cards = [
    {Q: "O que é JSX?", R:"Uma extensão de linguagem do JavaScript"},
    {Q: "O React é __", R: "Uma biblioteca JavaScript para construção de interfaces"},
    {Q: "Componentes devem iniciar com __", R: "Letra maiúscula"},
    {Q: "Podemos colocar __ dentro do JSX", R: "Expressões"},
    {Q: "O ReactDOM nos ajuda __", R: "Interagindo com a DOM para colocar componentes React na mesma"},
    {Q: "Usamos o npm para __", R: "Gerenciar os pacotes necessários e suas dependências"},
    {Q: "Usamos props para __", R: "Passar diferentes informações para componentes"},
    {Q: "Usamos estado (state) para __", R: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
]
cards.sort(comparador);

export default function Flashcards(){
    const [mensagem, setMensagem] = React.useState("");
    const [mensagem2, setMensagem2] = React.useState("");
    const [mensagem3, setMensagem3] = React.useState("");
    const [placar, setPlacar] = React.useState(0);
    const [icones, setIcones] = React.useState([]);
    const [size, setSize] = React.useState("size70");

    
    let i = 1;
    return(
        <main>
            {cards.map(card => <RenderCards num={i++} Question={card.Q} Answer={card.R} setIcones={setIcones} icones={icones} cards={cards} setPlacar={setPlacar} placar={placar} setMensagem={setMensagem} setMensagem2={setMensagem2} setMensagem3={setMensagem3} setSize={setSize} />)}
            <div className="space"></div>
            <Footer size={size} mensagem={mensagem} mensagem2={mensagem2} mensagem3={mensagem3} placar={placar} icones={icones} />
        </main>
    )
}

function comparador() { 
	return Math.random() - 0.5; 
}