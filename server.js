const NodeCache = require( "node-cache" );
const myCache = new NodeCache();

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    var str;
    obj = { my: "Special", variable: 42 };
    myCache.set( "myKey", obj,2, function( err, success ){
        if( !err && success ){
            console.log( success );
            res.send(' Hello World! data sent');
        }
        else
            res.sendStatus(500);
    });
});

app.get('/data', (req, res) => {
    var str;
    
    myCache.get( "myKey", function(err, value  ){
        if( !err && value ){
            console.log("yay", value );
            str = value;
            res.send(str)
        }
        else
            res.sendStatus(500);
    });
   
});

app.listen(5555, () => console.log('Example app listening on port 5555!'));