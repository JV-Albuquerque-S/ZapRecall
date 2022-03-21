import imagem from "./assets/images/ZapLogo.png"
import React from "react"
import Logo from "./MainPage/Logo";
import Flashcards from "./MainPage/Flashcards";

export default function LoginPage() {
    const [aparece, setAparece] = React.useState(true);
    return aparece ? (
        <div className="Tela-inicial">
            <img src={imagem} alt="Logomarca ZapRecall" />
            <h1>ZapRecall</h1>
            <button onClick={()=> setAparece(false)}>Iniciar Recall!</button>
        </div>
    ) : 
    (
        <>
            <Logo />
            <Flashcards />
        </>
    )
}