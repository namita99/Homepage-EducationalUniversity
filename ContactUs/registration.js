function registration() {
    var name =
        document.forms.RegForm.Name.value;
    var email =
        document.forms.RegForm.EMail.value;
    var phone =
        document.forms.RegForm.Telephone.value;
    var what =
        document.forms.RegForm.Subject.value;
    var password =
        document.forms.RegForm.Password.value;
    var address =
        document.forms.RegForm.Address.value;
    var username = 
                document.forms.RegForm.username.value;
     

    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  
    var regPhone=/^\d{10}$/;                            
    var regName = /\d+$/g;                
     var regPwd = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;         

    if (name == "" || regName.test(name)) {
        window.alert("Please enter your name properly.");
        name.focus();
        return false;
    }
else  if(name.length <6){
        alert("Name should be atleast 6 character long");
        name.focus();
        return false;

    }

   else if (address == "") {
        window.alert("Please enter your address.");
        address.focus();
        return false;
    }
else if (username == "" || regName.test(username)) {
        window.alert("Please enter your username properly.");
        username.focus();
        return false;
    }
else  if(username.length <5){
        alert("Username should be atleast 5 character long");
       username.focus();
        return false;

    }
     
  else  if (email == "" || !regEmail.test(email)) {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
      

   else if (phone == "" || !regPhone.test(phone)) {
        alert("Please enter valid phone number.");
        phone.focus();
        return false;
    }

  
else
{                                           
   alert('Thank You for Registration & You are Redirecting to Website');
   // Redirecting to other page or webste code. 
  parent.location="anotherpage.html"
}

    return true;
}