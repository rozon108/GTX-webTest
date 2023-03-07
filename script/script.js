
// To Display Footer Info
// HQ's information

$(function () {
    var h1 = [];
    var hqTarget = "script/hq.json";
    $.getJSON(hqTarget, function (data) {
           console.log(data.gtxHQ)
        $.each(data.gtxHQ, (i, hq) => {
            console.log(hq);
            var hqInfo = `<div class="hq-container hq${hq.key_id}">
                                <h5>${hq.name}</h5>
                                <span>${hq.address}</span>
                                <span>${hq.phone}</span>
                                <span>${hq.email}</span>
                             </div>`;
            $(hqInfo).appendTo(".HQ");
        })


    });
    console.log('hello')
});






// Sticky Navbar
window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("navbar");
console.log(navbar);
// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

// Nav Bar animation
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//         document.getElementById("navbar").style.top = "0";
//     } else {
//         document.getElementById("navbar").style.top = "-80px";
//     }

//     prevScrollpos = currentScrollPos;
// }

// end