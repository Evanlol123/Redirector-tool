//eruda because useful for debugging 
(function(){var script=document.createElement("script");script.src="https://cdn.jsdelivr.net/npm/eruda";document.body.append(script);script.onload=function(){eruda.init();console.log("Script Loaded")}})();
const form = document.querySelector('form');
const input = document.querySelector('#url-input');
const tlds = [".com", ".org", ".net", ".info", ".biz", ".us", ".uk", ".co", ".me", ".io", ".ai", ".app", ".dev", ".xyz", ".store", ".online", ".site", ".tech", ".design", ".live", ".tv", ".cc", ".cd", ".name", ".pro", ".jobs", ".mobi", ".tel", ".ws", ".cloud", ".shop", ".bank", ".blog", ".photo", ".restaurant", ".travel", ".fun", ".news", ".game", ".art", ".space", ".agency", ".health", ".education", ".finance", ".consulting", ".video", ".music", ".auto", ".guru", ".chat", ".press", ".digital", ".reviews", ".solutions", ".homes", ".family", ".community", ".tips", ".voting", ".science", ".engineering", ".insurance", ".construction", ".fishing", ".photography", ".farm", ".recipes", ".wedding", ".events", ".lifestyle", ".fashion", ".games"]
let hasTLD = tlds.some(tld => url.endsWith(tld));

form.addEventListener('submit', function(event) {
	event.preventDefault();
	let url = input.value;
	if (!url.startsWith('http://') && !url.startsWith('https://') && hasTLD) {
		url = 'https://' + url;
	}
	if (!url.startsWith('http://') && !url.startsWith('https://') && !hasTLD) {
		url = 'https://www.google.com/search?q=' + url;
	}
window.location.href(url);
});
