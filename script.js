function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    //se tiver a imagem light mode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute(
      "alt",
      "Foto do Mayk Brito sorrindo, usando óculos escuro e camisa preta, barba e fundo azul e rosa"
    )
  } else {
    //se tiver sem light mode, manter a imagem normal;
    img.setAttribute('src', "./assets/avatar.png")
  }

  //substituir a imagem
}
