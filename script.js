function sub(event){
     var c=event.target.parentNode;
     c.style.display='none';
     c.nextElementSibling.style.display='block';
}

function prev(event){
    var b = event.target.parentNode;
    b.previousElementSibling.style.display='block';
    b.style.display='none';
}

function start_again(){
  location.reload();
}

function timerr(){
  var m=9;
  var s=59;
  document.getElementById('time').style.display='block';
function min(){
  m = m-1;
  document.getElementById('time').innerHTML= m+":"+s;
  
}
function sec(){
  if(s==0){
    s=59;
  }
  else{
    s=s-1;
  }

  document.getElementById('time').innerHTML=m+":"+s;
}
setInterval(min,60000);
setInterval(sec,1000);
}

var res=0;
function enable(event){
  var ans = new Set (
    ['Object-Based',
      'immediate if',
      'block that combines a number of statements into a single compound statement',
      'valueOf()',
      'Ignores the statements',
      'Declaration statements',
      'The local element',
      'Function/Method',
      'Mutable variable',
      'Division by zero']
  )
 if(ans.has(event.target.nextElementSibling.innerHTML)){res+=1;}
  event.target.parentNode.parentNode.parentNode.nextElementSibling.disabled=false;
}

function show(){
  document.getElementById('result').innerHTML="You have scored "+res+" out of 10 ";
}
