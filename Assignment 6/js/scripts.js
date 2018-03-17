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
  if (messageInput.value != '') {
    // Construct message and add to collection.
    var message = new Message(type, user, messageInput.value);
    message.push(message);

    // Create elements.
    var messageText = document.createTextNode(message.text);
    var messageeSpanEl = document.createElement('span');
    var messageDivEl = document.createElement('div');

    messageSpanEl.appendChild(messageText);
    messageDivEl.appendChild(messageSpanEl);
    messageDivEl.className = className;

    // DOM
    messagesContainerEl.appendChild(messageDivEl);

    // Reset input
    messageInput.value = '';
  }
}

var init = function() {
  // Wire event handlers
  document.getElementById('send-button').onclick = addMessage;
  document.getElementById('reply-button').onclick = addMessage;
}

init();
