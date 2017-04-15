/**
 * Created by Seven on 16/9/27.
 */
"use strict";
$(function () {

    //判断是否横屏,如果是,那么给出提示页
    new WxMoment.OrientationTip();

    var basePath = "./images/";

    var loader = new WxMoment.Loader();


    //声明资源文件列表
    var fileList = ["p1_bg.jpg","p1_car.png"];

    for (var i = 0; i < fileList.length; i++) {
        loader.addImage(basePath + fileList[i]);
    }


    //进度监听
    loader.addProgressListener(function (e) {
        var percent = Math.round((e.completedCount / e.totalCount) * 100);
        $("#load_num").html(percent + "%");
        console.log("当前加载了", percent, "%");
        //在这里做 Loading 页面中百分比的显示
    });

    //加载完成
    loader.addCompletionListener(function (e) {
        var percent = Math.round((e.completedCount / e.totalCount) * 100);
        //判断当前loading界面是否显示,如果现实则隐藏
        $("#load").hide();

    });

    //启动加载
    loader.start();

})