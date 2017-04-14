$().ready(function(){
	var d_h=$(document).height();
	/*alert(d_h);*/
	$(".bgs").height(d_h+48);
	/*弹框*/
	$(".tksCont ul li").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
	});
	/*不感兴趣-关闭弹框*/
	$(".close").click(function(){
		$(".tks").hide();
		$(".tksCont ul li").removeClass("on"); 
	    $(".xs").show().delay(1000).fadeOut();//显示1s后消失
	})
	/*点击叉号-弹框显示*/
	$(".dk").click(function(){
		$(".tks").show();
	})


	/*******************************--------------接口4-13---------------************************/
	//广告接口地址
	var adurl = 'http://g.qichedaquan.com/api/ad/GetAdData?BlockCode=';
	//各接口参数
	var jd= new Array();
	jd[1] = 'a157240d-ebb1-4360-8b22-181436ddcfc2'; //编辑
	jd[2]= 'd4303212-1ffc-4547-9cfe-6c27e0ddd88d'; //编辑
	jd[3]= 'dd02d2c3-b142-4981-b3c7-dff45a7ff267'; //广告
	jd[4]= '8a2af928-363b-46d7-ac5e-27171e363e4e'; //广告
	jd[5] = 'e6f2b675-3797-4efb-8a17-c7f660eae811'; //广告
	
	var remcar1 = '44b1c043-5283-4916-a77d-c84cbba97968'; //热门车型
	var remcar2 = 'e7dc747f-03e2-4c55-b019-5c4ee27e5ede'; //热门车型
	var remcar3 = '72fbfc84-af5b-4c7c-9671-eeec57953fd4'; //热门车型
	
	var xxl4 = '019224da-cda3-40a6-84dc-2045c7ee4aad'; //信息流4
	var xxl10 = '21fdeb66-2b75-4bde-a646-1487f3714334'; //信息流10
	var xxl16 = '22379cba-8dcc-44c8-b6cd-021982c3986f '; //信息流16
	
   	var dbtl = '9a3067fc-becf-471f-9b09-b11ec0497a54'; //底部通栏  
   	//焦点图
   	$(jd).each(function(index,element){ 
	    
	   	$.ajax({
			type:'get',
			url:adurl+element,
			dataType: 'json', 
			success:function(res){
					//var	ttype = typeof(res.HtmlCode); //判断类型
				var cont = eval("(" + res.HtmlCode + ")");
				//console.log(cont[0]);
				//console.log("song"+i);
				$(".picad"+index).attr('src',cont[0]['Image']);
				$(".picad"+index).parent().attr('href',cont[0]['Link']);

			},
			error:function(err){
				console.log(err);
			}
		});
	 });

  //  	for(var i = 1;i<=5;i++){
	 //   	$.ajax({
		// 	type:'get',
		// 	url:adurl+jd[i],
		// 	dataType: 'json', 
		// 	success:function(res,i){
		// 		var	ttype = typeof(res.HtmlCode); //判断类型
		// 		var cont = eval("(" + res.HtmlCode + ")");
		// 		console.log(cont[0]);
		// 		console.log("song"+i);
		// 		$("#pic"+i).attr('src',cont[0]['Image']);
		// 		$("#pic"+i).parent().attr('href',cont[0]['Link']);

		// 		//$.each(cont[0] , function(ind,val){
		// 		//	console.log(ind,val);
		// 		//});
		// 	},
		// 	error:function(err){
		// 		console.log(err);
		// 	}
		// });
  //  	}
	//热门车型
	//1
	$.ajax({
		type:'get',
		url:adurl+remcar1,
		dataType: 'json', 
		success:function(res){
			var	ttype = typeof(res.HtmlCode); //判断类型
			var cont = eval("(" + res.HtmlCode + ")");
			//console.log(cont);
			$("#img1").attr('src',cont[0]['Image']);
			$("#img1").parent().attr('href',cont[0]['Link']);
			//$.each(cont[0] , function(ind,val){
			//	console.log(ind,val);
			//});
		},
		error:function(err){
			console.log(err);
		}
	}); 
	//2
	$.ajax({
		type:'get',
		url:adurl+remcar2,
		dataType: 'json', 
		success:function(res){
			var	ttype = typeof(res.HtmlCode); //判断类型
			var cont = eval("(" + res.HtmlCode + ")");
			//console.log(cont);
			$("#img2").attr('src',cont[0]['Image']);
			$("#img2").parent().attr('href',cont[0]['Link']);
			//$.each(cont[0] , function(ind,val){
			//	console.log(ind,val);
			//});
		},
		error:function(err){
			console.log(err);
		}
	}); 
	//3
	$.ajax({
		type:'get',
		url:adurl+remcar3,
		dataType: 'json', 
		success:function(res){
			var	ttype = typeof(res.HtmlCode); //判断类型
			var cont = eval("(" + res.HtmlCode + ")");
			//console.log(cont);
			$("#img3").attr('src',cont[0]['Image']);
			$("#img3").parent().attr('href',cont[0]['Link']);
			//$.each(cont[0] , function(ind,val){
			//	console.log(ind,val);
			//});
		},
		error:function(err){
			console.log(err);
		}
	}); 

})