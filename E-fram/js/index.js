$(function(){
	//热门商品
	/*$.get("http://h6.duchengjiu.top/shop/api_cat.php",function(data){
		var obj = data.data;
		for(var i=0;i<7;i++){
			
			$("#oUl").append('<li><a href="list.html?cat_id='+obj[i].cat_id+'">'+obj[i].cat_name+'</a></li>');
		}
		
	})*/
				
	//页面导航；商品
	$.get("http://h6.duchengjiu.top/shop/api_goods.php",function(data){
		console.log(data);
		for(var i=0;i<data.data.length;i++){
			var obj = data.data[i];
			$(".box").eq(i).append(`<div class="imgCon">
								<a href="detail.html?goods_id=${obj.goods_id}">
									<img src="${obj.goods_thumb}" alt="" />
									<div class="shadow">
										<h2>￥${obj.price}</h2>
										<span>${obj.goods_name}</span>
										<p>${obj.goods_desc}</p>
									</div>
								</a>
							</div>
							<div class="bar">
								<p class="bar-left">
									<img src="img/icon-1.jpg"/>
									<a href="#">JIA aion</a>
								</p>
								<p class="bar-right">
									<a href="#" class="bar-a">34</a>
									<span class="span"></span>
								</p>
							</div>`);
							
		}
		
		/*var span = document.getElementsByClassName("span");
		
		for(var i=0; i<span.length;i++){
			console.log(span);
			span[i].onclick =function(){
				for(var i=0; i<span.length;i++){
					span[i].className = "span";
				}
				this.className = "cur span";
			}
		}*/
		
		
		
	})
	
	/*$("#btn").click(function(){
		var strNew = $("#txt").val();
		window.location.href = "detail.html?goods_id="+strNew;
	})*/
	
})