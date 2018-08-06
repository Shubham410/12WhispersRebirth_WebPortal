/*function myFunction() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("Admin_SceneList_Table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}*/
/*$('#SelectAllScenesBtn').on('click',function(){
	if(!this.checked){
		$('.Scene_List').each(function() {
			this.checked = true;
		});
	}
	else{
		$('.Scene_List').each(function(){
			this.checked = false;
		});
	}
});*/

function displayRemainingText(){
	
	// display remaining text for whispers
	
	var text_max = 140;
	
	var timePlace_length = $("#EditScene_timeAndPlace").val().length;
	var text_remainTime = text_max - timePlace_length;
	$('#edit_timeChar').html(text_remainTime + ' left');
	
	$('#EditScene_timeAndPlace').keyup(function() {
		var text_length = $('#EditScene_timeAndPlace').val().length;
		var text_remaining = text_max - text_length;
		$('#edit_timeChar').html(text_remaining + ' left');
	});
	
	var text_length1 = $('#edit_whisper1').val().length;
	var text_remaining1 = text_max - text_length1;
	$('#editwhisperChar1').html(text_remaining1 + ' left');
	
	$('#edit_whisper1').keyup(function() {
		var text_length = $('#edit_whisper1').val().length;
		var text_remaining = text_max - text_length;
		$('#editwhisperChar1').html(text_remaining + ' left');
	});
	
	var text_length2 = $('#edit_whisper2').val().length;
	var text_remaining2 = text_max - text_length2;
	$('#editwhisperChar2').html(text_remaining2 + ' left');
	
	$('#edit_whisper2').keyup(function() {
		var text_length = $('#edit_whisper2').val().length;
		var text_remaining = text_max - text_length;
		$('#editwhisperChar2').html(text_remaining + ' left');
	});
	
	var text_length3 = $('#edit_whisper3').val().length;
	var text_remaining3 = text_max - text_length2;
	$('#editwhisperChar3').html(text_remaining3 + ' left');
	
	$('#edit_whisper3').keyup(function() {
		var text_length = $('#edit_whisper3').val().length;
		var text_remaining = text_max - text_length;
		$('#editwhisperChar3').html(text_remaining + ' left');
	});
	
	var text_length4 = $('#edit_whisper4').val().length;
	var text_remaining4 = text_max - text_length4;
	$('#editwhisperChar4').html(text_remaining4 + ' left');
	
	$('#edit_whisper4').keyup(function() {
		var text_length = $('#edit_whisper4').val().length;
		var text_remaining = text_max - text_length;
		$('#editwhisperChar4').html(text_remaining + ' left');
	});
	
	var text_length5 = $('#edit_whisper5').val().length;
	var text_remaining5 = text_max - text_length5;
	$('#editwhisperChar5').html(text_remaining5 + ' left');
	
	$('#edit_whisper5').keyup(function() {
		var text_length = $('#edit_whisper5').val().length;
		var text_remaining = text_max - text_length;
		$('#editwhisperChar5').html(text_remaining + ' left');
	});
	
	var text_length6 = $('#edit_whisper6').val().length;
	var text_remaining6 = text_max - text_length6;
	$('#editwhisperChar6').html(text_remaining6 + ' left');
	
	$('#edit_whisper6').keyup(function() {
		var text_length = $('#edit_whisper6').val().length;
		var text_remaining = text_max - text_length;
		$('#editwhisperChar6').html(text_remaining + ' left');
	});
	
	var text_length7 = $('#edit_whisper7').val().length;
	var text_remaining7 = text_max - text_length7;
	$('#editwhisperChar7').html(text_remaining7 + ' left');
	
	$('#edit_whisper7').keyup(function() {
		var text_length = $('#edit_whisper7').val().length;
		var text_remaining = text_max - text_length;
		$('#editwhisperChar7').html(text_remaining + ' left');
	});
	
	var text_length8 = $('#edit_whisper8').val().length;
	var text_remaining8 = text_max - text_length8;
	$('#editwhisperChar8').html(text_remaining8 + ' left');
	
	$('#edit_whisper8').keyup(function() {
		var text_length = $('#edit_whisper8').val().length;
		var text_remaining = text_max - text_length;
		$('#editwhisperChar8').html(text_remaining + ' left');
	});
	
	var text_length9 = $('#edit_whisper9').val().length;
	var text_remaining9 = text_max - text_length9;
	$('#editwhisperChar9').html(text_remaining9 + ' left');
	
	$('#edit_whisper9').keyup(function() {
		var text_length = $('#edit_whisper9').val().length;
		var text_remaining = text_max - text_length;
		$('#editwhisperChar9').html(text_remaining + ' left');
	});
	
	var text_length10 = $('#edit_whisper10').val().length;
	var text_remaining10 = text_max - text_length10;
	$('#editwhisperChar10').html(text_remaining10 + ' left');
	
	$('#edit_whisper10').keyup(function() {
		var text_length = $('#edit_whisper10').val().length;
		var text_remaining = text_max - text_length;
		$('#editwhisperChar10').html(text_remaining + ' left');
	});
	
	var text_length11 = $('#edit_whisper11').val().length;
	var text_remaining11 = text_max - text_length11;
	$('#editwhisperChar11').html(text_remaining11 + ' left');
	
	$('#edit_whisper11').keyup(function() {
		var text_length = $('#edit_whisper11').val().length;
		var text_remaining = text_max - text_length;
		$('#editwhisperChar11').html(text_remaining + ' left');
	});
	
	var text_length12 = $('#edit_whisper12').val().length;
	var text_remaining12 = text_max - text_length12;
	$('#editwhisperChar12').html(text_remaining2 + ' left');
	
	$('#edit_whisper12').keyup(function() {
		var text_length = $('#edit_whisper12').val().length;
		var text_remaining = text_max - text_length;
		$('#editwhisperChar12').html(text_remaining + ' left');
	});
	
}


