function mainController($scope) {
    $scope.eduArray = [{
        "course": "Bachelor Of Computer Applications - 83.40%",
        "college": "Govinda Dasa First Grade College, Surathkal",
        "university": "Mangalore University",
        "batch": "2011-14"
    }, {
        "course": "10+2 (P.U.C) - P.C.M.C - 42.83%",
        "college": "Narayana Guru Comp PU College, Mulki",
        "university": "Department Of Pre-University Education",
        "batch": "2010"
    }, {
        "course": "10TH (S.S.L.C) - 63.84%",
        "college": "Christian High School, Udupi",
        "university": "Karnataka Secondary Educational Board",
        "batch": "2008"
    }];

    $scope.projectArray = [ {
        "project": "BYZERO (https://byzeroacharya.github.io/)",
        "techUsed": "HTML, CSS, Bootstrap and J Query",
        "description": "A site for an event which took place at Acharya College on 8th of Oct."
    },{
        "project": "Portfolio (Current Site)",
        "techUsed": "HTML5, CSS3, JQuery and AngularJS",
        "description": "Entire details of curriculum , which tells my interest/skills, Experience, Projects details, Educational Qualifications and my contact details. One Can download my CV in contact menu"
    }, {
        "project": "Portfolio (https://nasirbcroad.github.io)",
        "techUsed": "HTML5, CSS3 and JQuery",
        "description": "Entire detail of Abdul Nasir."
    }, {
        "project": "A. I. M. S (Attendance and Internal Management System)",
        "techUsed": "C#, .net framework and Sql 2008",
        "description": "This system is basically built to record entire details of college. This is mainly built to maintain attendance and internal details of student. It includes sms and e-mail facility. Whenever a student is absent for a class this system automatically sends a bulk sms to the respective parents. Also scored and certified 96.25% in final SEM project named ATTENDANCE AND INTERNAL MANAGEMENT SYSTEM (A.I.M.S) For GOVINDA DASA COLLEGE in C#."
    }, {
        "project": "N. B. G. S(New Bhartah Garments System)",
        "techUsed": "C#, .net framework and Sql 2008",
        "description": "This system is mainly built for keeping track of income, expense and profit. The user has to enter the purchased item, and expense details. Billing is another major part of this system. A message is sent to the customer automatically regarding his purchase, if he provides number. At the end of the day user gets entire report of day’s sales, profit and expense detail."
    }, {
        "project": "G.C.I.S(Global Computer Institute System)",
        "techUsed": "C#, .net framework and Sql 2008",
        "description": "This system is mainly built record Staff, Student and Account details of the institute. This also calculates salary of the staff based on their attendance."
    }];
     $scope.skillsGArray = [{
        "skills": "Photoshop",
        "skillsLevel": "50"
    },{
        "skills": "Illustrator",
        "skillsLevel": "20"
    },{
        "skills": "Flash",
        "skillsLevel": "30"
    },{
        "skills": "CoralDraw",
        "skillsLevel": "25"
    },{
        "skills": "Page Maker",
        "skillsLevel": "50"
    }];

     $scope.skillsPSJArray = [{
        "skills": "HTML",
        "skillsLevel": "80"
    },{
        "skills": "CSS",
        "skillsLevel": "70"
    },{
        "skills": "JQuery",
        "skillsLevel": "50"
    },{
        "skills": "JavaScript",
        "skillsLevel": "52"
    },{
        "skills": "BootStrap",
        "skillsLevel": "60"
    },{
        "skills": "C#",
        "skillsLevel": "40"
    },{
        "skills": "MySQL",
        "skillsLevel": "70"
    },{
        "skills":"AngularJS",
        "skillsLevel":"20"
    }];
}

