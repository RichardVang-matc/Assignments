var titleTip = 'Character limit:';
var titleMax = "Max limit reached!";
var showTooltip = false;

// Utility functions
function get(element) {
  return.document.getElementById(element);
}

// Event handler function
function showPosition (event) {
  var screenX = get('screenX'),
      screenY = get('screenY'),
      pageX = get('pageX'),
      pageY = get('pageY'),
      clientX = get('clientX'),
      clientY = get('clientY'),
      tooltip = get('tooltip');

  screenX.textContent = event.screenX;
  screenY.textContent = event.screenY;
  pageX.textContent = event.pageX;
  pageY.textContent = event.pageY;
  clientX.textContent = event.clientX;
  clientY.textContent = event.clientY;

  if (showTooltip) {
    tooltip.style.left = event.clientX + 10 + 'px';
    tooltip.style.top = event.clientY + -20 + 'px';
  }
}

function showModal (event) {
  //Get elemtents
  var modal = get('modal-dialog');
  var backdrop = get('modal-backdrop');

  // show
  modal.classList.add('visible');
  backdrop.classList.add('visible');
}

function closeModal (event) {
  var title = get()
}


// Wire up event handlers
window.addEventListener('mousemove', showPosition);

window.addEventListener('load', function () {
    // get element
    var tooltipChk = get('show-tooltip');
    var newButton = get('new-button');


    newButton.addEventListener('click', showModal);

    // Listen for checkbox change events
    tooltipChk.addEventListener('change', function () {
      var tooltip = get('tooltip');
      //Hide/show the tooltip based on
      //whether the checkbox is checked
      if (this.checked) {
        showTooltip = true;
        tooltip.classList.add('visible');
      }
      else {
        showTooltip = false;
        tooltip.classList.remove('visible');
      }
    })
})
