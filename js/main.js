
// ----- Progress BAR ----- //
var $container=$('#progress'),
    $progressBar=$('.progress-bar'),
    $progressText=$('.progress-text'),
    imgLoad = imagesLoaded('#wrap img'), // getting image method on vanilla JS
    imgTotal =  imgLoad.images.length, // 이미지의 "총"개수
    imgLoaded=0, // loaded image counts during Loading
    current=0, // For 'delaying' Loading percent
    progressTimer= setInterval(updateProgress,1000/60); // divide a second into sixty parts


// -- imageLoaded --- //
imgLoad.on( 'progress', function() {
  imgLoaded++;
    console.log(imgLoaded);
});    

function updateProgress(){
    var target = imgLoaded/imgTotal*100; // Loading %
    current+=(target - current) *0.03; //for "Delaying" progress %
    $progressBar.css({width:current+'%'});
    $progressText.text(Math.ceil(current)+"%");
//    console.log(target);
//    console.log(Math.ceil(current));
    if(current>99.7){
        clearInterval(progressTimer);
        $progressBar.add($progressText).delay(1200).animate({background:'#f9f3ea'},1000,'easeInOutQuint',function(){
            $container.animate({top:"-200%"})
			setTimeout(function(){
				setTimeout(function(){
					$container.hide();
				},15000);//setTimeout() - in
			},2000);//setTimeout() - out
        }); //#el.animate({work},time,{Work after finishing})
	};// if()
};//// updateProgress()


var $boxFont=$('.box.front'),
    $boxBack=$('.box.back'),
    $boxLeft=$('.box.left'),
    $boxRight=$('.box.right'),
    $boxTop=$('.box.top'),
    $boxBottom=$('.box.bottom'),
    $controller=$('#controller'),
    $contUp=$('#controller .up'),
    $contDown=$('#controller .down'),
    $contLeft=$('#controller .left'),
    $contRight=$('#controller .right'),
    $right_pt =$('#right_parts'),
	$nav=$('#nav');
var x=0;
var y=0;


/*---Intro---*/
$(window).load(function(){
	alert("[1] 크롬브라우저 사용을 부탁드립니다. [2] 포트폴리오 사이트입니다."); 
	setTimeout(function(){
		$boxFont.addClass('active');
		// SEC1 - FRONT
		var main_Text = $('.box.front .m_title svg path');
		
		mainEffect();
		function mainEffect(){
			var strokeEffect;
			var strokeEffect = setInterval(function(){
				main_Text.css({'animation':'dash-effect 1s linear forwards','stroke-dashoffset':570,'stroke-dasharray':570});
//				console.log('set!!')
				setTimeout(function(){
					main_Text.removeAttr('style').css({fill:'none'});
				},7800);
			},8000);
//				console.log('func mainEffect')
		};// setInterval()
		
	},500); // setTimeout()
});//load(function);



// Nav Light ON / OFF
setInterval(function lightOn(){
		if($boxFont.hasClass('active')){
		   $('.nav.front').addClass('active').siblings().removeClass('active');
		}else if($boxRight.hasClass('active')){
		   $('.nav.right').addClass('active').siblings().removeClass('active');
		}else if($boxLeft.hasClass('active')){
		   $('.nav.left').addClass('active').siblings().removeClass('active');
		}else if($boxBack.hasClass('active')){
		   $('.nav.back').addClass('active').siblings().removeClass('active');
		};
		//--- # W O R D S ---//
		var activeIndex = $('.nav.active').index();
		$('#words .word').eq(activeIndex).addClass('active').siblings().removeClass('active');
		//	console.log(activeIndex); 
	
		// up, down button - hidden event
		if($('.box.front, .box.top, .box.bottom').hasClass('active')){
			$contUp.addClass('active');
			$contDown.addClass('active');
			$right_pt.addClass('active');
			
		}else{
			$contUp.removeClass('active');
			$contDown.removeClass('active');
			$right_pt.removeClass('active');
		};
},100);


// --- BOX-ROTATE --- //
/*SIDE- Front*/
const spinner = $('#box_spinner');
$('#controller .home, .nav.front').click(function(){
	spinner.css({'transform':'rotateY('+ 0+'deg)rotateX('+0+'deg)'});
	$boxFont.addClass('active').siblings().removeClass('active');
});

