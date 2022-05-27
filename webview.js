'use strict';

module.exports = (Franz) => {
  const getMessages = function getMessages() {
    let newMessages = document.querySelectorAll('.messageList > .messageListItem.messageListItem--isNew');
    if (newMessages) {
        let count = newMessages.length;
        Franz.setBadge(count);
    }
  };
  Franz.loop(getMessages);
  Franz.injectCSS(_path.default.join(__dirname, 'service.css'));
};