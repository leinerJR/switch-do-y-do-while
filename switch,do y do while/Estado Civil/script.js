function verificar() {
    const nombre = prompt('Ingresa tu nombre:');
    const estadoCivilCodigo = parseInt(prompt('Ingresa tu estado civil (1: Soltero, 2: Casado, 3: Separado, 4: Viudo, 5: Unión libre):'));

    let estadoCivil;
código

    switch (estadoCivilCodigo) {
        case 1:
            estadoCivil = 'Soltero';
            break;
        case 2:
            estadoCivil = 'Casado';
            break;
        case 3:
            estadoCivil = 'Separado';
            break;
        case 4:
            estadoCivil = 'Viudo';
            break;
        case 5:
            estadoCivil = 'Unión libre';
            break;
        default:
            estadoCivil = 'Código no válido';
            break;
    }

    alert('Nombre: ' + nombre + '\nEstado Civil: ' + estadoCivil);
}

verificar();