var data1 = [{
        value: 83.40,
        color: "#23A6D3",
        highlight: "#FFC870",
        label: "Obtained"
    }, {
        value: 16.6,
        color: "#C2DFFF",
        highlight: "#FFC870",
        label: "Lost"
    }];

    var data2 = [{
        value: 42.83,
        color: "#23A6D3",
        highlight: "#FFC870",
        label: "Obtained"
    }, {
        value: 57.17,
        color: "#C2DFFF",
        highlight: "#FFC870",
        label: "Lost"
    }];

    var data3 = [{
        value: 63.84,
        color: "#23A6D3",
        highlight: "#FFC870",
        label: "Obtained"
    }, {
        value: 36.16,
        color: "#C2DFFF",
        highlight: "#FFC870",
        label: "Lost"
    }];
var options = {};
    chartInit = function() {
        var ctx1 = document.getElementById('canvas1').getContext('2d');
        var myDoughnutChart1 = new Chart(ctx1).Doughnut(data1, options);
        var ctx2 = document.getElementById('canvas2').getContext('2d');
        var myDoughnutChart2 = new Chart(ctx2).Doughnut(data2, options);
        var ctx3 = document.getElementById('canvas3').getContext('2d');
        var myDoughnutChart3 = new Chart(ctx3).Doughnut(data3, options);
            $("canvas").css({"width":"100%","height":"100%"});
    }

var app = angular.module("resume", []);
app.controller("mainController", mainController);

$(document).ready(function() {
    loading();
    window.setInterval(function(){chng();},500);
    window.setInterval(function(){skillsImg();},800);
    $(".navbar").children().first().addClass("selected");
    $(".blackboard1").slideDown("slow");
    $(".blackboard1").addClass("inblock");    
    $(".menu-text").click(function(){
        menuClick();
    });
});

function menuClick(){
    $(".menu-list").toggle("slow");
    if($(".data").hasClass("center"))
    {
        $(".data").removeClass("center").addClass("right");
    }
    else
    {
        $(".data").removeClass("right").addClass("center");
    }
}

$(".navbar li").click(function() {
    $(".navbar").children().removeClass("selected");
    $(this).addClass("selected");
    bar(this);
});

$(".navbar2 li").click(function() {
    $(".navbar2 ul").children().removeClass("menuSel");
    $(this).addClass("menuSel");
    bar(this);
    menuClick();
});


function bar(a){
    $(".blackboard").removeClass("inblock");
    $(".blackboard").hide();
    $(".blackboard" + $(a).attr("data-index")).slideDown(3000);
    $(".blackboard" + $(a).attr("data-index")).addClass("inblock");
    if($(a).attr("data-index")=="1"){
        pro();
    }
    else if($(a).attr("data-index")=="3"){
        chartInit();
    }
}

function pro(){
    $(".pro2",".container-fluid").each(function(){
        $(this).css({"width":"0%"});
        $(this).empty();
        var level="";
        if($(this).attr("data-value")>=90)
            level="Master";
        else if($(this).attr("data-value")>=70)
            level="Expert";
        else if($(this).attr("data-value")>=55)
            level="Proficient";
        else if($(this).attr("data-value")>=30)
            level="Familiar";
        else if($(this).attr("data-value")<30)
            level="Beginner";

        $(this).append(level);
        $(this).animate({"width":$(this).attr("data-value")+"%"},4000);
        
    });
}


function skillsImg(){
    $("img",".chartbox").each(function(){
        
    });
}
var no=0,stop=0;
function loading(){
  var len=$(".loading-content").text().length;
  var str=[];

  for (i=0;i<len;i++){
    str[i]='<span class="e'+i+'">'+$(".loading-content").text().charAt(i)+'</span>';
  }
  $(".loading-content").remove();
  $(".loading-main").append('<div class="loading-content"></div>');

   for (i=0;i<len;i++){
      $(".loading-content").append(str[i]);;
   }
}

function chng(){
  $(".loading-content").children().removeClass("f1");
  if($(".e"+no).text()==" ")
    no++;
  $(".loading-content").addClass("f2");
  $(".e"+no).addClass("f1");
  if(no==$(".loading-content").text().length-1)
    no=0;
  else
    no++;
  stop++;
  if(stop==20)
{ window.clearInterval();
  $(".loading-main").hide();
  $(".outer").show();
    pro();
}
}