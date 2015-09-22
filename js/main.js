$(document).ready(function() {
        var bgpos = ["-1280px 0px", "-1700px 802.9px", "-2130px 802.9px", "-1280px -420px", "-1700px 372.9px", "-2130px 372.9px"];
        for (var i = 0; i < bgpos.length;i++) {
            //console.log(i);
            //console.log(bgpos[i]);

            $('.box' + i).css({
                "background-position": bgpos[i],
            });
        }
// $('.box1').css( {
//     "background-position":"-1280px 0px",
// }


// $('.box2').css( {
//     "background-position":"-1700px 802.9px",
// }
// );

// $('.box3').css( {
//     "background-position":"-2130px 802.9px", //
// }
// );

// $('.box4').css( {
//     "background-position":"-1280px -420px", //
// }
// );

// $('.box5').css( {
//     "background-position":"-1700px 372.9px", //
// }
// );

// $('.box6').css( {
//     "background-position":"-2130px 372.9px", //
// }
// );
}
);