import React from "react";

export default function Footer(props){
    // const [mensagem, setMensagem] = React.useState("");
    // const [placar, setPlacar] = React.useState("0");
    // const [icones, setIcones] = React.useState([]);
    // const [size, setSize] = React.useState("size70");
    return(
        <footer className={`rodape ${props.size}`}>
            <p className="mensagem">{props.mensagem}</p>
            <p className="mensagem2">{props.mensagem2}</p>
            <p className="mensagem3">{props.mensagem3}</p>
            <p className="placar">{props.placar}/8 CONCLUÍDOS</p>
            <div className="icones">{props.icones.map(singIcon => <div className={singIcon}><ion-icon name={singIcon}> </ion-icon></div>)}</div>
        </footer>
    )
}