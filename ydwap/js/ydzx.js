$(document).ready(function(){
	/*弹框*/
	$(".tksCont ul li").click(function(){
		//检测当前是否选中
		var thec = $(this).find("input").val();
		if(thec==0){//未选中
			$(this).find("input").val(1);
			$(this).addClass("on")
		}else{ //已选中
			$(this).find("input").val(0);
			$(this).removeClass("on")
		}
		//console.log(thec);
		//$(this).addClass("on").siblings().removeClass("on");
	});
	/*不感兴趣-关闭弹框*/
	$(".close").click(function(){
		 
		var lay = $("#hklaiy").val();
		var biaot = $("#hkbiaot").val();
		var qualt = $("#hkqualt").val();
		if(lay==1 || biaot==1 || qualt==1){
			//页面点击添加pid
			//backHk(lay,biaot,qualt,laycon);
		}
		console.log(lay,biaot,qualt);
		return ;
				$(".tks").hide();
		$(".tksCont ul li").removeClass("on"); 
	    $(".xs").show().delay(1000).fadeOut();//显示1s后消失
	})
	/*点击叉号-弹框显示*/
	$(".dk").click(function(){
		
		$(".tks").show();
		//$("html,body").css({"overflow":"hidden","height":"100%"});
		var d_h=$(window).height();
		//alert(d_h);
		$(".bgs").height(d_h);
		//$('body').css("overflow","hidden")
		//console.log("songgg");
	})
	// $('.tks,.bgs').bind("touchmove",function(e){
	// 	e.preventDefault();
	// });


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
	var rmcar = new Array();
	rmcar[1] = '44b1c043-5283-4916-a77d-c84cbba97968'; //热门车型
	rmcar[2] = 'e7dc747f-03e2-4c55-b019-5c4ee27e5ede'; //热门车型
	rmcar[3] = '72fbfc84-af5b-4c7c-9671-eeec57953fd4'; //热门车型
	
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
				
				var cont = $.parseJSON(res.HtmlCode);
				  // eval("(" + res.HtmlCode + ")"); 
				//console.log(cont[0]);
				$(".picad"+index).attr('src',cont[0]['Image']);
				$(".picadtt"+index).html(cont[0].Text);
				$(".picad"+index).attr("onclick","otad('"+cont[0].Text+"','"+'焦点图'+index+"','"+cont[0].Link+"')") ;
				//$(".picad"+index).parent().attr('href',cont[0]['Link']);

			},
			error:function(err){
				console.log(err);
			}
		});
	 }); 
	//热门车型 
	$(rmcar).each(function(ind,elem){ 
		$.ajax({
			type:'get',
			url:adurl+elem,
			dataType: 'json', 
			success:function(res){
				var	ttype = typeof(res.HtmlCode); //判断类型
				var cont = eval("(" + res.HtmlCode + ")");
				//console.log(cont);
				$("#remcimg"+ind).attr('src',cont[0]['Image']); 
				
				if(cont[0]['Text']!=""){
					$("#remctt"+ind).html(cont[0]['Text']);
					$("#remcimg"+ind).parent().attr("onclick","otad('"+cont[0].Text+"','"+'热门车型'+ind+"','"+cont[0].Link+"')") ;
				}else{
					$("#remctt"+ind).html(cont[0]['Image1']);
					$("#remcimg"+ind).parent().attr("onclick","otad('"+cont[0].Image1+"','"+'热门车型'+ind+"','"+cont[0].Link+"')") ;
				}
				
				//$("#img"+ind).parent().attr('href',cont[0]['Link']);
			 
			},
			error:function(err){
				console.log(err);
			}
		}); 
	}); 

	//获取第一次信息流 20 条，并插入广告信息 
	var hereurl = "http://xy.qichedaquan.com";
	var jscurl = "/medias/public/index.php/port/Hkinfo/Changelist";
	var jscont = "/medias/public/index.php/port/Hkinfo/Changecont";
	$.ajax({
		type:'get',
		url:hereurl+jscurl, 
		data:{pageNo:'1',pageSize:'20'}, 
		dataType: 'jsonp', 
		jsonp:'callback',
        callback:"flightHandler",
		success:function(res){
			//console.log("song");
			//var tyres = typeof(res); 
			var cont = eval("("+res+")"); //转换为json
			var tdata = cont.data.newsList;
			var constr = "";
			$.each(tdata , function(ind,val){
				constr = infoblock(ind,val);
				//console.log(ind);
				if(ind==3){ //第四个广告块
					var ind3 = choosebl(ind); 
					$("#allcont").append("<div id='indad3'></div>");
				 
				}
				if(ind==9){ //第10个广告块
					var ind9 = choosebl(ind);
					$("#allcont").append("<div id='indad9'></div>");
				}
				if(ind==15){ //第16个广告块
					var ind15 = choosebl(ind);
					$("#allcont").append("<div id='indad15'></div>");
				}
				$("#allcont").append(constr);
				 
			}); 
		},
		error:function(err){
			console.log("jing");
			console.log(err);
		}
	});
})