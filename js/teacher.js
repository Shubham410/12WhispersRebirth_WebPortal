$(document).ready(function(){
	
	var teacherId = Number(localStorage.getItem('userId'));
	var techerName = localStorage.getItem('name');
	
	$(".teacher_name").text(techerName);
	

	
									// T&P

						$("#TnC_sideBar").on('click',function(){
								
								 $('#sidebar').removeClass('active'); 
							     $('.overlay').fadeOut();
								
							     fetchSceneDetails();
							});



	/* **********************   **************************** Add Student Web Service *********************  ************************* */
	
	$('#AddStudent_Btn').on('click',function(){
		
		var student_name = $('#student_name').val();
		var student_email = $('#student_email').val();
		var emailRegx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		
		var student_uniqueId = $('#student_uniqueId').val();
		var student_password = $("#student_password").val();

		var student_file = $('#student_file').val();
		var rollId = "Teacher";
		

		 if(student_file != ''){
			var formData = new FormData();
	    	formData.append('teacherId',(teacherId+""));
			if ($('#student_file').val() != "") {
				formData.append('file', $('#student_file').prop("files")[0]);
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
						   var reqJSON = {teacherId:teacherId,uploadUrl:obj.uploadUrl};
					       $.ajax({
					    	   type :'POST',
					    	   url : "http://twelevelinewonder.appspot.com/AddExcelDataToDb",
					    	   data : JSON.stringify(reqJSON),
					    	   
					    	   success: function(response){
					    		   var obj = JSON.parse(response);
					    		    if(obj.message == "success"){
					    			   /*alert("Success");*/
					    		    	$("#Student_ErrText").text('Students added successfully.');
					    		    	$("#Student_ErrModal").modal('show');
					    		    	 document.getElementById('add_student_form').reset();
					    		    	 $('#student_file').val() == '';
					    		    	 $('#Student_fileName').text('File Name..');
					    		    	
					    		   }else{
					    			  // alert("Please try again later");
					    			   $("#Student_ErrText").text('Error while adding students from file.');
					    		    	$("#Student_ErrModal").modal('show');
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
					$("#Student_ErrText").text('Problem while adding student');
				    $("#Student_ErrModal").modal('show');
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
		 
		   else if(student_name == ""){
				$('#Student_ErrText').text('Please enter student name.');
				$('#Student_ErrModal').modal('show'); 
			}
			else if(student_email == ""){
				$('#Student_ErrText').text('Please enter email ID.');
				$('#Student_ErrModal').modal('show'); 
			}
			else if(!emailRegx.test(student_email)){
				$('#Student_ErrText').text('Please enter valid email ID.');
				$('#Student_ErrModal').modal('show');
			}
			else if(student_uniqueId == ""){
				$('#Student_ErrText').text('Please enter unique ID.');
				$('#Student_ErrModal').modal('show'); 
			}
			else if(student_password == ""){
				$('#Student_ErrText').text('Please enter password.');
				$('#Student_ErrModal').modal('show'); 
			}
		
		else{
		
			var reqJson = {"teacherId":teacherId,"name":student_name,"emailId":student_email,"uniqueId":student_uniqueId,"password":student_password,"rollId":"Student"};
			
			 $.ajax({
				
				 type: "POST",
				 url: "http://twelevelinewonder.appspot.com/AddUser",
				 data: JSON.stringify(reqJson),
				 
				 success : function(response){
					 
					 var obj = JSON.parse(response);
					 
					 if(obj.message == "success"){						 
						 $('#Student_ErrText').text('Student added successfully. ');
						 $('#Student_ErrModal').modal('show'); 
						 document.getElementById('add_student_form').reset();
						 $('#student_file').val() == '';
						 $('#Student_fileName').text('File Name..');
					 }
					 
					 else{
						 $('#Student_ErrText').text('Erro while adding student.');
						 $('#Student_ErrModal').modal('show');  
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
		
	});
	
	/* ****************************** ********************** Add Class Web Service ******************  ********************************* */
	
	$("#AddClass_btn").on('click',function(){
		
		var Class_name = $("#Class_name").val();
		
		if(Class_name == ""){
			$('.AddClass_ErrText').text('Please add class name.');
			$('#AddClass_ErrModal').modal('show'); 
		}
		
		else{
			
			var reqJson = {"className":Class_name};
			
			$.ajax({
				
				type: "POST",
				url: "http://twelevelinewonder.appspot.com/AddClass",
				data: JSON.stringify(reqJson),
				
				success : function(response){
					
					var obj = JSON.parse(response);
					
					if(obj.message == "success"){
						$('.AddClass_ErrText').text('Added class name successfully.');
						$('#AddClass_ErrModal').modal('show');
						document.getElementById('add_class_form').reset();
					}
					else{
						$('.AddClass_ErrText').text('Problem adding class name.');
						$('#AddClass_ErrModal').modal('show');
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
		
	});
	/* ***********************  ======================= Fetch Students Web Service ==================== ********************** */
	$("#AssignStudent_siderBar").on('click',function(){
		
		 $('#sidebar').removeClass('active'); 
	     $('.overlay').fadeOut();
		
		$.ajax({
			
			type: "GET",
			url: "http://twelevelinewonder.appspot.com/FetchStudents",
			data: {},
			
			 success : function(response){
				 
				 var obj = JSON.parse(response);
				
				 if(obj.message == "success"){
				 
				  var html = '';
				 
				 	for(var i=0; i<obj.studentList.length;i++){
				 		html += '<div class="sceneBox_Style"><label class="label_pointer"><input class="student_List" student_id="'+obj.studentList[i].uniqueId+'" name="student_name" userId="'+obj.studentList[i].userId+'" type="checkbox">'+obj.studentList[i].name+'</label></div>';
				 	}
				 	document.getElementById("append_student").innerHTML = html;
				 }
				 else{
					 $(".fetchClass_ErrText").text('Problem while fetching students.');
					 $("#fetchClass_ErrModal").modal('show');
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
	
		/* ******************* ======================= Fetch classes web service =========================== ***************** */
		$.ajax({
			
			type: "GET",
			url: "http://twelevelinewonder.appspot.com/FetchClasses",
			data: {},
			
			success : function(response){
				
				var obj = JSON.parse(response);
				
				if(obj.message == "success"){
					
					var html = '';
					 //"data":[{"className":"class1","classId":29034394},
					for(var i=0; i<obj.data.length;i++){
						html+= '<div class="boxStyle"><p class="Class_List" class_id="'+obj.data[i].classId+'" class_name="'+obj.data[i].className+'">'+obj.data[i].className+'</p></div>';
					}
					document.getElementById("append_classes").innerHTML = html;
				}
				else if(obj.message == "List is empty"){
					 $(".fetchClass_ErrText").text('Not found any class.');
					 $("#fetchClass_ErrModal").modal('show');
				}
				else{
					 $(".fetchClass_ErrText").text('Problem while fetching class.');
					 $("#fetchClass_ErrModal").modal('show');
				}
			}
			
		});
		
	});
	/* *************************** Assign students to class Web service ***********************/
	$(document).on('click','.Class_List',function(){
		
		 if($("input:checkbox[name=student_name]:checked").length == 0){
			// alert('Please select atleast one student');
			 $(".fetchClass_ErrText").text('Please select atleast one student');
			 $("#fetchClass_ErrModal").modal('show');
		 }
		 else{
			 
			 var studentid_Arr = [];
			 var className = $(this).attr("class_name");
			 
			 $("input:checkbox[name=student_name]:checked").each(function(){    
					
				 studentid_Arr.push(Number($(this).attr("userId")));	
				 
			 });
			 
			 var reqJson = {studentIds:studentid_Arr,className:className};
			 
			 $.ajax({
				 
				 type: "POST",
				 url: "http://twelevelinewonder.appspot.com/AssignStudentToClass",
				 data: JSON.stringify(reqJson),
				 
				 success: function(response){
					 
					 var obj= JSON.parse(response);
				 
					 if(obj.message == "success"){
						  
						 $(".student_List").prop('checked', false);
						 //alert("Assign student to class successfully");
						 $(".fetchClass_ErrText").text('Assign student to class successfully');
						 $("#fetchClass_ErrModal").modal('show');
						
					 }
					 else{
						// alert("Problem adding student to class");
						 $(".fetchClass_ErrText").text('Problem adding student to class');
						 $("#fetchClass_ErrModal").modal('show');
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
		
	});
	
	
	/* ********************* ============================= Fetch ClassList ======================== ***************** */
	$("#studentList_sideBar").on('click',function(){
		
		 $('#sidebar').removeClass('active'); 
	     $('.overlay').fadeOut();
	     document.getElementById('TabularList_student').innerHTML = "";
		
		$.ajax({
            type : "GET",
			url : "http://twelevelinewonder.appspot.com/FetchClasses",
			data : {},
			success : function(response) {

				var obj = JSON.parse(response);

				if (obj.message == 'success') {

					var html = "";
					html += '<option value="-1">Classes List</option>';

					for (var i = 0; i < obj.data.length; i++) {
						html += '<option value="'+ obj.data[i].className+'" classId="'+ obj.data[i].classId+'">'+obj.data[i].className+'</option>';
					}
					document.getElementById("Listof_classes").innerHTML = html;
					//document.getElementById("innerFetchClass").innerHTML = html;

				} else {
					$('#studentList_ErrText').text('Problem while fetching university');
					$('#studentList_ErrModal').modal('show');
					alert("Problem while fetching university");
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
	
	
	/* ************************** ======================== Fetch students according to class ================ ********************* */
	
	$(document).on('change','#Listof_classes',function(){
		
		var selected_Classes = ($("#Listof_classes option:selected").val());
		
		if(selected_Classes == "-1"){
			 $("#addBorder").removeClass('table_border');
			 document.getElementById('TabularList_student').innerHTML = "";
			// alert("Please Select Class");
		}else{
			var reqJson = {"className":selected_Classes};
			var html = "";
			$.ajax({
				type : "POST",
				url :"http://twelevelinewonder.appspot.com/FetchStudentsByClass",
				data : JSON.stringify(reqJson),
				 
				success:function(response){
					var obj = JSON.parse(response);
					
					if(obj.message == "success"){
							//alert("success");
						 html += '<tbody class="">';
						 
						 for(var i=0;i<obj.data.length;i++){
							 html += '<tr>';
							 html += '<td>'+(i+1)+'</td>';
							 html += '<td class="student_class" student-no='+(i+1)+' student-id='+obj.data[i].userId+'>'+obj.data[i].name+'</td>';
							 html += '<td>'+obj.data[i].emailId+'</td>';
							 html += '<td>'+obj.data[i].uniqueId+'</td>';
							 html += '<td><input remove-no='+(i+1)+' student-id='+obj.data[i].userId+' type="button" class="btn btn-default btn-table removeStudent" value="Remove"></td>'
							 //html += '<td>'+obj.data[i].userId+'</td>';
							 //html += '<td><button id="removeTeacher"'+i+' type="button" name="'+obj.data[i].name+'" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-trash"></span>Remove</button></td>';
						     html += '</tr>';
						
						 }
						 
						 html += '</tbody>';
						 
						 var head = '<thead><tr><th>Serial No.</th><th>Student Name</th><th>Email Id</th><th>Unique Id</th><th>Remove Student</th></tr></thead>';
						 document.getElementById('TabularList_student').innerHTML = head+html;
						 $("#addBorder").addClass('table_border');
					}else{
						 $("#addBorder").removeClass('table_border');
						 document.getElementById('TabularList_student').innerHTML = "";
						 //alert("No student in this class");
						 $("#studentList_ErrText").text('No student in this class');
					     $('#studentList_ErrModal').modal('show');
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
		
	});
	
	
	/*  ******************** Fetch Scene according to teacher ******************** */
	
	$("#publishScene_sideBar").on('click',function(){
		
		 $('#sidebar').removeClass('active'); 
	     $('.overlay').fadeOut();
		
	     fetchSceneDetails();
	});
	
	
	
	/* ************************ PublishScene ********************* */
	
	
	$(document).on('click','.publishButton',function(){

		var no = $(this).attr('publishbtn-no');
		 var sceneId ="";
		 var select_class ="";
		 var publish_value="";
		//alert(no);
		$('.scene').each(function(){
		var getno = $(this).attr('scene-no');
		if(getno == no){
               sceneId = Number($(this).attr('sceneId'));  
               
           }
		});
		$('.innerFetchClass').each(function(){
			var getno1= $(this).attr('class-no');
			if(getno1 == no){
	             select_class = $(this).find('option:selected').val();
                console.log(select_class);
               }
		});
		/*$('.publishButton').each(function(){
			 publish_value = $(this).attr('ispublished');
			 console.log(publish_value);
		});*/
		
		if(select_class == "-1"){
			$("#publish_ErrText").text("Please select class.")
			$("#publish_ErrModal").modal("show");
		}
		
		else if(publish_value == "true"){
			$("#publish_ErrText").text("One scene already published. Please unpublish it first.")
			$("#publish_ErrModal").modal("show");
		}
		
		else{
		
			var reqJSON = {"sceneId":sceneId,"className":select_class};
			$.ajax({
				type :"POST",
				url :"http://twelevelinewonder.appspot.com/PublishScene",
				data :JSON.stringify(reqJSON), 
				
				success : function(response){
					var obj = JSON.parse(response);
					if(obj.message == "success"){
						//alert("Success");
						$("#publish_ErrText").text("Successfuly published.")
						$("#publish_ErrModal").modal("show");
						fetchSceneDetails(); // to fetch scene details
						
					}else{
						//alert("Please try again later");
						$("#publish_ErrText").text("Please try again later.")
						$("#publish_ErrModal").modal("show");
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
});
	
	
	/* ************************ unpublishScene *********************** */
	
	$(document).on('click','.unpublishButton',function(){

		var no = $(this).attr('unpublishBtn-no');
		 var sceneId ="";
		 var select_class ="";
		
		//alert(no);
		$('.scene').each(function(){
		var getno = $(this).attr('scene-no');
		if(getno == no){
               sceneId = Number($(this).attr('sceneId'));  
           }
		});
		$('.innerFetchClass').each(function(){
			var getno1= $(this).attr('class-no');
			if(getno1 == no){
	             select_class = $(this).find('option:selected').val();
                console.log(select_class);
               }
		});
		
		if(select_class == "-1"){
			$("#publish_ErrText").text("Please select class.")
			$("#publish_ErrModal").modal("show");
		}
		
		else{
		
			var reqJSON = {"sceneId":sceneId,"className":select_class};
			$.ajax({
				type :"POST",
				url :"http://twelevelinewonder.appspot.com/UnpublishScene",
				data :JSON.stringify(reqJSON), 
				
				success : function(response){
					var obj = JSON.parse(response);
					if(obj.message == "success"){
						//alert("Success");
						$("#publish_ErrText").text("Successfully unpublished the scene.")
						$("#publish_ErrModal").modal("show");
						fetchSceneDetails();
					}else{
						alert("Fail");
						$("#publish_ErrText").text("Failed to unpublished the scene.")
						$("#publish_ErrModal").modal("show");
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
	});	
		
		/* *************************** View Scenes ******************** */
		
$(document).on('click','.viewScene',function(){
		
		var no = $(this).attr('viewScene-no');
		var sceneId ="";
		
		$('.scene').each(function(){
			var getno = $(this).attr('scene-no');
			if(getno == no){
	               sceneId = Number($(this).attr('sceneId'));   
	           }
			});
		
		var reqJSON = {"sceneId":sceneId};
		$.ajax({
			type :"POST",
			url :"http://twelevelinewonder.appspot.com/FetchSceneDetails",
			data :JSON.stringify(reqJSON), 
			
			success : function(response){
				var obj = JSON.parse(response);
				if(obj.message == "success"){
					//alert("Success");
					
					$("#publishSceneTable_Div").css({"display":"none"}); // hide table
					$("#viewSceneDiv").css({"display":"block"}); // show display scene div
					
					/*$("#view_SceneTitle").text(""+obj.title);
					$("#view_SceneAuthor").text(""+obj.authorName);
					$("#view_SceneTimePlace").text(""+obj.time);*/
					
					$("#view_SceneTitle").text(""+decodeURI(obj.title));  // Decoded title
					$("#view_SceneAuthor").text(""+decodeURI(obj.authorName)); // decoded author
					$("#view_SceneTimePlace").text(""+decodeURI(obj.time)); // Decoded time and place
				
					var html='';
					
					console.log(""+obj.whispers.length);
					
					for(var i=0;i<obj.whispers.length;i++){
						
						html+='<div class="row"><div class="col-md-2 col-sm-4 col-xs-8"><div class="form-group"><label>Whisper/Description : </label></div></div><div class="col-md-3 col-sm-4 col-xs-12"><p>'+decodeURI(obj.whispers[i].characterName)+'<p></div><div class="col-md-3 col-sm-4 col-xs-12"><p>'+decodeURI(obj.whispers[i].whisper)+'</p></div></div>';
						
						//console.log(obj.whispers[i].characterName);
						//console.log(obj.whispers[i].whisper);
					}
					
					 $('#show_whispers').append(html);
					
					 
					 var image = obj.imageUrl;
					 $("#scene_img").attr('src',image);
					
					 
				}else{
					$("#publish_ErrText").text("Please try again later.");
					$("#publish_ErrModal").modal('show');
					//alert("Please try again");
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

/* ************ view lesson plan webservice *************** */

$(document).on('click','.viewLesson',function(){
	var no = $(this).attr('viewScene-no');
	var sceneId ="";
	
	$('.scene').each(function(){
		var getno = $(this).attr('scene-no');
		if(getno == no){
               sceneId = Number($(this).attr('sceneId'));   
           }
	});
	
	var reqJSON = {"sceneId":sceneId};
	
	$.ajax({
		type :"POST",
		url :"http://twelevelinewonder.appspot.com/FetchSceneDetails",
		data :JSON.stringify(reqJSON),
		success:function(response){
			
			var obj = JSON.parse(response);
			
			if(obj.message == "success"){
				
				$("#publishSceneTable_Div").css({"display":"none"}); // hide table
				$("#view_lessonPlan").css({"display":"block"}); // show display scene div
				
				var discussPdf1 = obj.discussionPdf;
				
				document.getElementById("discussPDf1").href= discussPdf1;
				
				var discussPdf2 = obj.discussionPdfWithAnswer; 
				
				document.getElementById("discussPDf2").href= discussPdf2;
				
				var html='';
				 html+= '<tbody>';
				 
				 for(var j=0;j<Object.keys(obj.questions).length;j++){
					 
					 html+='<tr>';
					 html+='<td>'+decodeURI(obj.questions[Object.keys(obj.questions)[j]].questionText)+'</td>';
					 
					 //html+='<td><p>A. '+obj.questions[Object.keys(obj.questions)[j]].options.A+'</p><p>B. '+obj.questions[Object.keys(obj.questions)[j]].options.B+'</p><p>C. '+obj.questions[Object.keys(obj.questions)[j]].options.C+'</p><p>D. '+obj.questions[Object.keys(obj.questions)[j]].options.D+'</p></td>';
					
					 var demo1 = obj.questions[Object.keys(obj.questions)[j]];
					 var demo2 = demo1.options;
					 var ak = Object.keys(demo2);
					
					 html += "<td>";
					
					 for(var k=0; k < ak.length; k++){
					 
					    html+='<p>'+decodeURI(obj.questions[Object.keys(obj.questions)[j]].options[ak[k]])+'</p>';
					 } 
					
					 html +="</td>";
					 
					 html+='<td>'+decodeURI(obj.questions[Object.keys(obj.questions)[j]].answer)+'</td>';
					 html+='</tr>';
					 
				 }
				 
				 html+='</tbody>';
				 
				 var head = '<thead><tr><th>Main Question</th><th>Answer Options</th><th>Answer</th></tr></thead>';
				 document.getElementById('Tabular_lessonPlan').innerHTML = head + html;
				
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


/* ****************** Report Web Service **************** */

$("#report_sideBar").on('click',function(){
	
	 $('#sidebar').removeClass('active'); 
     $('.overlay').fadeOut();
	
	$.ajax({
        type : "GET",
		url : "http://twelevelinewonder.appspot.com/FetchClasses",
		data : {},
		success : function(response) {

			var obj = JSON.parse(response);

			if (obj.message == 'success') {

				var html = "";
				html += '<option value="-1">Class Name</option>';

				for (var i = 0; i < obj.data.length; i++) {
					html += '<option value="'+ obj.data[i].className+'" classId="'+ obj.data[i].classId+'">'+obj.data[i].className+'</option>';
				}
				document.getElementById("ListofClass1").innerHTML = html;
				//document.getElementById("innerFetchClass").innerHTML = html;

			} else {
				/*$('#Fetch_UniversityErr_msg')
						.text(
								'Problem while fetching university');
				$('#fetchUni_errModal').modal('show');*/
				$("#Report_ErrText").text("Problem while fetching university");
				$("#Report_ErrModal").modal('show');
				//alert("Problem while fetching university");
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

/* **************  ************** */

$(document).on('change','#ListofClass1',function(){
	
	var selected_Classes = ($("#ListofClass1 option:selected").val());
	
	if(selected_Classes == ""){
		//alert("Please Select Class");
		$("#Report_ErrText").text("Please Select Class.");
		$("#Report_ErrModal").modal("show");
	}
	else if(selected_Classes == "-1"){
		//alert("Please Select Different Class value");
		document.getElementById('ListOfStudents_inClass').innerHTML = "";
		$("#Report_ErrText").text("Please Select Different Class value");
		$("#Report_ErrModal").modal("show");
	}
	
	else{
		var reqJson = {"className":selected_Classes};
		var html = "";
		$.ajax({
			type : "POST",
			url :"http://twelevelinewonder.appspot.com/FetchStudentsByClass",
			data : JSON.stringify(reqJson),
			 
			success:function(response){
				var obj = JSON.parse(response);
				
				if(obj.message == "success"){
					
					html += '<option value="-1">Student Name</option>';
					 
					 for(var i=0;i<obj.data.length;i++){
						
						 html += '<option value="'+ obj.data[i].userId+'" name="'+obj.data[i].name+'" classAssociated="'+obj.data[i].className+'" StudentId="'+ obj.data[i].uniqueId+'" email="'+obj.data[i].emailId+'">'+obj.data[i].name+'</option>';

					 }
					
					 document.getElementById('ListOfStudents_inClass').innerHTML = html;
				
				}else if(obj.message == "List is empty"){
					//alert("No student in this class");
					document.getElementById('ListOfStudents_inClass').innerHTML = "";
					$("#Report_ErrText").text("No student in this class.");
					$("#Report_ErrModal").modal("show");
				}
				else{
					$("#Report_ErrText").text("Problem while fetching student");
					$("#Report_ErrModal").modal('show');
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
	
});

$(document).on('change','#ListOfStudents_inClass',function(){
	
	var className= $("#ListOfStudents_inClass option:selected").attr('classassociated');
	var student_name = $("#ListOfStudents_inClass option:selected").attr('name');
	
	console.log(className);
	console.log(student_name);
	
	var selected_student = Number($("#ListOfStudents_inClass option:selected").val());
	var html='';
	var attachstudentinfo = '';
	$('.info').remove(html);
	$('.class_student').remove(attachstudentinfo);
	
	if(selected_student == "-1"){
		//document.getElementById('student_detailDiv').innerHTML = "";
		$('.info').remove(html);
		$('.class_student').remove(attachstudentinfo);
		$("#Report_ErrText").text("Please Select different student value.");
		$("#Report_ErrModal").modal("show");
	}
	else{
		
		var reqJson = {"studentId":selected_student};
		/*var html='';*/
		
		$.ajax({
			
			type: "POST",
			url: "http://twelevelinewonder.appspot.com/FetchReports",
			data : JSON.stringify(reqJson),
			
			success:function(response){
				
				var obj = JSON.parse(response);
				
				if(obj.message == "success"){
					
					
					attachstudentinfo+='<div class="class_student">';
					attachstudentinfo+='<p>Class : '+className+'</p>';
					attachstudentinfo+='<p>Student Name : '+student_name+'</p>';
					attachstudentinfo+='</div>';
					$('.student_detailDiv').append(attachstudentinfo);
					
					
					for(var i=0;i<obj.details.length;i++){
						
						html+='<div class="info">'
						html+='<p>Scene Title: '+decodeURI(obj.details[i].sceneTitle)+'</p>';
						
						var time =obj.details[i].timeSpentInApp;
						var minutes = Math.floor(time / 60);
						
						
							if(jQuery.isEmptyObject( obj.details[i].whispers )){
								
								html+='<p>Quiz Score: '+obj.details[i].marks+'<p>';
								html+='<p>Time spent in App: '+minutes+' minutes</p>';
								html+='</div>';
							}
						
							else{
								
								for(var j=0;j<obj.details[i].whispers[selected_student].length;j++){
									html+='<p>Line '+[j+1]+': '+decodeURI(obj.details[i].whispers[selected_student][j])+'</p>';
								}
								
								html+='<p>Lines Completed: '+obj.details[i].whispers["linesCompleted"]+'</p>';
								html+='<p>Quiz Score: '+obj.details[i].marks+'<p>';
								html+='<p>Time spent in App: '+minutes+' minutes</p>';
								html+='</div>';
							}
					}
	
					$('.student_detailDiv').append(html);
				}
				else{
					$("#Report_ErrText").text("Problem while fetching report.");
					$("#Report_ErrModal").modal('show');
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
	
});


function fetchSceneDetails(){
	
	var reqJson = {"teacherId":teacherId}
	$.ajax({
		type : 'POST',
		url :"http://twelevelinewonder.appspot.com/FetchScenesForTeachers",
		data : JSON.stringify(reqJson),
		
		success : function(response){
			var obj = JSON.parse(response);
			var html = "";
			var html1 = "";
			if(obj.message == "success"){

				for (var i = 0; i < obj.data.length; i++) {
					
					html += '<tr>';
					html += '<td class="scene" scene-no='+(i+1)+' sceneId='+obj.data[i].sceneId+'>' +decodeURI(obj.data[i].title)+ '</td>';
					html += '<td><input viewScene-no='+(i+1)+' type="button" class="btn btn-default btn-table viewScene" value="View Scene"></td>';
					html += '<td><input viewScene-no='+(i+1)+' id="" type="button" class="btn btn-default btn-table viewLesson"  value="View Lesson Plan"></td>';
					html += '<td><select class="innerFetchClass" class-no='+(i+1)+'>'+html1+'</select></td>'
					
					if(obj.data[i].publishFlag == true){	
					
						html += '<td><input scene-no='+(i+1)+' publishBtn-no='+(i+1)+' type="button" class="btn btn-default btn-table publishButton" ispublished="'+obj.data[i].publishFlag+'" value="Publish" disabled></td>';
						html += '<td><input scene-no='+(i+1)+' unpublishBtn-no='+(i+1)+' type="button" class="btn btn-default btn-table unpublishButton" value="Unpublish"></td>';

					}
					else{
					
						html += '<td><input scene-no='+(i+1)+' publishBtn-no='+(i+1)+' type="button" class="btn btn-default btn-table publishButton" ispublished="'+obj.data[i].publishFlag+'" value="Publish"></td>';
						html += '<td><input scene-no='+(i+1)+' unpublishBtn-no='+(i+1)+' type="button" class="btn btn-default btn-table unpublishButton" value="Unpublish" disabled></td>';

					}
					
/*						html += '<td><input unpublishBtn-no='+(i+1)+' type="button" class="btn btn-default btn-table unpublishButton" value="Unpublish"></td>';
*/						
					html += '</tr>';
					
				}

				html += '</tbody>';

				var head = '<thead><tr><th>Scene Name</th><th>View Scene</th><th>View Lesson Plan</th><th>Classes</th><th>Publish Scene</th><th>Unpublish Scene</th></thead>';
				document.getElementById('TabularList_scene').innerHTML = head+ html;
				
				$.ajax({
		            type : "GET",
					url : "http://twelevelinewonder.appspot.com/FetchClasses",
					data : {},
					success : function(response) {

						var obj = JSON.parse(response);

						if (obj.message == 'success') {

							
							html1 += '<option value="-1">Class List</option>';

							for (var i = 0; i < obj.data.length; i++) {
								html1 += '<option value="'+ obj.data[i].className+'" classId="'+ obj.data[i].classId+'">'+obj.data[i].className+'</option>';
							}
							
						//	var innerClassName = obj.data[i].className;
							
							//document.getElementById("innerFetchClass").innerHTML = html1;
			                $('.innerFetchClass').append(html1);

						} else {
							$("#publish_ErrText").text("Problem while fetching class list.");
							$("#publish_ErrModal").modal('show');
							//alert("Problem while fetching university");
						}
					}

				});
				
			}else{
				$("#publish_ErrText").text("Please try again later.");
				$("#publish_ErrModal").modal('show');
				//alert("Please try again later");
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

/* =======================   Delete Student from database web service ========================= */

$(document).on('click','.removeStudent',function(){
	
	var no = $(this).attr('remove-no');
	var studentId ="";
	
	$('.student_class').each(function(){
		var getno = $(this).attr('student-no');
		if(getno == no){
			studentId = Number($(this).attr('student-id'));       
        }
	});
	
	var reqJSON = {"userId":studentId};
	
	$.ajax({
		type :"POST",
		url :"http://twelevelinewonder.appspot.com/DeleteStudent",
		data :JSON.stringify(reqJSON), 
		
		success : function(response){
			var obj = JSON.parse(response);
			if(obj.message == "Student deleted"){
				
				$('.removeStudent').each(function(){
					if($(this).attr('student-id') == studentId){
						console.log($(this).attr('student-id'));
						$(this).parent().parent().remove();
					}
				});
				$("#studentList_ErrText").text("Student deleted successfully");
				$("#studentList_ErrModal").modal('show');	
				
			}
			else{
				$("#studentList_ErrText").text("Please try again");
				$("#studentList_ErrModal").modal('show');	
			}
		}
		
	});
	
	
});


$("#back_toPublishSceneDiv").on('click',function(){
	$("#viewSceneDiv").css({"display":"none"});
	$("#publishSceneTable_Div").css({"display":"block"});
	/*$(".show_whispers").innerHTML = "";*/
	document.getElementById('show_whispers').innerHTML = '';
});


$("#btn_navtoTable").on('click',function(){
	$("#view_lessonPlan").css({"display":"none"});
	$("#publishSceneTable_Div").css({"display":"block"});
});

$(".logout_btn").on('click',function(){
	localStorage.removeItem('userId');
	localStorage.removeItem('uniqueId');
	localStorage.removeItem('name');
	window.location.href = "login.html";
});
	
	
});