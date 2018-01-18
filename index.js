/* Handles the "backend" side 
  of the application */

//importing electron library
const electron = require('electron');
const ffmpeg = require('fluent-ffmpeg');

//represents the overall app process running
const { app, BrowserWindow, ipcMain } = electron; //app object

//let allow variable to be used anywhere while only
//having effect on that specific place
let mainWindow;

//event handler
app.on('ready', () => {
  mainWindow = new BrowserWindow({});
  mainWindow.loadURL(`file://${__dirname}/index.html`); 
}); 

//the event being listened from ipcRenderer, obs: event -> ' ' can have any name
ipcMain.on('videoSubmitted', (event, path) => {
    //will execute every time the event videoSubmitted is called
    ffmpeg.ffprobe(path, (err, metadata) => {
      //send information back to the main window(html)
      mainWindow.webContents.send('videoMetadata', metadata.format.duration);
    });
});