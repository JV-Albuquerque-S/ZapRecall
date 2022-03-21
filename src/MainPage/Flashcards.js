import setinha from "./../assets/images/setinha.png"
import React from "react";

export default function Flashcards(){
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
    let i = 1;
    return(
        <main>
            {cards.map(card => <RenderCards num={i++} Question={card.Q} Answer={card.R} />)}
            <div className="space"></div>
        </main>
    )
}

function RenderCards(props){
    const [visivel1, setVisivel1] = React.useState("invisivel");
    const [invisivel1, setInvisivel1] = React.useState("");

    const [visivel2, setVisivel2] = React.useState("invisivel");
    const [invisivel2, setInvisivel2] = React.useState("");

    const [invisivel3, setInvisivel3] = React.useState("");

    const [result, setResult] = React.useState("");
    return(
        <div className="carta">
            <div className={`firstSide ${invisivel1}`}>
                <p className={result}>Pergunta {props.num}</p>
                <ion-icon name="play-outline" onClick={
                    () => {setVisivel1(""); setInvisivel1("invisivel");}
                }></ion-icon>
            </div>
            <div className={`questSide ${visivel1} ${invisivel2}`}>
                <p>{props.Question}</p>
                <img src={setinha} alt="Seta de voltar" onClick={
                    () => {setVisivel2(""); setInvisivel2("invisivel");}
                } />
            </div>
            <div className={`answSide ${visivel2} ${invisivel3}`}>
                <p>{props.Answer}</p>
                <div className="buttons">
                    <button className="nao-lembra botao" onClick={
                        () => {setInvisivel1(""); setInvisivel3("invisivel"); setResult("pergunta-ruim");}
                    }>Não lembrei</button>
                    <button className="quase-lembra botao" onClick={
                        () => {setInvisivel1(""); setInvisivel3("invisivel"); setResult("pergunta-media");}
                    }>Quase não lembrei</button>
                    <button className="sim-lembra botao" onClick={
                        () => {setInvisivel1(""); setInvisivel3("invisivel"); setResult("pergunta-boa");}
                    }>Zap!</button>
                </div> 
            </div>
        </div>
    )
}

function comparador() { 
	return Math.random() - 0.5; 
}