/*
    * ----------------------------------------------------------------------------
        _  _        _                 _                                 _                                               
    ___| |(_) ___ _| |_  ____ _____ _| |_  ___   ___  _   _  _____  ___| |  _     _   _     _       _  _   _   _        
   / __  || |/ __|__  _|/ _  |  _  |_   _|/ __| / _ \| | | ||  _  |/ __  | |_| | |_  |_  | | |  /|   |  | |_  |_   /|   
  | (__| || |\__ \ | |_  (_| | | | | | |_ \__ \| |_| | |_| || | | | (__| |  _  |   |   | | | | |_|  _|  | | | | | |_|   
   \_____||_||___/ |___|\____|_| |_| |___||___/ \___/|_____||_| |_|\_____| |_| |  _|  _| | |_|   | |_   | |_| |_|   |   
   
    * CSS Document Css sub Start 
    * Author: DistantSound 
    * IDE :     
    * ----------------------------------------------------------------------------
 */

$(function() {
 
        $.extend(danceword, {
			 interval : 150,
			 loop : true
        });

    
         window.onkeydown = window.onkeyup = window.onkeypress = function(e) {
             if (e.keyCode == 123) {
                 e.preventDefault();
                 window.event.returnValue = false;
             }
         };
        
         function d() {
             event.cancelBubble = true;
             event.returnValue = false;
             return false;
         }
         function c(f) {
             if (window.Event) {
                 if (f.which == 2 || f.which == 3) {
                     return false;
                 }
             } else {
                 if (event.button == 2 || event.button == 3) {
                     event.cancelBubble = true;
                     event.returnValue = false;
                     return false;
                 }
             }
         }
         document.oncontextmenu = d;
         document.onmousedown = c;
  

});
function placeholderSupport() { return "placeholder" in document.createElement("input") };
// var mySlide_L = { reset: true, distance: "300px", duration: 600, easing: "ease-in-out", interval: 350, opacity: 0, origin: "left" };
// var mySlide_R = { reset: true, distance: "300px", duration: 600, easing: "ease-in-out", interval: 350, opacity: 0, origin: "right" };
// var mySlide_Up = { reset: true, distance: "300px", duration: 600, easing: "ease-in-out", interval: 300, opacity: 0, origin: "bottom", scale: .1 };
// mySlide_Down = { reset: true, distance: "300px", duration: 600, easing: "ease-in-out", interval: 300, opacity: 0, origin: "top" };
// var myFlip_Up = { reset: true, distance: "300px", easing: "ease-in-out", interval: 300, origin: 'left', rotate: { x: 180, y: 0, z: 90 } };
var myZoom_Out = { reset: true, distance: "300px", easing: "ease-in-out", scale: .1, interval: 200 };
if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
    (function() {
        window.sr = new ScrollReveal();
//        sr.reveal(".myslide-l", mySlide_L);
//        sr.reveal(".myslide-r", mySlide_R);
//        sr.reveal(".myslide-up", mySlide_Up);
//        sr.reveal(".mydlide-down", mySlide_Down);
//        sr.reveal(".myflip-up", myFlip_Up);
        sr.reveal(".myzoom-out", myZoom_Out);
    })();
};