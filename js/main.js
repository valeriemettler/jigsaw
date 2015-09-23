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


// var posStr = function(x, y){
// };

var bkgPos = function (x,y) { return "" + x + "px " + y + "px"; };

$(document).ready(function() {

    var displayPic = function() {
        for (var i = 0; i < bgpos.length;i++) {
                //a = bgpos[i][0];
                //b = bgpos[i][1];
                c = bgpos2[i][0];
                d = bgpos2[i][1];
                //bkgPos(a, b);
            $('.box' + i).css({"background-position": bkgPos(c, d)});
        }
}
displayPic();
});