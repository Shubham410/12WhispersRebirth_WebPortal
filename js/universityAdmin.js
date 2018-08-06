$(document).ready(function(){
	
var userId = localStorage.getItem('userId');
var universityId = Number(userId);

var name = localStorage.getItem('name');
$(".uniAdmin_name").text(name);
	
/* ******** Add Teacher Web service ************* */	
	
	$("#add_TeacherBtn").on('click',function(){
		
		var teacher_file = $("#teacher_file").val();
        var teacher_name = $("#teacher_name").val();
       
        var teacher_email = $("#teacher_email").val();
		var emailRegx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		var teacher_uniqueId = $("#teacher_uniqueId").val();
		var teacher_password = $("#teacher_password").val();
		
		var rollId = "Teacher";
		
		if(teacher_file != ''){
			var formData = new FormData();
			formData.append('universityId',userId);
			formData.append('teacherId',0);
			if ($('#teacher_file').val() != "") {
				formData.append('file', $('#teacher_file').prop("files")[0]);
			}
			
			$.ajax({
				type : 'POST',
				url : "http://twelevelinewonder.appspot.com/UploadCsvFile",
				data : formData,
				processData : false,
				contentType : false,
				cache : false,
				enctype : 'multipart/form-data',
				
				success : function(response){
					var obj = JSON.parse(response);
					
					if(obj.message == "success"){
						   var reqJSON = {universityId:universityId,uploadUrl:obj.uploadUrl};
					       $.ajax({
					    	   type :'POST',
					    	   url : "http://twelevelinewonder.appspot.com/AddExcelDataToDb",
					    	   data : JSON.stringify(reqJSON),
					    	   
					    	   success: function(response){
					    		   var obj = JSON.parse(response);
					    		    if(obj.message == "success"){
					    			   alert("Success");
					    			   document.getElementById('add_teacher_form').reset();
					    			   
					    			   $("#teacher_file").val() =='';
					    			   $("#fileName").text('File Name...');
					    			   
					    			   $("#AddTeacher_ErrMsg").text('Teacher added successfully.');
					    			   $("#AddTeacherErr_Modal").modal('show');
					    			   
					    		   }else{
					    			   $("#AddTeacher_ErrMsg").text('Fail to add teacher.');
					    			   $("#AddTeacherErr_Modal").modal('show');
					    			   //alert("fail");
					    		   }
					    	   }
					    });
					}else{
					$("#AddTeacher_ErrMsg").text('Problem while adding teacher.');
				    $("#AddTeacherErr_Modal").modal('show');
					}
				},
					
				beforeSend: function(){
						if ($('.loading').length) {
							$(".loading").fadeIn('fast');
						} else {
	                        $("<div class='loading'></div>").appendTo('body').fadeIn('fast');
						}
				},
					
				complete : function() {
                      $(".loading").fadeOut(2000);
				}
				
			});
		}
		else{
			if(teacher_name == ''){
				$("#AddTeacher_ErrMsg").text('Please enter teacher full name');
				$("#AddTeacherErr_Modal").modal('show');
			}
			else if(teacher_email == ''){
				$("#AddTeacher_ErrMsg").text('Please enter an email ID');
				$("#AddTeacherErr_Modal").modal('show');
			}
			else if(!emailRegx.test(teacher_email)){
				$("#AddTeacher_ErrMsg").text('Please enter valid email ID');
				$("#AddTeacherErr_Modal").modal('show');
			}
			else if(teacher_uniqueId == ''){
				$("#AddTeacher_ErrMsg").text('Please enter unique ID');
				$("#AddTeacherErr_Modal").modal('show');
			}
			else if(teacher_password == ''){
				$("#AddTeacher_ErrMsg").text('Please enter password');
				$("#AddTeacherErr_Modal").modal('show');
			}
		
			else{
			
				//web service call
				var reqJson = {"universityId":userId,"name":teacher_name,"emailId":teacher_email,"rollId":rollId,"uniqueId":teacher_uniqueId,"password":teacher_password};
				
				$.ajax({
					
					type: "POST",
					url: "http://twelevelinewonder.appspot.com/AddUser",
					data: JSON.stringify(reqJson),
					
					success : function(response){
						
						var obj = JSON.parse(response);
						
						if(obj.message == 'success'){
							
							$('#AddTeacher_ErrMsg').text('Added ' +teacher_name+ ' successfully.');
							$('#AddTeacherErr_Modal').modal('show');
							   
							document.getElementById('add_teacher_form').reset();
			    			$("#teacher_file").val() =='';
			    			$("#fileName").text('File Name...');
						}
						else if(obj.message == 'User is already present'){
							$('#AddTeacher_ErrMsg').text('Teacher is already present.');
							$('#AddTeacherErr_Modal').modal('show');
						}
						else{
							$('#AddTeacher_ErrMsg').text('Problem adding teacher.');
							$('#AddTeacherErr_Modal').modal('show');
						}
						
					},
					beforeSend: function(){
						if ($('.loading').length) {
							$(".loading").fadeIn('fast');
						} else {
	                        $("<div class='loading'></div>").appendTo('body').fadeIn('fast');
						}
					},
				
					complete : function() {
		                  $(".loading").fadeOut(2000);
					}
				
				});
				
			}
			
		}
		
	});
	
	/* ********************** Fetch Teacher List Web Service ************************** */
	
	 $("#Teacher_listSidebar").on('click',function(){
	   
		var reqJson = {"universityId":universityId};
		
	    $.ajax({
			  
			 type: "POST",
			 url: "http://twelevelinewonder.appspot.com/FetchTeachers",
			 data: JSON.stringify(reqJson),
			 success : function(response){
				 
				 var obj = JSON.parse(response);
				 var html = "";
				 
				 if(obj.message == 'success'){
					 
					 html += '<tbody>';
					 
					 for(var i=0;i<obj.data.length;i++){
						 
						 html += '<tr>';
						 html += '<td>'+(i+1)+'</td>';
						 html += '<td class="teacher" teacher-no='+(i+1)+' teacherId='+obj.data[i].userId+'>'+obj.data[i].name+'</td>';
						 html += '<td>'+obj.data[i].emailId+'</td>';
						 html += '<td>'+obj.data[i].uniqueId+'</td>';
						 //html += '<td>'+obj.data[i].userId+'</td>';
						 html += '<td><button deleteTeacher-no='+(i+1)+' teacherId='+obj.data[i].userId+' id="removeTeacher"'+i+' type="button" name="'+obj.data[i].name+'" class="btn btn-default btn-sm deleteTeacher"><span class="glyphicon glyphicon-trash"></span>Remove</button></td>';
					     html += '</tr>';
					
					 }
					 
					 html += '</tbody>';
					 
					 var head = '<thead><tr><th>Serial No.</th><th>Teacher Name</th><th>Email Id</th><th>Unique Id</th><th>Remove</th></tr></thead>';
					 document.getElementById('TeacherList_Table').innerHTML = head+html;
				 }
				 else if(obj.message == 'List is empty'){
					 $('.fetchTeacherSceneErr_msg').text('Teacher list is empty.');
					 $('.fetchTeacher_Err_modal').modal('show');
				 }
				 
				 else{
					 $('.fetchTeacherSceneErr_msg').text('Error while fetching list.');
					 $('.fetchTeacher_Err_modal').modal('show');
				 }
				 
			 },
				 beforeSend: function(){
						if ($('.loading').length) {
							$(".loading").fadeIn('fast');
						} else {
	                     $("<div class='loading'></div>").appendTo('body').fadeIn('fast');
						}
				 },
				
				complete : function() {
	               $(".loading").fadeOut(2000);
				}
			 
		 });
    });
	 
	 
	 /* ********************** Delete Teacher Web Service ************************** */
		
		$(document).on('click','.deleteTeacher',function(){
			
			var no = $(this).attr('deleteTeacher-no');
			var teacherId ="";
			
			$('.teacher').each(function(){
				var getno = $(this).attr('teacher-no');
				if(getno == no){
					teacherId = Number($(this).attr('teacherId'));  
		               
		           }
				});
			
			var reqJSON = {"userId":teacherId};
			$.ajax({
				type :"POST",
				url :"http://twelevelinewonder.appspot.com/DeleteTeacher",
				data :JSON.stringify(reqJSON), 
				success : function(response){
					var obj = JSON.parse(response);
					if(obj.message == "Teacher deleted"){
						
						$('.deleteTeacher').each(function(){
							
							if($(this).attr('teacherId') == teacherId){
								$(this).parent().parent().remove();
							}
						});
						
						/*alert("Teacher deleted successfully.");*/
						$('.fetchTeacherSceneErr_msg').text('Teacher deleted successfully.');
						$('.fetchTeacher_Err_modal').modal('show');
						
					}else{
						/*alert("Error while deleting teacher.");*/
						$('.fetchTeacherSceneErr_msg').text('Error while deleting teacher.');
						$('.fetchTeacher_Err_modal').modal('show');
					}
				},
				 beforeSend: function(){
						if ($('.loading').length) {
							$(".loading").fadeIn('fast');
						} else {
	                     $("<div class='loading'></div>").appendTo('body').fadeIn('fast');
						}
				 },
				
				complete : function() {
	               $(".loading").fadeOut(2000);
				}
			});
			
	});
	
	
	
});

$("#add_teacherSidebar,#Teacher_listSidebar").on('click',function(){
	  $('#sidebar').removeClass('active'); 
      $('.overlay').fadeOut();
});

$(".logout_btn").on('click',function(){
	localStorage.removeItem('userId');
	localStorage.removeItem('uniqueId');
	localStorage.removeItem('name');
	window.location.href = "login.html";
});