const electron = require('electron');

// ES6 destructuring below, need to research more on this
const { app, BrowserWindow } = electron;
app.on('ready', () => {
	const mainWindow = new BrowserWindow({});
	mainWindow.loadURL(`file://${__dirname}/index.html`);
});
