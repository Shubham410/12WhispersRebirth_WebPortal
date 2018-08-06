
/* ************************** ======================== Fetch students according to class ================ ********************* */
	
	$("#sceneList_sideBar").on('click',function(){
		
		
			var reqJson ;
			var html = "";
			$.ajax({
				type : "GET",
				url :"https://whispers-208604.appspot.com/FetchScenes",
				data : JSON.stringify(reqJson),
				 
				success:function(response){
					var obj = JSON.parse(response);
					
					if(obj.message == "success"){
							//alert("success");
						var head = '<thead><tr><th>Serial No.</th><th>Submitted Date</th><th>Scene name</th></th></th></tr></thead>';
						html += '<tbody>';
						 
						 for(var i=0;i<obj.data.length;i++){
							 html += '<tr>';
							 html += '<td>'+(i+1)+'</td>';
							// html += '<td class="student_class" student-no='+(i+1)+' student-id='+obj.data[i].sceneId+'>'+obj.data[i].authorName+'</td>';
							 // html += '<td>'+obj.data[i].sceneId+'</td>';
							 if(obj.data[i].submittedDate!=0){
											 	var time = obj.data[i].submittedDate;
												// console.log(time);
												var convert_date = new Date(time).toLocaleDateString();
							 	html += '<td class="disp_SubmittedDate" sceneId='+obj.data[i].sceneId+'>'+convert_date+'</td>';
							 }
							 else{
							 	html += '<td class="disp_SubmittedDate" sceneId='+obj.data[i].sceneId+' > - </td>';
							 }
							 
							 html += '<td class="delete_Scene" sceneNo='+obj.data[i].sceneId+'>'+obj.data[i].title+'</td>';

    



							 html +='<td><input type="button" value="submit" class="btn btn-default btn-table" >  <a class="btn btn-info btn-table delete_SceneBtn" data-sceneId="'+obj.data[i].sceneId+'"  style="font-size: 20px;"> <span class="glyphicon glyphicon-trash"></span></a> </td>'
							 html += '<td><input id="check1" type="checkbox"> <label for="check1" style="display:inline;">Allow Comments</label>  <input type="button" data-sceneNo="'+obj.data[i].sceneId+'" value="submit" style="margin-top: 10px; display:block;"  class="btn btn-default btn-table submit_Scene"></td>'
							 // html +='<td><button id=deleteBtn type="button" class="btn btn-default btn-sm"></td>';
							 //html += '<td><input remove-no='+(i+1)+' student-id='+obj.data[i].userId+' type="button" class="btn btn-default btn-table removeStudent" value="Remove"></td>'
							 //html += '<td>'+obj.data[i].userId+'</td>';
							 //html += '<td><button id="removeTeacher"'+i+' type="button" name="'+obj.data[i].name+'" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-trash"></span>Remove</button></td>';
						     html += '</tr>';
						
						 }
						 
						 html += '</tbody>';
						 

						 document.getElementById('TabularList_student').innerHTML = head+html;
						 $('#TabularList_student').dataTable();
					}
				}
				// beforeSend: function(){
				// 	if ($('.loading').length) {
				// 		$(".loading").fadeIn('fast');
				// 	} else {
    //                     $("<div class='loading'></div>").appendTo('body').fadeIn('fast');
				// 	}
				// },
				
				// complete : function() {
	   //             $(".loading").fadeOut(2000);
				// }
				
			});
	});

/* ************************** ======================== Fetch Whispers================ ********************* */



$("#Whispers_siderBar").on('click',function(){
		
		
			var reqJson;
			var html = "";
			$.ajax({
				type : "GET",
				url :"https://whispers-208604.appspot.com/FetchScenes",
				data : JSON.stringify(reqJson),
				 
				success:function(response){
					var obj = JSON.parse(response);
					
					console.log(obj);
					if(obj.message == "success"){
							//alert("success");
						var head = '<thead><tr><th>Serial No.</th><th>Scene Name</th><th>Name</th><th>Email Id<th><th></th></tr></thead>';
						html += '<tbody>';
						var object,cnt=0; 

						 for(var i=0;i<obj.data.length;i++){
						 	var sceneNo=Object.values(obj.data[i]);
						 	console.log(sceneNo);	



							 html += '<tr>';
							 html += '<td>'+(i+1)+'</td>';
							// html += '<td class="student_class" student-no='+(i+1)+' student-id='+obj.data[i].sceneId+'>'+obj.data[i].authorName+'</td>';
							 html += '<td>'+obj.data[i].title+'</td>';

							 var tdContent = "";
							 html += '<td>';
							 for(var j=0;j<obj.data[i].whispersList.length;j++){
							 	object=obj.data[i].whispersList[j];
							 	console.log(object);
							 	
							 		
							 	for(var k=0;k<(Object.keys(object).length)-1;k++){
							 		 html += '<p class="show_whispers" data-name="'+Object.keys(object)[k]+'">'+Object.keys(object)[k]+'</p>';
							 		 // data-sceneNo="'+sceneNo+'"
							 		 tdContent += '<p><input type="button"  data-sceneNo="'+obj.data[i].sceneId+'" data-userId="'+Object.keys(object)[k]+'" value="View 12 Whispers" class="btn btn-default btn-table view_Whispers" ></p>'; 
							 		// console.log(Object.keys(obj.data[i]);
							 		 console.log(Object.keys(object)[k]);
							 		 cnt++;

							 	  }
								}
								html +='</td>';
								html +='<td>'+tdContent+'</td>';
								// for(var j=0;j<obj.data[i].whispersList.length;j++){
							 // 	object=obj.data[i].whispersList[j];
							 // 	console.log(object);
							 	
							 		
							 	
							 // 	for(var k=0;k<(Object.keys(object).length)-1;k++){
							 // 		 html += '<p><input type="button" value="View 12 Whispers" class="btn btn-default btn-table view_Whispers" ></p>';
							 // 		 console.log(Object.keys(object)[k]);
							 // 		 cnt++;

							 // 	  }
							 	
							 	
								// }
								//html +='</td>';
								// html +='<td>';
								// for(var l=0;l<cnt-1;l++){
								// html += '<p><input type="button" value="View 12 Whispers" class="btn btn-default btn-table" ></p>';
								// }	
								// html +='</td>';
								//html += '<td><input remove-no='+(i+1)+' student-id='+obj.data[i].userId+' type="button" class="btn btn-default btn-table removeStudent" value="Remove"></td>'
								//html += '<td>'+obj.data[i].userId+'</td>';
								//html += '<td><button id="removeTeacher"'+i+' type="button" name="'+obj.data[i].name+'" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-trash"></span>Remove</button></td>';
						     html += '</tr>';
						
						 }
						 
						 html += '</tbody>';
						 

						 document.getElementById('TabularList_student1').innerHTML = head+html;
						 $('#TabularList_student1').dataTable();
					}
				}
				// beforeSend: function(){
				// 	if ($('.loading').length) {
				// 		$(".loading").fadeIn('fast');
				// 	} else {
    //                     $("<div class='loading'></div>").appendTo('body').fadeIn('fast');
				// 	}
				// },
				
				// complete : function() {
	   //             $(".loading").fadeOut(2000);
				// }
				
			});
	});



