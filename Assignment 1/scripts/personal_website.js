//Theme Change
const btn = document.querySelector('.themebutton');
const mainBody = document.querySelector('body');
let themeLight = btn.innerText;
if(localStorage.getItem('theme')){
    if(localStorage.getItem('theme') === 'Light'){
        themeFunction();
    } else {
        localStorage.setItem('theme', themeLight);
    }
    btn.addEventListener('click', themeFunction);
    
    function themeFunction(){
        if (themeLight === 'Dark'){
            themeLight = 'Light';
            btn.innerText = 'Light';
        } else {
            themeLight = 'Dark';
            btn.innerText = 'Dark';
        }
        localStorage.setItem('theme', themeLight);
        document.body.classList.toggle('dark');
    }
}











