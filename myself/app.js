var liAbout = document.querySelector('#li-about');
var liHobbies = document.querySelector('#li-hobbies');
var liContact = document.querySelector('#li-contact');

var about = document.querySelector("#about");

var contact = document.querySelector("#contact");

var hobby = document.querySelectorAll('.hobby');

window.addEventListener("scroll", function() {
    if (window.pageYOffset <= about.offsetTop) {
        liHobbies.classList.remove("active");
        liHobbies.classList.add("element");
        liContact.classList.remove("active");
        liContact.classList.add("element");
        liAbout.classList.remove("element");
        liAbout.classList.add("active");
    } else if (window.pageYOffset > about.offsetTop && window.pageYOffset < contact.offsetTop - 600) {
        liAbout.classList.remove("active");
        liAbout.classList.add("element");
        liContact.classList.remove("active");
        liContact.classList.add("element");
        liHobbies.classList.remove("element");
        liHobbies.classList.add("active");
        if (window.pageYOffset > hobby[0].offsetTop-500 && window.pageYOffset < hobby[1].offsetTop-500 ) {
            hobby[0].classList.add('active2');
            
        }
        if (window.pageYOffset >= hobby[1].offsetTop-500 && window.pageYOffset < hobby[2].offsetTop-500) {
            hobby[1].classList.add('active3');
        }
        if (window.pageYOffset >= hobby[2].offsetTop-500 && window.pageYOffset < hobby[3].offsetTop-500) {
            hobby[2].classList.add('active2');
        }
        if (window.pageYOffset >= hobby[3].offsetTop-500) {
            hobby[3].classList.add('active3');
        }
    } else if (window.pageYOffset >= contact.offsetTop - 600) {
        liAbout.classList.remove("active");
        liAbout.classList.add("element");
        liHobbies.classList.remove("active");
        liHobbies.classList.add("element");
        liContact.classList.remove("element");
        liContact.classList.add("active");

    }

});