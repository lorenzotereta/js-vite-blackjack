import _ from 'underscore';

// Esta función crea un nuevo deck
export const crearDeck = (tiposdeCarta,tiposEspeciales) => {
    let deck= [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposdeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposdeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}