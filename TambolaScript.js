var row1 = '';
var row2 = '';
var row3 = '';
var row1a = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var row2a = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var row3a = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var numdone = [0];
var numdone02 = [];
var numdone1 = [0];
var numdone2 = [0];
var randnum = 0;
var r = 0;

for (var i = 0; i < 9; i++) {           //To create buttons for each field in the random ticket
    row1 += '<button id="' + i + '" onclick="func(' + i + ')"></button>';

}

for (var i = 10; i < 19; i++) {
    row2 += '<button id="' + i + '" onclick="func(' + i + ')"></button>';

}

for (var i = 20; i < 29; i++) {
    row3 += '<button id="' + i + '" onclick="func(' + i + ')"></button>';

}

document.getElementById('row1').innerHTML = row1;
document.getElementById('row2').innerHTML = row2;
document.getElementById('row3').innerHTML = row3;

for (var i = 0; i < 5; i++) {

    randnum = Math.floor(Math.random() * 90 + 1);  //To generate a random number for row 1

    for (var y = 0; y < numdone.length; y++) {  //To avoid repeatition of the same random number
        if (randnum == numdone[y]) {
            randnum = Math.floor(Math.random() * 90 + 1);
            y = 0;
        }
    }
    numdone02.push(randnum);      //Pushing the random number in an empty array

    if (randnum <= 9) {        //To push the random number to each column of the first row and replacing the 0 in the array with the random number
        numdone.push(1, 2, 3, 4, 5, 6, 7, 8, 9)
        row1a[0] = randnum;

    } else if (randnum >= 10 && randnum <= 19) {
        numdone.push(10, 11, 12, 13, 14, 15, 16, 17, 18, 19);
        row1a[1] = randnum;
    } else if (randnum >= 20 && randnum <= 29) {
        numdone.push(20, 21, 22, 23, 24, 25, 26, 27, 28, 29);
        row1a[2] = randnum;
    } else if (randnum >= 30 && randnum <= 39) {
        numdone.push(30, 31, 32, 33, 34, 35, 36, 37, 38, 39);
        row1a[3] = randnum;
    } else if (randnum >= 40 && randnum <= 49) {
        numdone.push(40, 41, 42, 43, 44, 45, 46, 47, 48, 49);
        row1a[4] = randnum;
    } else if (randnum >= 50 && randnum <= 59) {
        numdone.push(50, 51, 52, 53, 54, 55, 56, 57, 58, 59);
        row1a[5] = randnum;
    } else if (randnum >= 60 && randnum <= 69) {
        numdone.push(60, 61, 62, 63, 64, 65, 66, 67, 68, 69);
        row1a[6] = randnum;
    } else if (randnum >= 70 && randnum <= 79) {
        numdone.push(70, 71, 72, 73, 74, 75, 76, 77, 78, 79);
        row1a[7] = randnum;
    } else if (randnum >= 80 && randnum <= 90) {
        numdone.push(80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90);
        row1a[8] = randnum;
    }
}

for (var i = 0; i < 5; i++) {

    randnum = Math.floor(Math.random() * 90 + 1);  //To generate a random number for row 2

    for (var y = 0; y < numdone1.length; y++) {  //To avoid repeatition of the same random number
        if (randnum == numdone1[y]) {
            randnum = Math.floor(Math.random() * 90 + 1);
            y = 0;
        }

        for (var j = 0; j < numdone02.lenght; j++) {  //Loop which will terminate the random number which has already occured in the first row
            if (randnum == numdone02[j]) {
                randnum = Math.floor(Math.randnum() * 90 + 1);
                j = 0;
            }
        }
    }
    numdone02.push(randnum);      //Pushing the random number in an empty array

    if (randnum <= 9) {        //To push the random number to each column of the first row and replacing the 0 in the array with the random number
        numdone1.push(1, 2, 3, 4, 5, 6, 7, 8, 9)
        row2a[0] = randnum;

    } else if (randnum >= 10 && randnum <= 19) {
        numdone1.push(10, 11, 12, 13, 14, 15, 16, 17, 18, 19);
        row2a[1] = randnum;
    } else if (randnum >= 20 && randnum <= 29) {
        numdone1.push(20, 21, 22, 23, 24, 25, 26, 27, 28, 29);
        row2a[2] = randnum;
    } else if (randnum >= 30 && randnum <= 39) {
        numdone1.push(30, 31, 32, 33, 34, 35, 36, 37, 38, 39);
        row2a[3] = randnum;
    } else if (randnum >= 40 && randnum <= 49) {
        numdone1.push(40, 41, 42, 43, 44, 45, 46, 47, 48, 49);
        row2a[4] = randnum;
    } else if (randnum >= 50 && randnum <= 59) {
        numdone1.push(50, 51, 52, 53, 54, 55, 56, 57, 58, 59);
        row2a[5] = randnum;
    } else if (randnum >= 60 && randnum <= 69) {
        numdone1.push(60, 61, 62, 63, 64, 65, 66, 67, 68, 69);
        row2a[6] = randnum;
    } else if (randnum >= 70 && randnum <= 79) {
        numdone1.push(70, 71, 72, 73, 74, 75, 76, 77, 78, 79);
        row2a[7] = randnum;
    } else if (randnum >= 80 && randnum <= 90) {
        numdone1.push(80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90);
        row2a[8] = randnum;
    }
}

