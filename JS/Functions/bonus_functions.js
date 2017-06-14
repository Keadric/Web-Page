
 // Bonus Functions
 
 
// var hexEnum = { "vivid", "monochrom", "wild" };

var hexCode = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F" ]
var debugMode = false;



// Takes in Cookie Data and spits an Object with Key Pairs
function cookieCutter ( cookieDough ) { 

    var BAKED_COOKIES = {};
    var COOKIES_DATA = cookieDough.split(";");
        if ( debugMode ) { console.log( "Cookie Data: ", COOKIES_DATA ) }
    
    COOKIES_DATA.forEach( function ( COOKIE ) { 

        var chips = COOKIE.split( '=' );
            if ( debugMode ) { console.log( "Cookie Chips: ", chips ) }
            if ( debugMode ) { console.log( "Chip 1: ", chips[0] ) }
            if ( debugMode ) { console.log( "Chip 2: ", chips[1] ) }
        
        BAKED_COOKIES[ chips[0] ] = chips[1];

    } );
    
    return BAKED_COOKIES;
    
   

}

// Generate a randome Hex Code with Parameters: Bright, Monochrome, Wild
function generateHex(  ) { 

    var hex = "#";
    
    var red = '';
    
    var green = '';
    
    var blue = '';
    
    return hex + red + green + blue;

}

// Generate a randome Hex number
function randomHex () { 
    return hexCode[ Math.floor( Math.random() * 16 ) ]
}

// Generate a purely Random Hex code
function generateRandomHex (  ) { 

    var hex = "#";
    
    for ( idx = 0; idx < 6; idx++ ) { 

        hex += randomHex();

    }
    
    console.log( "Hex Code: ", hex )
    
    return hex;
    
    

}

// Set Hex code to User's preference
function userGeneratedHex (  ) { 

    var userHex = document.getElementById("user-hex").value;
        console.log( "User Hex:", userHex );
    
    if ( userHex[0] != '#' ) { userHex = '#' + userHex };
    
    console.log( cookies.hexCookie )
    
    document.cookie = "hexCookie=" + userHex;
    document.getElementById("hex-color").style.background = userHex;

}


