/* Module 5 Project Script File */

var question = 0;
var questions = ["1 x 1","1 x 2","1 x 3"];
var answers = ["1","2","3"];
var score = 0;
function questionnum(el){
    switch(el){
        case "0":
            question = 0;
            break;
        case "1":
            question = 1;
            break;
        case "2":
            question = 2;
            break;
        case "3":
            question = 3;
            break;
        case "4":
            question = 4;
            break;
        case "5":
            question = 5;
            break;
        case "6":
            question = 6;
            break;
        case "7":
            question = 7;
            break;
        case "8":
            question = 8;
            break;
        case "9":
            question = 9;
            break;
        case "10":
            question = 10;
            break;
        case "11":
            question = 11;
            break;
        case "12":
            question = 12;
            break;
        case "13":
            question = 13;
            break;
        case "14":
            question = 14;
            break;
        break;
    }
}
function qprint(el){
    $(el).innerHTML = questions[question];
}
function ansprint(el){
     $(el).innerHTML = answers[question];
}
//function disable(el){
//     $(el).removeClass('active').addClass('disabled');
//}

/*$('#right').click(function(){
    var num;
    switch(question){
        case 0:
        case 5:
        case 10:
            num = 100;
            break;
        case 1:
        case 6:
        case 11:
            num = 200;
            break;
        break;       
    }
    score += num;
    $("#score").innerHTML = score;
}
$('#wrong').click(function(){
    var num;
    switch(question){
        case 0:
        case 5:
        case 10:
            num = 100;
            break;
        case 1:
        case 6:
        case 11:
            num = 200;
            break;
        break;       
    }
    score -= num;
    $("#score").innerHTML = score;
}*/
