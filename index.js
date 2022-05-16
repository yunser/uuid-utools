const { v4: uuidv4 } = require('uuid')

window.exports = {
    'uuid': {
        mode: 'none',
        args: {
            enter: (action) => {
                utools.copyText(uuidv4())
                window.utools.hideMainWindow()
                utools.showNotification('已复制')
                window.utools.outPlugin()
            }
        }
    }
}
