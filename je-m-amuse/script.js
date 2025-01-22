const otoriButtonElement = $( "button.otoried" );

otoriButtonElement.on( "click", function() {
    $( this ).html( "You've been EMU OTORI!" );

    let audioElement = $( "<audio controls style='display: none'><source></audio>" );
    let imgElement = $( "<img></img>" );
    let hElement = $( "<h2>HALLO!!</h2>" );
    let saiyansButtonElement = $( "<button class='saiyansButton' style='margin-top: 3vh; padding: 1vh; font-size: 150%'>Now Click Here</button>" );

    imgElement.attr( "src", "https://preview.redd.it/emu-otori-memes-i-made-v0-5wie4sw5o60a1.jpg?width=300&format=pjpg&auto=webp&s=d5a341e085bd7ef4a265ff632bde9e28350ded74");
    audioElement.attr( "src", "audio/emu-otori.mp3", "preload", "auto");

    hElement.appendTo( ".emu" );
    imgElement.appendTo( ".emu" );
    audioElement.appendTo(".emu");
    saiyansButtonElement.appendTo(".emu");

    audioElement[0].play();

    saiyansButtonElement.on( "click", function() {
        $( this ).html( "You've been Saiyaned!" );

        let saiyansDivElement = $( "<div class='saiyans' style='display: grid; justify-content: center; text-align: center;'></div>" );
        saiyansDivElement.appendTo( ".emu" );
        
        let h2Element = $( "<h2>We Saiyans Have No Limits!!</h2>" );
        let saiyansImgElement = $( "<img style='width: 500px'></img>" );
        let saiyansAudioElement = $( "<audio controls style='display: none'><source></audio>" );
        let kuruButtonElement = $( "<button class='kuruButton' style='margin-top: 3vh; padding: 1vh; font-size: 150%'>Continue?</button>" );

        saiyansImgElement.attr( "src", "https://pbs.twimg.com/media/F4qjgWKWQAErMzV.jpg:large" );
        saiyansAudioElement.attr( "src", "audio/we-saiyans-have-no-limits-made-with-Voicemod.mp3", "preload", "auto" );

        h2Element.appendTo( ".saiyans" );
        saiyansImgElement.appendTo( ".saiyans" );
        saiyansAudioElement.appendTo( ".saiyans" );
        kuruButtonElement.appendTo( ".saiyans" );
        
        saiyansAudioElement[0].play();

        kuruButtonElement.on( "click", function() {
            $( this ).html( "You've been KURU KURU!!" );

            let kuruDivElement = $( "<div class='kuru'></div>" );
            kuruDivElement.appendTo( ".saiyans" );

            let h3Element = $( "<h2>KURU KURU!!</h2>" );
            let kuruImgElement = $( "<img style='width: 500px'></img>" );
            let kuruAudioElement = $( "<audio controls style='display: none'><source></audio>" );

            kuruImgElement.attr( "src", "https://media.tenor.com/ldDoV7iwmkgAAAAj/kurukuru-kururing.gif" );
            kuruAudioElement.attr( "src", "audio/kuru-kuru.mp3", "preload", "auto" );

            h3Element.appendTo( ".kuru" );
            kuruImgElement.appendTo( ".kuru" );
            kuruAudioElement.appendTo( ".kuru" );

            kuruAudioElement[0].play();

        });
    });
})