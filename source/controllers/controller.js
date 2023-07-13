// ****************************************************************
// Controller functions to get the requested data from the models, 
// create an HTML page displaying the data, and return it to the 
// user to view in the browser.
// ****************************************************************
import path from 'path';
const __dirname = path.resolve();


export const home = (req, res) => {
    //show this file when the "/" is requested
    res.sendFile( __dirname + "/source/pages/home.html" );
}