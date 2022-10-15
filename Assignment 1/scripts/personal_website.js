function themeFunction(){
    var element = document.body;
    element.classList.toggle("dark");
    changeThemeText()
}

function changeThemeText(){
    var button = document.getElementById("themebutton");
    if (button.innerText === 'DARK'){
        button.innerText = 'Light';
    } else {
        button.innerText = 'Dark';
    }
}



