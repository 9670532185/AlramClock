 var p=new Date();
 var month;
 switch(p.getMonth())
 {
    case 0:
        month="jan";
        break;
        case 1:
        month="fab";
        break;
        case 3:
        month="mar";
        break;
        case 4:
        month="April";
        break;
        case 5:
        month="May";
        break;
        case 6:
        month="june";
        break;
        case 7:
        month="july";
        break;
        case 8:
        month="August";
        break;
        case 9:
        month="Sep";
        break;
        case 10:
        month="Oct";
        break;
        case 11:
        month="Nov";
        break;
        case 12:
        month="Dec";
      break;
 }
 function time(){
    var d=new Date();
    if(d.getHours()<10)
    {
        document.getElementById("hr").innerHTML='0'+d.getHours();

    }
    else {
        document.getElementById("hr").innerHTML=d.getHours();

    }
    if(d.getMinutes()<10)
    {
        document.getElementById("min").innerHTML='0'+d.getMinutes();

    }
    else{

        document.getElementById("min").innerHTML=d.getMinutes();
    }
    if(d.getSeconds()<10)
    {
        document.getElementById("sec").innerHTML='0'+d.getSeconds();
    }
    else{
        document.getElementById("sec").innerHTML=d.getSeconds();
    }
    document.getElementById("date").innerHTML=d.getDate()+" "+month+" "+d.getFullYear();
    setTimeout(time,1000);
}

time();
function settime()
{
  document.getElementById("settime").style.visibility="visible";

}
function  saveAlrem(){
    var hour=document.getElementById("setHr").value;
    var minute=document.getElementById("setMin").value;
    var second=document.getElementById("setsec").value;
    document.getElementById("setbtn").setAttribute("onclcik",
    "cancelbtn()");
    function x(){
        document.getElementById("settime").innerHTML="your alarm is set for"+hour+":"+minute+":"+second;
        document.getElementById("settime").style.fontSize="xxx-large";
         document.getElementById("settime").style.fontWeight="bold";
         document.getElementById("settime").style.paddingLeft="99px";
         document.getElementById("settime").style.paddingTop="45px";
         document.getElementById("settime").style.color="deeppink";
         document.getElementById("setbtn").innerHTML="cancel Alerm";
         if(document.getElementById("hr").innerHTML==hour && 
         document.getElementById("min").innerHTML==minute && document
         .getElementById("sec").innerHTML==second)
         {
            var audio=new Audio("C:\Users\Sachin Dwivedi\Downloads\alarm-clock-short-6402.mp3");
            setInterval(()=>{
                audio.play()
                
            },1000);
         }
         else{
            setTimeout(x,100);
         }
    }
    x();


}
function cancelbtn(){
    window.location.reload();
}