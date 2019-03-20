document.addEventListener( 'DOMContentLoaded', function () {

    // declarations
    ///////////////
    const baseApiUrl = 'http://localhost:4000';
    const counterNode = document.querySelector( '.counter' );

    const updateCounterDOM = (value) => {
        counterNode.innerText = String( value )
    }

    // get initial value from backend
    fetch( baseApiUrl + '/value' )
        .then( response => response.json() )
        .then( data => {
            updateCounterDOM(data.counterValue )
        } )

    // Listeners
    ////////////


    // listener for incremente
    document.querySelector( 'header .increment' ).addEventListener( 'click', () => {
        // increment counter


        fetch( baseApiUrl  +'/increment' )
            .then (res => res.json())
            .then( data => {
                updateCounterDOM(data.counterValue)
            })

    } )
} )
