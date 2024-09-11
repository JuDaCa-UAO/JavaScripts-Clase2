const evaluar = () =>{
    const edad = prompt("cuál es tu edad?")
    if(edad>=18){
        document.write("sos legal uwu")
    }else{
        document.write("no sos legal unu")
    }
};

setTimeout(evaluar,5000);