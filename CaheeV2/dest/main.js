!function(e){e(function(){e(".hamburger").on("click",function(){e(".menu").closest(".menu").children("ul").slideToggle(300),e("header").toggleClass("hover-bg"),e(".hamburger-inner").toggleClass("hamburger-hover")}),e(window).on("resize",function(){e("body").innerWidth()>=800?(e(".links").css({display:"block"}),e("header").removeClass("hover-bg"),e(".hamburger-inner").removeClass("hamburger-hover")):(e("header").removeClass("hover-bg"),e(".hamburger-inner").removeClass("hamburger-hover"),e(".links").css({display:"none"}))}),e(".links li a").on("click",function(){e(window).innerWidth()<=799&&(e(".menu").closest(".menu").children("ul").slideToggle(400),e("header").removeClass("hover-bg"))}),e(".box1").on("click",function(){e(".bh1").slideToggle(400)}),e(".box2").on("click",function(){e(".bh2").slideToggle(400)}),e(".box3").on("click",function(){e(".bh3").slideToggle(400)})})}(jQuery);