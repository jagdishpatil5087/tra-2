


const fileinput = document.querySelector(".file-input")
previewImg = document.querySelector(".preview-Img Img")
 previewImg_2 = document.querySelector(".preview-Img_2 Img")


chooseImgBut = document.querySelector(".choose-img")

const loadImge = () => {

    let file = fileinput.files[0];
    console.log(fileinput)
    if (!file)  return; 
    console.log(file);
    previewImg.src = URL.createObjectURL(file)
    previewImg_2.src = URL.createObjectURL(file)

}

fileinput.addEventListener("change", loadImge)

chooseImgBut.addEventListener("click", () => fileinput.click() );



let jagdish = document.getElementById("next_fill_information");

jagdish.addEventListener("click", fun_tra)

  function fun_tra (){

    let x=10;

  let name_ = document.getElementById("myname").value;
  document.getElementById("name-id").textContent = name_;

  let email = document.getElementById("myemail").value;
  document.getElementById("email-id").textContent = email;

  let phone = document.getElementById("myphoneno").value;
  document.getElementById("phone-id").textContent = "+91 " + phone;

  let address = document.getElementById("myaddress").value;
  document.getElementById("address-id").textContent = address;

  return x;

}


document.getElementById("next_post_G_id").onclick = function () {
  let M_degree = document.getElementById("M-mydegree").value;
document.getElementById("M-Degree-id").textContent = M_degree;
document

let M_college = document.getElementById("M-mycollege").value;
document.getElementById("M-College-id").textContent = M_college;

let M_start_date = document.getElementById("M-my-Start_date");
let M_end_date = document.getElementById("M-my-end_date");

document.getElementById("M-Start-date-id").textContent = M_start_date.options[M_start_date.selectedIndex].text + " - " + M_end_date.options[M_end_date.selectedIndex].text;

let M_cgpa = document.getElementById("M-mycgpa")
let M_performance = document.getElementById("M-myperformance").value
let M_tra = M_cgpa.options[M_cgpa.selectedIndex].text
let M_first_part = M_tra.slice(0, 4);
let M_last_part = M_tra.slice(14, 17);
let M_tra_performance =M_first_part + ": " + M_performance + "/" + M_last_part

document.getElementById("M-mycgpa-id").textContent = M_tra_performance

let M_status = document.getElementById("M-mystatus")

console.log(M_status.options[M_status.selectedIndex].text )

if (M_status.options[M_status.selectedIndex].text=="Pursuing") {
  console.log("hii")
  document.getElementById("M-status").textContent = M_status.options[M_status.selectedIndex].text 
  
}
}



