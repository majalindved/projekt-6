// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var name = document.contactForm.name.value;
    var group = document.contactForm.group.value;
    var type = document.contactForm.type.value; 
    var selectsource = document.contactForm.selectsource.value;  
    var timerange = document.contactForm.timerange.value;   
    var nextservice = document.contactForm.nextservice.value; 
    var startvalue = document.contactForm.startvalue.value;    
    var internalvalue = document.contactForm.internalvalue.value;  
    var maxinterval = document.contactForm.maxinterval.value;   
    var nextvalue = document.contactForm.nextvalue.value; 
    var notifydays = document.contactForm.notifydays.value;   
    var notifytoemail = document.contactForm.notifytoemail.value;      
    
	// Defining error variables with a default value
    var nameErr = groupErr = typeErr = selectsourceErr = timerangeErr = nextserviceErr = startvalueErr = internalvalueErr = maxintervalErr = nextvalueErr = notifydaysErr = notifytoemailErr = true;
    
    // Validate name
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    
    // Validate type
    if(type == "Select") {
        printError("typeErr", "Please select your type");
    } else {
        printError("typeErr", "");
        typeErr = false;
    }    
    
    // Validate group
    if(group == "Select") {
        printError("groupErr", "Please select your group");
    } else {
        printError("groupErr", "");
        groupErr = false;
    }
    
    // Validate select source    
    if(selectsource == "") {
        printError("selectsourceErr", "Please select a source");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(selectsource) === false) {
            printError("selectsourceErr", "Please enter a valid source");
        } else {
            printError("selectsourceErr", "");
            selectsourceErr = false;
        }
    }
    
    // Validate time range      
    if(timerange == "") {
        printError("timerangeErr", "Please enter a time range");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(timerange) === false) {
            printError("timerangeErr", "Please enter a valid time range");
        } else {
            printError("timerangeErr", "");
            timerangeErr = false;
        }
    } 
    
    // Validate next service    
    if(nextservice == "") {
        printError("nextserviceErr", "Please enter the next service time");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(nextservice) === false) {
            printError("nextserviceErr", "Please enter a valid next service time");
        } else {
            printError("nextserviceErr", "");
            nextserviceErr = false;
        }
    } 
    
    // Validate start value
    if(startvalue == "") {
        printError("startvalueErr", "Please enter a start value");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(startvalue) === false) {
            printError("startvalueErr", "Please enter a valid start value");
        } else {
            printError("startvalueErr", "");
            startvalueErr = false;
        }
    } 
    
    // Validate interval value    
    if(internalvalue == "") {
        printError("internalvalueErr", "Please enter an internal value");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(internalvalue) === false) {
            printError("internalvalueErr", "Please enter a valid internal value");
        } else {
            printError("internalvalueErr", "");
            internalvalueErr = false;
        }
    }    
    
    // Validate max interval       
    if(maxinterval == "") {
        printError("maxintervalErr", "Please enter a max interval");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(maxinterval) === false) {
            printError("maxintervalErr", "Please enter a valid max interval");
        } else {
            printError("maxintervalErr", "");
            maxintervalErr = false;
        }
    } 
    
    // Validate next value     
    if(nextvalue == "") {
        printError("nextvalueErr", "Please enter the next value");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(nextvalue) === false) {
            printError("nextvalueErr", "Please enter a valid next value");
        } else {
            printError("nextvalueErr", "");
            nextvalueErr = false;
        }
    } 
    
    // Validate notify days    
    if(notifydays == "") {
        printError("notifydaysErr", "Please enter nofity day");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(notifydays) === false) {
            printError("notifydaysErr", "Please enter valid notify days");
        } else {
            printError("notifydaysErr", "");
            notifydaysErr = false;
        }
    }       
    
    // Validate notify to email
    if(notifytoemail == "") {
        printError("notifytoemailErr", "Please enter your email");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(notifytoemail) === false) {
            printError("notifytoemailErr", "Please enter a valid email");
        } else {
            printError("notifytoemailErr", "");
            notifytoemailErr = false;
        }
    }     
    
    // Prevent the form from being submitted if there are any errors
    if((nameErr || groupErr || typeErr || selectsourceErr || timerangeErr || nextserviceErr || startvalueErr || internalvalueErr || maxintervalErr || nextvalueErr || notifydaysErr || notifytoemailErr) == true) {
       return false;
    }
};