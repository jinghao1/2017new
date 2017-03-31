$().ready(function(){
	var d_h=$(document).height(); 
	//alert(d_h);
	$(".tks").height(d_h);
	$(".carType ul li").mouseover(function(){
		//alert(1);
		 var i = $(this).index();//下标第一种写法
            //var i = $('tit').index(this);//下标第二种写法
            $(this).addClass('on').siblings().removeClass('on');
            $('.imgs div').eq(i).show().siblings().hide();
	})
	/*点击车型亮点显示文字*/
	$(".imgs div").hover(function(){
	    $('.imgs div h2').css('display','block');
	},function(){
	    $('.imgs div h2').css('display','none');
	}); 
	$(".fu").click(function(){
		$(".login_box").show();
		$(".fu").hide();
		$(".tks").show();
	})
	$(".close").click(function(){
		$(".fu").show();
		$(".login_box").hide();
		$(".tks").hide();
	})
})