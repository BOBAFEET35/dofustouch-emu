$(document).ready(() => {
    let isOnline = false;

    window.addEventListener('resize', () => window.gui._resizeUi());

    window.addEventListener('keydown', (event) => {
        if (isOnline) {
            switch (event.key.toUpperCase() && !window.gui.chat.active) {
                case 'C':
                    window.gui.menuBar._icons._childrenList.find((icon) => icon.id == 'Carac').tap();
                    event.preventDefault();
                    break;
                case 'S':
                    window.gui.menuBar._icons._childrenList.find((icon) => icon.id == 'Spell').tap();
                    event.preventDefault();
                    break;
                case 'I':
                    window.gui.menuBar._icons._childrenList.find((icon) => icon.id == 'Bag').tap();
                    event.preventDefault();
                    break;
                case 'H':
                    window.gui.menuBar._icons._childrenList.find((icon) => icon.id == 'BidHouse').tap();
                    event.preventDefault();
                    break;
                case 'F':
                    window.gui.menuBar._icons._childrenList.find((icon) => icon.id == 'Friend').tap();
                    event.preventDefault();
                    break;
                case 'Q':
                    window.gui.menuBar._icons._childrenList.find((icon) => icon.id == 'Book').tap();
                    event.preventDefault();
                    break;
                case 'G':
                    window.gui.menuBar._icons._childrenList.find((icon) => icon.id == 'Guild').tap();
                    event.preventDefault();
                    break;
                case 'J':
                    window.gui.menuBar._icons._childrenList.find((icon) => icon.id == 'Job').tap();
                    event.preventDefault();
                    break;
                case 'D':
                    window.gui.menuBar._icons._childrenList.find((icon) => icon.id == 'Mount').tap();
                    event.preventDefault();
                    break;
                case 'B':
                    window.gui.menuBar._icons._childrenList.find((icon) => icon.id == 'Bestiary').tap();
                    event.preventDefault();
                    break;
                case 'N':
                    window.gui.menuBar._icons._childrenList.find((icon) => icon.id == 'Title').tap();
                    event.preventDefault();
                    break;
                case 'U':
                    window.gui.menuBar._icons._childrenList.find((icon) => icon.id == 'Achievement').tap();
                    event.preventDefault();
                    break;
            }
        }
    });

    window.gui.playerData.on('characterSelectedSuccess', () => {
        isOnline = true;
        $(document).find('.shopBtn.Button').parent().hide();
    });

    window.gui.on('disconnect', () => isOnline = true);
});
