$.ajax({
	"type":"get",
	"url":"http://h6.duchengjiu.top/shop/api_order.php?token="+localStorage.token,
	"dataType":"json",
	"success": function(response){
		console.log(response);
		if(response.code === 0){
			var obj = response.data;
			var htmlData = "";
			for(var i=0;i<response.data.length;i++){
				var obj = response.data[i];
				htmlData += '<div class="order-item">';
				htmlData += '<div class="order-itme-header">订单号：'+obj.order_id+'</div>';
				
				for(var j=0;j<obj.goods_list.length;j++){
					var goods = obj.goods_list[j];
					goods.subtotal = goods.goods_price * goods.goods_number;
					htmlData += '<div data-id='
						+ goods.goods_id 
						+ ' class="length"><img src="' 
						+ goods.goods_thumb
						+'"/><div class="name"><p class="good-name">商品名称：'
						+goods.goods_name
						+'</p><p class="good-price">商品金额：<span>￥'
						+goods.subtotal
						+'</span></p></div></div>';
				}

				htmlData += '</div>';
			}
			$("#order-list").html(htmlData);
		}
		
	}