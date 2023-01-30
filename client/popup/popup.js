// required to satisfy csp
document.addEventListener("DOMContentLoaded", () => {
    const clickButton = document.getElementById("trigger")
    clickButton.addEventListener("click", async () => {
        // https://developer.chrome.com/docs/extensions/mv3/messaging/
        const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
        chrome.tabs.sendMessage(tab.id, {trigger: true});
    })
})