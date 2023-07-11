function Clear(){
    var ele=document.getElementById("ans");
      ele.innerHTML=" ";
  }
  var cal=document.getElementById("cal");
    cal.addEventListener("click",calclick);
    function calclick(){
      let x=document.getElementById("in");
      let y=x.value;
      var ele=document.getElementById("ans");
      var first=document.getElementById("from");
      var second=document.getElementById("to");
      var pahla=first.value;
      var dusra=second.value;
      first.addEventListener("change",function(){
        var pahla=this.value;
      });
      second.addEventListener("change",function(){
        var dusra=this.value;
      });
      if(pahla==="C"){
         if(dusra==="F"){
          var ans=(y*9)/5+32;
          ele.innerHTML=ans;
         }else{
          ele.innerHTML=y;
         }
      }else{
          if(dusra==="C"){
            var ans=(y-32)*5/9;
            ele.innerHTML=ans;
          }else{
            ele.innerHTML=y;
          }
      }
    }