let isIgnite = true
function changeCard(event) {
    const card = event.currentTarget
    const backgroundImage = isIgnite 
    ? "url(./assets/bg-explorer.svg)"
    : "url(./assets/bg-Ignite.svg)"
    isIgnite = !isIgnite
    card.style.backgroundImage = backgroundImage
}

/* funcao de exemplo minizar o codigo

/* 
function changeCard(event) {
    const card = event.currentTarget
    const bg = isIgnite 
    ? "explorer"
    : "Ignite"
    isIgnite = !isIgnite
    card.style.backgroundImage = 'url(./assets/bg-${bg}.svg'
*/