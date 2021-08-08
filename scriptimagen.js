'use strict'

const mkdir = require('./mkdir')
const Fs = require('fs')
const Path = require('path')
const Axios = require('axios')

// ** folder = folder by create in main folder in mkdir
// ** mainfolder = 'images' String
// ** folderStar = folderStar by start number create 000 is null, require > 0
// ** folderEnd = folderEnd by start number create 000 is null, require > 0
// ** fileStar = digit of start file init 0
// ** fileEnd = digit of End file number max 999
async function downloadImage(mainfolder, folderStar, folderEnd, fileStart, fileEnd) {
    var i, k;

    for (i = folderStar; i <= folderEnd; i++) {

        var folder = '00' + i;
        var folders = (folder.substr(folder.length - 3, 3))
        mkdir(mainfolder, folders) //create folder in mainfolder mkdir


        for (k = fileStart; k <= fileEnd; k++) {

            var file = '00' + k;
            var files = folders + (file.substr(file.length - 3, 3)) + '.svg'
                //url imagen

            let url = 'https://image.flaticon.com/icons/svg/' +
                folders + '/' + files
            console.log('url create: ' + url);
            try {
                let response = await Axios({
                    url,
                    method: 'GET',
                    responseType: 'stream'
                });
                response.data.pipe(Fs.createWriteStream(Path.resolve(mainfolder, folders, files)))
            } catch (err) {
                console.error(err)
            }

        }
    }
}

downloadImage('images', 337, 337, 900, 999)