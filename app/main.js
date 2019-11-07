const $ = require("jquery");

$( document ).ready(() => {
    console.log( "ready!" );

    $("#show-more-btn").on('click', e => {
        $(e.target).addClass("hidden");
       $("#show-more")
           .removeClass("hidden")
           .css("opacity", 1);
    });

    // $("#mc-embedded-subscribe").on('click', e => {
    //     var isValid = $(e.target).parents('form').isValid();
    //     if(!isValid) {
    //         e.preventDefault(); //prevent the default action
    //     }
    // });
    //
    // $("#gdpr_45773").on('change', e => {
    //     console.log("checked");
    //     $("#mc-embedded-subscribe").prop("disabled", !$(e.target).is(':checked'));
    // })
});