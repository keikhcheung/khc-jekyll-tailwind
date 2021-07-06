const footnotes = document.querySelectorAll('.footnotes p');
const footnotes_anchors = document.querySelectorAll('[role="doc-noteref"]');

function docReady(fn) {
  // See if document is fully loaded.
  // If loaded:
  if (document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(fn, 1);
  // If not yet loaded:
  } else {
    // Add event listener to loaded state; run fn when loaded.
    document.addEventListener('DOMContentLoaded', fn);
  }
}

footnotes_anchors.forEach((element, index) => {
  // Remove footnote backlink.
  let fn = footnotes[index];
  fn.lastElementChild.remove();
  // Remove unwanted trailing non-breaking space.
  let fn_text = fn.innerHTML;
  fn_text = fn_text.replace(/(&nbsp;)+$/g, '');
  // Create the DOM element for replacement.
  let sn_toggle = document.createElement('label');
  sn_toggle.setAttribute('for', index);
  sn_toggle.classList.add('margin-toggle', 'sidenote-number');
  // Replace footnote anchor with sidenote.
  element.parentNode.replaceChild(sn_toggle, element);
  // Add additional trailing DOM element to the replaced element.
  sn_toggle.insertAdjacentHTML('afterend', '<input type="checkbox" id="' + index + '" class="margin-toggle"/><aside class="sidenote">' + fn_text + '</aside>');
});