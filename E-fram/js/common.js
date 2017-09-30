if(localStorage.getItem("token")) {

	$(".uname").html("欢迎您：" + localStorage.getItem("username") + "<input type='button' name='btn' class='btn' value='退出'/>");
	//		localStorage.clear();

}

$(".lbtn").click(function() {
	localStorage.clear();
	location.reload();
}) 



$("#sbtn").click(function() {

	var strNew = $("#str").val();
	console.log(strNew);

	$.ajax({
		"url": "http://h6.duchengjiu.top/shop/api_goods.php",
		"type": "GET",
		"data": {
			"search_text": strNew
		},
		"dataType": "json",
		"success": function(response) {
			var obj = response;
			console.log(obj);
			for(var i = 0; i < obj.data.length; i++) {
				$("#shop ul").html('<li><img src="' +
					obj.data[i].goods_thumb +
					'" /><div class="sub"><h3 class="price">' +
					obj.data[i].price +
					'</h3></p><a href=detail.html?goods_id=' +
					obj.data[i].goods_id +
					'>' +
					obj.data[i].goods_name +
					'</a><h5>' +
					obj.data[i].goods_desc +
					'</h5></div></li>');
			}

		}

	})
})
$(".content-top").mouseenter(function() {
	for(var i = 0; i < 2; i++) {
		$(".p-noe").animate({
			left: "-20px"
		}, 500);
		$(".p-noe").animate({
			left: "10px"
		}, 500);
	}
})

$(".top").click(function() {

	$("html,body").animate({
		"scrollTop": 1
	}, 2000);
})


$.get("http://h6.duchengjiu.top/shop/api_cat.php", function(data) {

	var obj = data;

	for(var i = 0; i < obj.data.length; i++) {
		$(".classify-content").append('<li><a href="list.html?cat_id=' + obj.data[i].cat_id + '">' + obj.data[i].cat_name + '</a></li>');
	}

})

$("#sbtn").click(function(){
		$("#str").animate({"width":"250px"},1000);

})


