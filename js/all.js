var mySwiper = new Swiper ('#top.swiper-container', {
	autoplay : 5000,
	autoplayDisableOnInteraction : false,
	loop: true,
    // 如果需要分页器
    pagination: '.swiper-pagination',
    paginationClickable :true,
}) 

//小喇叭
var mySwiper2 = new Swiper ('#call.swiper-container', {
	autoplay : 2000,
	direction : 'vertical',
}) 
//热门活动
var mySwiper3 = new Swiper ('#scroll.swiper-container', {
	slidesPerView : 2.5,
	//允许用户设置每一页的宽度
//	slidesPerView : 'auto',
	longSwipesRatio : 0.4,
}) 
//装修效果图
var mySwiper4 = new Swiper ('#pic.swiper-container', {
	pagination : '.my-pagination',
//	paginationType : 'custom',
	paginationClickable :true,
	paginationBulletRender: function (index, className) {
		switch (index) {
		  case 0: name='风格';break;
		  case 1: name='户型';break;
		  default: name='';
		}
      	return '<li class="' + className + '">' + name + '</li>';
	}
})
//圆圈滑动块
var mySwiper5 = new Swiper ('#circle.swiper-container', {
	slidesPerView : 'auto',
	longSwipesRatio : 0.4,
	//如要用这样写，swiper-slide不能有margin
//	slidesPerView : 4.5,
})

var circleW=$("#circle div.swiper-slide").width();
$("#circle div.swiper-slide").height(circleW);
$(window).resize(function(){
	var circleW=$("#circle div.swiper-slide").width();
	$("#circle div.swiper-slide").height(circleW);
})
var circles=$("#circle div.swiper-slide>div>span");
//-77,-109
circles.each(function(i){
	$(this).css("background-position",'0 '+(-77-i*32)+"px");
})

//家居商城按钮背景图片的位置
//-363 -401
var titles=$(".sandt>button>span");
titles.each(function(i){
	$(this).css("background-position-y",(-367-i*38)+"px");
})
//家居商城图片展示的背景图片切换
var sImgs=$("#shop div>a");
var suImgs=$("#shop-under div>a");
for(var i=0;i<sImgs.length;i++){
	sImgs[i].style.backgroundImage="url(img/shop_"+(i+1)+".jpg)";
}
suImgs.each(function(i){
	$(this).css("background-image","url(img/shop-under_"+(i+1)+".jpg)");
})