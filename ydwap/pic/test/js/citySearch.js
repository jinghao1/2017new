/**
 * Created by chenyy on 2017/3/22.
 */

(function(){
    $(function(){
        $(".city_search_input .search_btn").on('click',function(){
            var $this=$(this);
         var cityName=  $this.next("span").find("input").val();
            if(cityName==undefined||cityName==""){
                alert("请输入城市名称");
                return false;
            }
            $.ajax({
                type:'GET',
                url: 'http://car.qichedaquan.com/CitySearch/queryCityList',
                data:{cityName:cityName},
                dataType: 'jsonp',
                jsonp:'callback',
                timeout: 5000,
                success: function (json) {
                    if(json!="" && json!=undefined ){
                        json=eval(json);
                        var li="<li class='click_to_destiny'> <span><img src=http://static.qcdqcdn.com/img/city_down_select.png alt=''></span> <span>点击直达</span> </li>";
                        $(json).each(function(index,item){
                            li=li+"<li class='city_search_result' cityid='"+item.cityId+
                                "' ><span class='city_text'>"+item.cityName+
                                "</span> <span class='city_letters'>"+item.englishName+"</span> </li>";
                        });
                        $this.next("span").find(".input_letters_search ul").html(li);
                        $this.next("span").find(".input_letters_search").css({"display":"block"});
                    }

                }

            })

        });

        $("#input_letters_search").delegate(".city_search_result","click",function(){
            $('.header_nav_left .default_address a').text(decodeURI($(this).find(".city_text").text()));
            var value = $(this).attr("cityid")+"_"+$(this).find(".city_text").text();
            $.cookie('xyautoarea',value,{
                expires:30,//有效日期
                path:"/",//cookie的路 径
                domain:".qichedaquan.com"    //cookie的域名
            });
            var serial_val = $("#serialId").attr("value");
            var caryear_val = $("#caryear").attr("value");
            var carid_val= $("#carId").val();
            var serialId = (serial_val==undefined||serial_val==null||serial_val=="")?0:serial_val;
            var caryear = (caryear_val==undefined||caryear_val==null||caryear_val=="")?0:caryear_val;
            var carId = (carid_val==undefined||carid_val==null||carid_val=="")?0:carid_val;
            var cityID = $(this).attr("cityid");
            $("#currentCity").find("span").html($(this).text());
            if(serialId!=0 && caryear!=0){
                modelFuc(0,cityID,0,serialId ,0,0,6,1,0,0,caryear);
            }else  if(serialId!=0 && carId!=0){
                modelFucmodel(0,cityID,0,serialId,carId,0,4,1,0,0);
            }
            $('#input_letters_search').css({"display":"none"});
            $('#city_chose').hide();
           return false;

        });


        $("#input_letters_search_dealer").delegate(".city_search_result","click",function(){
            var serial_val = $("#serialId").val();
            var carid_val= $("#carId").val();
            var caryear_val = $("#caryear").attr("value");
            var caryear = (caryear_val==undefined||caryear_val==null||caryear_val=="")?0:caryear_val;
            var serialId = (serial_val==undefined||serial_val==null||serial_val=="")?0:serial_val;
            var carId = (carid_val==undefined||carid_val==null||carid_val=="")?0:carid_val;
            var cityID = $(this).attr("cityid");
            $("#currentCity").find("span").html($(this).text());
            if(serialId!=0 && caryear!=0){
                modelFuc(0,cityID,0,serialId ,0,0,6,1,0,0,caryear);
            }else  if(serialId!=0 && carId!=0){
                modelFucmodel(0,cityID,0,serialId,carId,0,4,1,0,0);
            }
            $('#input_letters_search_dealer').css({"display":"none"});
            $('#cityChose').hide();
            return false;

        })

    })


})();