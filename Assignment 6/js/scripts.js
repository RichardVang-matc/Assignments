var messages = ["","","",""];

function Message(type, user, text) {
  this.type = type;
  this.user = user;
  this.text = text;
}

function addMessage(event) {
  var user, type, className;
  var messageInput = document.getElementById('message-input');
  var messagesContainerEl = document.getElementById('message-container');

  switch (event.target.id) {
    case 'send-button':
      user = 'Richard';
      type = 'out';
      className = 'out-message';
      break;
    case 'reply-button';
      user = "Alyssa";
      type = 'in';
      className = 'in-message';
      break;
    default:
      user = 'unknown';
      type = 'error';
      className = 'error-message';
  }

}
