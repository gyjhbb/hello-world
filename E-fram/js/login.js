

$(function() {
	
	
	if(localStorage.getItem("token")){
		
		$("body").html(localStorage.getItem("username")+"<h1>您已登录请不要重复登陆! 2秒后返回首面设……</h1>");
		setTimeout(function(){
			
			window.location.href="index.html";
			
		},2000);
	}
	
	
	
	

	$(".login").click(function() {

		var username = $('input[name="username"]').val();
		var password = $('input[name="password"]').val();

		console.log(username);
		console.log(password);
		$.ajax({

			"type": "post",
			"url": "http://h6.duchengjiu.top/shop/api_user.php",
			"data": {
				"status": "login",
				"username": username,
				"password": password

			},
			"dataType": "json",
			"success": function(response) {
				console.log(response);
				//				localStorage.setItem("token",response.data.token);
				//				alert(response.message);

				if(response.code === 0) {

					var data = response.data;
					
					for(prop in data) {
						
						if(data.hasOwnProperty(prop)) {
							
							localStorage.setItem(prop,data[prop]);
						}

					}

					window.location.href = "index.html";
				}
			}

		});
	})

})