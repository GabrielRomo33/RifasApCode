
export const RandomsNumbers = (min, max, cantidad) => {
    var resultados = [];
    for (var i = 1; i <= cantidad; i++){
        resultados.push(Math.floor(Math.random() * (max - min + 1) ) );
    }
    return resultados;
}