/*SIDE - Right*/
$('.nav.right').click(function(){
	spinner.css({'transform': 'rotateY('+ -90+'deg)rotateX('+0+'deg)'});
	$boxRight.addClass('active').siblings().removeClass('active');
});

/*SIDE - Back*/
$('.nav.back').click(function(){
	spinner.css({'transform': 'rotateY('+ -180+'deg)rotateX('+0+'deg)'});
	$boxBack.addClass('active').siblings().removeClass('active');
});


/*SIDE - Left*/
$('.nav.left').click(function(){
	spinner.css({'transform': 'rotateY('+ -270+'deg)rotateX('+0+'deg)'});
	$boxLeft.addClass('active').siblings().removeClass('active');
});

/*SIDE - Top*/
$contUp.click(function(){
	spinner.css({'transform': 'rotateY('+ 0+'deg)rotateX('+-90+'deg)'});
	$boxTop.addClass('active').siblings().removeClass('active');
});

/*SIDE - Bottom*/
$contDown.click(function(){
	spinner.css({'transform': 'rotateY('+ 0+'deg)rotateX('+90+'deg)'});
	$boxBottom.addClass('active').siblings().removeClass('active');
//	console.log(now);
});





// SEC 1 - TOP

$contUp.click(function(){
	pieChart();
	percentEvent();
});
function pieChart(){
	$('.chart').easyPieChart({
		//your options goes here
		barColor:'#d18b00',// bar color
		scaleColor:false, // rounding deco
		trackColor:'#0a251a', /// inner circle
		lineWidth:15, // bar thickness
		size:120, // entire size
		lineCap:'square', // edge of bar
		animate:3000, //duration
		easing:'ease-in-out' //easing
	});
}; //펑션문()

function percentEvent(){
	var $skillPercent = $('.skillPercent');
	$skillPercent.each(function(){
		var target = $(this)
		var percent = $(this).attr('data-rate');
		
		//value 0 ~ n%'s change
		$({dataAni:0}).animate({dataAni:percent},{
			duration:3000,
			step:function(){
				target.text(Math.ceil(this.dataAni)+'%');
				// To 'dataAni' input (0~n%) value
//				console.log(this.dataAni)
			}
		}); // animate()
	}); //each()
}; // percentEvent()






// S E C 1 - BOTTOM
var $sec1_bottom ={
	myCont:$('#sec1_bottom .cont .my'),
	myCont_active:$('#sec1_bottom .cont .my.active'),
	myCont_last:$('#sec1_bottom .cont .my:last-child'),
	btn_mbti:$('#sec1_bottom .cont .my.mbti .btn'),
	info_mbti:$('#sec1_bottom .cont .my.mbti .popUp_info'),
	frame_mbti:$('#sec1_bottom .cont .my.mbti .popUp_img'),
	img_mbti:$('#sec1_bottom .cont .my.mbti .popUp_img img'),
};

$nav.click(function(){
	$sec1_bottom.myCont.removeClass('active');
});


$sec1_bottom.myCont.css({'animation':'my_block_event 2.4s alternate ease infinite'});
$sec1_bottom.myCont.click(function(){
	if($sec1_bottom.btn_mbti.hasClass('on')){
		$(this).addClass('active');
	}else{
		$(this).toggleClass('active');
		$sec1_bottom.myCont.removeAttr('style')
	}
	
	// Animation EVENT
	if($(this).hasClass('active')){
		$sec1_bottom.myCont.removeAttr('style')
	}else{
		$sec1_bottom.myCont.css({'animation':'my_block_event 2.4s alternate ease infinite'});
	};
//	console.log('myCont click!')
}); //click()



// MBTI - BTN EVENT
$sec1_bottom.btn_mbti.mouseover(function(){
	$(this).addClass('on');
}).mouseleave(function(){
	$(this).removeClass('on');
}).click(function(){
//	console.log('btn_mbti click!')
	$sec1_bottom.frame_mbti.fadeIn(400);
	var index = $(this).index() - 1;
	$sec1_bottom.img_mbti.eq(index).fadeIn(500).siblings().hide();
//	console.log(index);
}); //click()
$sec1_bottom.frame_mbti.click(function(){
//	console.log('frame_mbti click!')
	$sec1_bottom.img_mbti.fadeOut(200).hide();
	$(this).toggleClass('active');
	$(this).slideUp(100);
}); //click()


