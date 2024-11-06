function acumuladorValores() {
    let acumulado = 0;
    let valor;

    do {
        valor = parseInt(prompt('Ingresa un número para acumular (0000 para finalizar):'));

        if (valor !== 0) {
            acumulado += valor;
        }

    } while (valor !== 0); 

   
    alert('Valor acumulado: ' + acumulado);

    if (acumulado > 0) {
        alert('El valor acumulado es mayor a cero.');
    } else if (acumulado < 0) {
        alert('El valor acumulado es menor a cero.');
    } else {
        alert('El valor acumulado es cero.');
    }
}

acumuladorValores();