import imagem from "./../assets/images/ZapLogo.png"

export default function Logo(){
    return(
        <div className="Logo">
            <img src={imagem} alt="Logomarca ZapRecall" />
            <h1>ZapRecall</h1>
        </div>
    )
}