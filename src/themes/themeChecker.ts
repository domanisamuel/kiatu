
export const themeChecker = (theme:String) => {
    if(theme === 'light') {
        document.body.style.backgroundColor = "#fff"
        document.body.style.color = "#495057"
    } else if(theme === 'dark') {
        document.body.style.backgroundColor = "#192028"
        document.body.style.color = "#e1e5e7"
    } else {
        document.body.style.backgroundColor = ""
        document.body.style.color = ""
    }
}