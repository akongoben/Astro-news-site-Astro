// Very small client-side language toggle
const enBtn = document.querySelector('#lang-toggle button[data-lang="en"]');
const frBtn = document.querySelector('#lang-toggle button[data-lang="fr"]');
const enSection = document.getElementById('posts-en');
const frSection = document.getElementById('posts-fr');


function setLang(lang) {
if (lang === 'fr') {
enSection.classList.add('hidden');
frSection.classList.remove('hidden');
} else {
frSection.classList.add('hidden');
enSection.classList.remove('hidden');
}
// store preference
localStorage.setItem('site-lang', lang);
}


enBtn.addEventListener('click', () => setLang('en'));
frBtn.addEventListener('click', () => setLang('fr'));


// init
const pref = localStorage.getItem('site-lang') || 'en';
setLang(pref);
