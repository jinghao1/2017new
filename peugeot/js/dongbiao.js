$().ready(function(){
	/*四重礼遇详情-弹框*/
	$(".tk01").click(function(){
		//alert(1);
		$(".bgs").show();
	});
	$(".close").click(function(){
		//alert(1);
		$(".bgs").hide();
	});
	//售后及获奖说明弹框
	$(".btns").click(function(){
		//alert(1);
		$(".bgs_s").show();
	});
	$(".close").click(function(){
		//alert(1);
		$(".bgs_s").hide();
	});
	//中奖名单
	$(".btnss").click(function(){
		//alert(1);
		//$(".bgs_ss").show();
	});
	$(".close").click(function(){
		//alert(1);
		$(".bgs_ss").hide();
	});
	$(".carImgs p span").click(function(){
		//alert(1);
		 var i = $(this).index();//下标第一种写法
            //var i = $('tit').index(this);//下标第二种写法
            $(this).addClass('cur').siblings().removeClass('cur');
            $('.jmCars .jmCarsOne').eq(i).show().siblings().hide();
	})
	$(".video ul li").click(function(){
		//alert(1);
		 var i = $(this).index();//下标第一种写法
            //var i = $('tit').index(this);//下标第二种写法
            $(this).addClass('on').siblings().removeClass('on');
            $('.videoBox .v_box').eq(i).show().siblings().hide();
	})

})