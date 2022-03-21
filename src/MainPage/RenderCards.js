import setinha from "./../assets/images/setinha.png"
import React from "react";

let feitas = 0;
let erradas = 0;

export default function RenderCards(props){
    const [visivel1, setVisivel1] = React.useState("invisivel");
    const [invisivel1, setInvisivel1] = React.useState("");

    const [visivel2, setVisivel2] = React.useState("invisivel");
    const [invisivel2, setInvisivel2] = React.useState("");

    const [invisivel3, setInvisivel3] = React.useState("");

    const [result, setResult] = React.useState("");
    const [icon, setIcon] = React.useState("play-outline");

    // let iconesFinal = [];

    // let respondidas = 0;
    // let erradas = 0;

    return(
        <div className="carta">
            <div className={`firstSide ${invisivel1} ${result}`}>
                <p className={result}>Pergunta {props.num}</p>
                <ion-icon name={icon} onClick={
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
                        () => {
                            setInvisivel1("");
                            setInvisivel3("invisivel");
                            setResult("pergunta-ruim");
                            setIcon("close-circle");
                            props.setIcones([...props.icones, "close-circle"]);
                            console.log(props.cards);
                            erradas++;
                            feitas++;
                            props.setPlacar(feitas);
                            if(feitas===8){
                                props.setMensagem("😥 Putz...")
                                props.setMensagem2("Ainda faltam alguns...");
                                props.setMensagem3("Mas não desanime!");
                                props.setSize("size170");
                            }
                            // props.setPlacar(props.placar++);
                            // setIcones(icones.push("red"));
                            // console.log(icones);
                            // respondidas++;
                            // setPlacar(respondidas);
                            // erradas++;
                        }
                    }>Não lembrei</button>
                    <button className="quase-lembra botao" onClick={
                        () => {
                            setInvisivel1("");
                            setInvisivel3("invisivel");
                            setResult("pergunta-media");
                            setIcon("help-circle");
                            props.setIcones([...props.icones, "help-circle"]);
                            console.log(props.cards);
                            feitas++;
                            props.setPlacar(feitas);
                            if(feitas===8 && erradas!==0){
                                props.setMensagem("😥 Putz...")
                                props.setMensagem2("Ainda faltam alguns...");
                                props.setMensagem3("Mas não desanime!");
                                props.setSize("size170");
                            }
                            else if(feitas===8 && erradas===0){
                                props.setMensagem("🥳 Parabéns!")
                                props.setMensagem2("Você não esqueceu de");
                                props.setMensagem3("nenhum flashcard!");
                                props.setSize("size170");
                            }
                            // props.setPlacar(props.placar++);
                            // setIcones(icones.push("yellow"));
                            // console.log(icones);
                            // respondidas++;
                            // setPlacar(respondidas);
                        }
                    }>Quase não lembrei</button>
                    <button className="sim-lembra botao" onClick={
                        () => {
                            setInvisivel1("");
                            setInvisivel3("invisivel");
                            setResult("pergunta-boa");
                            setIcon("checkmark-circle");
                            props.setIcones([...props.icones, "checkmark-circle"]);
                            console.log(props.cards);
                            feitas++;
                            props.setPlacar(feitas);
                            if(feitas===8 && erradas!==0){
                                props.setMensagem("😥 Putz...")
                                props.setMensagem2("Ainda faltam alguns...");
                                props.setMensagem3("Mas não desanime!");
                                props.setSize("size170");
                            }
                            else if(feitas===8 && erradas===0){
                                props.setMensagem("🥳 Parabéns!")
                                props.setMensagem2("Você não esqueceu de");
                                props.setMensagem3("nenhum flashcard!");
                                props.setSize("size170");
                            }
                            // props.setPlacar(props.placar++);
                            // setIcones(icones.push("green"));
                            // console.log(icones);
                            // respondidas++;
                            // setPlacar(respondidas);
                        }
                    }>Zap!</button>
                </div> 
            </div>
        </div>
    )
}