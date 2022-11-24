/* ----------------- Start Document ----------------- */
(function($){
    "use strict";

    $(document).ready(function(){
$('.mfp-gallery-container').each(function() { // the containers for all your galleries

    $(this).magnificPopup({
        type: 'image',
        delegate: 'a.mfp-gallery',

        fixedContentPos: true,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: false,
        preloader: true,

        removalDelay: 0,
        mainClass: 'mfp-fade',

        gallery:{enabled:true, tCounter: ''}
    });
});

$('.popup-with-zoom-anim').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,

    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
});

$('.mfp-image').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-fade',
    image: {
        verticalFit: true
    }
});

$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
});
    });

})(this.jQuery);
