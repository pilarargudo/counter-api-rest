document.addEventListener( 'DOMContentLoaded', function () {

    // declarations
    ///////////////

    const counterNode = document.querySelector( '.counter' );

    const updateCounterDOM = (value) => {
        counterNode.innerText = String( value )
    }

    // get initial value from backend
    fetch( 'http://localhost:4000/value' )
        .then( response => response.json() )
        .then( data => {
            updateCounterDOM(data.counterValue )
        } )

    // Listeners
    ////////////


    // listener for incremente
    document.querySelector( 'header .increment' ).addEventListener( 'click', () => {
        // increment counter


        let num = Number( counterNode.innerText )

        let nextValue = num + 1;
        counterNode.innerText = nextValue;

    } )

} )
