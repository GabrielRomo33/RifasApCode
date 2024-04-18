
export const RandomsNumbers = (min, max) => {
    var resultados = 0;
    // for (var i = 1; i <= cantidad; i++){
        // resultados.push(Math.floor(Math.random() * (max - min + 1) ) );
        resultados = Math.floor(Math.random() * (max - min + 1) ) ;
    // }
    return resultados;
}