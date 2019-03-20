document.addEventListener( 'DOMContentLoaded', function () {




    document.querySelector( 'header .increment' ).addEventListener( 'click', () => {
        // increment counter

        let counterNode = document.querySelector( '.counter' );

        let num = Number( counterNode.innerText )

        let nextValue = num + 1;
        counterNode.innerText = nextValue;


    } )


} )
