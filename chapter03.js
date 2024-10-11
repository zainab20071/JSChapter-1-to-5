
 let age=17;
 let content= 'I am'+ age +'years old';
 alert(content);      

//  2.Declare and initialize a variable to keep track of how many times a
// visitor has visited a web page.

        // Answer
       
  let visitCount=localStorage.getItem("visitCount")||0;
  visitCount++;
  let context = 'You have visited this site'+ visitCount +'times'
 alert(context);    

// 3.Declare a variable called birth year & assign to it your  birth year.
       
        //   Answer

 document.getElementById("variable-year").innerHTML=" My birth year is 2008"
 
 document.getElementById("variable-type").innerHTML=" Data type of my declared variable is number"

 document.getElementById("variable-message").innerHTML="<b>John Doe</b> ordered <b> 5 T-Shirt</b>(s) on XYZ Clothing store. "
