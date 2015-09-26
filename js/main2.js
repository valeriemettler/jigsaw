var shuffle = false;
var newbgPos; //solved
var newbgPoscopy; //shuffled
var tall;
var wide;
//var url;

// var handleUrlinput = function() {
//     $('#buttonSeturl').on('click', function() {
//         var url = $('#url').val();
//console.log(url);
//         $("#pic").attr('src', url);
//         return url;
//  })
// };
// var url = handleUrlinput();

var handleUrlinput = function() {
    $('#buttonSeturl').on('click', function(event) {
        event.stopPropagation();
        var e = event.target;
        setUrl(e);
    })
};

var setUrl = function(el) {
    var url = $('#url').val();
    $("#pic").attr('src', url);
    console.log(url);
    iPos(url);
}

var iPos = function(url) {

    var w = $('#pic').width();
    var h = $('#pic').height();
    $('.bigbox').css({
        "width": w + 32,
        "height": h - 20
    });
    var tall = w / 3;
    var wide = h / 2;

    newbgPos = [
        [-(w), h],
        [-(w + (w / 3)), h],
        [-((w + (w / 3)) + (w / 3)), h],
        [-(w), h / 2],
        [-(w + (w / 3)), h / 2],
        [-((w + (w / 3)) + (w / 3)), h / 2],
    ];


    for (var i = 0; i < newbgPos.length; i++) {
        var a = newbgPos[i][0];
        var b = newbgPos[i][1];
        $('.box' + i).css({
            "height": tall + "px",
            "width": wide + "px",
        });
    }
    newbgPoscopy = newbgPos.slice();
    displayPic(url);
    //return newbgPoscopy;
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

var displayPic = function(url) {


    //var url = $('#url').val();

    //$("#pic").attr('src', url);

    console.log(shuffle);
    console.log("here", url, "here");
    if (shuffle === false) {
        for (var i = 0; i < newbgPos.length; i++) {
            var a = newbgPos[i][0];
            var b = newbgPos[i][1];
            $('.box' + i).css({
                "background-position": bkgPos(a, b),
                "height": tall + "px",
                "width": wide + "px",
                "margin": "10px",
                "background": "url('" + url + "')"
            });
        }
    } else {
        for (var i = 0; i < newbgPoscopy.length; i++) {
            var a = newbgPoscopy[i][0];
            var b = newbgPoscopy[i][1];
            $('.box' + i).css({
                "background-position": bkgPos(a, b),
                "height": tall + "px",
                "width": wide + "px",
                "margin": "10px",
                "background": "url('" + url + "')"
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
    handleUrlinput();

    setupclickShuf();
    setupclickSolve();
    // displayPic();
});