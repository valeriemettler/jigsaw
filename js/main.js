//background position in correct order
var bgpos = [[-1280, 0],
             [-1700, 803],
             [-2130, 803],
             [-1280, -420],
             [-1700, 373],
             [-2130, 373]
             ];
//background position out of order
var bgpos2 = [[-2130, 803],
            [-2130, 373],
            [-1280, -420],
            [-1700, 803],
            [-1700, 373],
            [-1280, 0]
            ];

var x;
var y;
var z;

// var posStr = function(x, y){
// };

var bkgPos = function (x,y) {
    z = "" + x + "px " + y + "px";
    return z;
};

$(document).ready(function() {

    var displayPic = function() {
        for (var i = 0; i < bgpos.length;i++) {
                //a = bgpos[i][0];
                //b = bgpos[i][1];
                c = bgpos2[i][0];
                d = bgpos2[i][1];

                //bkgPos(a, b);
                 bkgPos(c, d);
            $('.box' + i).css({"background-position": z});
        }
}
displayPic();
});