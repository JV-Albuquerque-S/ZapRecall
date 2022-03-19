import setinha from "./../assets/images/setinha.png"

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
    let i = 1;
    return(
        <main>
            {cards.map(card => <RenderCards num={i++} Question={card.Q} Answer={card.R} />)}
        </main>
    )
}

function RenderCards(props){
    return(
        <div className="carta">
            <div className="firstSide">
                <p>Pergunta {props.num}</p>
                <ion-icon name="play-outline"></ion-icon>
            </div>
            <div className="questSide">
                <p>{props.Question}</p>
                <img src={setinha} alt="Seta de voltar" />
            </div>
            <div className="answSide">
                <p>{props.Answer}</p>
                <div className="buttons">
                    <button className="nao-lembra botao">Não lembrei</button>
                    <button className="quase-lembra botao">Quase não lembrei</button>
                    <button className="sim-lembra botao">Zap!</button>
                </div> 
            </div>
        </div>
    )
}