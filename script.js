// eruda because useful for debugging 
(function() {
    var script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/eruda";
    document.body.append(script);
    script.onload = function() {
        eruda.init();
        console.log("Script Loaded");
    };
})();

const form = document.querySelector('form');
const input = document.querySelector('#url-input');
const appButtonsContainer = document.querySelector('#app-buttons');
const appButtons = document.querySelectorAll('.app-btn');
const showAppsBtn = document.querySelector('#show-apps-btn');

const tlds = [".com", ".org", ".net", ".info", ".biz", ".us", ".uk", ".co", ".me", ".io", ".ai", ".app", ".dev", ".xyz", ".store", ".online", ".site", ".tech", ".design", ".live", ".tv", ".cc", ".cd", ".name", ".pro", ".jobs", ".mobi", ".tel", ".ws", ".cloud", ".shop", ".bank", ".blog", ".photo", ".restaurant", ".travel", ".fun", ".news", ".game", ".art", ".space", ".agency", ".health", ".education", ".finance", ".consulting", ".video", ".music", ".auto", ".guru", ".chat", ".press", ".digital", ".reviews", ".solutions", ".homes", ".family", ".community", ".tips", ".voting", ".science", ".engineering", ".insurance", ".construction", ".fishing", ".photography", ".farm", ".recipes", ".wedding", ".events", ".lifestyle", ".fashion", ".games"];

showAppsBtn.addEventListener('click', function() {
    appButtonsContainer.style.display = appButtonsContainer.style.display === 'block' ? 'none' : 'block';
});
//When Redirect button is clicked
form.addEventListener('submit', function(event) {
    event.preventDefault();
    let url = input.value;
    const hasTLD = tlds.some(tld => url.endsWith(tld));
    url = url.trim();
    if (!url.startsWith('http://') && !url.startsWith('https://') && hasTLD) {
        url = 'https://' + url;
    }
    
    if (!url.startsWith('http://') && !url.startsWith('https://') && !hasTLD) {
        url = 'https://www.google.com/search?q=' + encodeURIComponent(url);
    }
    if (input.value){
window.location.href = url;
    }
});

// Redirect using app buttons
appButtons.forEach(button => {
    button.addEventListener('click', function() {
        const url = this.getAttribute('data-url');
        window.location.href = url;
    });
});
