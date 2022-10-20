function generaBiglietto(){
    
    let UserKm= document.getElementById('InputUserKm').value;
    let UserAge= document.getElementById('InputUserAge').value;
    let UserName= document.getElementById('InputUserName').value;
    let NCarrozza= Math.floor(Math.random()*12)
    let CPCode= Math.floor(Math.random()*99999)+90000


    if(UserAge < 18){
        let Price= ((UserKm * 0.21)*0.8).toFixed(2);
        document.getElementById('info').innerHTML = `il prezzo dato che sei minorenne corrisponde a: ${Price} € `
        document.getElementById('PassengerName').innerHTML = `Nome Passeggero : ${UserName}`
        document.getElementById('NumeroCarrozza').innerHTML = `Carrozza : ${NCarrozza}`
        document.getElementById('inputCPCode').innerHTML = `Codice CP : ${CPCode}`
        document.getElementById('offer').innerHTML = `Biglietto ridotto`
    }
    else if(UserAge > 65){
        let Price=((UserKm * 0.21) *0.6).toFixed(2);
        document.getElementById('info').innerHTML = `il prezzo dato che sei vecchio corrisponde a: ${Price} `
        document.getElementById('PassengerName').innerHTML = `Nome Passeggero : ${UserName}`
        document.getElementById('NumeroCarrozza').innerHTML = `Carrozza : ${NCarrozza}`
        document.getElementById('inputCPCode').innerHTML = `Codice CP : ${CPCode}`
        document.getElementById('offer').innerHTML = `Biglietto over 65`
    }
    else{
        let Price= (UserKm * 0.21).toFixed(2);
        document.getElementById('info').innerHTML = `non ti meriti nessuno sconto, paga : ${Price} `
        document.getElementById('PassengerName').innerHTML = `Nome Passeggero : ${UserName}`
        document.getElementById('NumeroCarrozza').innerHTML = `Carrozza : ${NCarrozza}`
        document.getElementById('inputCPCode').innerHTML = `Codice CP : ${CPCode}`
        document.getElementById('offer').innerHTML = `Biglietto standard`

    }
}