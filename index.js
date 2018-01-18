/* Handles the "backend" side 
  of the application */

//importing electron library
const electron = require('electron');
const ffmpeg = require('fluent-ffmpeg')

//represents the overall app process running
const { app, BrowserWindow, ipcMain } = electron; //app object

//event handler
app.on('ready', () => {
   const mainWindow = new BrowserWindow({});
   mainWindow.loadURL(`file://${__dirname}/index.html`); 
}); 

//the event being listened from ipcRenderer, obs: event -> ' ' can have any name
ipcMain.on('videoSubmitted', (event, path) => {
    //will execute every time the event videoSubmitted is called
    ffmpeg.ffprobe(path, (err, metadata) => {
      console.log('Video duration is: ', metadata.format.duration);
    });
});