function FetchUniversity(){

	$.ajax({

		type : "GET",
		url : "http://twelevelinewonder.appspot.com/FetchUniversities",
		data : {},
		success : function(response) {

			var obj = JSON.parse(response);

			if (obj.message == 'success') {

				var html = "";
				html += '<option value="-1">University List</option>';

				for (var i = 0; i < obj.universityList.length; i++) {
					html += '<option value="'+ obj.universityList[i].userId
							+ '" uniqueId="'
							+ obj.universityList[i].uniqueId
							+ '" name="'
							+ obj.universityList[i].name
							+ '">'
							+ obj.universityList[i].name
							+ '</option>';
				}
				//document.getElementById("Fetch_UniversityList").innerHTML = html;
				document.getElementById("UniversityList_forTeacher").innerHTML = html;
				
				/*$('#AssignBoxToTeacher_ErrMsg').text('University fetched successfully');
				$('#AssignBoxToTeacher_ErrModal').modal('show');*/

			} else {
				$('#AssignBoxToTeacher_ErrMsg').text('Problem while fetching university.');
				$('#AssignBoxToTeacher_ErrModal').modal('show');
				//alert('Problem while fetching university');
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

function FetchUniversityDashboard(){

	$.ajax({

		type : "GET",
		url : "http://twelevelinewonder.appspot.com/FetchUniversities",
		data : {},
		success : function(response) {

			var obj = JSON.parse(response);

			if (obj.message == 'success') {

				var html = "";
				html += '<option value="-1">University List</option>';

				for (var i = 0; i < obj.universityList.length; i++) {
					html += '<option value="'+ obj.universityList[i].userId
							+ '" uniqueId="'
							+ obj.universityList[i].uniqueId
							+ '" name="'
							+ obj.universityList[i].name
							+ '">'
							+ obj.universityList[i].name
							+ '</option>';
				}
				document.getElementById("Fetch_UniversityList").innerHTML = html;
				//document.getElementById("UniversityList_forTeacher").innerHTML = html;

			} else {
				$('#Fetch_UniversityErr_msg').text('Problem while fetching university');
				$('#fetchUni_errModal').modal('show');
				//alert('Problem while fetching university');
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

function fetchBoxes(){
	
	$.ajax({

		type : "GET",
		url : "http://twelevelinewonder.appspot.com/FetchBoxes",
		data : {},
		success : function(response) {

			var obj = JSON.parse(response);

			if (obj.message == 'success') {
				//var html = "";
				var html1 = "";
				html1 += '<option value="-1">Boxes List</option>';

				for (var i = 0; i < obj.data.length; i++) {

					
					html1 += '<option value="'
							+ obj.data[i].boxId
							+ '" box_name="'
							+ obj.data[i].boxName
							+ '" sku_Id="'
							+ obj.data[i].skuId
							+ '" product_Id="'
							+ obj.data[i].productId
							+ '" sceneNames="'
							+ obj.data[i].sceneNames
							+ '">'
							+ obj.data[i].boxName
							+ '</option>'
				}

				//document.getElementById("append_boxes").innerHTML = html;
				document.getElementById("Boxes_List").innerHTML = html1;

			}

			else {
				$('#AssignBoxToTeacher_ErrMsg').text('Problem while fetching Boxes.');
				$('#AssignBoxToTeacher_ErrModal').modal('show');
				//alert('Problem while fetching Boxes');
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
function fetchQA(){
	
	var sceneId = Number($(".viewLessonPlanBtnClass").attr('sceneId'));
	 //  var sceneId = Number($(this).attr('sceneId'));   
	   
	   $("#Edit_QAInfoBtn").attr('sceneId',sceneId);
	   
	   
	   var reqJSON = {"sceneId":sceneId};
	   
	   $.ajax({
			type : "POST",
			url : "http://twelevelinewonder.appspot.com/FetchSceneDetails",
			data : JSON.stringify(reqJSON),

			success : function(response) {

				var obj = JSON.parse(response);

				if (obj.message == "success") {
					
					var discussPdf1 = obj.discussionPdf;
					document.getElementById("fetch_pdfQues").href= discussPdf1;
					
					var discussPdf2 = obj.discussionPdfWithAnswer;
					document.getElementById("fetch_pdfQuesAnswer").href= discussPdf2;
					
					var html='';
					
					html+= '<tbody>';
					var no = 1;
					 for(var j=0;j<Object.keys(obj.questions).length;j++){
						 
						 html+='<tr>';
						 /*html+='<td>'+decodeURI(obj.questions[Object.keys(obj.questions)[j]].questionText)+'</td>';*/ // decodeURI question
						 html+='<td>'+obj.questions[Object.keys(obj.questions)[j]].questionText+'</td>';

						 						
						 var demo1 = obj.questions[Object.keys(obj.questions)[j]];
						 var demo2 = demo1.options;
						 var ak = Object.keys(demo2);
						
						 html += "<td id='optiontd-"+no+"'>";
						 var op_no=1;
						
						 for(var k=0; k < ak.length; k++){ 
						 
						    /*html+='<p sceneId="'+obj.sceneId+'" class ="optionClass" question_id="'+Object.keys(obj.questions)[j]+'" OptionId="option-'+op_no+'">'+decodeURI(obj.questions[Object.keys(obj.questions)[j]].options[ak[k]])+'</p>';*/ // Decode options
						    html+='<p sceneId="'+obj.sceneId+'" class ="optionClass" question_id="'+Object.keys(obj.questions)[j]+'" OptionId="option-'+op_no+'">'+obj.questions[Object.keys(obj.questions)[j]].options[ak[k]]+'</p>';

						    op_no = op_no+1;
						 } 
						
						 html +="</td>";
						 
						 /*html+='<td>'+decodeURI(obj.questions[Object.keys(obj.questions)[j]].answer)+'</td>';*/ // DecodeURI answer
						 html+='<td>'+obj.questions[Object.keys(obj.questions)[j]].answer+'</td>';
						 html+='<td>';
						 html+='<input id="editBtn-'+no+'" sceneId="'+obj.sceneId+'" question_id="'+Object.keys(obj.questions)[j]+'" question_text="'+obj.questions[Object.keys(obj.questions)[j]].questionText+'" answer="'+obj.questions[Object.keys(obj.questions)[j]].answer+'" type="button" class="btn btn-default btn-table question_Edit" value="Edit" style="margin-right:5px;">';
						 html+='<input id="" sceneId="'+obj.sceneId+'" question_id="'+Object.keys(obj.questions)[j]+'" type="button" class="btn btn-default btn-table question_Delete" value="Delete">';
						 html+='</td>';
						 html+='</tr>';
						 no = no +1;
						 
					 }
					 
					 html+='</tbody>';
					 
					 var head = '<thead><tr><th>Main Question</th><th>Answer Options</th><th>Answer</th><th>Edit/Delete Question</th></tr></thead>';
					 document.getElementById('Table_viewLessonPlan').innerHTML = head + html; 
					
				} else {
					 $("#AddSceneErr_msg").text("Error while fetching lesson plan.");
					 $("#AddSceneErr_Modal").modal('show');
					//$('#AddUniErr_Modal').modal('show');
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

$(document).ready(function() {

	var adminId = Number(localStorage.getItem('userId'));
	var adminUniqueId = Number(localStorage.getItem('uniqueId')); 
	
	FetchUniversityDashboard();
	
					/* ********* Fetch University for Assign Scenes WebService GET ************* */
$("#crtUser").on('click',function(){
	FetchUniversityDashboard();
});
	
$("#resetPW").on('click',function(){
	FetchUniversity();
	fetchBoxes();
});


$(document).on('change','#UniversityList_forTeacher',function() {

		var selected_University = Number($("#UniversityList_forTeacher option:selected").val());
					// alert(selected_University);
					if (selected_University == "-1") {
						
						$("#AssignBoxToTeacher_ErrMsg").text('Please Select University.');
						$("#AssignBoxToTeacher_ErrModal").modal('show');
						//alert("Please Select University");

					} else {
						var reqJson = {"universityId" : selected_University};
						
						$.ajax({
									type : "POST",
									url : "http://twelevelinewonder.appspot.com/FetchTeachers",
									data : JSON.stringify(reqJson),

									success : function(response) {

										var obj = JSON.parse(response);

										if (obj.message == 'success') {
											document.getElementById("TeacherList_AsperUniversity").innerHTML = "";

											var html = "";
											html += '<option value="-1">Teacher List</option>';

											for (var i = 0; i < obj.data.length; i++) {
												html += '<option value="'
														+ obj.data[i].userId
														+ '" uniqueId="'
														+ obj.data[i].uniqueId
														+ '" name="'
														+ obj.data[i].name
														+ '">'
														+ obj.data[i].name
														+ '</option>';
											}
											document.getElementById("TeacherList_AsperUniversity").innerHTML = html;
										} else if (obj.message == 'List is empty') {

											$('#AssignBoxToTeacher_ErrMsg').text('This university has no Teacher. Please select other university.');
											$('#AssignBoxToTeacher_ErrModal').modal('show');
											//alert('This university has no Teacher. Please select other university');
											document.getElementById("TeacherList_AsperUniversity").innerHTML = "";

											// alert('error');
										} else {

											$("#AssignBoxToTeacher_ErrMsg").text('Error fetching teacher list');
											$("#AssignBoxToTeacher_ErrModal").modal('show');
											//alert('Error fetching teacher list');

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

					/* ********** Fetch Boxes Web Service GET ************ */
 $("#overUsr").on('click',function(){
	 

		$.ajax({

				type : "GET",
				url : "http://twelevelinewonder.appspot.com/FetchBoxes",
				data : {},
				success : function(response) {

					var obj = JSON.parse(response);

					if (obj.message == 'success') {
						var html = "";
					//	html1 += '<option value="-1">Boxes List</option>';

						for (var i = 0; i < obj.data.length; i++) {

							html += '<div class="boxStyle"><p class="Box_List" box_id="'
									+ obj.data[i].boxId
									+ '" box_name="'
									+ obj.data[i].boxName
									+ '" sku_Id="'
									+ obj.data[i].skuId
									+ '" product_Id="'
									+ obj.data[i].productId
									+ '" sceneNames="'
									+ obj.data[i].sceneNames
									+ '">'
									+ obj.data[i].boxName
									+ '</p></div>';
							
						}

						document.getElementById("append_boxes").innerHTML = html;
						//document.getElementById("Boxes_List").innerHTML = html1;

					}

					else {
						$('#FetchBoxes_Err_msg1').text('Problem while fetching Boxes');
						$('#FetchBoxes_Err_Modal1').modal('show');
						//alert('Problem while fetching Boxes');
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
		
		/* ****************************[ FetchScenes Web Service GET ]******************************** */
		
		
		$.ajax({

			type : "GET",
			url : "http://twelevelinewonder.appspot.com/FetchScenes",
			data : {},
					
			success : function(response) {

						var obj = JSON.parse(response);

						if (obj.message == 'success') {
							var html = "";
							for (var i = 0; i < obj.data.length; i++) {
								html += '<div class="sceneBox_Style"><label><input class="Scene_List" id="scene_name'
										+ i
										+ '" name="scene_name" type="checkbox" sceneId="'
										+ obj.data[i].sceneId
										+ '" title="'
										+ obj.data[i].title
										+ '"><span class="label-text">'
										+ obj.data[i].title
										+ '</span></label></div>';
								
								/*html += '<div class="sceneBox_Style"><label><input class="Scene_List" id="scene_name'
									+ i
									+ '" name="scene_name" type="checkbox" sceneId="'
									+ decodeURI(obj.data[i].sceneId)
									+ '" title="'
									+ decodeURI(obj.data[i].title)
									+ '"><span class="label-text">'
									+ decodeURI(obj.data[i].title)
									+ '</span></label></div>';*/
								
							}
							document.getElementById("append_scenes").innerHTML = html;
						} else {
							$('#FetchBoxes_Err_msg1').text('Problem while fetching Boxes');
							$('#FetchBoxes_Err_Modal1').modal('show');
							//alert('Problem while fetching boxes.');
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
					
 /* ************************* Assign Box to teacher Web Service *************************** */

	$('#AssignBoxToTeacherBtn').on('click',function() {

			var scenes_inBox = $("#Boxes_List option:selected").attr('sceneNames');
			var valid_teacherId = Number($("#TeacherList_AsperUniversity option:selected").attr('value'));
			var boxId = Number($("#Boxes_List option:selected").attr('value'));
			var univerId = Number($("#UniversityList_forTeacher option:selected").attr('value'));

										
				if (valid_teacherId == "-1") {
					
					$("#AssignBoxToTeacher_ErrMsg").text('Please select teacher.');
					$("#AssignBoxToTeacher_ErrModal").modal('show');
					//alert('Please Select valid values');
				} 
				else if(boxId == "-1"){
					$("#AssignBoxToTeacher_ErrMsg").text('Please select box.');
					$("#AssignBoxToTeacher_ErrModal").modal('show');
				
				}
				else if(univerId == "-1"){
					$("#AssignBoxToTeacher_ErrMsg").text('Please select university.');
					$("#AssignBoxToTeacher_ErrModal").modal('show');
				}else {
				
						var reqJson = {teacherId : valid_teacherId,boxId : boxId,universityId : univerId};
						if (scenes_inBox != "") {

							$.ajax({

								type : "POST",
								url : "http://twelevelinewonder.appspot.com/AssignScenesToTeacher",
						        data : JSON.stringify(reqJson),

								success : function(response) {

									var obj = JSON.parse(response);

									if (obj.message == "success") {
										
										$("#AssignBoxToTeacher_ErrMsg").text('Box assigned to teacher successfully.');
										$("#AssignBoxToTeacher_ErrModal").modal('show');
										//alert("Box assigned to teacher successfully.");

									} 
									else if(obj.message == "User or Password is invalid"){
										$("#AssignBoxToTeacher_ErrMsg").text('Please select valid box or teacher.');
										$("#AssignBoxToTeacher_ErrModal").modal('show');	
									}
									else {

										$("#AssignBoxToTeacher_ErrMsg").text('Problem while assigning box to teacher.');
										$("#AssignBoxToTeacher_ErrModal").modal('show');
										//alert("Problem while assigning box to teacher.");

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
						else {
							$("#AssignBoxToTeacher_ErrMsg").text('Please select another box!');
							$("#AssignBoxToTeacher_ErrModal").modal('show');
							//alert('Please select another box!');
						}

					}
	 });

					/* ***************************[ Assign Scenes to Box Web Service POST ]******************************** */

	$(document).on('click','.Box_List',function() {

			if ($("input:checkbox[name=scene_name]:checked").length == 0) {
				$('#FetchBoxes_Err_msg1').text('Please select atleast one scene');
				$('#FetchBoxes_Err_Modal1').modal('show');
			}

			else {

				var sceneIdArray = [];
				var sceneNameArray = [];
				var boxName = $(this).attr("box_name");
				$("input:checkbox[name=scene_name]:checked").each(function() {

					sceneNameArray.push($(this).attr("title"));
					sceneIdArray.push(Number($(this).attr("sceneid")));

				});

				var reqJson = {sceneIds : sceneIdArray,sceneNames : sceneNameArray,boxName : boxName};

				$.ajax({

					type : "POST",
					url : "http://twelevelinewonder.appspot.com/AssignScenesToBox",
					data : JSON.stringify(reqJson),

					success : function(response) {

					var obj = JSON.parse(response);

						if (obj.message == "success") {

							$('#FetchBoxes_Err_msg1').text('Scene assigned to box successfully.');
							$('#FetchBoxes_Err_Modal1').modal('show');
							//alert('Scene assigned to box successfully');
							$(".Scene_List").prop('checked',false);
						}

						else {
							
							$('#FetchBoxes_Err_msg1').text('Problem adding scene to box.');
							$('#FetchBoxes_Err_Modal1').modal('show');
							//alert('Problem adding scene to box.');
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
					
	/* *********** FetchScenes Web Service for Tabular Data display GET ************  */
$("#scene_sidebar").on('click',function(){
	fetchScene();
});	

/* ************  ****************************** Review scene webservice  ***************************** ********** */
$(document).on('click','.review_Edit',function(){
	
	
	$(".reviewSceneDiv").css({"display":"block"});
	$(".dispAll_scenes").css({"display":"none"});
	
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
				
				var editSceneTitle= obj.title;
				editSceneTitle = decodeURI(editSceneTitle);
				
				var authorDecode = decodeURI(obj.authorName);
				var timeDecode = decodeURI(obj.time);
				
				$("#EditSceneTitle").val(editSceneTitle);
				$("#editSceneAuthor").val(authorDecode);
				$("#EditScene_timeAndPlace").val(timeDecode);
				
				var decodeChar1 = obj.whispers[0].characterName;
				//var decodeWhisper1 = 
				$("#editSceneChar1").val(decodeChar1);
				$("#edit_whisper1").val(""+decodeURI(obj.whispers[0].whisper));
				
				$("#editSceneChar2").val(""+decodeURI(obj.whispers[1].characterName));
				$("#edit_whisper2").val(""+decodeURI(obj.whispers[1].whisper));
				
				$("#editSceneChar3").val(""+decodeURI(obj.whispers[2].characterName));
				$("#edit_whisper3").val(""+decodeURI(obj.whispers[2].whisper));
				
				$("#editSceneChar4").val(""+decodeURI(obj.whispers[3].characterName));
				$("#edit_whisper4").val(""+decodeURI(obj.whispers[3].whisper));
				
				$("#editSceneChar5").val(""+decodeURI(obj.whispers[4].characterName));
				$("#edit_whisper5").val(""+decodeURI(obj.whispers[4].whisper));
				
				$("#editSceneChar6").val(""+decodeURI(obj.whispers[5].characterName));
				$("#edit_whisper6").val(""+decodeURI(obj.whispers[5].whisper));
				
				$("#editSceneChar7").val(""+decodeURI(obj.whispers[6].characterName));
				$("#edit_whisper7").val(""+decodeURI(obj.whispers[6].whisper));
				
				$("#editSceneChar8").val(""+decodeURI(obj.whispers[7].characterName));
				$("#edit_whisper8").val(""+decodeURI(obj.whispers[7].whisper));
				
				$("#editSceneChar9").val(""+decodeURI(obj.whispers[8].characterName));
				$("#edit_whisper9").val(""+decodeURI(obj.whispers[8].whisper));
				
				$("#editSceneChar10").val(""+decodeURI(obj.whispers[9].characterName));
				$("#edit_whisper10").val(""+decodeURI(obj.whispers[9].whisper));
				
				$("#editSceneChar11").val(""+decodeURI(obj.whispers[10].characterName));
				$("#edit_whisper11").val(""+decodeURI(obj.whispers[10].whisper));
				
				$("#editSceneChar12").val(""+decodeURI(obj.whispers[11].characterName));
				$("#edit_whisper12").val(""+decodeURI(obj.whispers[11].whisper));
				
				displayRemainingText();
				
				var image_Url = obj.imageUrl;
				
				$("#edit_sceneImgName").attr("value",image_Url);
			
				console.log($("#edit_sceneImgName").val());
				
				$("#edit_sceneImg").attr("src",image_Url);
				
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
/* ********************************************[ Edit scene Web-Service ]************************************** */
$("#edit_SceneSaveBtn").on('click',function(e){
	
	
	var EditSceneTitle = $("#EditSceneTitle").val();
	//EditSceneTitle = encodeURI(EditSceneTitle);
	
	var editSceneAuthor = $("#editSceneAuthor").val();
	//editSceneAuthor = encodeURI(editSceneAuthor);
	
	var EditScene_timeAndPlace = $("#EditScene_timeAndPlace").val(); // Not mandatory
	//EditScene_timeAndPlace = encodeURI(EditScene_timeAndPlace);
	
	var editSceneChar1 = $("#editSceneChar1").val();
	//editSceneChar1 = encodeURI(editSceneChar1);
	var edit_whisper1 = $("#edit_whisper1").val();
	//edit_whisper1 = encodeURI(edit_whisper1);
	
	var editSceneChar2 = $("#editSceneChar2").val();
	//editSceneChar2 = encodeURI(editSceneChar2);
	var edit_whisper2 = $("#edit_whisper2").val();
	//edit_whisper2 = encodeURI(edit_whisper2);
	
	var editSceneChar3 = $("#editSceneChar3").val();
	//editSceneChar3 = encodeURI(editSceneChar3);
	var edit_whisper3 = $("#edit_whisper3").val();
	//edit_whisper3 = encodeURI(edit_whisper3);
	
	var editSceneChar4 = $("#editSceneChar4").val();
	//editSceneChar4 = encodeURI(editSceneChar4);
	var edit_whisper4 = $("#edit_whisper4").val();
	//edit_whisper4 = encodeURI(edit_whisper4);
	
	var editSceneChar5 = $("#editSceneChar5").val();
	//editSceneChar5 = encodeURI(editSceneChar5);
	var edit_whisper5 = $("#edit_whisper5").val();
	//edit_whisper5 = encodeURI(edit_whisper5);
	
	var editSceneChar6 = $("#editSceneChar6").val();
	//editSceneChar6 = encodeURI(editSceneChar6);
	var edit_whisper6 = $("#edit_whisper6").val();
	//edit_whisper6 = encodeURI(edit_whisper6);
	
	var editSceneChar7 = $("#editSceneChar7").val();
	//editSceneChar7 = encodeURI(editSceneChar7);
	var edit_whisper7 = $("#edit_whisper7").val();
	//edit_whisper7 = encodeURI(edit_whisper7);
	
	var editSceneChar8 = $("#editSceneChar8").val();
	//editSceneChar8 = encodeURI(editSceneChar8);
	var edit_whisper8 = $("#edit_whisper8").val();
	//edit_whisper8 = encodeURI(edit_whisper8);
	
	var editSceneChar9 = $("#editSceneChar9").val();
	//editSceneChar9 = encodeURI(editSceneChar9);
	var edit_whisper9 = $("#edit_whisper9").val();
	//edit_whisper9 = encodeURI(edit_whisper9);
	
	var editSceneChar10 = $("#editSceneChar10").val();
	//editSceneChar10 = encodeURI(editSceneChar10);
	var edit_whisper10 = $("#edit_whisper10").val();
	//edit_whisper10 = encodeURI(edit_whisper10);
	
	var editSceneChar11 = $("#editSceneChar11").val();
	//editSceneChar11 = encodeURI(editSceneChar11);
	var edit_whisper11 = $("#edit_whisper11").val();
	//edit_whisper11 = encodeURI(edit_whisper11);
	
	var editSceneChar12 = $("#editSceneChar12").val();
	//editSceneChar12 = encodeURI(editSceneChar12);
	var edit_whisper12 = $("#edit_whisper12").val();
	//edit_whisper12 = encodeURI(edit_whisper12);
	
	if (EditSceneTitle == '') {
		$("#AddSceneErr_msg").text('Please add scene title');
		$("#AddSceneErr_Modal").modal('show');
	}
	else if(editSceneAuthor == '') {
		$("#AddSceneErr_msg").text('Please add author name');
		$("#AddSceneErr_Modal").modal('show');
	}
	else if(editSceneChar1 == '' && edit_whisper1 == ''){
		$("#AddSceneErr_msg").text('Please add scene with character name');
		$("#AddSceneErr_Modal").modal('show');
	}
	else if(editSceneChar2 == '' && edit_whisper2 == ''){
		$("#AddSceneErr_msg").text('Please add scene with character name');
		$("#AddSceneErr_Modal").modal('show');
	}
	else if(editSceneChar3 == '' && edit_whisper3 == ''){
		$("#AddSceneErr_msg").text('Please add scene with character name');
		$("#AddSceneErr_Modal").modal('show');
	}
	else if(editSceneChar4 == '' && edit_whisper4 == ''){
		$("#AddSceneErr_msg").text('Please add scene with character name');
		$("#AddSceneErr_Modal").modal('show');
	}
	else if(editSceneChar5 == '' && edit_whisper5 == ''){
		$("#AddSceneErr_msg").text('Please add scene with character name');
		$("#AddSceneErr_Modal").modal('show');
	}
	else if(editSceneChar6 == '' && edit_whisper6 == ''){
		$("#AddSceneErr_msg").text('Please add scene with character name');
		$("#AddSceneErr_Modal").modal('show');
	}
	else if(editSceneChar7 == '' && edit_whisper7 == ''){
		$("#AddSceneErr_msg").text('Please add scene with character name');
		$("#AddSceneErr_Modal").modal('show');
	}
	else if( editSceneChar8=='' && edit_whisper8==''){
		$("#AddSceneErr_msg").text('Please add scene with character name');
		$("#AddSceneErr_Modal").modal('show');
	}
	else if(editSceneChar9 == '' && edit_whisper9 == ''){
		$("#AddSceneErr_msg").text('Please add scene with character name');
		$("#AddSceneErr_Modal").modal('show');
	}
	else if(editSceneChar10 == '' && edit_whisper10 == ''){
		$("#AddSceneErr_msg").text('Please add scene with character name');
		$("#AddSceneErr_Modal").modal('show');
	}
	else if(editSceneChar11 == '' && edit_whisper11 == ''){
		$("#AddSceneErr_msg").text('Please add scene with character name');
		$("#AddSceneErr_Modal").modal('show');
	}
	else if(editSceneChar12 == '' && edit_whisper12 == ''){
		$("#AddSceneErr_msg").text('Please add scene with character name');
		$("#AddSceneErr_Modal").modal('show');
	}
	
	else{
		
		var edit_whisperArry = [];
		
		for (var i = 1; i <= 12; i++) {

			edit_whisperArry.push({characterName : $("#editSceneChar"+ i+ "").val(),whisper : $("#edit_whisper"+ i+ "").val()});

		}
		
		var formData = new FormData();
		formData.append('title',EditSceneTitle);
		formData.append('authorName',editSceneAuthor);
		formData.append('time',EditScene_timeAndPlace);
		formData.append('whispers', JSON.stringify(edit_whisperArry));
		
		if ($('#edit_sceneImgName').val() != "") {
			formData.append('file', $('#edit_sceneImgName').prop("files")[0]);
		}
		
		/*else {
			formData.append('file',$("#edit_sceneImg").attr('src'));
			//formData.append('file',imgUrl);
		}*/
		
		//console.log(formData);
		
		$.ajax({

			type : 'POST',
			url : "http://twelevelinewonder.appspot.com/AddScenes",
			data : formData,
			processData : false,
			contentType : false,
			cache : false,
			enctype : 'multipart/form-data',

			success : function(response) {

				var obj = JSON.parse(response);
				
				if (obj.message == "success") {

					$(".reviewSceneDiv").css({"display":"none"});
					$(".dispAll_scenes").css({"display":"block"});
					
					document.getElementById('edit_scene_form').reset();	
					$("#editSceneFileName").text('Add scene image..');
					
					$("#AddSceneErr_msg").text('Scene edited successfully');
					$("#AddSceneErr_Modal").modal('show');
					
				} else {
					$("#AddSceneErr_msg").text('Problem while editing scene');
					$("#AddSceneErr_Modal").modal('show');
				}
				
			},
			beforeSend : function() {
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
	e.preventDefault();
});


		/* *****************************[ ADD UNIVERSITY WEBSERVICE ]******************************/

		$("#Add_UniversityBtn").click(function(e) {
			e.preventDefault();

			var university_name = $('#university_name').val();
			//university_name = encodeURI(university_name);
			
			var university_emailId = $('#university_emailId').val();

			var emailRegx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

			var university_uniqueId = $('#university_uniqueId').val();
			//university_uniqueId = encodeURI(university_uniqueId);
			
			var university_password = $('#university_password').val();
			var rollId = "University";

							if (university_name == "") {
								$('#AddUniversityErr_msg').text('Please enter university name');
								$('#AddUniErr_Modal').modal('show');
							} else if (university_emailId == "") {
								$('#AddUniversityErr_msg').text('Please enter email ID');
								$('#AddUniErr_Modal').modal('show');
							} else if (!emailRegx.test(university_emailId)) {
								$('#AddUniversityErr_msg').text('Please enter valid email ID');
								$('#AddUniErr_Modal').modal('show');
							} else if (university_uniqueId == "") {
								$('#AddUniversityErr_msg').text('Please enter unique ID');
								$('#AddUniErr_Modal').modal('show');
							} else if (university_password == "") {
								$('#AddUniversityErr_msg').text('Please enter university password');
								$('#AddUniErr_Modal').modal('show');
							}

							else {
								var reqJson = {
									"name" : university_name,
									"emailId" : university_emailId,
									"uniqueId" : university_uniqueId,
									"password" : university_password,
									"rollId" : rollId
								};

								$.ajax({
									type : "POST",
									url : "http://twelevelinewonder.appspot.com/AddUser",
									data : JSON.stringify(reqJson),

									success : function(response) {

										var obj = JSON.parse(response);

										if (obj.message == "success") {
											$('#AddUniversityErr_msg').text('University Successfully Added');
											$('#AddUniErr_Modal').modal('show');
											document.getElementById("add_university_form").reset();
										} else {
											$('#AddUniversityErr_msg').text('Problem while adding university.');
											$('#AddUniErr_Modal').modal('show');
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
		/* ************************** ADD BOXES WEBSERVICE ************************* */

		$("#Add_boxBtn").click(function(e) {
					e.preventDefault();

					var boxName = $('#boxName').val();
					//boxName = encodeURI(boxName);
					
					var boxId_android = $('#boxId_android').val();
					//boxId_android = encodeURI(boxId_android);
					
					var boxId_iOS = $('#boxId_iOS').val();
					//boxId_iOS = encodeURI(boxId_iOS);

					if (boxName == "") {
						$('#AddBoxErr_msg').text('Please enter box name');
						$('#AddBoxErr_Modal').modal('show');
					} else if (boxId_android == "") {
						$('#AddBoxErr_msg').text('Please enter android Id');
						$('#AddBoxErr_Modal').modal('show');
					} else if (boxId_iOS == "") {
						$('#AddBoxErr_msg').text('Please enter iOS Id');
						$('#AddBoxErr_Modal').modal('show');
					} else {
							
						var reqJson = {"boxName" : boxName,"skuId" : boxId_android,"productId" : boxId_iOS};

							$.ajax({

								type : "POST",
								url : "http://twelevelinewonder.appspot.com/AddBox",
								data : JSON.stringify(reqJson),

									success : function(response) {

										var obj = JSON.parse(response);
										if (obj.message == "success") {

											$('#AddBoxErr_msg').text('Box added successfully');
											$('#AddBoxErr_Modal').modal('show');
											document.getElementById("add_box_form").reset();
										} else {
											$('#AddBoxErr_msg').text('Problem while adding box');
											$('#AddBoxErr_Modal').modal('show');
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

		/* * ***********************************( Add Scene Web service )***************************** */

$("#SceneSaveBtn").on('click',function(e) {

	var addSceneTitle = $("#addSceneTitle").val();
	//addSceneTitle = encodeURI(addSceneTitle); 
		
	var addSceneAuthor = $("#addSceneAuthor").val();
	//addSceneAuthor = encodeURI(addSceneAuthor);
	
	var AddScene_timeAndPlace = $("#AddScene_timeAndPlace").val(); // not mandatory
//	AddScene_timeAndPlace = encodeURI(AddScene_timeAndPlace);
 // var add_sceneImg = $('#add_sceneImg').val(); // not mandatory

	var addSceneChar1 = $("#addSceneChar1").val();  
	//addSceneChar1 = encodeURI(addSceneChar1);
	var whisper1 = $("#whisper1").val();
	//whisper1 = encodeURI(whisper1);

	var addSceneChar2 = $("#addSceneChar2").val();
	//addSceneChar2 = encodeURI(addSceneChar2);
	var whisper2 = $("#whisper2").val();
	//whisper2 = encodeURI(whisper2);

	var addSceneChar3 = $("#addSceneChar3").val();
	//addSceneChar3 = encodeURI(addSceneChar3);
	var whisper3 = $("#whisper3").val();
	//whisper3 = encodeURI(whisper3);
	
	var addSceneChar4 = $("#addSceneChar4").val();
	//addSceneChar4 = encodeURI(addSceneChar4);
	var whisper4 = $("#whisper4").val();
	//whisper4 = encodeURI(whisper4);

	var addSceneChar5 = $("#addSceneChar5").val();
	//addSceneChar5 = encodeURI(addSceneChar5);
	var whisper5 = $("#whisper5").val();
	//whisper5 = encodeURI(whisper5);

	var addSceneChar6 = $("#addSceneChar6").val();
	//addSceneChar6 = encodeURI(addSceneChar6);
	var whisper6 = $("#whisper6").val();
	//whisper6 = encodeURI(whisper6);

	var addSceneChar7 = $("#addSceneChar7").val();
	//addSceneChar7 = encodeURI(addSceneChar7);
	var whisper7 = $("#whisper7").val();
	//whisper7 = encodeURI(whisper7);

	var addSceneChar8 = $("#addSceneChar8").val();
	//addSceneChar8 = encodeURI(addSceneChar8);
	var whisper8 = $("#whisper8").val();
	//whisper8 = encodeURI(whisper8);

	var addSceneChar9 = $("#addSceneChar9").val();
	//addSceneChar9 = encodeURI(addSceneChar9);
	var whisper9 = $("#whisper9").val();
	//whisper9 = encodeURI(whisper9);

	var addSceneChar10 = $("#addSceneChar10").val();
	//addSceneChar10 = encodeURI(addSceneChar10);
	var whisper10 = $("#whisper10").val();
	//whisper10 = encodeURI(whisper10);

	var addSceneChar11 = $("#addSceneChar11").val();
	//addSceneChar11 = encodeURI(addSceneChar11);
	var whisper11 = $("#whisper11").val();
	//whisper11 = encodeURI(whisper11);

	var addSceneChar12 = $("#addSceneChar12").val();
	//addSceneChar12 = encodeURI(addSceneChar12);
	var whisper12 = $("#whisper12").val();
	//whisper12 = encodeURI(whisper12);

		if (addSceneTitle == '') {
			$("#AddSceneErr_msg").text('Please add scene title');
			$("#AddSceneErr_Modal").modal('show');
		} else if (addSceneAuthor == '') {
			$("#AddSceneErr_msg").text('Please add author name');
			$("#AddSceneErr_Modal").modal('show');
		} else if (addSceneChar1 == '' && whisper1 == '') {
			$("#AddSceneErr_msg").text('Please add scene with character name');
			$("#AddSceneErr_Modal").modal('show');
		} else if (addSceneChar2 == '' && whisper2 == '') {
			$("#AddSceneErr_msg").text('Please add scene with character name');
			$("#AddSceneErr_Modal").modal('show');
		} else if (addSceneChar3 == '' && whisper3 == '') {
			$("#AddSceneErr_msg").text('Please add scene with character name');
			$("#AddSceneErr_Modal").modal('show');
		} else if (addSceneChar4 == '' && whisper4 == '') {
			$("#AddSceneErr_msg").text('Please add scene with character name');
			$("#AddSceneErr_Modal").modal('show');
		} else if (addSceneChar5 == '' && whisper5 == '') {
			$("#AddSceneErr_msg").text('Please add scene with character name');
			$("#AddSceneErr_Modal").modal('show');
		} else if (addSceneChar6 == '' && whisper6 == '') {
			$("#AddSceneErr_msg").text('Please add scene with character name');
			$("#AddSceneErr_Modal").modal('show');
		} else if (addSceneChar7 == '' && whisper7 == '') {
			$("#AddSceneErr_msg").text('Please add scene with character name');
			$("#AddSceneErr_Modal").modal('show');
		} else if (addSceneChar8 == '' && whisper8 == '') {
			$("#AddSceneErr_msg").text('Please add scene with character name');
			$("#AddSceneErr_Modal").modal('show');
		} else if (addSceneChar9 == '' && whisper9 == '') {
			$("#AddSceneErr_msg").text('Please add scene with character name');
			$("#AddSceneErr_Modal").modal('show');
		} else if (addSceneChar10 == '' && whisper10 == '') {
			$("#AddSceneErr_msg").text('Please add scene with character name');
			$("#AddSceneErr_Modal").modal('show');
		} else if (addSceneChar11 == '' && whisper11 == '') {
			$("#AddSceneErr_msg").text('Please add scene with character name');
			$("#AddSceneErr_Modal").modal('show');
		} else if (addSceneChar12 == '' && whisper12 == '') {
			$("#AddSceneErr_msg").text('Please add scene with character name');
			$("#AddSceneErr_Modal").modal('show');
		}

		else {

			var arr = [];
			// var whisperObj ={};

			/*
			 * whisperObj[addSceneChar1]=whisper1;
			 * whisperObj[addSceneChar2]=whisper2;
			 * whisperObj[addSceneChar3]=whisper3;
			 * whisperObj[addSceneChar4]=whisper4;
			 * whisperObj[addSceneChar5]=whisper5;
			 * whisperObj[addSceneChar6]=whisper6;
			 * whisperObj[addSceneChar7]=whisper7;
			 * whisperObj[addSceneChar8]=whisper8;
			 * whisperObj[addSceneChar9]=whisper9;
			 * whisperObj[addSceneChar10]=whisper10;
			 * whisperObj[addSceneChar11]=whisper11;
			 * whisperObj[addSceneChar12]=whisper12;
			 */
			var whisperArry = [];

			for (var i = 1; i <= 12; i++) {

				// var whisperObj = {};

				// whisperObj[$("#addSceneChar"+i+"").val()]
				// = $("#whisper"+i+"").val();

				// whisperObj['characterName']=$("#addSceneChar"+i+"").val();
				// whisperObj2['whisper']=$("#whisper"+i+"").val();

				whisperArry.push({characterName : $("#addSceneChar"+ i+ "").val(),whisper : $("#whisper"+ i+ "").val()});

				// arr.push(whisperObj);
			}

			// arr.push(whisperObj);

			var formData = new FormData();
			formData.append('title',addSceneTitle);
			formData.append('authorName',addSceneAuthor);
			formData.append('time',AddScene_timeAndPlace);
			formData.append('whispers', JSON.stringify(whisperArry));

			if ($('#add_sceneImg').val() != "") {
				formData.append('file', $('#add_sceneImg').prop("files")[0]);
			}
			console.log(formData);

			// var reqJson ={title:$('
			// #addSceneTitle').val(),authorName:$('#addSceneAuthor').val(),whispers:JSON.stringify(arr)};
			// var reqJson =
			// {"title":addSceneTitle,
			// "authorName":addSceneAuthor,
			// "whispers":[{characterName1:addSceneChar1,whisper1:whisper1},{characterName2:addSceneChar2,whisper2:whisper2},{characterName3:addSceneChar3,whisper3:whisper3},{characterName4:addSceneChar4,whisper4:whisper4},{characterName5:addSceneChar5,whisper5:whisper5},{characterName6:addSceneChar6,whisper6:whisper6},{characterName7:addSceneChar7,whisper7:whisper7},{characterName8:addSceneChar8,whisper8:whisper8},{characterName9:addSceneChar9,whisper9:whisper9},{characterName10:addSceneChar10,whisper10:whisper10},{characterName11:addSceneChar11,whisper11:whisper11},{characterName12:addSceneChar12,whisper12:whisper12}]};

			$.ajax({

						type : 'POST',
						url : "http://twelevelinewonder.appspot.com/AddScenes",
						// data:
						// JSON.stringify(reqJson),
						data : formData,
						processData : false,
						contentType : false,
						cache : false,
						enctype : 'multipart/form-data',

						success : function(response) {

							var obj = JSON.parse(response);

							if (obj.message == "success") {

								$("#AddSceneErr_msg").text('Scene '+addSceneTitle+ ' Added Successfully');
								$("#AddSceneErr_Modal").modal('show');
								document.getElementById("add_scene_form").reset();
								/*$('#add_sceneImg').val() != ""*/
								$("#addSceneFileName").text('Add scene image..');

							} else {
								$("#AddSceneErr_msg").text('Problem while adding scene');
								$("#AddSceneErr_Modal").modal('show');
							}

						},
						beforeSend : function() {
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
		e.preventDefault();
});


});  // document.ready function ends

/* ========================[ Function to fetch scene in tabular list ]====================== */

function fetchScene(){
	
	$.ajax({

		type : "GET",
		url : "http://twelevelinewonder.appspot.com/FetchScenes",
		data : {},
		success : function(response) {

			var obj = JSON.parse(response);
			var html = "";
			if (obj.message == 'success') {

				html += '<tbody>';

				for (var i = 0; i < obj.data.length; i++) {
					html += '<tr>';
					html += '<td class="scene" scene-no='+(i+1)+' sceneId='+obj.data[i].sceneId+'>' + obj.data[i].title
							+ '</td>';
					html += '<td><input id="" viewscene-no="'+(i+1)+'" type="button" class="btn btn-default btn-table review_Edit" value="Review and Edit"></td>';
					
					if(obj.data[i].isQuestionPresent == false){
						html += '<td><input id="" type="button" sceneId='+obj.data[i].sceneId+' class="btn btn-default btn-table lesson_planDiv" value="Add Lesson Plan"</td>';
					}
					else if(obj.data[i].isQuestionPresent == true){
						
						html += '<td><input id="" type="button" sceneId='+obj.data[i].sceneId+' class="btn btn-default btn-table viewLessonPlanBtnClass" value="View Lesson Plan"</td>';
					}
					//html += '<td><input id="" type="button" sceneId='+obj.data[i].sceneId+' class="btn btn-default btn-table lesson_planDiv" value="Add Lesson Plan"</td>';
					html += '<td><input remove-no='+(i+1)+' type="button" class="btn btn-default btn-table removeScene" value="Remove"</td>';
					html += '</tr>';
				}

				html += '</tbody>';

				var head = '<thead><tr><th>Scene Name</th><th>Review and Edit</th><th>Add / View Lesson Plan</th><th>Remove</th></tr></thead>';
				document.getElementById('Admin_SceneList_Table').innerHTML = head + html;
			} else {
				
				$('#AddSceneErr_msg').text('Error fetching scene lists.');
				$('#AddSceneErr_Modal').modal('show');
				//alert('Error fetching scene lists.');
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

    $("#add_optionBtn").on('click',function() {

		$(".option_Div").append('<div class="row mt-25"><div class="col-md-2 col-sm-2 col-xs-12"><div class="form-group"><label>Option :</label></div></div><div class="col-md-4 col-sm-4 col-xs-12"><div class="form-group"><input id="" name="" class="form-control" type="text"></div></div><div class="col-md-6 hidden-sm hidden-xs"></div></div>');
	
    });
    

$(document).on('click','.lesson_planDiv',function(){
	
	var scene_id = $(this).attr('sceneid');
	
	$(".add_lessonDiv").css({"display":"block"});
	
	$("#saveLessonPlan").attr('scene_id',scene_id);
	
	$(".dispAll_scenes").css({"display":"none"});
}); 


$("#backtoDynamic_table").on('click',function(){
	$(".add_lessonDiv").css({"display":"none"});
	$(".dispAll_scenes").css({"display":"block"});
	//document.getElementById('lpQuestionsDiv').innerHTML = "";
	fetchScene();
});
    
/*========================== addQuestionToLessonPlan ==========================*/
    var queCount = 2;
    $(document).on('click','#addQuestionToLessonPlan',function(){
    	
    	var html = "";
    	html += '<div id="lpQuestionDiv-'+queCount+'" class="mt-25">';
    	html += '<div class="row">';
    	html += '<div class="col-md-2 col-sm-2 col-xs-12"><div class="form-group"><label>Question :</label></div></div>';
    	html += '<div class="col-md-4 col-sm-4 col-xs-12"><div class="form-group"><input id="lpQue-'+queCount+'" name="" class="form-control lpQuestions" type="text"placeholder="Question" required></div></div>';
    	html += '<div class="col-md-2 col-sm-2 col-xs-12"><div class="form-group"><label>Answer :</label></div></div>';
    	html += '<div class="col-md-4 col-sm-4 col-xs-12"><div class="form-group"><input id="lpAns-'+queCount+'" name="" class="form-control lpAnswers" type="text"placeholder="Answer" required></div></div>';
    	html += '</div>';
    	html += '<div id="lpQue-'+queCount+'-optionDiv"></div>';
    	html += '<div><a id="addOption-'+queCount+'" class="btn btn-default btn-common addOptionClass" role="button" onclick="">Add Option</a></div>'
    	html += '</div>';
    	queCount++;
    	//document.getElementById("c").innerHTML = 
    	$("#lpQuestionsDiv").append(html);
    	
    	
    });
    
    $(document).on('click','.addOptionClass',function(){
    	var id = $(this).attr('id');
    	var getno = id.split('-');
    	var html ="";
    	html += '<div class="row mt-25">';
    	html += '<div class="col-md-2 col-sm-2 col-xs-12"><div class="form-group"><label>Option :</label></div></div>';
    	html += '<div class="col-md-4 col-sm-4 col-xs-12"><div class="form-group"><input id="" name="" class="form-control optionClasss" type="text"></div></div>';
    	html += '</div>';
    	$('#lpQue-'+getno[1]+'-optionDiv').append(html);
    });
    
    function makeid() {
  	  var text = "";
  	  var possible = "0123456789";

  	  for (var i = 0; i < 5; i++)
  	    text += possible.charAt(Math.floor(Math.random() * possible.length));

  	  return text;
  	};
  	
  	
  	
  	
   $(document).on('click','#saveLessonPlan',function(){
	      
	   	var data = {}; 
		  
	   	   for(var i=1;i<queCount;i++){
		  
	   		   var noOffOption = 0;
	   		   var optionObj = {};
	   		   var ltr = 65;
		   
	   		   $('#lpQue-'+i+'-optionDiv .optionClasss').each(function(){
			  
				   if($(this).val() != "") {
					   noOffOption = noOffOption+1;
					   var letter = String.fromCharCode(ltr);
					   /*optionObj[letter] = encodeURI($(this).val());*/	//Encode option
					   optionObj[letter] = $(this).val();
					  
					   ltr = ltr +1;  
					   
				   }
			  
	   		   });
	   		   
	   		   console.log(optionObj);
		     
	   		   var id = makeid();
			 
		       if($('#lpQue-'+i+'').val() != "" && $('#lpAns-'+i+'').val() != "" && noOffOption != "0"){
		    	  
				  /* data[''+id+''] = {"questionText":encodeURI($('#lpQue-'+i+'').val()),"answer":encodeURI($('#lpAns-'+i+'').val()),"options":optionObj,noOfOptions:noOffOption};*/ // encode question and answer 
		    	   data[''+i+''+id+'']  = {"questionText":$('#lpQue-'+i+'').val(),"answer":$('#lpAns-'+i+'').val(),"options":optionObj,noOfOptions:noOffOption};
				  // console.log(data[''+id+'']);
		       }
	   	     
		   }
	   
	  console.log(data);
	   	   
	   if($("#DiscussQues_pdf").val() == ''){
		   $("#AddSceneErr_msg").text("Please attach both pdf.");
		   $("#AddSceneErr_Modal").modal('show');
		   //alert("Please attach both pdf.");
	   }
	   else if($("#DiscussQA_pdf").val() == ''){
		   $("#AddSceneErr_msg").text("Please attach both pdf.");
		   $("#AddSceneErr_Modal").modal('show');
		   //alert("Please attach both pdf");
	   }
	   
	   else if(jQuery.isEmptyObject(data)){
		   $("#AddSceneErr_msg").text("Please write question, it's answer and an option.");
		   $("#AddSceneErr_Modal").modal('show');
		   // alert("Please write question, it's answer and  an option.");
	   }
	   
	   else{ 
	   //var scene = 
	   var scene_id = $(this).attr('scene_id');
	   var formData = new FormData();
	   formData.append('sceneId',$(this).attr('scene_id'));
	   formData.append('questions',JSON.stringify(data));
	   formData.append('withAnswer',$('#DiscussQA_pdf').prop("files")[0]);
	   formData.append('withoutAnswer',$('#DiscussQues_pdf').prop("files")[0]);
	   
	   
	   $.ajax({

			type : 'POST',
			url : "http://twelevelinewonder.appspot.com/AddQuestions",
			data : formData,
			processData : false,
			contentType : false,
			cache : false,
			enctype : 'multipart/form-data',

			success : function(response) {

				var obj = JSON.parse(response);
				
				if (obj.message == "success") {

					 $("#AddSceneErr_msg").text("Lesson plan added successfully.");
					 $("#AddSceneErr_Modal").modal('show');
					//alert("Lesson Plan added successfully");
					
					document.getElementById('add_lessonDivform').reset();
					
					$("#discussQues_fileName").text('Import Pdf...');
					$("#discussQA_fileName").text("Import Pdf With Asnwers...");
					
					$(".add_lessonDiv").css({"display":"none"});
					$(".dispAll_scenes").css({"display":"block"});
					
					$(".lesson_planDiv").each(function(){
						
						if($(this).attr('sceneid') == scene_id){
							
							$(this).attr('value',"View Lesson Plan");
							$(this).removeClass('lesson_planDiv');
							$(this).addClass('viewLessonPlanBtnClass');
						}
					});
					
				} else {
					$("#AddSceneErr_msg").text('Problem while adding Lesson Plan');
					$("#AddSceneErr_Modal").modal('show');
					//alert("Problem while adding Lesson Plan");
				}
				
			},
			beforeSend : function() {
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
   
   /*============================ view Lesson Plan ============================*/
   
   $(document).on('click','.viewLessonPlanBtnClass',function(){
	   
	   $(".view_lessonDiv").css({"display":"block"});
	   $(".dispAll_scenes").css({"display":"none"});
	   
	   fetchQA();
	   
   });
   
 /* ================================ Edit Scene pdf webservice ======================== */
   
   
   
   $("#Edit_QAInfoBtn").on('click',function(){
	   
	   var scene_id = $(this).attr('sceneid');
	   var formData = new FormData();
	   
	   
	   formData.append('sceneId',scene_id);
	   
	   if($("#DiscussQuespdf_Edit").val() == ''){
		   $("#AddSceneErr_msg").text("Please edit question pdf.");
		   $("#AddSceneErr_Modal").modal('show');
		   
		   //alert("Please edit pdf.");
	   }
	   else if($("#DiscussQA_pdfEdit").val() == ''){
		   $("#AddSceneErr_msg").text("Please edit question with answer pdf.");
		   $("#AddSceneErr_Modal").modal('show');
		   //alert("Please edit pdf.");
	   }
	   else{  
	    	   
	   formData.append('withAnswer',$('#DiscussQA_pdfEdit').prop("files")[0]);
	   formData.append('withoutAnswer',$('#DiscussQuespdf_Edit').prop("files")[0]);
	   
	   console.log(formData);
	   
	   $.ajax({
		  
		   type : 'POST',
			url : "http://twelevelinewonder.appspot.com/EditLessonPlan",
			data : formData,
			processData : false,
			contentType : false,
			cache : false,
			enctype : 'multipart/form-data',

			success : function(response) {
				
				var obj = JSON.parse(response);
				
				if (obj.message == "success") {
				
					$("#DiscussQuespdf_Edit").val() == '';
					$('#DiscussQA_pdfEdit').val() == '';
					$('#discussQues_fileName1').text('Edit Pdf...');
					$("#discussQA_fileName1").text('Edit Pdf With Answers..');
					
					 $("#AddSceneErr_msg").text("Pdf edited successfully.");
					 $("#AddSceneErr_Modal").modal('show');
					//alert("Pdf edited successfully.");
				}
				else{
					 $("#AddSceneErr_msg").text("Error while edit pdf for scene.");
					 $("#AddSceneErr_Modal").modal('show');
					//alert("Error while edit pdf for scene.");
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
   
   
/* ============== Edit question on click function ======================== */
   

   $(document).on('click','.question_Edit',function(){
	   
	   $(".editQuestionDiv").css({"display":"block"});
	   $(".view_lessonDiv").css({"display":"none"});
	   
	   var sceneId = Number($(this).attr('sceneId')); 
	   var ques_Id = $(this).attr('question_id');
	   var question = $(this).attr('question_text');
	   var answer = $(this).attr('answer');
	   
	   $("#Edit_QuestionButton").attr('sceneId',sceneId);
	   $("#Edit_QuestionButton").attr('ques_Id',ques_Id);
	   $("#Edit_QuestionButton").attr('question',question);
	   $("#Edit_QuestionButton").attr('answer',answer);
	   
	   $("#Edit_question").val(question);
	   $("#Edit_answer").val(answer);
	   
	   var id = $(this).attr('id');
	   var getNo = id.split('-');
	   var option_count = 0;
	   
	   $('#optiontd-'+getNo[1]+' .optionClass').each(function(){
	  	console.log($(this).text());
	  	
	  	var html='';
	   
	    option_count++;
	    
	  	html+='<div class="row">';
	  	html+='<div class="col-md-2 col-sm-2 col-xs-12">';
	  	html+='<label>Option :</label>';
	  	html+='</div>';
	  	html+='<div class="col-md-4 col-sm-4 col-xs-12">';
	  	
	  	html+='<div class="form-group">';
	  	//html+='<input class="option_value">'+$(this).text()+'</p>';
	  	html+='<input id="option'+option_count+'" class="form-control moreoptionClass" value="'+$(this).text()+'">';
	  	html+='</div>';
	  	
	  	html+='</div>';
	  	html+='</div>';
	  	
	  
	  	
	  //	option_count++;
	  	
	  	//html+='<p class="option_value">'+$(this).text()+'</p>';
	  	$("#edit_option").append(html);
	  
	   });

	   
       	   
   });
   
   $(document).on('click','.addMoreOptionClass',function(){
	   var html ="";
	   html += '<div class="row">';
	   html += '<div class="col-md-2 col-sm-2 col-xs-12"><div class="form-group"><label>Option :</label></div></div>';
	   html += '<div class="col-md-4 col-sm-4 col-xs-12"><div class="form-group"><input id="" name="" class="form-control moreoptionClass" type="text"></div></div>';
	   html += '</div>';
	   $('#edit_option').append(html);
   });   
   
/* =================================== Edit question web service  ============================================ */    

   $("#Edit_QuestionButton").on('click',function(){
	   
	   var sceneId = Number($(this).attr('sceneId')); 
	   var ques_Id = $(this).attr('ques_Id');
	   //var question = $(this).attr('question');
	   //var answer = $(this).attr('answer');
	   
	   var noOffOption = 0;
	   var optionObj = {};
	   var ltr = 65;
	   
	   $('.moreoptionClass').each(function(){
			  
		   if($(this).val() != "") {
			   noOffOption = noOffOption+1;
			   var letter = String.fromCharCode(ltr);
			   optionObj[letter] = $(this).val();	
			   ltr = ltr +1;   
		   }
		   
	   });
	   
	   console.log(optionObj);
	   
	   var question = $("#Edit_question").val();
	   var answer = $("#Edit_answer").val();
	   
	   if(question == ''){
		   $("#AddSceneErr_msg").text("Please enter question.");
		   $("#AddSceneErr_Modal").modal('show');
		   // alert("Please enter question.");
	   }
	   else if(answer == ''){
		   $("#AddSceneErr_msg").text("Please enter an answer.");
		   $("#AddSceneErr_Modal").modal('show');
		   //alert("Please enter an answer.");
	   }
	   
	   else{
	   
		   var reqJSON = {"sceneId":sceneId,"questionId":ques_Id,"answer":answer,"options":optionObj,"questionText":question};
		   
		   $.ajax({
				type : "POST",
				url : "http://twelevelinewonder.appspot.com/EditQuestions",
				data : JSON.stringify(reqJSON),
	
				success : function(response) {
					
					var obj = JSON.parse(response);
					
					if (obj.message == "success") {
						$("#AddSceneErr_msg").text("Question edited successfully.");
						$("#AddSceneErr_Modal").modal('show');
						//alert("question edited successfully.");
					}
					else{
						$("#AddSceneErr_msg").text("Error while edit questions and options.");
						$("#AddSceneErr_Modal").modal('show');
						//alert("Error while edit questions and options.");
					}
					
				}
		   });
	   
	   }
	   
   });
   
   
   
   
/* ===================== Delete question web service ========================== */
   
   
 $(document).on('click','.question_Delete',function(){
	   
	   var sceneId = Number($(this).attr('sceneId')); 
	   var ques_Id = $(this).attr('question_id');
	   
	   var reqJSON = {"sceneId":sceneId,"questionId":ques_Id};
	   
	   $.ajax({
			type : "POST",
			url : "http://twelevelinewonder.appspot.com/DeleteQuestion",
			data : JSON.stringify(reqJSON),

			success : function(response) {
				
				var obj = JSON.parse(response);

				if (obj.message == "success") {
					
					$('.question_Delete').each(function(){
						
						if($(this).attr('question_id') == ques_Id){
							
							$(this).parent().parent().remove();

						}
					});
					//$(this).parent().parent().remove();
					$("#AddSceneErr_msg").text("Question removed successfully.");
					$("#AddSceneErr_Modal").modal('show');
					//alert("Question removed successfully.");
					
				}
				else{
					$("#AddSceneErr_msg").text("Error while delete question.");
					$("#AddSceneErr_Modal").modal('show');
					//alert("Error while delete question");
				}
				
			}
	   
	   
	   });
	   
       	   
   });
   
   
   $("#navtoDynamic_table").on('click',function(){
	   $(".view_lessonDiv").css({"display":"none"});
	   $(".dispAll_scenes").css({"display":"block"});
	   fetchScene();
   });
  	
  	

/*******************************************************************************
 * ****** Script for Add university web service function addUniversity(){
 * 
 * $('#add_university_form').validate({
 * 
 * rules: { university_name: { required: true }, university_emailId: { required:
 * true }, university_uniqueId: { required: true }, university_password:{
 * required: true } }, messages: { university_name: { required: "Please enter
 * university name*" }, university_emailId: { required: "Please enter EmailId*" },
 * university_uniqueId: { required: "Please enter UniqueId*" },
 * university_password:{ required: "Please enter password*" } }, submitHandler:
 * function (form) { $.ajax({ type: "POST", url:
 * "http://twelevelinewonder.appspot.com/AddUser", success:
 * function(response) { }
 * 
 * }); }
 * 
 * }); }
 */

/* **************** Dashboard Fetch Box by university ********************************** */

$(document).on('change','#Fetch_UniversityList',function() {
					
	var select_university = Number($("#Fetch_UniversityList option:selected").val());

	var html = '';
	
		if (select_university == "-1") {
			/*$("#Fetch_UniversityErr_msg").text("Please select university.");
			$("#fetchUni_errModal").modal("show");*/
			document.getElementById("fetchBox_List").innerHTML = '';
			//alert("Please Select University");
		} else {
			var reqJson = {universityId : select_university};
						
			$.ajax({
					
				type : "POST",
				url : "http://twelevelinewonder.appspot.com/FetchBoxByUniversity",
				data : JSON.stringify(reqJson),

				success : function(response) {

					var obj = JSON.parse(response);

					if (obj.message == 'success') {

					/*	var html = '';*/
						
						for (var i = 0; i < obj.data.length; i++) {

							html += '<div class="boxStyle">';
							html+= '<p class="" box_id="'+ obj.data[i].boxId+ '" box_name="'+ obj.data[i].boxName+ '" sceneNames="'+ obj.data[i].sceneNames+ '"><b>'+ obj.data[i].boxName+ '</b></p>';
							
							for(var j=0; j<obj.data[i].sceneNames.length;j++){
							/*	html+='<p scenename="'+obj.data[j].sceneNames+'">'+obj.data[j].sceneNames+'</p>';*/
								html+='<p>'+obj.data[i].sceneNames[j]+'</p>';
							}
							
							html+= '</div>';
							
						}

						document.getElementById("fetchBox_List").innerHTML = html;
						

					} else if(obj.message == 'List is empty') {
						$("#Fetch_UniversityErr_msg").text("This univesity has no boxes.");
						$("#fetchUni_errModal").modal("show");
						//alert("This univesity has no boxes.");	
						document.getElementById("fetchBox_List").innerHTML = '';
					}
					else{
						$("#Fetch_UniversityErr_msg").text("Error fetching box list.");
						$("#fetchUni_errModal").modal("show");
						//alert("Error fetching box list.");
					}
				}

			});

					}

});



     /* ************************  Remove scene webservice *********************** */

$(document).on('click','.removeScene',function(){
	
	var no = $(this).attr('remove-no');
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
		url :"http://twelevelinewonder.appspot.com/RemoveScenes",
		data :JSON.stringify(reqJSON), 
		success : function(response){
			var obj = JSON.parse(response);
			if(obj.message == "success"){
				$("#AddSceneErr_msg").text('Remove scene successfully.');
				$("#AddSceneErr_Modal").modal('show');
			//	alert("Success");
			}else{
				$("#AddSceneErr_msg").text('Please try again');
				$("#AddSceneErr_Modal").modal('show');
				//alert("Please try again");
			}
		}
	});
	
});

$(".logout_btn").on('click',function(){
	localStorage.removeItem('userId');
	localStorage.removeItem('uniqueId');
	window.location.href = "login.html";
});
      
$("#crtUser,#uni_sidebar,#box_sidebar,#scene_sidebar,#overUsr,#resetPW").on('click',function(){
	 $('#sidebar').removeClass('active'); 
     $('.overlay').fadeOut();
});

$("#backtoSceneList_fromReview").on('click',function(){
	$(".reviewSceneDiv").css({"display":"none"});
	$(".dispAll_scenes").css({"display":"block"});
});

$("#backToViewLessonBtn").on('click',function(){
	$(".editQuestionDiv").css({"display":"none"});
	$(".view_lessonDiv").css({"display":"block"});
	fetchQA();
	document.getElementById("edit_option").innerHTML = '';
});


