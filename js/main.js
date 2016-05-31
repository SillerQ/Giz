

$(function(){
	setTimeout(onWidthChange,200);
	showItem();
	shareMenu();
	if($(window).width() <=768){
		dropNav();
	}
	btnBg();
	// backTop();
});
function btnBg(){
	$(".activ_con a").on("mouseover",function(){
		$(this).css("background-color","#C70F0F");
	});
	$(".activ_con a").on("mouseout",function(){
		$(this).css("background-color","#EB4F4F");
	});
} 
function onWidthChange()
{
	if ($(window).width() > 1024) {
		$('.btn_share').fadeOut("slow");
	};
	if($(window).width() <= 1024){
		$('.btn_share').fadeIn("slow");
	}
    if( $(window).width() <=768 ) {
        $("#pro_con_left").removeClass('content_left');
 		$("#pro_con_right").removeClass('content_right');
    }
    if($(window).width() <= 583){
    	$(".head_Title p").html("");
    }
    setTimeout(onWidthChange,200);
 }

$(window).resize( function() {
	if( $(window).width() > 768 ) {
        $("#pro_con_left").addClass('content_left');
 		$("#pro_con_right").addClass('content_right');
    }
	if( $(window).width() <= 768 ) {
        $("#pro_con_left").removeClass('content_left');
 		$("#pro_con_right").removeClass('content_right');
    }
    if($(window).width() >= 583){
    	$(".head_Title p").html("Sino-German Cooperation<br>for Sustainable Development");
    }
    if($(window).width() <= 583){
    	$(".head_Title p").html("");
    }
});


function dropNav(){
	var turnMenu=0;
	// $("#nav_btn").on("click",function(){
	// 	if(turnMenu==0){
 // 			$("#bs-example-navbar-collapse-1").css({"left":"0px","top":"-44px",opacity:0,"display":"block"}).animate({opacity:1,top:0,left:0},600,function(){
 // 				// $("#nav_list").css({"left":"0px","top":"44px"});
 // 				turnMenu=1;
 // 				// var $menu = $('#nav_list');
	// 			// $(document).click(function(e) {
	// 			// 	if(!(e.target == $menu || $.contains($menu, e.target))) {
	// 			// 		$menu.hide();
	// 			// 		turnMenu=0;
	// 			// 	}
	// 			// });
 // 			});
 				
 // 			}else if(turnMenu==1){
 // 				$("#bs-example-navbar-collapse-1").css({"left":"0px","top":"44px",opacity:1}).animate({opacity:0,top:0,left:0},600,function(){
 // 					$("#bs-example-navbar-collapse-1").css({"display":"none"});
 // 					turnMenu=0;
 // 				});
 				
 // 			}

 // 		});
	$('#nav_btn').on("click",function(){
		// console.log($(this).next());
		$('#bs-example-navbar-collapse-1').stop().slideToggle("slow");
		// $('#bs-example-navbar-collapse-1').css({"position":"relative","display":"block"});
	});
	// $('#bs-example-navbar-collapse-1').on("mouseleave",function(){
	// 	$(this).stop().slideUp("slow");
	// });
}


function showItem(){
	var turnof=0;
	$("#showDown").on("click",function(){
		if(turnof==0){
			$("#hide_con").slideDown("slow");
			// $('#foot').css({"position":"absolute","opacity":"0"}).animate({opacity:1},2000);
			$("#showDown span:last").html("HIDE");
			$("#showDown").css({'background-color':'#EB4F4F','font-weight':'bold'});
			$(".activ_item .rig_squ").css("background-color","#C70F0F");
			$(".activ_item .item_icon").css("background","url('images/right_icon2.png') center no-repeat");
			turnof=1;
		}else{
			$("#hide_con").slideUp("fast");
			// $('#foot').css("position","fixed").css("opacity","0").animate({opacity:1},1000);
			$("#showDown span:last").html("SHOW ALL");
			$("#showDown").css({'background-color':'#558A9C','font-weight':'normal'});
			$(".activ_item .rig_squ").css("background-color","#3C636F");
			$(".activ_item .item_icon").css("background","url('images/right_icon.png') center no-repeat");
			turnof=0;
		}
	});
}

function shareMenu(){
	$('#share_btn').on('click',function(){
		$('.head_share').slideToggle(600,function(){
			// $(this).css("opacity","0").animate({opacity:1},600);
		});
	});
	// $('.head_share').on('mouseleave',function(){
	// 	$('.head_share').slideUp(1000);
	// });
}
var bt;
var sTop;
$('#backtop').on("click",function(){
	
	
	bt=self.setInterval("backTop()",0.1);
	
	
	
});
function backTop(){
		sTop=$(window).scrollTop();
		
		if(sTop>0){
			sTop=sTop-10;
			console.log(sTop);
			$(window).scrollTop(sTop);
		}else{
			window.clearInterval(bt);
		}
	}	