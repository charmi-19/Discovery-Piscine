const getRandomBackground = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`
}

document.getElementById("myButton").addEventListener("click", () => {
    document.getElementById("myProgram").style.backgroundColor = getRandomBackground();
})