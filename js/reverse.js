var input=document.createElement("INPUT");
	input.setAttribute("type","text");
	input.setAttribute("placeholder","Enter a number:");
	input.setAttribute("id","nithi");
	input.style.backgroundColor="antiquewhite";
	input.style.height="40px";
	input.style.width="270px";
	document.body.appendChild(input);
	document.write('<br/>','<br/>.');
	
	document.body.style.backgroundColor="crimson";
	document.body.style.textAlign="center";
	document.body.style.paddingTop="290px";
	
	button=document.createElement("button");
	button.setAttribute("onclick","reverse()");
	button.innerText="Click";
	button.style.backgroundColor="yellow";
	button.style.height="30px";
	button.style.width="70px";
   document.body.appendChild(button)
 
   


 function reverse()
{
var value=document.getElementById("nithi").value;
 while(value>0){
     rem=value%10
     value=(value-rem)/10
     if (rem==1)
	 {
		 document.write("one");
		 document.write("<br>")
	 }
	 else if (rem==2)
	 {
		 document.write("two")
		  document.write("<br>")
	 }
	 else if (rem==3)
	 {
		 document.write("three")
		  document.write("<br>")
	 }
	 else if (rem==4)
	 {
		 document.write("four")
		  document.write("<br>")
	 }
	 else if (rem==5)
	 {
		 document.write("five")
		  document.write("<br>")
	 }
	 else if (rem==6)
	 {
		 document.write("six")
		  document.write("<br>")
	 }
	 else if (rem==7)
	 {
		 document.write("seven")
		  document.write("<br>")
	 }
	 else if (rem==8)
	 {
		 document.write("eight")
		  document.write("<br>")
	 }
	 else if (rem==9)
	 {
		 document.write("nine")
		  document.write("<br>")
	 }
	 else
	 {
		 document.write("zero")
		  document.write("<br>")
	 }
 }

}