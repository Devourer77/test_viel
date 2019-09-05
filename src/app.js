import './scss/style.scss';
// import './js/lightslider.js';
import 'bootstrap';
import 'lightslider';
import 'hamburgers';

$(document).ready(function(){

    $('#lightSlider').lightSlider({
        item:1,
        adaptiveHeight:false,
        slideMove:1,
        speed:750,
        slideMargin:0,
        loop:false,
        rtl:false,
        vertical: true,
        verticalHeight: 1082,
// auto: true,
    });

});
