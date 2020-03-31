function mudaFotoBiro (foto) {
    document.querySelector ("img#nav-biro").src = foto
}

function escolhaTwitter (resultado) {
    var titulo = document.querySelector ("h2#shorou")
    if (resultado == "opressor") {
        titulo.innerHTML = "OPRESSOR 😠"
    } else {
        titulo.innerHTML = "EU SEI &#128557"
    }
}