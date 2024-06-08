function Togglemode() {
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector("#profile img")

    if(html.classList.contains("light")) {
        img.setAttribute('src', './img/custom_avatar.png')
        img.setAttribute('alt', 'Foto Perfil Claro')
    } else {
        img.setAttribute('src', './img/custom_avatar_dark_purple.png')
        img.setAttribute('alt', 'Foto Perfil Escuro')
    }

   
}