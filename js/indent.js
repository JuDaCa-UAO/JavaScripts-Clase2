const compararNumeros = (a, b, c) => {
    let resultado = "";

    if (a === b && b === c) {
        resultado += `Los 3 números son iguales: ${a}. `;
    } else if (a === b) {
        resultado += `${a} y ${b} son iguales. `;
    } else if (b === c) {
        resultado += `${b} y ${c} son iguales. `;
    } else if (a === c) {
        resultado += `${a} y ${c} son iguales. `;
    }

    
    if (a > b && a > c) {
        resultado += `${a} es el número mayor.`;
    } else if (b > a && b > c) {
        resultado += `${b} es el número mayor.`;
    } else if (c > a && c > b) {
        resultado += `${c} es el número mayor.`;
    }

    return resultado;
};

document.write(compararNumeros(5, 8, 5));  
document.write("<br>");  
document.write(compararNumeros(7, 7, 7));  
document.write("<br>");
document.write(compararNumeros(3, 4, 2)); 