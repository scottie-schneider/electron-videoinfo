const electron = require('electron');
const ffmpeg = require('fluent-ffmpeg');

// ES6 destructuring below, need to research more on this
const { app, BrowserWindow, ipcMain } = electron;
let mainWindow;

app.on('ready', () => {
	mainWindow = new BrowserWindow({});
	mainWindow.loadURL(`file://${__dirname}/index.html`);
});
// IPC is pretty confusing, check out this flow of the different objects:
// https://screencast.com/t/39NKGCBwbR
ipcMain.on('video:submit', (event, path) => {
	ffmpeg.ffprobe(path, (err, metadata) => {
		mainWindow.webContents.send('video:metadata', metadata.format.duration);
	});
});
