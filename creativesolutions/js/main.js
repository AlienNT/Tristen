function initMap(){var o=new google.maps.Map(document.getElementById("location-block"),{center:{lat:-7.934853,lng:112.626792},zoom:15,zoomControl:!1,scaleControl:!1,scrollwheel:!1,disableDoubleClickZoom:!0}),e=new google.maps.Marker({position:{lat:-7.9307459,lng:112.6355576},map:o});infowindow=new google.maps.InfoWindow({content:"None :)"}),e.addListener("click",function(){infowindow.open(o,e)}),e.addListener("click",function(){null!==e.getAnimation()?e.setAnimation(null):e.setAnimation(google.maps.Animation.BOUNCE)})}!function(o){o(".slider-s4").slick({infinity:!0,dots:!0,appendArrows:".slider-s4",prevArrow:'<button type="button" class="arrow ar-s4 arrow-left"><span class="ion-ios-arrow-left"></span></button>',nextArrow:'<button type="button" class="arrow ar-s4 arrow-right"><span class="ion-ios-arrow-right"></span></button>'});o(function(){innerWidth>=768?3:1});o(".slider-s5").slick({dots:!1,infinite:!1,speed:300,slidesToShow:3,slidesToScroll:3,responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!1}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}],appendArrows:".slider-s5",prevArrow:'<button type="button" class="arrow arrow-left"><span class="ion-ios-arrow-left"></span></button>',nextArrow:'<button type="button" class="arrow arrow-right"><span class="ion-ios-arrow-right"></span></button>'}),o(function(){o(".hamburger").on("click",function(){o(".menu").closest(".menu").children("div").slideToggle(300),o("header").toggleClass("hover-bg"),o(".hamburger-inner").toggleClass("hamburger-hover")}),o(window).on("resize",function(){o("body").innerWidth()>=800?(o(".links").css({display:"block"}),o("header").removeClass("hover-bg"),o(".hamburger-inner").removeClass("hamburger-hover")):(o("header").removeClass("hover-bg"),o(".hamburger-inner").removeClass("hamburger-hover"),o(".links").css({display:"none"}))}),o(".links  a").on("click",function(){o(window).innerWidth()<=815&&(o(".menu").closest(".menu").children("div").slideToggle(400),o("header").removeClass("hover-bg"),o(".hamburger-inner").removeClass("hamburger-hover"))}),o("button").click(function(o){o.preventDefault()})}),o(".scroll").on("click",function(e){e.preventDefault();var n=o(this).attr("href"),s=o(n).offset().top;o("body,html").animate({scrollTop:s},1e3)}),o(function(){if(o(window).innerWidth()<=768){var e=o(".header"),n=0;o(window).scroll(function(){var s=o(window).scrollTop(),i=!1,t=!1;if(s>0){if(s>n)if(i=!1,s<e.height()+e.offset().top){if(!1===t){var r=e.offset().top;e.css({top:r+"px"}),t=!0}e.css({position:"absolute"})}else e.css({position:"fixed",top:"-"+e.height()+"px"});else if(t=!1,s>e.offset().top){if(!1===i){r=e.offset().top;e.css({top:r+"px"}),i=!0}e.css({position:"absolute"})}else e.removeAttr("style");n=s}})}})}(jQuery);