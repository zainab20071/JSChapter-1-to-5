// 1.Declare 3 variables in ane statement.

            //  Answer

let num1=20, num2=20, num3= 40;
sum=num1+num2+num3;
console.log(sum);

// 2.Declare 5 legal and 5 illegal varibles names

                //   Answer
 
                    // Legal variables names
                    
   let lastName="John";
   let username="David";
   let agge=30;
   let $sum=100;
   let is_ADMIN=true;
   
   console.log(lastName);
   console.log(username);
   console.log(agge);
   console.log($sum);
   console.log(is_ADMIN);

                //    illegal variable names

    // let 1stName="John";
    // let my-variable="value";
    // let @username="David";
    // let function="test";
    // let = "test";
    
    // console.log(1stName);
    // console.log(my-variable);
    // console.log(@username);
    // console.log(function);
    // console.log();

    // 3.Display this in your browser
    // a. A heading stating "Rules for naming JS variables"

            // Answer

    document.getElementById("heading").innerHTML="Rules for JS variables";


    // b.Variable names can only contain ________,______,_______and_____.
     
    // Answer

   document.getElementById("variable-rules").innerHTML="Variable names can only contain letters,numbers,underscores,(),and dollar signs($). (For Example:$my_1stVariable)"
   
//    c. Variables must begin with a _____,_____or_____.For Example $name,name or name

    // Answer

 document.getElementById("variables-rules").innerHTML="Variables must begin with a letter, underscore (), or dollar sign ($). For Example: $name,name,orname"   

//  d.Variable names are  case _______

        //  Answer

  document.getElementById("variable-case").innerHTML="Variable names are case sensitive"
  
//   e.Variable names should not be JS _______

        // Answer

        document.getElementById("variable-name").innerHTML="Variable names should not be JS keywords"   