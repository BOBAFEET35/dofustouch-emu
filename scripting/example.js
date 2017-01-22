module.exports = (window) => {
    window.gui.playerData.on('characterSelectedSuccess', () => {
        console.log('Connecté !');
    });
};
