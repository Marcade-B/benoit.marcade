const mailErrorElement = $( ".mailError" );
const passwordErrorElement = $( ".passwordError" );
const allErrorElement = $( ".allError" );
mailErrorElement.hide();
passwordErrorElement.hide();
allErrorElement.hide();

$( "form" ).submit(function(e) {
    e.preventDefault();
    mailErrorElement.show();
    passwordErrorElement.show();
    allErrorElement.hide();

    const email = $( "#email" );
    const password = $( "#password" );

    console.log( email.val() );
    console.log( password.val().length );
    if ( email.val().trim().length > 0 ) {
        mailErrorElement.hide();
    }

    if ( password.val().trim().length == 0 ) {
        passwordErrorElement.html( "Password is required" );
        passwordErrorElement.show();
    }
    if ( password.val().trim().length > 0 ) {
        if ( password.val().length < 8 ) {
            passwordErrorElement.html( "Password must be at least 8 characters long" );
            passwordErrorElement.show();
        } else {
            passwordErrorElement.hide();
        }
    }

    if (email.val().trim().length == 0 && password.val().trim().length == 0) {
        mailErrorElement.hide();
        passwordErrorElement.hide();
        allErrorElement.show();
    }

    if (email.val().trim().length > 0 && password.val().trim().length > 8) {
        console.log( "Congratulations" );

        let congrat = $( "<img style='display: flex; justify-content: center; width: 500px; margin-top: 50px' src='https://media.tenor.com/yheo1GGu3FwAAAAM/rick-roll-rick-ashley.gif'><img>" );
        let congratMusic = $( "<audio controls style='display: none'><source></audio>" );

        congratMusic.attr( "src", "audio/Mzg1ODMxNTIzMzg1ODM3_JzthsfvUY24.mp3", "preload", "auto" );

        congrat.appendTo( "div.img" );
        congratMusic.appendTo( "div.img" );

        congratMusic[0].play();
    }

});