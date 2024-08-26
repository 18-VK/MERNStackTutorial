// Arrange files in folder or we can say clear the clutter
const FS = require('fs');
const path = require('path');

const ClearTheClutter = function (routesDirectory) {

    // check if directory is valid
    const stats = FS.statSync(routesDirectory);
    try {
        console.log("checking for file/Directory : " + routesDirectory);

        if (stats.isFile()) {
            console.log('It is a valid file.');
        } else if (stats.isDirectory()) {
            console.log('It is a valid directory.');
        } else {
            console.log('It is neither a file nor a directory.');
            return false;
        }
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.log('The path does not exist.');
        } else {
            console.error('Error checking path:', err);
        }
        return false;
    }
    // Get files from directory 
    FS.readdir(routesDirectory, (err, files) => {
        if (err) {
            console.error('Unable to read routes directory:', err);
            return false;
        }
        files.forEach(element => {
            var ExtName, finalPath;
            ExtName = path.extname(element);
            finalPath = path.join(routesDirectory, ExtName);
            try {
                if (!(FS.existsSync(finalPath)))
                    FS.mkdirSync(finalPath);

                if (stats.isFile(path.join(routesDirectory,element))) 
                {  
                    FS.copyFile(path.join(routesDirectory,element),path.join(finalPath,element),(err) =>{
                    console.log(err);
                    return false;
                    });
                    FS.rmSync(path.join(routesDirectory,element));
                }
            } catch (error) {
                console.log(error);
                return false;
            }
        });
    });
    return true;
}
const routesDirectory = path.join(__dirname, 'SourceFile');

if (ClearTheClutter(routesDirectory))
    console.log("Successfully completed");
else
    console.log("Some error while processing");