$(function() {        
    $('#haejin').hover(function(){ //Open on hover 
        $("#haejin").attr("src","img/haejin_upgrade.jpg");
    },    
    function(){ //Close when not hovered
        $("#haejin").attr("src","img/haejin_3.jpg");
    });
});



$(function() {
    $('#fred').hover(function(){ //Open on hover
        $("#fred").attr("src","img/fred_wushu.jpg");
    },
    function(){ //Close when not hovered
        $("#fred").attr("src","img/fred_franceour.jpg");
    });
});

$(function() {
    $('#chi').hover(function(){
	$("#chi").attr("src","img/chi_tun_wushu.jpg");
	$("#chi").css("width","15vw");
    },
    function(){
	$("#chi").attr("src","img/chi_tun_lam.jpg");
	$("#chi").css("width","100%");
    });
});