// VIDEO EVENT
var video = document.getElementById('video');
video.onclick = function(){
	if(video.paused){
		$sec1_bottom.myCont_last.css({'animation-play-state':'running'});
	}else{
		$sec1_bottom.myCont_last.css({'animation-play-state':'paused'});
	}
};// video EVENT()





// S E C 2 
var $sec2 = {
	monitorSection:$('.box_web .frame_web'),
	monitor:$('.box_web .frame_web a'),
	description:$('.description.myskill .txt_Left .subTitle'),
	popUpText:$('.box_web .frame_web .popup_explanation'),
	btn_close:$('.box_web .frame_web .close'),
	icon_Arrow:$('.close .arrowDown'),
	Hide_Arrow_Section:$('.popup_explanation ul li:nth-child(n+13)'),
	popUpColor:$('.box_web .popup_txt'),
	btn_mainColor:$('.txt_Right .main_color')
};


$sec2.description.mouseover(function(){
	$sec2.popUpText.addClass('active');
	$sec2.btn_close.fadeIn(500);
}); //mouseover()//
    
$sec2.btn_close.click(function(){
	$sec2.popUpText.removeClass('active')
	$sec2.btn_close.fadeOut(200);
}); // click()//


$sec2.Hide_Arrow_Section.mouseover(function(){
	$sec2.icon_Arrow.fadeOut(200);
}).mouseleave(function(){
	$sec2.icon_Arrow.fadeIn(200);
});




// color_EFFECT
$sec2.btn_mainColor.mouseover(function(){
	var mainColor =$(this).attr('color')
	$sec2.monitor.css({background:mainColor})
	$sec2.popUpColor.css({opacity:1})
}).mouseleave(function(){
	$sec2.monitor.removeAttr('style');
	$sec2.popUpColor.removeAttr('style')
});


	
// S E C 2 - SLICK
$('.slick_mySites').slick({
	autoplay:false,
	dots: false,
	arrows:true,
	infinite: true,
	speed: 500,
	fade: true,
	cssEase: 'ease'
});



/*--- M O U S E - C U R S O R ---*/
var cursor = $('#cursor');
$('.box.front').mousemove(function(e){
	$(this).find('*').css({cursor:'none'});
	cursor.css({visibility:'visible'});
	var x = e.pageX;
	var y = e.pageY;
	cursor.css({left:x+'px', top:y+'px'});
	//console.log(x,y);
});
$('.box.front').mouseleave(function(e){
	cursor.css({visibility:'hidden'});
	$(this).find('*').css({cursor:'default'});
});


// S E C 3 - lightGallery
$("#lightgallery").lightGallery({
	thumbnail:true
}); 




// S E C 3 
var $sec3 = {
	screen:$('#notice .screen'),
	close:$('#notice .screen .watch_cont .button_wrapper'),
	close_last:$('#notice .screen .watch_cont:last-child .button_wrapper'),
	watch_cont:$('#notice .screen .watch_cont'),
	review:$('#notice .screen .button_wrapper.review')
}

$sec3.screen.mouseover(function(){
	$(this).css({'overflow-y':'auto'});
}).mouseleave(function(){
	$(this).removeAttr('style');
})
	
// Close Button
$sec3.close.click(function(){
	$(this).parent($sec3.watch_cont).fadeOut(200).next().css({'margin-top':0});
	
});

$sec3.review.click(function(){
	$sec3.watch_cont.fadeIn(500).removeAttr('style');
});
//
//// Review Button
//$sec3.review.fadeOut(500)
//$sec3.close_last.click(function(){
//	$sec3.review.fadeIn(500)
//});
//

//---------SEC4 - Experiment by BMWORLD------------
/*
var $Bg=$('#lightgallery');
var currentNum=0; //default


var BgRotate = setInterval(function(){
	if(currentNum<= 360 && currentNum >= 0){
		currentNum = currentNum+8;
//		console.log(currentNum);
		$Bg.css({'background':'linear-gradient( '+currentNum+'deg, rgba(0,0,0,0.7) , rgba(0,0,0,0.9))'});
		if(currentNum >=361){currentNum = -currentNum} //convert to minus
	}else if(currentNum < 0){
		currentNum = currentNum+8; //
		currentNum2 = -currentNum; // convert to plus
		$Bg.css({'bakground':'linear-gradient( '+currentNum+'deg, rgba(0,0,0,0.9) , rgba(0,0,0,0.7))'});
		console.log(currentNum2);
	}
},100);// Bgcolor-rotating
//----- Stop the ROTATING
setTimeout(function(){
	clearInterval(BgRotate);
	
},10000);
$Bg.click(function(){
	clearInterval(BgRotate);
}); // clearInterval

*/



