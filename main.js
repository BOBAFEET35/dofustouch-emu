const {app, BrowserWindow, Menu} = require('electron');

let windows = [];

function openWindow() {
    let window = new BrowserWindow({width: 960, height: 720});
    window.loadURL('file://' + __dirname + '/app/game.html');
    window.on('closed', () => windows = windows.filter((w) => w != window));
    if (windows.length > 0) {
        window.webContents.setAudioMuted(true);
    }
    windows.push(window);
}

app.on('ready', () => {
    Menu.setApplicationMenu(Menu.buildFromTemplate(require('./menu')));
    openWindow();
});

app.on('window-all-closed', () => {
    app.quit();
});

module.exports = {
    openWindow: openWindow,
    windows: windows
};
