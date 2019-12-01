function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low)
}

var battle_path = "";
process.argv.forEach(function (val, index, array) {
  battle_path = val
});

const fs = require('fs');
//const dir = './directory';

var how_many_players = 0;

fs.readdir(battle_path, (err, files) => {
  how_many_players = files.length
});

//requiring path and fs modules
var path = require('path');
//var fs = require('fs');
//joining path of directory
//var directoryPath = path.join(__dirname, 'Documents');
funtion iKnowHowToGoogleVeryWell() {
    //passsing directoryPath and callback function
    fs.readdir(directoryPath, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        //listing all files using forEach
        files.forEach(function (file) {
            // Do whatever you want to do with the file
            fs.unlink(file, (err) => {
                if (err) throw err;
                if ()
                console.log(file + ' got killed!');
                function sleep(time) {
                    var stop = new Date().getTime();
                    while(new Date().getTime() < stop + time) {
                        ;
                    }
                }
                sleep(randomInt(100,300)/100);
            });
        });
    });
    fs.readdir(battle_path, (err, files) => {
        how_many_players = files.length
    });
    if (how_many_players == 0) console.log("Everyone died! OwO");
    if (how_many_players != 1 && how_many_players != 0) iKnowHowToGoogleVeryWell();
}

iKnowHowToGoogleVeryWell();
fs.readdir(battle_path, (err, files) => {
    files.forEach(function (file) {
        console.log(file + " u win!!!!!");
    })
});
