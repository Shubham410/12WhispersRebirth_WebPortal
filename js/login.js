	    	$(document).ready(function(){
	    		$(document).on('click','#appLoginBtn',function(){
	    			var uniqueId = document.getElementById("user_emailId").value;	
					var  password= document.getElementById("user_password").value;	

					if(uniqueId == "" ){
						$('#loginErr_msg').text('Please enter unique ID.')
						$('#loginErr_Modal').modal('show');
				   }
				   else if(password == "" ){
					    $('#loginErr_msg').text('Please enter password.')
						$('#loginErr_Modal').modal('show');
				   }

				   else{
				   	var reqJson = {
						"uniqueID" : uniqueId,
						"password" : password
					};


					$.ajax({
						type : "POST",
						url : "https://whispers-208604.appspot.com/LoginUser",
						data : JSON.stringify(reqJson),

						success : function(response) {

							var obj = JSON.parse(response);
							if (obj.message == "success") {
								//alert("successs");
								if(obj.rollId=="admin")
								{
									window.location="Admin.html";

								}
								else if(obj.rollId=="dramaturg")
								{
									window.location="dramaturg.html";
								}
								else if(obj.rollId=="playwriter")
								{
									window.location="playwriter.html";
								}

								// window.location.reload();
								//window.location="test.html";
							}
						else if(obj.message=="User or Password is invalid"){
							  $('#loginErr_msg').text('uniqueID or password is invalid.')
 							  $('#loginErr_Modal').modal('show');
						}

						
						}
					});
	    		}	
    		});
    	});
   










