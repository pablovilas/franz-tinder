module.exports = (Franz) => {
  const getMessages = function getMessages() {
    // set Franz badge
    Franz.setBadge(0);
  };
  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};