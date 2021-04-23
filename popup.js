var imgURL = chrome.extension.getURL("img/cookiepattern.png");
document.querySelector('button').style.background = "url('" + imgURL + "')";

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').addEventListener('click', () => {
        chrome.tabs.query({"status":"complete","windowId":chrome.windows.WINDOW_ID_CURRENT,"active":true}, (tab) => {
            chrome.cookies.getAll({"url":tab[0].url}, (cookies) => {
                var cookieStrings = [];
                for (var i in cookies) {
                    var c = cookies[i];
                    cookieStrings.push(`${c.domain}\t${c.hostOnly.toString().toUpperCase()}\t${c.path}\t${c.secure.toString().toUpperCase()}\t${c.expirationDate}\t${c.name}\t${c.value}\n`);
                }
                var blob = new Blob(cookieStrings, {type: "text/plain"});
                var cURL = URL.createObjectURL(blob);
                chrome.downloads.download({
                    url: cURL,
                    filename: "cookies.txt"
                });
            });
        });
    }, false);
}, false);