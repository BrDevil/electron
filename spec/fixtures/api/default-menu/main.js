const { app, Menu } = require('electron')

let customMenu

if (app.commandLine.hasSwitch('custom-menu')) {
  customMenu = new Menu()
  Menu.setApplicationMenu(customMenu)
}

app.on('ready', () => {
  setImmediate(() => {
    process.stdout.write(JSON.stringify(Menu.getApplicationMenu() === customMenu))
    process.stdout.end()

    app.quit()
  })
})
