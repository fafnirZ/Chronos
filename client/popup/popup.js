// required to satisfy csp
function videoClick() {
    const htmlVideo = document.querySelector("video")
    console.log(htmlVideo)
}

document.addEventListener("DOMContentLoaded", () => {
    const clickButton = document.getElementById("trigger")
    clickButton.addEventListener("click", videoClick)
})