$(function(){
		var oSchbox=document.getElementById('schbox')
		var oSchtxt=document.getElementById('searchtxt');
		var oSchdiv=document.getElementById('schdiv');
		var oShowdiv=document.getElementById('schshowdiv');
		oSchtxt.onfocus=function(){
			oSchbox.style.borderColor='#ff6700';
			oSchtxt.style.borderColor='#ff6700';
			oShowdiv.style.display='none';
			oSchdiv.style.display='block';
		};
		oSchtxt.onblur=function(){
			
			oSchbox.style.borderColor='#ccc';
			oSchtxt.style.borderColor='#ccc';
			oShowdiv.style.display='block';
			oSchdiv.style.display='none';
		};
		$('.top_nav_cart1').hover(function(){
			$(this).addClass('top_nav_cart1on');
			$('.top_nav_cart2').animate({
					display:'block',
					height:98
			});
			},function(){
			$(this).removeClass('top_nav_cart1on');
			$('.top_nav_cart2').animate({
			height:0,
			display:'none'
			});
		});
		$('.top_cont_ul_li').hover(function(){
			$('.top_cont_ul_li_div').eq($(this).index()).show();
		},function(){
			$('.top_cont_ul_li_div').eq($(this).index()).hide();
		});
		// banna
		$('#bannalf').hover(function(){
			clearInterval(time);
			$(this).css({opacity:0.9,backgroundColor:'rgba(0,0,0,0.8)',cursor:'pointer'});
		},function(){
			$(this).css({opacity:0.6,backgroundColor:'rgba(0,0,0,0)',cursor:'pointer'});
		});
		$('#bannart').hover(function(){
			clearInterval(time);
			$(this).css({opacity:0.9,backgroundColor:'rgba(0,0,0,0.8)',cursor:'pointer'});
		},function(){
			$(this).css({opacity:0.6,backgroundColor:'rgba(0,0,0,0)',cursor:'pointer'});
		});
		var iNow=0;
		function show(){
			$('#bannaspdiv span').removeClass('show');
			$('#bannaspdiv span').eq(iNow).addClass('show');
			$('#bannabox').animate({marginLeft:iNow*-1226});
		}
		function next(){
			iNow++;
			if (iNow==$('.top_bannabottom_sp').length) {
				iNow=0;
			}
			show();
		}
		$('#bannaspdiv span').click(function(){
			iNow=$(this).index();
			show();
		});
		$('#bannalf').click(function(event){
			iNow--;
			if(iNow==-1){
				iNow=$('.top_bannabottom_sp').length-1;
			}
			show();
		});
		$('#bannart').click(function(){
			next();
		});
		var time=setInterval(next,3000);
		$('#bannabox').hover(function(){
			clearInterval(time);
		},function(){
			clearInterval(time);
			time=setInterval(next,3000);
		});
		$('#bannaspdiv').hover(function(){
			clearInterval(time);
		},function(){
			clearInterval(time);
		});
		// bannanavleft
		$('.top_bannanav_ul>li').hover(function(){
			var i=$(this).index();
			$('.top_bannanav_li_div').eq(i).show();
		},function(){
			$('.top_bannanav_li_div').hide();
		});
		// top_banna2
		(function(){
			var iNow=0;
			function next(){
				iNow++;
				if (iNow==2) {
					iNow=0;	
				}
				$('#top_lunbo').animate({marginLeft:iNow*-1226-14});
				if(iNow>0){
					$('#lunbobtn2').removeClass('hv').attr('disabled',true);
					$('#lunbobtn1').removeAttr('disabled');
				}else{
					$('#lunbobtn1').removeClass('hv').attr('disabled',true);
					$('#lunbobtn2').removeAttr('disabled');
				}
			}
			var time=setInterval(next,5000);
			$('#lunbobtn1').hover(function(){
				$(this).addClass('hv');
			},function(){
				$(this).removeClass('hv');
			});
			$('#lunbobtn2').hover(function(){
				$(this).addClass('hv');
			},function(){
				$(this).removeClass('hv');
			});
			$('#lunbobtn1').click(function(){
				iNow--;
				clearInterval(time);
				if (iNow==-1) {
					iNow=0;
				}
				$('#top_lunbo').animate({marginLeft:iNow*-1226-14});
				time=setInterval(next,5000);
				$(this).removeClass('hv').attr('disabled',true);
				$('#lunbobtn2').removeAttr('disabled');
			});
			$('#lunbobtn2').click(function(){
				clearInterval(time);
				iNow++;
				if (iNow==2) {
					iNow=1;
				}
				$('#top_lunbo').animate({marginLeft:iNow*-1226-14});
				time=setInterval(next,5000);
				$(this).removeClass('hv').attr('disabled',true);
				$('#lunbobtn1').removeAttr('disabled');
			});
		})();
		// div-span	
		$('.content_cont_div').hover(function(){
			$(this).adcl().adanm();
		},function(){
			$(this).rmcl().rmanm();
		});
		$('.content_cont1_div').hover(function(){
			$(this).adcl().adanm();
		},function(){
			$(this).rmcl().rmanm();
		});
		$('.content_cont_imgdiv').hover(function(){
			$(this).adcl().adanm();
		},function(){
			$(this).rmcl().rmanm();
		});	
		$('.content_cont2_right1').hover(function(){
			$(this).adcl().adanm();
		},function(){
			$(this).rmcl().rmanm();
		});	
		$('.content_cont2_right2').hover(function(){
			$(this).adcl().adanm();
		},function(){
			$(this).rmcl().rmanm();
		});
		$('.content_lunbo_cont_div').hover(function(){
			$(this).adcl().animate({paddingTop:0});
		},function(){
			$(this).rmcl().animate({paddingTop:4});
		});
		$('.cont6_box').hover(function(){
			$(this).adcl().adanm();
		},function(){
			$(this).rmcl().rmanm();
		});
		$('.cont7_box').hover(function(){
			$(this).adcl().adanm();
		},function(){
			$(this).rmcl().rmanm();
		});
		$('.cont8_box').hover(function(){
			$(this).adcl().adanm();
		},function(){
			$(this).rmcl().rmanm();
		});
//each循环 
		$('.content_cont2_div').each(function(){
			$(this).hover(function(){
				$(this).adcl().adanm();
				$(this).find('.cont2_comment').animate({bottom:0});
			},function(){
				$(this).rmcl().rmanm();
				$(this).find('.cont2_comment').animate({bottom:-70});
			});
		});
//  
		
		(function(){
			$('.cont7_box').each(function(){
				var iNow=0;
				var Ts=$(this).index();
				var leng=$(this).find('.cont7_lunbo_sp').length;
				function cont7show(){
					$('.cont7_box').eq(Ts).find('.cont7_lunbo_sp').removeClass('cont7on');
					$('.cont7_box').eq(Ts).find('.cont7_lunbo_sp').eq(iNow).addClass('cont7on');
					$('.cont7_box').eq(Ts).find('.cont7_cont').animate({marginLeft:iNow*-216});
				}
				$(this).find('.cont7_lunbo_sp').click(function(){
					iNow=$(this).index();
					cont7show();
				});
				$(this).hover(function(){
					$(this).find('.cont7_leftbtn').css({opacity:1});
					$(this).find('.cont7_rightbtn').css({opacity:1});
				},function(){
					$(this).find('.cont7_leftbtn').css({opacity:0});
					$(this).find('.cont7_rightbtn').css({opacity:0});
				});
				$(this).find('.cont7_leftbtn').click(function(){
					iNow--;
					if (iNow==-1) {
						iNow=0;
					}
					cont7show();
				});
				$(this).find('.cont7_rightbtn').click(function(){
					iNow++;
					if (iNow>=leng){
						iNow=leng-1;
					}
					cont7show();
				});		
			});
		})();
		// cont-lunbo
		(function(){
			$('#contlunbobtn1').hover(function(){
				$(this).addClass('hv');
			},function(){
				$(this).removeClass('hv');
			});
			$('#contlunbobtn2').hover(function(){
				$(this).addClass('hv');
			},function(){
				$(this).removeClass('hv');
			});
			$('#contlunbobtn1').click(function(){
				$('.content_lunbo_cont').animate({marginLeft:-14});
				$(this).removeClass('hv').attr('disabled',true);
				$('#contlunbobtn2').attr('disabled',false);
			});
			$('#contlunbobtn2').click(function(){
				$('.content_lunbo_cont').animate({marginLeft:-1254});
				$(this).removeClass('hv').attr('disabled',true);
				$('#contlunbobtn1').attr('disabled',false);
			});
		})();
	});