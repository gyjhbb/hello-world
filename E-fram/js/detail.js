$(function(){
		
		var str = location.search.substr(1);
		var goodsId = str.split("=")
		console.log(goodsId[1]);
		
		
		$.ajax({
			"url":"http://h6.duchengjiu.top/shop/api_goods.php",
			"type":"get",
			"data":{
				"goods_id":goodsId[1]
			},
			"dataType":"json",
			"success":function(data){
				console.log(data);
				var obj = data.data;
				
				$("#image-1").append("<img src='"+obj[0].goods_thumb+"'/><div class='ganzi'></div>");
				for(var i=0;i<4;i++){
					$("#img").append("<li><img src='"+obj[0].goods_thumb+"' alt='' /></li>");
				}
				$(".good-name").append("<h5>ROYAL APOTHIC</h5><p>"+obj[0].goods_desc+"</p>");
				$(".price").append("价格：<span>"+obj[0].price+"</span>");
				$(".descible").append("<p>"+obj[0].goods_name+"</p><div class='descible-icon'><em>免运费</em><i>正品授权</i></div>");
				
				
				$("#reduce").click(function(){
					updataCar(this,"-1");
				})
				$("#add").click(function(){
					updataCar(this,"+1");
				})
				$("#settle").click(function(){
					location.href="checkout.html?goods_id="+obj[0].goods_id;
				})
				$(".li-left").click(function(){
					location.href="car.html";
				})
				
			}
			
		})
		
		function updataCar(obj,num){
			var father = obj.parentNode;
		 	var goods_number = father.getElementsByClassName("value-1")[0];
		 	var goods_number_value = parseInt(goods_number.innerText);
		 	if(num == "-1" && goods_number_value <= 1){
		 		return;
		 	}
		 	if(num == "+1" && goods_number_value >= 10){
		 		return;
		 	}
		 	if(num ==="-1"){
		 		goods_number_value--;
		 	}
		 	if(num ==="+1"){
		 		goods_number_value++;
		 	}
		 	goods_number.innerText = goods_number_value;
		 	
		}
})
