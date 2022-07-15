let nomeNave = "Helmet"
let newNomeNave = ""

for(let i = 0; i < nomeNave.length; i++){
    if(nomeNave[i] == "e"){
        newNomeNave += "i"
    } else {
        newNomeNave += nomeNave[i]
    }
}
console.log(newNomeNave)