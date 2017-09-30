$(function(){
			
			/*goods导航*/
			/*$.get("http://h6.duchengjiu.top/shop/api_cat.php",function(data){
				var obj = data.data;
				for(var i=0;i<7;i++){
					$("#oUl").append('<li><a href="list.html?cat_id='+obj[i].cat_id+'">'+obj[i].cat_name+'</a></li>');
					
				}
				
			})*/
					
			/*商品分类*/
			var str = location.search.substr(1);
			var catId = str.split("=");
			console.log(catId);
			/*$.ajax({
				"url":"http://h6.duchengjiu.top/shop/api_goods.php",
				"type":"GET",
				"data":{
					"cat_id":catId[1]
				},
				"success":function(data){
					console.log(1);
					console.log(data);
					for(var i=0;i<data.data.length;i++){
						var obj = data.data[i];
						$(".maintxt").eq(i).append(`<a href="detail.html?goods_id=${ obj.goods_id}">
							<img src="${ obj.goods_thumb}" alt="" />
							<div class="shadow">
								<div class="icon-bar">
									<img src="img/ino.jpg"/>
									<span class="icon-bar-txt">ZTV</span>
								</div>
								<h2 class="fs">${ obj.price }</h2>
								<span class="fs">${ obj.goods_name }</span>
								<p class="fs">${ obj.goods_desc }</p>
							</div></a>`);
					}
				}
			})*/
	/*$.get("http://h6.duchengjiu.top/shop/api_goods.php",function(data){
	console.log(data);
		
		for(var i=0;i<data.data.length;i++){
			var obj = data.data[i];
			$(".maintxt").eq(i).append(`<img src="${ obj.goods_thumb}" alt="" />
							<div class="shadow">
								<div class="icon-bar">
									<img src="img/ino.jpg"/>
									<span class="icon-bar-txt">ZTV</span>
								</div>
								<h2 class="fs">${ obj.price }</h2>
								<span class="fs">${ obj.goods_name }</span>
								<p class="fs">${ obj.goods_desc }</p>
							</div>`);
		}
	})*/
	var page =  1;
	function showShop(page){
		$.ajax({
			"url":"http://h6.duchengjiu.top/shop/api_goods.php?list.html?cat_id="+catId+"&page="+page+"&pagesize=20",
			"type":"get",
			"data":{
					"cat_id":catId[1]
				},
			"dataType":"json",
			"success": function(response){
				console.log(response);
				for(var j = 0; j<response.page.page_count;j++){
					$("#ButtonCenter").append($('<span>'+(j+1)+'</span>'));
				}
				
				for(var i=0;i<response.data.length;i++){
						var obj = response.data[i];
						$(".maintxt").eq(i).append(`<a href="detail.html?goods_id=${ obj.goods_id}">
							<img src="${ obj.goods_thumb}" alt="" />
							<div class="shadow">
								<div class="icon-bar">
									<img src="img/ino.jpg"/>
									<span class="icon-bar-txt">ZTV</span>
								</div>
								<h2 class="fs">${ obj.price }</h2>
								<span class="fs">${ obj.goods_name }</span>
								<p class="fs">${ obj.goods_desc }</p>
							</div></a>`);
				}
			}
		})
	}
	showShop(page);
	$("#ButtonPrev").click(function(){
		page--;
		if(page <= 1){
			page = 1;
		}
		$(".maintxt").html("");
		showShop(page);
		ButtonCenter.style.marginLeft = (page-1) * -52 +"px";
	})
	$("#ButtonNext").click(function(){
		page++;
		$(".maintxt").html("");
		showShop(page);
		ButtonCenter.style.marginLeft = (page-1) * -52 +"px";
	})
	$("#ButtonCenter").click(function(event){
		event = event || window.event;
		var target = event.target || event.srcElement;
		
		if(target.nodeName ==="SPAN"){
			page = target.innerText;
			$(".maintxt").html("");
			ButtonCenter.style.marginLeft =(page-1)*-52 +"px";
			showShop(page);
		}
		
	})
		
					
})