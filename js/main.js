$(document).ready(function() {
        // var bgpos = ["-1280px 0px",
        //              "-1700px 802.9px",
        //              "-2130px 802.9px",
        //              "-1280px -420px",
        //              "-1700px 372.9px",
        //              "-2130px 372.9px"];

        var bgpos = [[-1280, 0],
                     [-1700, 803],
                     [-2130, 803],
                     [-1280, -420],
                     [-1700, 373],
                     [-2130, 373]
                     ];

        for (var i = 0; i < bgpos.length;i++) {
            //console.log(i);
            //console.log(bgpos[i]);

            // $('.box' + i).css({
            //     "background-position": bgpos[i],
            // });

            $('.box' + i).css({
                "background-position": "" + bgpos[i][0] + "px " + bgpos[i][1] + "px",
            });
            console.log(bgpos[i]);
            //console.log("" + bgpos2[i][0] + " " + bgpos2[i][1]);
            console.log("" + bgpos[i][0] + "px " + bgpos[i][1] + "px");
        }



}
);