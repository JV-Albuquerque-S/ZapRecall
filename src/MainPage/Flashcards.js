import RenderCards from "./RenderCards";

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

function comparador() { 
	return Math.random() - 0.5; 
}