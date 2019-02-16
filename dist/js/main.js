 

function validation(){
       
       var user = document.getElementById('user').value;
       var pass = document.getElementById('pass').value;
       var conpass = document.getElementById('conpass').value;
       var mobileNumber = document.getElementById('mobileNumber').value;
       var emails = document.getElementById('emails').value;
       
      if(user == ''){
          document.getElementById('username').innerHTML = "**Please fill the User Name Field";
          
          return false;
      }
      if((user.lenght <=2 ) || (user.lenght > 20)){
          document.getElementById('username').innerHTML = "** user length must be between 2 or 20 ";
          return false;
      }
      if(!isNaN(user)){
          document.getElementById('username').innerHTML ="*only character are allowed";
          return false;
      }
      

    
    
     if(pass == ''){
          document.getElementById('passwords').innerHTML = "**Please fill the PassWord Field";
          
          return false;
      }
      if((pass.lenght <=5 ) || (pass.lenght > 20)){
        document.getElementById('passwords').innerHTML = "** passWord length must be between 2 or 20 ";
        return false;
    }
    if(pass != conpass){
        document.getElementById('confrmpass').innerHTML = "** Your Password is not match"
    }

     if(conpass == ''){
          document.getElementById('confrmpass').innerHTML = "**Please fill the Confirm Password Field";
          
          return false;
      }
     if(mobileNumber == ''){
          document.getElementById('mobileno').innerHTML = "**Please fill the MobileNumber Field";
          
          return false;
      }
      if(isNaN(mobileNumber)){
        document.getElementById('mobileno').innerHTML = "**Please Write Only Digit Not character";
          
        return false; 
      }
     if(mobileNumber.lenght != 10){
        document.getElementById('mobileno').innerHTML = "** Mobile Number Must be 10 Digit";
          
        return false; 
     }


     if(emails == ''){
          document.getElementById('emailids').innerHTML = "**Please fill the Emails Field";
          
          return false;
      }
       
      if(emails.indexOf('@') <= 0){
        document.getElementById('emailids').innerHTML = "** @ Invalid Position";
          
        return false;
      }
      if((emails.charAt(emails.length-4)!='.') && (emails.charAt(emails.length-3)!='.')){
        document.getElementById('emailids').innerHTML =" ** . Invalid Position";
        return false;
    }
      

      
}  

