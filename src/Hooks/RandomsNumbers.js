
export const RandomsNumbers = (min, max, repetidos) => {
    // var resultados = 0;
    // for (var i = 1; i <= cantidad; i++){
        // resultados.push(Math.floor(Math.random() * (max - min + 1) ) );
        // resultados = Math.floor(Math.random() * (max - min + 1) ) ;
        // }
        // return resultados;
        let randomNumber;
        do {
        if(max === 99) {min = 0}
        randomNumber = Math.floor(Math.random() * (max - min)) + min;
    } while (repetidos.includes(randomNumber)); // Verifica si el número ya ha sido seleccionado
    return randomNumber;
}