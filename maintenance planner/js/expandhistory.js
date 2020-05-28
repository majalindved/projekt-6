// Expand line 1:

let divs = document.getElementsByTagName('div');

let toggle = function() {    
    for (let i = 0, l = divs.length; i < l; i++) {
        if (divs[i].getAttribute('class') == 'expand1') 
            if (divs[i].style.display == 'block') divs[i].style.display = '';
            else divs[i].style.display = 'block';
    }
}

document.getElementById('Toggle1').onclick = toggle;

// Expand line 2:

let divs = document.getElementsByTagName('div');

let toggle = function() {    
    for (let i = 0, l = divs.length; i < l; i++) {
        if (divs[i].getAttribute('class') == 'expand2') 
            if (divs[i].style.display == 'block') divs[i].style.display = '';
            else divs[i].style.display = 'block';
    }
}

document.getElementById('Toggle2').onclick = toggle;

// Expand line 3:

let divs = document.getElementsByTagName('div');

let toggle = function() {    
    for (let i = 0, l = divs.length; i < l; i++) {
        if (divs[i].getAttribute('class') == 'expand3') 
            if (divs[i].style.display == 'block') divs[i].style.display = '';
            else divs[i].style.display = 'block';
    }
}

document.getElementById('Toggle3').onclick = toggle;

// Expand line 4:

let divs = document.getElementsByTagName('div');

let toggle = function() {    
    for (let i = 0, l = divs.length; i < l; i++) {
        if (divs[i].getAttribute('class') == 'expand4') 
            if (divs[i].style.display == 'block') divs[i].style.display = '';
            else divs[i].style.display = 'block';
    }
}

document.getElementById('Toggle4').onclick = toggle;

// Expand line 5:

let divs = document.getElementsByTagName('div');

let toggle = function() {    
    for (let i = 0, l = divs.length; i < l; i++) {
        if (divs[i].getAttribute('class') == 'expand5') 
            if (divs[i].style.display == 'block') divs[i].style.display = '';
            else divs[i].style.display = 'block';
    }
}

document.getElementById('Toggle5').onclick = toggle;
