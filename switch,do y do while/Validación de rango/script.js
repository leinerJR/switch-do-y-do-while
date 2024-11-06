function solNumero() {
    let numero;

    do {
        numero = parseInt(prompt('Ingresa un número entero entre 1 y 10:'));

        if (numero < 1 || numero > 10) {
            alert('Número fuera de rango. Por favor, ingresa un número válido entre 1 y 10.');
        }
    } while (numero < 1 || numero > 10);

    alert('Gracias');
}

solNumero();