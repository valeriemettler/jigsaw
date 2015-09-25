var shuffle = true;
var newbgPos; //solved
var newbgPoscopy; //shuffled

var iPos = function() {

    var w = $('#pic').width();
    var h = $('#pic').height();

    newbgPos = [
        [-(w), h],
        [-(w + (w / 3)), h],
        [-((w + (w / 3)) + (w / 3)), h],
        [-(w), h / 2],
        [-(w + (w / 3)), h / 2],
        [-((w + (w / 3)) + (w / 3)), h / 2],
    ];
    newbgPoscopy = newbgPos.slice();

    return newbgPoscopy;
};

var bkgPos = function(x, y) {
    return "" + x + "px " + y + "px";
};

var setupclickShuf = function() {
    $('#shuffle').on('click', function(event) {
        event.stopPropagation();
        shuffle = true;
        var e = event.target;
        shuf(e);
    })
};

var displayPic = function() {

    if (shuffle === false) {
        for (var i = 0; i < newbgPos.length; i++) {
            var a = newbgPos[i][0];
            var b = newbgPos[i][1];
            $('.box' + i).css({
                "background-position": bkgPos(a, b)
            });
        }
    } else {
        for (var i = 0; i < newbgPoscopy.length; i++) {
            var a = newbgPoscopy[i][0];
            var b = newbgPoscopy[i][1];
            $('.box' + i).css({
                "background-position": bkgPos(a, b)
            });
        }
    }
};

//shuffle: http://stackoverflow.com/a/12646864
var shuf = function(el) {
    for (var i = newbgPoscopy.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = newbgPoscopy[i];
        newbgPoscopy[i] = newbgPoscopy[j];
        newbgPoscopy[j] = temp;
    }
    //console.log("copy", newbgPoscopy);
    //console.log("original", newbgPos);
    displayPic(newbgPoscopy);
};

var setupclickSolve = function() {
    $('#solve').on('click', function(event) {
        event.stopPropagation();
        shuffle = false;
        var e = event.target;
        displayPic();
    })
};

$(document).ready(function() {
    iPos();
    setupclickShuf();
    setupclickSolve();
    displayPic();
});