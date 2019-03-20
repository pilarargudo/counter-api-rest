const express = require( 'express' );
const app = express();

const fs = require( 'fs' );

const port = Number( process.argv[ 2 ] ) || 3000;


// BODY PARSE TO JSON
app.use( express.json() );


// enable CORS
app.use( function ( req, res, next ) {
    res.header( "Access-Control-Allow-Origin", "*" );
    res.header( "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept" );
    next();
} );









app.listen( port, () => console.log( 'Servidor levantado en ' + port ) );
