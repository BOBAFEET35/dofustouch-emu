const {app} = require('electron');
const main = require('./main');

let menuTemplate = [
    {
        label: 'Jeu',
        submenu: [
            {
                label: 'Nouvelle fenêtre',
                accelerator: 'CommandOrControl+N',
                click () {
                    main.openWindow();
                }
            },
            {
                type: 'separator'
            },
            {
                label: 'Charger un script',
                accelerator: 'CommandOrControl+S',
                click (item, focusedWindow) {
                    if (focusedWindow) {
                        focusedWindow.webContents.send('load-script');
                    }
                }
            },
            {
                label: 'Outil de développeur',
                accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
                click (item, focusedWindow) {
                    if (focusedWindow) {
                        focusedWindow.webContents.toggleDevTools();
                    }
                }
            }
        ]
    },
    {
        label: 'Edition',
        submenu: [
            {
                label: 'Annuler',
                role: 'undo'
            },
            {
                type: 'separator'
            },
            {
                label: 'Couper',
                role: 'cut'
            },
            {
                label: 'Copier',
                role: 'copy'
            },
            {
                label: 'Coller',
                role: 'paste'
            },
            {
                label: 'Tout sélectionner',
                role: 'selectall'
            }
        ]
    }
];
if (process.platform === 'darwin') {
    menuTemplate.unshift({
        label: app.getName(),
        submenu: [
            {
                role: 'about'
            },
            {
                type: 'separator'
            },
            {
                role: 'hide'
            },
            {
                role: 'hideothers'
            },
            {
                role: 'unhide'
            },
            {
                type: 'separator'
            },
            {
                role: 'quit'
            }
        ]
    });
}

module.exports = menuTemplate;