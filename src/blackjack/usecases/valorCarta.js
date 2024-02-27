/**
 * 
 * @param {String} carta 
 * @returns {number} // convierte el valor de string a numero y lo devuelve
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}