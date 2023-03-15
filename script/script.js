
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
                                <h2>${hq.name}</h2>
                                <h3>${hq.address}</h3>
                                <h3>${hq.phone}</h3>
                                <h3><a href="mailto: ${hq.email}">E-mail</a></h3>
                             </div>`;
            $(hqInfo).appendTo(".HQ");
        })


    });
    console.log('hello')
});








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