/* ************************** To display 12 whispers ************************** */

$(document).on('click','.view_Whispers',function(){
	

	var uniqueId=$ (this).attr('data-userId');
	var sceneNo=$(this).attr('data-sceneNo');
	// var no = $(this).attr('remove-no');
	var studentId ="";
	
	$('.show_whispers').each(function(){
		var getName = $(this).attr('data-name');
		if(getName == uniqueId){
			studentId = $(this).attr('data-name');       
        }
	});
	
	var reqJSON={"sceneId":sceneNo,"uniqueID":uniqueId};
	
	$.ajax({
		type :"POST",
		url :"https://whispers-208604.appspot.com/FetchWhisper",
		data :JSON.stringify(reqJSON), 
		
		success : function(response){


			var obj = JSON.parse(response);
			var html = "";
			//$("#append_div").remove();	
			if(obj.message == "success"){		
				document.getElementById('whispersList_data').innerHTML = '';
				document.getElementById('name_ofPerson').innerHTML = '';
				
				var html1 = '';
				html1 +='<p>12 Whispers of '+uniqueId+'</p>';
				$(html1).appendTo('#name_ofPerson');

				html += '<div class="append_div">';
				for(var i=0;i<obj.data.length;i++){
					html += '<p>'+obj.data[i]+'</p>';
				}
				html +='</div>';	
				//document.getElementById(whispersList_data).innerHTML = html;
				$(html).appendTo('#whispersList_data');
				$("#whispersList_Modal").modal("show");
				
			}
			else{
				alert("please try again");
			}
			// else{
			// 	$("#studentList_ErrText").text("Please try again");
			// 	$("#studentList_ErrModal").modal('show');	
			// }
		}
		
	});
	
	
});


	/* ************************** To Submit Scene ************************** */

$(document).on('click','.submit_Scene',function(){
var sceneNo=$ (this).attr('data-sceneNo');
var formatted_date;

var reqJSON={"sceneId":sceneNo};
$.ajax({
		type :"POST",
		url :"https://whispers-208604.appspot.com/SubmitDate",
		data :JSON.stringify(reqJSON), 
		
		success : function(response){


			var obj = JSON.parse(response);
			var html = "";
			//$("#append_div").remove();	
			if(obj.message == "success"){		
				var time = obj.submittedDate;
				// console.log(time);
				var convert_date = new Date(time).toLocaleDateString();
				// console.log(convert_date);
					$('.disp_SubmittedDate').each(function(){
							var sceneid = $(this).attr('sceneId');
							if(sceneNo == sceneid){
								//formatted_date = $(this).attr('data-name'); 
								$(this).text(convert_date);      
					        }
						});

			}
			else{
				alert("please try again");
			}
			// else{
			// 	$("#studentList_ErrText").text("Please try again");
			// 	$("#studentList_ErrModal").modal('show');	
			// }
		}
		
	});


});

/* ************************** To Submit Scene ************************** */
$(document).on('click','.delete_SceneBtn',function(){
var sceneNo1=$ (this).attr('data-sceneId');

var reqJSON={"sceneId":sceneNo1};
$.ajax({
		type :"POST",
		url :"https://whispers-208604.appspot.com/DeleteScene",
		data :JSON.stringify(reqJSON), 
		
		success : function(response){
			var obj = JSON.parse(response);
				if(obj.message == "success"){	
					$('.delete_Scene').each(function(){
							var sceneNo2 = $(this).attr('sceneNo');
							if(sceneNo1 == sceneNo2){
								//formatted_date = $(this).attr('data-name'); 
								$(this).parent().remove();   
					        }
						});
				}
			}
	});
});








$(".logout_btn").on('click',function(){
	localStorage.removeItem('userId');
	localStorage.removeItem('uniqueId');
	window.location.href = "login.html";
});
