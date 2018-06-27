/**checked-cancel-all.js
 * @fileoverview The process for making checkbox all selected items to panel.
 * @author Randy Xu
 */
 
/**checkAll
 * Make all checkboxes with certain name as selectd or canceled.
 * @param {string} checkBoxName The name of certain checkboxes.
 */
function checkAll(checkBoxName) {
  let checkboxes = document.getElementsByName(checkBoxName);
  for (let i=0; i < checkboxes.length; i++) {
	checkboxes[i].checked = !checkboxes[i].checked;
  }
}