document.getElementById("next_post_B_id").onclick = function () {
//B
  let degree = document.getElementById("mydegree").value;
  document.getElementById("Degree-id").textContent = degree;

  let college = document.getElementById("mycollege").value;
  document.getElementById("College-id").textContent = college;

  let start_date = document.getElementById("my-Start_date");
  let end_date = document.getElementById("my-end_date");

  document.getElementById("Start-date-id").textContent = start_date.options[start_date.selectedIndex].text + " - " + end_date.options[end_date.selectedIndex].text;
  
  let cgpa = document.getElementById("mycgpa")
  let performance = document.getElementById("myperformance").value
  let tra = cgpa.options[cgpa.selectedIndex].text
  let first_part = tra.slice(0, 4);
  let last_part = tra.slice(14, 17);
  console.log(first_part)
  console.log(last_part)
  let tra_performance = first_part + ": " + performance + "/" + last_part

  document.getElementById("mycgpa-id").textContent = tra_performance


  let B_status = document.getElementById("B-mystatus")

if (textContent = B_status.options[B_status.selectedIndex].text =="Pursuing") {
  document.getElementById("G-status").textContent = B_status.options[B_status.selectedIndex].text 
  
}
}


 document.getElementById("function-next_(xii)").onclick = function () {

  

  let stream = document.getElementById("my-stream_xii")
  document.getElementById("stream_xii-id").textContent = "Senior Secondary (XII) , " + stream.options[stream.selectedIndex].text
 
  let Secondary_xii = document.getElementById("my-Secondary_xii").value
  document.getElementById("Secondary_xii-id").textContent = Secondary_xii;
  
   let board = document.getElementById("my-se-board")
   document.getElementById("se-board-id").textContent = board.options[board.selectedIndex].text + " board"

   let se_completion = document.getElementById("my-se-completion")
   document.getElementById("se-completion-id").textContent = "Year of completion: " + se_completion.options[se_completion.selectedIndex].text

   let se_percentage = document.getElementById("my-se-percentage").value
   document.getElementById("se-percentage-id").textContent = "percentage: " + se_percentage;
 }



 document.getElementById("function-next_(x)").onclick = function () {

  document.getElementById("school_name_id").textContent = "Secondary (X)";

   let Secondary = document.getElementById("my-Secondary").value
   document.getElementById("Secondary-x-id").textContent = Secondary;



   let board_x = document.getElementById("my-board")
   document.getElementById("board-x-id").textContent = board_x.options[board_x.selectedIndex].text + " board"

   let x_completion = document.getElementById("my-completion")
   document.getElementById("completion-id").textContent = "Year of completion: " + x_completion.options[x_completion.selectedIndex].text

   let x_percentage = document.getElementById("my-percentage").value
   document.getElementById("percentage-id").textContent = "percentage: " + x_percentage;

 }

 

 document.getElementById("function-next_jobs").onclick = function () {


   let jobs_Location = document.getElementById("my-jobs-Location").value
   let jobs_Online_offline = document.getElementById("my-jobs_online")
   let jobs_Organization = document.getElementById("my-jobs-Organization").value

  document.getElementById("Organization-jobs-id").textContent = jobs_Organization + ", " + jobs_Location ;
   let jobs_s_date = document.getElementById("my-jobs-t1-Start_date").value
   let jobs_e_date = document.getElementById("my-jobs-t1-end_date").value
   document.getElementById("jobs_date-id").textContent = jobs_s_date + "  -  " + jobs_e_date

   if(jobs_Online_offline.options[jobs_Online_offline.selectedIndex].text=="yes"){
    
    document.getElementById("jobs-status-id").textContent = " i am working now"
   }
   else{
    document.getElementById("jobs-status-id").textContent = " i not am working now"

   }
   let jobs_Description = document.getElementById("my-jobs-Description-text").value
   document.getElementById("jobs_Description-text-id").textContent = jobs_Description

   
 let jobs_program = document.getElementById("my-jobs_program").value

  document.getElementById("job-Profile-id").textContent =jobs_program  ;
 }

 document.getElementById("button_fun_internship").onclick = function () {

 let Internship_program = document.getElementById("my-Internship_program").value

 document.getElementById("Internship-Profile-id").textContent =Internship_program  ;


  let Internship_Location = document.getElementById("my-Internship-Location").value
  let Internship_Online_offline = document.getElementById("my-Internship_online")
  let Internship_Organization = document.getElementById("my-Internship-Organization").value

 document.getElementById("Organization-Internship-id").textContent = Internship_Organization + ", " + Internship_Location ;
  let Internship_s_date = document.getElementById("my-Internship-t1-Start_date").value
  let Internship_e_date = document.getElementById("my-Internship-t1-end_date").value
  document.getElementById("Internship_date-id").textContent = Internship_s_date + "  -  " + Internship_e_date

  if(Internship_Online_offline.options[Internship_Online_offline.selectedIndex].text=="yes"){
   
   document.getElementById("Internship-status-id").textContent = " i am working now"
  }
  else{
   document.getElementById("Internship-status-id").textContent = " i not am working now"

  }


  let Internship_Description = document.getElementById("my-Internship-Description-text").value
  document.getElementById("Internship_Description-text-id").textContent = Internship_Description
 }

 document.getElementById("button_fun_project").onclick = function () {

 let project_program = document.getElementById("my-project_program").value

 document.getElementById("project-Profile-id").textContent =project_program  ;

 let project_s_date = document.getElementById("my-project-t1-Start_date").value
  let project_e_date = document.getElementById("my-project-t1-end_date").value
  document.getElementById("project_date-id").textContent = project_s_date + "  -  " + project_e_date

  let project_link = document.getElementById("my-project_link").value

 document.getElementById("project-link-id").innerHTML=" <a href= " + project_link  + "  > " + project_link  +"  </a>  ";


  let project_Description = document.getElementById("my-project-Description-text").value
  document.getElementById("project_Description-text-id").textContent = project_Description
 }


 document.getElementById("button_fun_por").onclick = function () {

let por_Description = document.getElementById("my-por-Description-text").value
 document.getElementById("por_Description-text-id").textContent = por_Description

 }

 document.getElementById("button_fun_Training").onclick = function () {
let Training_program = document.getElementById("my-Training_program").value

   console.log("x")
   console.log(Training_program)

  document.getElementById("Training_program-id").textContent =Training_program  ;

 
  let Location = document.getElementById("my-Location").value
  let Online_offline = document.getElementById("my-Training_online")
  let Organization = document.getElementById("my-Organization").value

  document.getElementById("Organization-id").textContent = Organization + ", " + Location + Online_offline.options[Online_offline.selectedIndex].text;

  let Training_s_date = document.getElementById("my-t1-Start_date").value
  let Training_e_date = document.getElementById("my-t1-end_date").value
  document.getElementById("Training_date-id").textContent = Training_s_date + "  -  " + Training_e_date


  let Description = document.getElementById("my-Description-text").value
  document.getElementById("Description-text-id").textContent = Description

 }

 document.getElementById("function-next_skills").onclick = function () {
let skills_1 = document.getElementById("skills_1_name").value
  document.getElementById("skills_1_name_id").textContent = skills_1;

  let skills_leval_1 = document.getElementById("skills_leval-1")

  if (skills_leval_1.options[skills_leval_1.selectedIndex].text == "Beginner") {

    document.getElementById("skills_1_line_id").innerHTML = " <p style=\"border-bottom: 3px solid red; width: 30%  ;\" ></p> "
  }

  else if (skills_leval_1.options[skills_leval_1.selectedIndex].text == "Intermediate") {
    document.getElementById("skills_1_line_id").innerHTML = " <p style=\"border-bottom: 3px solid yellow; width: 50%  ;\"  ></p>        "

  }

  else if (skills_leval_1.options[skills_leval_1.selectedIndex].text == "Advanced") {
    document.getElementById("skills_1_line_id").innerHTML = " <p style=\"border-bottom: 3px solid rgb(0, 216, 0); width: 80%  ;\"  ></p>        "
  }


  let skills_2 = document.getElementById("skills_2_name").value
  document.getElementById("skills_2_name_id").textContent = skills_2;

  let skills_leval_2 = document.getElementById("skills_leval-2")

  if (skills_leval_2.options[skills_leval_2.selectedIndex].text == "Beginner") {

    document.getElementById("skills_2_line_id").innerHTML = " <p style=\"border-bottom: 3px solid red; width: 30%  ;\" ></p> "
  }

  else if (skills_leval_2.options[skills_leval_2.selectedIndex].text == "Intermediate") {
    document.getElementById("skills_2_line_id").innerHTML = " <p style=\"border-bottom: 3px solid yellow; width: 50%  ;\"  ></p>        "
  }

  else if (skills_leval_2.options[skills_leval_2.selectedIndex].text == "Advanced") {
    document.getElementById("skills_2_line_id").innerHTML = " <p style=\"border-bottom: 3px solid rgb(0, 216, 0); width: 80%  ;\"  ></p>        "

  }


  let skills_3 = document.getElementById("skills_3_name").value
  document.getElementById("skills_3_name_id").textContent = skills_3;

  let skills_leval_3 = document.getElementById("skills_leval-3")

  if (skills_leval_3.options[skills_leval_3.selectedIndex].text == "Beginner") {

    document.getElementById("skills_3_line_id").innerHTML = " <p style=\"border-bottom: 3px solid red; width: 30%  ;\" ></p> "
  }

  else if (skills_leval_3.options[skills_leval_3.selectedIndex].text == "Intermediate") {
    document.getElementById("skills_3_line_id").innerHTML = " <p style=\"border-bottom: 3px solid yellow; width: 50%  ;\"  ></p>        "

  }

  else if (skills_leval_3.options[skills_leval_3.selectedIndex].text == "Advanced") {
    document.getElementById("skills_3_line_id").innerHTML = " <p style=\"border-bottom: 3px solid rgb(0, 216, 0); width: 80%  ;\"  ></p>        "

  }

  let skills_4 = document.getElementById("skills_4_name").value
  document.getElementById("skills_4_name_id").textContent = skills_4;


  let skills_leval_4 = document.getElementById("skills_leval-4")

  if (skills_leval_4.options[skills_leval_4.selectedIndex].text == "Beginner") {

    document.getElementById("skills_4_line_id").innerHTML = " <p style=\"border-bottom: 3px solid red; width: 30%  ;\" ></p> "
  

  }

  else if (skills_leval_4.options[skills_leval_4.selectedIndex].text == "Intermediate") {
    document.getElementById("skills_4_line_id").innerHTML = " <p style=\"border-bottom: 3px solid yellow; width: 50%  ;\"  ></p>        "

  }

  else if (skills_leval_4.options[skills_leval_4.selectedIndex].text == "Advanced") {
    document.getElementById("skills_4_line_id").innerHTML = " <p style=\"border-bottom: 3px solid rgb(0, 216, 0); width: 80%  ;\"  ></p>        "

  }

  let skills_5 = document.getElementById("skills_5_name").value
  document.getElementById("skills_5_name_id").textContent = skills_5;


  let skills_leval_5 = document.getElementById("skills_leval-5")

  if (skills_leval_5.options[skills_leval_5.selectedIndex].text == "Beginner") {

    document.getElementById("skills_5_line_id").innerHTML = " <p style=\"border-bottom: 3px solid red; width: 30%  ;\" ></p> "


  }

  else if (skills_leval_5.options[skills_leval_5.selectedIndex].text == "Intermediate") {
    document.getElementById("skills_5_line_id").innerHTML = " <p style=\"border-bottom: 3px solid yellow; width: 50%  ;\"  ></p>        "
  }

  else if (skills_leval_5.options[skills_leval_5.selectedIndex].text == "Advanced") {
    document.getElementById("skills_5_line_id",).innerHTML = " <p style=\"border-bottom: 3px solid rgb(0, 216, 0); width: 80%  ;\"  ></p>        "

  }

 }

 document.getElementById("next_fun_Blog-link").onclick = function () {
  let Blog_link = document.getElementById("my-Blog-link").value

  console.log(Blog_link)

  document.getElementById("Blog-link-id").innerHTML="<p>Blog link </p> <a style=\"color: blue;\"  href= " + Blog_link  + "  > " + Blog_link  +"  </a>  ";

   let GitHub_link = document.getElementById("my-GitHub-link").value
   document.getElementById("GitHub-link-id").innerHTML="<p>GitHub link</p> <a style=\"color: blue;\"  href= " + GitHub_link  + "  > " + GitHub_link  +"  </a>  ";

   let Playstore_link = document.getElementById("my-Playstore-link").value
   document.getElementById("Playstore-link-id").innerHTML="<p>Play store developer</p> <a style=\"color: blue;\"  href= " + Playstore_link  + "  > " + Playstore_link  +"  </a>  ";

   let Behance_link = document.getElementById("my-Behance-link").value
   document.getElementById("Behance-link-id").innerHTML="<p>Behance portfolio link</p> <a style=\"color: blue;\"  href= " + Behance_link  + "  > " + Behance_link  +"  </a>  ";
  

   let work_Description = document.getElementById("my-work-Description-text").value
   document.getElementById("work-Description-text_id").textContent =  work_Description;
 }

 

  document.getElementById("function-next_last").onclick = function () {


  let add_work_Description = document.getElementById("my-add-work-Description-text").value
  document.getElementById("add-work-Description-text_id").textContent =  add_work_Description;


}



  function ok(){
             document.getElementById("pdf-invoice").style.width="40%";
              console.log("ok")
           }



window.onload = function () {
  document.getElementById("download")
      .addEventListener("click", () => {

          document.getElementById("pdf-invoice").style.width="100%";
          document.getElementById("edit_id_1").style.visibility="hidden"
          document.getElementById("edit_id_2").style.visibility="hidden"
          document.getElementById("edit_id_3").style.visibility="hidden"
          document.getElementById("edit_id_4").style.visibility="hidden"
          document.getElementById("edit_id_5").style.visibility="hidden"
          document.getElementById("edit_id_6").style.visibility="hidden"
          document.getElementById("edit_id_7").style.visibility="hidden"
          document.getElementById("edit_id_8").style.visibility="hidden"
          document.getElementById("edit_id_9").style.visibility="hidden"

          console.log("tra"+jagdish)

          const invoice = this.document.getElementById("pdf-invoice");



          var opt = {

              margin: 1,
              filename:'resume.pdf', 
              image: { type: 'jpeg', quality: 0.98 },
              html2canvas: { scale: 2 },
              jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
          };

          html2pdf().from(invoice).set(opt).save();


          
          
      })

       let pdf = document.getElementById('download');
     pdf.addEventListener("click",ok)

    }

  