const $ = require("jquery");

let baseHeight = 0;
let baseLogoTop = 0;

$( document ).ready(() => {

    const header = $("header");
    const logo = $(".logo-container");
    console.log( "ready!" );
    baseHeight = parseInt(header.height());
    baseLogoTop = parseInt(logo.css("top"));

    $("#show-more-btn").on('click', e => {
        $(e.target).addClass("hidden");
       $("#show-more")
           .removeClass("hidden")
           .css("opacity", 1);
    });

    $(document).scroll(event => {
        $(".key-visual-container").css("margin-top", window.scrollY*0.5);
        header.css("height", baseHeight);
        console.log(baseLogoTop);
        logo.css("top", baseLogoTop+(window.scrollY*0.3));
    });
});