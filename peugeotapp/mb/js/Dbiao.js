$().ready(function(){
	/*四重礼遇弹框*/
	$(".scBtn").click(function(){
		$(".tk").show();
		/*$.dialog({
		autoClose : 2500,
		contentHtml : '<p>我是自动关闭的对话框示例展示。</p> <p>我只是用来占位的内容展示，仅仅用来占位撑起提示内容的高度。我只是用来占位的内容展示，仅仅用来占位撑起提示内容的高度。</p>'
		});*/
	})
	$(".close").click(function(){
		$(".tk").hide();
	})
	$(".scTk").click(function(){
		$(".tk").hide();
	})
	/*活动详情弹框*/
	$(".hdBtn").click(function(){
		$(".tks").show();
	})
	$(".close").click(function(){
		$(".tks").hide();
	})
	$(".scTk").click(function(){
		$(".tks").hide();
	})
	$(".editPost h3 a").click(function(){
		//alert(1);
		 var i = $(this).index();//下标第一种写法
            //var i = $('tit').index(this);//下标第二种写法
            $(this).addClass('on').siblings().removeClass('on');
            $('.imgs .one').eq(i).show().siblings().hide();
	})
	$(".video h3 a").click(function(){
		//alert(1);
		 var i = $(this).index();//下标第一种写法
            //var i = $('tit').index(this);//下标第二种写法
            $(this).addClass('cur').siblings().removeClass('cur');
            $('.imgs .v_box').eq(i).show().siblings().hide();
	})

	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        /*nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',*/
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });
})