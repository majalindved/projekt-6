// Defining a function to display error message
function printerror1(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm1() {
    // Retrieving the values of form elements 
    let name1 = document.contactForm1.name1.value;
    let group1 = document.contactForm1.group1.value;
    let type1 = document.contactForm1.type1.value; 
    let selectsource1 = document.contactForm1.selectsource1.value;  
    let timerange1 = document.contactForm1.timerange1.value;   
    let nextservice1 = document.contactForm1.nextservice1.value; 
    let startvalue1 = document.contactForm1.startvalue1.value;    
    let internalvalue1 = document.contactForm1.internalvalue1.value;  
    let maxinterval1 = document.contactForm1.maxinterval1.value;   
    let nextvalue1 = document.contactForm1.nextvalue1.value; 
    let notifydays1 = document.contactForm1.notifydays1.value;   
    let notifytoemail1 = document.contactForm1.notifytoemail1.value;      
    
	// Defining error letiables with a default value
    let name1Err = group1Err = type1Err = selectsource1Err = timerange1Err = nextservice1Err = startvalue1Err = internalvalue1Err = maxinterval1Err = nextvalue1Err = notifydays1Err = notifytoemail1Err = true;
    
    // Validate name1
    if(name1 == "") {
        printerror1("name1Err", "Please enter your name");
    } else {
        let regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name1) === false) {
            printerror1("name1Err", "Please enter a valid name");
        } else {
            printerror1("name1Err", "");
            name1Err = false;
        }
    }
    
    // Validate type1
    if(type1 == "Select") {
        printerror1("type1Err", "Please select your type");
    } else {
        printerror1("type1Err", "");
        type1Err = false;
    }    
    
    // Validate group1
    if(group1 == "Select") {
        printerror1("group1Err", "Please select your group");
    } else {
        printerror1("group1Err", "");
        group1Err = false;
    }
    
    // Validate select source    
    if(selectsource1 == "") {
        printerror1("selectsource1Err", "Please select a source");
    } else {
        let regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(selectsource1) === false) {
            printerror1("selectsource1Err", "Please enter a valid source");
        } else {
            printerror1("selectsource1Err", "");
            selectsource1Err = false;
        }
    }
    
    // Validate time range      
    if(timerange1 == "") {
        printerror1("timerange1Err", "Please enter a time range");
    } else {
        let regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(timerange1) === false) {
            printerror1("timerange1Err", "Please enter a valid time range");
        } else {
            printerror1("timerange1Err", "");
            timerange1Err = false;
        }
    } 
    
    // Validate next service    
    if(nextservice1 == "") {
        printerror1("nextservice1Err", "Please enter the next service time");
    } else {
        let regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(nextservice1) === false) {
            printerror1("nextservice1Err", "Please enter a valid next service time");
        } else {
            printerror1("nextservice1Err", "");
            nextservice1Err = false;
        }
    } 
    
    // Validate start value
    if(startvalue1 == "") {
        printerror1("startvalue1Err", "Please enter a start value");
    } else {
        let regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(startvalue1) === false) {
            printerror1("startvalue1Err", "Please enter a valid start value");
        } else {
            printerror1("startvalue1Err", "");
            startvalue1Err = false;
        }
    } 
    
    // Validate interval value    
    if(internalvalue1 == "") {
        printerror1("internalvalue1Err", "Please enter an internal value");
    } else {
        let regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(internalvalue1) === false) {
            printerror1("internalvalue1Err", "Please enter a valid internal value");
        } else {
            printerror1("internalvalue1Err", "");
            internalvalue1Err = false;
        }
    }    
    
    // Validate max interval       
    if(maxinterval1 == "") {
        printerror1("maxinterval1Err", "Please enter a max interval");
    } else {
        let regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(maxinterval1) === false) {
            printerror1("maxinterval1Err", "Please enter a valid max interval");
        } else {
            printerror1("maxinterval1Err", "");
            maxinterval1Err = false;
        }
    } 
    
    // Validate next value     
    if(nextvalue1 == "") {
        printerror1("nextvalue1Err", "Please enter the next value");
    } else {
        let regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(nextvalue1) === false) {
            printerror1("nextvalue1Err", "Please enter a valid next value");
        } else {
            printerror1("nextvalue1Err", "");
            nextvalue1Err = false;
        }
    } 
    
    // Validate notify days    
    if(notifydays1 == "") {
        printerror1("notifydays1Err", "Please enter nofity day");
    } else {
        let regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(notifydays1) === false) {
            printerror1("notifydays1Err", "Please enter valid notify days");
        } else {
            printerror1("notifydays1Err", "");
            notifydays1Err = false;
        }
    }       
    
    // Validate notify to email
    if(notifytoemail1 == "") {
        printerror1("notifytoemail1Err", "Please enter your email");
    } else {
        let regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(notifytoemail1) === false) {
            printerror1("notifytoemail1Err", "Please enter a valid email");
        } else {
            printerror1("notifytoemail1Err", "");
            notifytoemail1Err = false;
        }
    }     
    
    // Prevent the form from being submitted if there are any errors
    if((name1Err || group1Err || type1Err || selectsource1Err || timerange1Err || nextservice1Err || startvalue1Err || internalvalue1Err || maxinterval1Err || nextvalue1Err || notifydays1Err || notifytoemail1Err) == true) {
       return false;
    }
}; 