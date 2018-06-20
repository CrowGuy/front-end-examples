/**checked-to-panel.js
 * @fileoverview The process for making checkbox selected items to panel.
 * @author Randy Xu
 */

/**itemClick
 * The checkbox click event listener for each item.
 * @param {string} checkBoxId The id of certain checkbox.
 */
function itemClick(checkBoxId) {
  const ELEMENT_CHECKBOX = document.getElementById(checkBoxId);
  const ITEM = ELEMENT_CHECKBOX.value;
  if (ELEMENT_CHECKBOX.checked) {
    addItem(getPanel(ELEMENT_CHECKBOX.name), ITEM);
  }
  else{ 
    removeItem(getPanel(ELEMENT_CHECKBOX.name), ITEM);
  }
}

/**getPanel
 * Get the element of certain panel name.
 * @param {string} name The name of panel element.
 * @return {element}
 */
function getPanel(name) {
  return document.getElementById('panel' + name);
}

/**addItem
 * Add the item into panel.
 * @param {element} panel The element of certain panel.
 * @param {string} vlaue The value of item.
 */
function addItem(panel, value) {
  if (panel.innerHTML == '') {
    panel.innerHTML = value;
  }
  else {
    panel.innerHTML = panel.innerHTML + ',' + value;
  }
}

/**removeItem
 * Remove the certain item from panel.
 * @param {element} panel The element of certain panel.
 * @param {string} value The value of item.
 */
function removeItem(panel, value) {
  let regex = new RegExp(',' + value, 'g');
  if (panel.innerHTML.match(regex)) {
    panel.innerHTML = panel.innerHTML.replace(regex, '');
  }
  else {
    let regex_otherwise = new RegExp(value + ',?', 'g');
    panel.innerHTML = panel.innerHTML.replace(regex_otherwise, '');
  }
}
