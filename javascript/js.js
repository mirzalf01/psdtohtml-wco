$(document).ready(function(){
	$('.hide').hide();
	$('.text1').hide();
	$('.team1').hover(function(){
		$('.t1').fadeIn(200);
	}, function(){
		$('.t1').fadeOut(200);
	});
	$('.team2').hover(function(){
		$('.t2').fadeIn(200);
	}, function(){
		$('.t2').fadeOut(200);
	});
	$('.team3').hover(function(){
		$('.t3').fadeIn(200);
	}, function(){
		$('.t3').fadeOut(200);
	});
	$('.team4').hover(function(){
		$('.t4').fadeIn(200);
	}, function(){
		$('.t4').fadeOut(200);
	});

	





	$('.show1').hover(function(){
		$('.hide1').fadeIn(200);
	}, function(){
		$('.hide1').fadeOut(200);
	});
	$('.show2').hover(function(){
		$('.hide2').fadeIn(200);
	}, function(){
		$('.hide2').fadeOut(200);
	});
	$('.show3').hover(function(){
		$('.hide3').fadeIn(200);
	}, function(){
		$('.hide3').fadeOut(200);
	});
	$('.show4').hover(function(){
		$('.hide4').fadeIn(200);
	}, function(){
		$('.hide4').fadeOut(200);
	});
	$('.show5').hover(function(){
		$('.hide5').fadeIn(200);
	}, function(){
		$('.hide5').fadeOut(200);
	});
	$('.show6').hover(function(){
		$('.hide6').fadeIn(200);
	}, function(){
		$('.hide6').fadeOut(200);
	});
	$('.p1-menu-l').hover(function(){
		$('.p-button-l').css("background-color","white");
		$('.p-button-l').css("color","black");
	},function(){
		$('.p-button-l').css("background-color","rgb(255,38,38)");
		$('.p-button-l').css("color","white");
	});
	$('.p1-menu-m').hover(function(){
		$('.p-button-m').css("background-color","white");
		$('.p-button-m').css("color","black");
	},function(){
		$('.p-button-m').css("background-color","rgb(255,38,38)");
		$('.p-button-m').css("color","white");
	});
	$('.p1-menu-r').hover(function(){
		$('.p-button-r').css("background-color","white");
		$('.p-button-r').css("color","black");
	},function(){
		$('.p-button-r').css("background-color","rgb(255,38,38)");
		$('.p-button-r').css("color","white");
	});
	
});