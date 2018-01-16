/* Handles the "backend" side 
  of the application */

//importing electron library
const electron = require('electron');

//represents the overall app process running
const { app, BrowserWindow } = electron; //app object

//event handler
app.on('ready', () => {
   const mainWindow = new BrowserWindow({});
   mainWindow.loadURL(`file://${__dirname}/index.html`); 
}); 