
//通过手机屏幕dpr和手机宽度来确定font-size的值

function autorun() {

    //初始值

    var default_width = 20;

    var default_dpr = 2;

    var dpr = window.devicePixelRatio;

    var width = parseInt($(window).width());

    var html_style = '';

    var body_style = '';

    //dpr倍数

    var difference = dpr / default_dpr;

    //计算

    if (difference === 1) {

        var default_min_size = 20 * difference;

        var default_max_size = 33.75 * difference;

        var default_coefficient = 0.0625 * difference;

        html_style = get_font_size(width, default_min_size, default_max_size, default_coefficient);

        body_style = 'font-size:' + difference * 12 + 'px';

    } else {

        html_style = get_font_size(width, 20, 33.75, 0.0625);

        //body_style = 'font-size:12px';

    }

    //进行dom操作

    $("html").attr('style', html_style);

    //$("body").attr('style', body_style);

}
/**

 * 通过手机屏幕dpr和手机宽度来确定font-size的值

 * @param {int} width

 * @param {int} default_min_size

 * @param {int} default_max_size

 * @param {int} default_coefficient

 * @returns {String}

 */

function get_font_size(width, default_min_size, default_max_size, default_coefficient) {

    var style = '';

    //屏幕宽度需要在320-540之间进行计算

    if (width < 320) {

        style = 'font-size:' + default_min_size + 'px';

    } else if (width > 540) {

        style = 'font-size:' + default_max_size + 'px';

    } else {

        var difference = width - 320;

        var fontsize = default_min_size + difference * default_coefficient;

        style = 'font-size:' + fontsize + 'px';

    }

    return style;

}
//edit by song
//点击弹出 信息反馈
function hkout(){
	$(".tks").show();
}

//广告点击检测
function otad(tit,pos,link){ 
	var owner = "http://localhsot";
	var jcurl = "/medias/public/index.php/port/Hkinfo/Adck";
	$.ajax({
		type:'post',
		url:jcurl,
		data:{tit:tit,pos:pos,link:link},
		dataType: 'json', 
		success:function(res){
			console.log(link);
			window.location.href=link;
			console.log(res);
		},
		error:function(err){
			console.log(err);
		}
	});
}

//信息块
function infoblock(ind,val){ 
	var str = '<div class="m_box"><div class="boxL"> <h2> <a href="article.html?cid='+val.newsId+'">'+val.title+'</a></h2>  <h3><span>'+val.categoryName+'</span>&nbsp;<span>'+val.publish_time+'</span><b onclick="hkout('+val.newsId+')" class="dk"><img src="images/close.png"/></b></h3> </div> <div class="boxR">  <a href="article.html?cid='+val.newsId+'"><img src="'+val.piccover+'"></a></div></div>';
	return str;
}

//视频广告块  === 未填充

//大图文广告块
function tuwenblock(val){
	var str = '<div class="m_box" ><h4> '+val.Text+' </h4><div class="vid-box">  <img src="'+val.Image+'" />  </div> <h5><i>广告</i>&nbsp;<span>行圆汽车</span><b class="dk"><img src="images/close.png"/></b></h5> </div>';
	
    return str;
}
//三个组图广告块
function zublock(val){
	 
	var str = ' <div class="m_box"> <h4>'+val.Text+'</h4>  <p> <img src="'+val.Image+'"/><img src="'+val.Image1+'"/><img src="'+val.Image2+'"/> </p>  <h5><i>广告</i>&nbsp;<span>行圆汽车</span><b class="dk"><img src="images/close.png"/></b></h5>  </div>';
    return str;   
}
//软文广告 
function ruanwblock(val){
	var str = '<div class="m_box"><div class="boxL"> <h2> '+val.Text+' </h2>  <h5><i>广告</i>&nbsp;<span>行圆汽车</span>&nbsp; <b class="dk"><img src="images/close.png"/></b></h5> </div> <div class="boxR">  <img src="'+val.Image+'"> </div></div>';
	return str;
}

//选择 广告块，广告位
function choosebl(pos){ 
	var adurl = 'http://g.qichedaquan.com/api/ad/GetAdData?BlockCode=';
	var pid=0;
	switch(pos){
		case 3:
			pid = '019224da-cda3-40a6-84dc-2045c7ee4aad'; //信息流4
			break;
		case 9:
			pid = '21fdeb66-2b75-4bde-a646-1487f3714334'; //信息流10
			break;
		case 15:
			pid = '22379cba-8dcc-44c8-b6cd-021982c3986f'; //信息流16
			break;
	}
 
	//var strad = "";
	$.ajax({
		type:'get',
		url:adurl+pid,
		dataType: 'json', 
		success:function(res){ 
			var cont = eval("("+res.HtmlCode+")"); 
			//console.log(cont[0]);
			var typestr = cont[0].Adtype;
			var adconstr = "";
			
			switch(typestr){
				case '组图':
					//console.log(cont[0],'组图');
					adconstr = zublock(cont[0]);
					break;
				case '大图':
					//console.log(cont[0],'大图');
					adconstr = tuwenblock(cont[0]);
					break;
				case '图文':
					//console.log(cont[0],'图文');
					adconstr = ruanwblock(cont[0]);
					break;
			}
			$("#indad"+pos).append(adconstr); 
			$("#indad"+pos).find(".m_box").attr("onclick","otad('"+cont[0].Text+"','"+typestr+'-信息流广告位-'+pos+"','"+cont[0].Link+"')") ;
			 
		},
		error:function(err){
			console.log(err);
		}
	}); 
 
	
}

//懒加载
function laizk(page) { 
	//获取第一次信息流 20 条，并插入广告信息 
	var hereurl = "http://localhost";
	var jscurl = "/medias/public/index.php/port/Hkinfo/Changelist";
	var jscont = "/medias/public/index.php/port/Hkinfo/Changecont";
	page = parseInt(page);
	$("input[name='pagenum']").val(page+1); 
	$("body").data("ajaxing",0);
	$.ajax({
		type:'get',
		url:hereurl+jscurl, 
		data:{pageNo:page,pageSize:'10'}, 
		dataType: 'jsonp', 
		jsonp:'callback',
        callback:"flightHandler",
		success:function(res){  
			var cont = eval("("+res+")"); //转换为json
			var tdata = cont.data.newsList;
			var constr = "";
			$.each(tdata , function(ind,val){
				constr = infoblock(ind,val); 
				$("#allcont").append(constr); 
			}); 
			$("body").data("ajaxing",1);
		},
		error:function(err){
			console.log("jing");
			console.log(err);
		}
	});
	 

	 
}







$(document).ready(function(){
    autorun();

})