for (var i = 0; i < 5; i++) {

    randnum = Math.floor(Math.random() * 90 + 1);  //To generate a random number for row 3

    for (var y = 0; y < numdone2.length; y++) {  //To avoid repeatition of the same random number
        if (randnum == numdone2[y]) {
            randnum = Math.floor(Math.random() * 90 + 1);
            y = 0;
        }

        for (var j = 0; j < numdone02.lenght; j++) {  //Loop which will terminate the random number which has already occured in the first row
            if (randnum == numdone02[j]) {
                randnum = Math.floor(Math.randnum() * 90 + 1);
                j = 0;
            }
        }
    }
    numdone02.push(randnum);      //Pushing the random number in an empty array

    if (randnum <= 9) {        //If one number from the range comes then we need to omit the next random numbers from that particular range

        numdone2.push(1, 2, 3, 4, 5, 6, 7, 8, 9)
        row3a[0] = randnum;

    } else if (randnum >= 10 && randnum <= 19) {
        numdone2.push(10, 11, 12, 13, 14, 15, 16, 17, 18, 19);
        row3a[1] = randnum;
    } else if (randnum >= 20 && randnum <= 29) {
        numdone2.push(20, 21, 22, 23, 24, 25, 26, 27, 28, 29);
        row3a[2] = randnum;
    } else if (randnum >= 30 && randnum <= 39) {
        numdone2.push(30, 31, 32, 33, 34, 35, 36, 37, 38, 39);
        row3a[3] = randnum;
    } else if (randnum >= 40 && randnum <= 49) {
        numdone2.push(40, 41, 42, 43, 44, 45, 46, 47, 48, 49);
        row3a[4] = randnum;
    } else if (randnum >= 50 && randnum <= 59) {
        numdone2.push(50, 51, 52, 53, 54, 55, 56, 57, 58, 59);
        row3a[5] = randnum;
    } else if (randnum >= 60 && randnum <= 69) {
        numdone2.push(60, 61, 62, 63, 64, 65, 66, 67, 68, 69);
        row3a[6] = randnum;
    } else if (randnum >= 70 && randnum <= 79) {
        numdone2.push(70, 71, 72, 73, 74, 75, 76, 77, 78, 79);
        row3a[7] = randnum;
    } else if (randnum >= 80 && randnum <= 90) {
        numdone2.push(80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90);
        row3a[8] = randnum;
    }
}

for (var i = 0; i < 9; i++) {   //To replace the bigger number in the above columns with the smaller numbers in the columns below them
    if (row1a[i] != 0 && row2a[i] != 0) {
        if (row1a[i] > row2a[i]) {
            r = row1a[i];
            row1a[i] = row2a[i];
            row2a[i] = r;
        }
    }

    if (row1a[i] != 0 && row3a[i] != 0) {
        if (row1a[i] > row3a[i]) {
            r = row1a[i];
            row1a[i] = row3a[i];
            row3a[i] = r;

        }
    }

    if (row2a[i] != 0 && row3a[i] != 0) {
        if (row2a[i] > row3a[i]) {
            r = row2a[i];
            row2a[i] = row3a[i];
            row3a[i] = r;

        }
    }
}

for (var i = 0; i < 9; i++) {
    if (row1a[i] != 0) {
        document.getElementById(i).innerHTML = row1a[i];
    }

    if (row2a[i] != 0) {
        document.getElementById(i + 10).innerHTML = row2a[i];
    }

    if (row3a[i] != 0) {
        document.getElementById(i + 20).innerHTML = row3a[i];
    }
}

function func(j) {
    var button = button.getElementById(j).innerHTML;
    if (document.getElementById(j).style.backgroundColor == 'green') {
        document.getElementById(j).style.backgroundColor = 'black';

    } else if (button != '') {
        document.getElementById(j).style.backgroundColor = 'green';
    }
}

function genticketButton() {
    document.getElementById("genticket").style.display = "block";
}

let records = [];
const addRecords = (ev) => {
    ev.preventDefault();


    let record = {
        Name: document.getElementById('NameTxt').value,
        Amount: document.getElementById('Amount').value,
        TicketDetails : {
                 Row1 : row1a.join(','),
                 Row2 : row2a.join(','),
                 Row3 : row3a.join(',')

         }
        }
    records.push(record);
    document.forms[0].reset();

    console.warn('added', { records });
    let pre = document.querySelector('#playerInfo pre');
    pre.textContent = '\n' + JSON.stringify(records, '\t', 2);
};


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('genButton').addEventListener('click', addRecords);

});


var numarr = [];

function chart() {

    var button2 = '';
    for (var i = 1; i < 91; i++) {
        button2 += "<button id='" + i + "'>" + i + "</button>";

    }
    return button2;
}

function start() {
    var num = Math.floor(Math.random() * 90 + 1);
    for( var i= 0; i < numarr.length; i++) {
        if (num == numarr[i]) {
            num = Math.floor(Math.random() * 90 + 1);
            i=0;
        }
    }
    document.getElementById('numberran').innerHTML= num;
    document.getElementById(num).style.backgroundColor = 'green';

    if (numarr.length == 90) {
        alert('Thanks for playing');
        location.reload();
    }
    numarr.push(num);
}
document.getElementById('button2').innerHTML = chart();








