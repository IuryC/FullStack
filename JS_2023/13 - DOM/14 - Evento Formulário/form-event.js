function save() {
    event.preventDefault()
    let name = document.querySelector("input[name='name']").value
    let programmingLang = document.querySelector("selec[name='programming-lang']").value
    alert("Nome: " + name + "\nLinguagem de programação: " + programmingLang)
}