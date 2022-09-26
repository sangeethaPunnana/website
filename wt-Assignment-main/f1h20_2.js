function validation(){
    var un=document.getElementById("name").value;
    var mail=document.getElementById("email").value;
    var ph=document.getElementById("mn").value;
    var pay=document.getElementById("payment").value;



    var pattern1=/^(F|f)[a-zA-Z]+$/;
    var pattern2 =/^[A-Za-z0-9_%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,6}$/;
    var ph1=/^(977)\d{7}$/;
    var ph2=/^\d{4}-\d{4}-\d{4}$/;
    var acc=/^(SBIN)[0-9]{7}$/;
    if(un.length<4 || un.length>9 || !pattern1.test(un)){
        document.getElementById("name").style.border="5px solid red";
        document.getElementById("name1").style.visibility="visible";
        setTimeout(()=>{document.getElementById('name1').style.display="none";
        document.getElementById("name").style.border="1px solid black";},2000);
        return false;
    }
    if(!pattern2.test(mail)){
        document.getElementById("email").style.border="5px solid red";
        document.getElementById("email1").style.visibility="visible";
        setTimeout(()=>{document.getElementById('email1').style.display="none";
        document.getElementById("email").style.border="1px solid black";},2000)
        return false;
    }
    if(!ph1.test(ph) && !ph2.test(ph))
    {
        document.getElementById("mn").style.border="5px solid red";
        document.getElementById("mn1").style.visibility="visible";
        setTimeout(()=>{document.getElementById('mn1').style.display="none";
        document.getElementById("mn").style.border="1px solid black";},2000)
        return false;
    }
    if(!acc.test(pay)){
        document.getElementById("payment").style.border="5px solid red";
        document.getElementById("payment1").style.visibility="visible";
        setTimeout(()=>{document.getElementById('payment1').style.display="none";
        document.getElementById("payment").style.border="1px solid black";},2000)
        return false;
    }
}

function toUpperCase(name){
    name.value=name.toUpperCase();
}


const box = document.getElementById('box');


box.addEventListener('mouseover', function handleMouseOver() {
  box.style.color = 'yellow';
  
});

box.addEventListener('mouseout', function handleMouseOut() {
  box.style.color = 'white';
});
