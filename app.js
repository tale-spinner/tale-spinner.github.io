'use strict';

let spreadsheetid = '18kPAybxaAU5ux-Ri0FJrpdbqXm0V0iWbBBDCZ2syr1c';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {

    if(document.body.classList.contains("dark-theme")) {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        this.textContent = "Dark";
    }
    else if(document.body.classList.contains("light-theme")) {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        this.textContent = "Light";
    }
    else {
        console.log('Did not find either class so we are adding dark-theme');
        document.body.classList.add('dark-theme');
        this.textContent = "Light";
    }

});