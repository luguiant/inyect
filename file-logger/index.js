const {
    appendFile
}   = require('fs');
const {
    join
} = require('path');
const logger = join(__dirname, "activity.log");

const write = ( log = null) => {
    if (log) {
        appendFile(logger, `${new Date()} : ${log}\n`, error => {
            if (error) {
                return console.log("A ocurrido un error con el archivo de actividad");
            }
        });
    }
}

module.exports = {
    write
}