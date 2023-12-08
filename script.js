function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //como buscar a tag img (la no css ela ta em #profile)
  const img = document.querySelector("#profile img")

  //o if nesse caso vai ser pra substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Logo da comunidade 1% Better: Imagem de um número 1 com dois circulos, que unidos, e utilizando a semiótica, formam um símbolo de porcentagem. Acima é possivel ver um chapéu de papai-noel, vermelho com detalhes brancos, com sua ponta caída sobre o elemento. Fundo branco."
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Logo da comunidade 1% Better: Imagem de um número 1 com dois circulos, que unidos, e utilizando a semiótica, formam um símbolo de porcentagem. Acima é possivel ver um chapéu de papai-noel, vermelho com detalhes brancos, com sua ponta caída sobre o elemento. Fundo preto."
    )
  }

  //como trocar a imagem no toggle

  //condição é: se tiver lightmode add a imagem light, e sem, manter a imagem.
}
