const changeThemeBtn = document.getElementById("change-theme")

// Função toggle modo dark
function toggleDarkMode(){
    document.body.classList.toggle("dark")
}

// carregar modo dark ou light
function loadTheme(){
    const darkMode = localStorage.getItem("dark")

    if(darkMode){
        toggleDarkMode()
    }
}

loadTheme()

changeThemeBtn.addEventListener("change",()=>{
    toggleDarkMode()

    // Salva ou remove modo dark
    localStorage.removeItem("dark")

    if(document.body.classList.contains("dark")){
        localStorage.setItem("dark", 1)
    }
})
