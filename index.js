const electron = require('electron');

// ES6 destructuring below, need to research more on this
const { app, BrowserWindow } = electron;
app.on('ready', () => {
	new BrowserWindow({});
});
