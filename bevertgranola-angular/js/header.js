$(".nav a").on("click", function(){
   alert("Click!");
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});