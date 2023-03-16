function java(){
  let start = document.getElementById('start').value;
  let end = document.getElementById('end').value;
 let table = document.getElementById('show').value;
   let showresult;
   document.getElementById('result').innerHTML="";

   for (let x=start; x<=end; x++){
    showresult = table + " x " + x + " = " + table*x;
    let show= "<h1>"+showresult+"</h1>"
    document.getElementById('result').innerHTML+=show;

   }


}