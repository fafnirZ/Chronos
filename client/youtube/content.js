function videoClick() {
    // play or pause
    document.querySelector("video")?.click()
}

chrome.runtime.onMessage.addListener(message => {
    if (message.trigger) {
        videoClick()
    }
})