// --------------- ★ C O O K I E ★--------------- //

var $cookie ={
	body:$('#modal'),
	cookie:$('.cookie'),
	btn_close:$('.cookie_close'),
	btn_cookie:$('.btn_cookie'),
	btn_delete:$('#cookie_delete')
	
}


//클라이언트가 이 사이트를 "재방문"했는지 확인하기 How? 개발자모드-application-cookies에 흔적이 남아있는지 확인(이 쿠키는 클라이언트의 local에 저장되는거란것을 이전시간에 다루었지
//쿠키가 있는지 확인하고 쿠키가 없으면, 팝업창을 띄운다
//	console.log(document.cookie) // CookieName=green; SL_GWPT_Show_Hide_tmp=1; SL_wptGlobTipTmp=1
//index.html에서 생성했던 쿠키이름이 등장한다.
	


//[1] (bmworld라는 이름의)쿠키가 있는지 확인하기
//쿠키가 있다는 것의 의미? 이 사이트에 "재방문"했다는 거다.
var currentCookie=document.cookie;
var cookieCheck = currentCookie.indexOf('bmworld'); //indexOf = 해당 '문자'가 전체 배열중에 '몇 번 째'있냐
// "없으면" -1 반환.
console.log(cookieCheck+' : 쿠키가 있습니다.');

	
//[2] 쿠키 문자열 체크 if문
if(cookieCheck>-1){
    // 쿠키의 문자열(bmworld)이 배열에 "있.으.면"(-1보다 큰값/배열에 bmworld란말이 있으니까) ==> "안보이게만듦"
    $cookie.body.hide().css({'top': -9999+'px'});
}else{
    $cookie.body.removeAttr('style');// 쿠기의 문자열(bmworld)이 배열에 "없.으.면"(-1값) ==> "알림을 가린다"
};
	
	

//[3] "오늘 하루 열지 않기"---> '쿠키 추가'
$cookie.btn_cookie.click(function(){
    var date = new Date();
    date.setDate(date.getDate()+1); /*현재날짜를 1일 뒤로 바꾼다.*/
    var setCookie="";
    setCookie += 'CookieName = bmworld;' + 'expires=' + date.toUTCString();
    /*세미콜론(;) 쿠키의 name, value, domain, path의 값을 '구분'시켜줄때 사용*/
    
    //쿠키에 저장하기
    document.cookie=setCookie; // <----이제 이사이트에 접속한 사람의 local에는 이 사이트의 쿠키(bmworld/ 날짜데이터는 1일 뒤)로 저장됨
    console.log(setCookie+'/// 현.재.날.짜.를 1일 후로 변경함');
	//ex.  CookieName = bmworld;expires 를 확인해보면, 2021-04-15T12:13:01.000Z (클릭기준, 익일날짜로 변경되는 것을 확인가능하다)
});



// [4] 닫기버튼 - 이벤트
$cookie.btn_close.click(function(){
   $cookie.body.fadeOut(500);
});

// [5] 쿠키지우기 (날짜값을 바꿔주서, 쿠키가 마치 지워진 것처럼 만듦)
$cookie.btn_delete.click(function(){
    deleteCookie(); //라는 함수를 만들 것이다.
})
    

//[5-2] bmworld쿠키의 '날짜'를, 복구
function deleteCookie(){
		var date = new Date();
	date.setDate(date.getDate()-1); // (쿠키에서) '현재날짜'를 '하루 전'으로 변경(하루전이라야 , 사용자가 접속했을때, 확실하게 알림창이 다시뜬다. 애매하게 1시간 차이로, 이 기능이 작동안되게 하는것보단 이게 나은거다)
	var setCookie="";
	setCookie +='CookieName = bmworld;'; //세미콜론(;) 쿠키의 name, value, domain, path의 값을 '구분'시켜줄때 사용/
	setCookie +='expires=' + date.toUTCString();//세계표준시간으로 변환
	document.cookie=setCookie;//쿠키에 저장하기
	console.log(setCookie+'/// 쿠키 삭제됨');
};












