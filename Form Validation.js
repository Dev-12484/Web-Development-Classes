function validate ()
{
    var p1 = document.getElementById("pass").value;
    var p2 = document.getElementById("cpass").value;
    var user = document.getElementById("username").value;
    var cb = document.getElementById("cb");



    // regular expressions are used for pattern matching
    // ^ symbaol is used to specify start
    var re = /^00[A-Z]{1}[A-Z a-z -]{8,15}$/ ; 
    var no = /^05[05][0-9]{7}/ ;

    if ( no.test(user) == false){
        alert("Invlaid Contact Number");
        return false;
    }

    if ( re.test(user) == false){
        alert("Invalid Username");
        return false;
    }

    if ( p1 != p2){
        document.getElementById("pass").style.border="red 10px groove";
        return false;
    } 
    
    if (p1.length == 0){
        document.getElementById("pass").style.border="red 10px groove";
        document.getElementById("label1").innerHTML="Passwords needed";
        return false;
    }

    if(user.length == 0){
        document.getElementById("Label2").innerHTML="Needed";
        document.getElementById("username").style.border="red 10px groove";
        return false;
    }

    if(user.trim().length == 0){
        document.getElementById("Label2").innerHTML="No spaces";
        document.getElementById("username").style.border="red 10px groove";
        return false;
    }

    if(p1.trim().length == 0){
        document.getElementById("Label1").innerHTML="No spaces";
        document.getElementById("pass").style.border="red 10px groove";
        return false;
    }

    if (cb.checked == false){
        alert("Need to agree for T's and C's otherwise you can't access this site");
        return false ;
    }
}
    