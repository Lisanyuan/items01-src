//大轮播
//获取页面元素
window.onload = function(){
var oBtnzuo = document.getElementById('btnzuo');
var oBtnyou = document.getElementById('btnyou');
var oDalunbo = document.getElementById('dalunbo');

//创建数组
var arr = new Array('../img/5c08d87b61bce.png','../img/5c184ce9ada9d.jpg','../img/5c0b97b7e6748.jpg','../img/5c21f05e95622.jpg');
	
//设置自动轮播
var timer = null;
//设置当前下标
var index = 0;
function autoPlay(){
	timer = setInterval(function(){
		var Img = document.getElementById('first');
		if(index == arr.length - 1){
			index = 0;
		}else{
			index ++;
		}
		Img.src = arr[index];
	},1500)
}
//移入事件
oDalunbo.onmouseenter = function(){
	oBtnzuo.style.display = 'block';
	oBtnyou.style.display = 'block';
	clearInterval(timer);
}
//添加点击事件
oBtnzuo.onclick = function(){
	var Img = document.getElementById('first');
	if(index == arr.length - 1){
		index = 0;
	}else{
		index ++;
	}
	Img.src = arr[index];
}
oBtnyou.onclick = function(){
	var Img = document.getElementById('first');
	if(index == arr.length - 1){
		index = 0;
	}else{
		index ++;
	}
	Img.src = arr[index];
}
//移除事件
oDalunbo.onmouseleave = function(){
	oBtnzuo.style.display = 'none';
	oBtnyou.style.display = 'none';
	autoPlay();
}
}