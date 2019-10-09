window.onload = function() {
    // 轮播图插件使用
    TouchSlide({
        slideCell: "#slideBox",
        titCell: ".hd ul",
        mainCell: ".bd ul",
        effect: "leftLoop",
        autoPage: true, //自动分页
        autoPlay: true //自动播放
    });
};