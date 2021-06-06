const footnotes = document.querySelectorAll('.footnotes p');
console.log(footnotes)
const footnotes_anchors = document.querySelectorAll('sup');
console.log(footnotes_anchors)

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

  // Replace footnote anchor with sidenote.
  let sn_toggle = document.createElement('label');
  sn_toggle.setAttribute('for', index);
  sn_toggle.classList.add('margin-toggle', 'sidenote-number');
  element.parentNode.replaceChild(sn_toggle, element);
  sn_toggle.insertAdjacentHTML('afterend', '<input type="checkbox" id="' + index + '" class="margin-toggle"/><span class="sidenote">' + fn_text + '</span>');
});

// docReady(function() {
//   // Remove footnote backlink.
//   let fn = footnotes[index];
//   fn.lastElementChild.remove();
//   // Remove unwanted trailing non-breaking space.
//   let fn_sn = fn.innerHTML;
//   fn_sn = fn_sn.replace(/(&nbsp;)+$/g, '');
  
//   // Replace footnote anchor with sidenote.
//   let sidenote = document.createElement('label');
//   sidenote.setAttribute('for', index);
//   sidenote.classList.add('margin-toggle', 'sidenote-number');
//   sidenote.innerHTML = '<input type="checkbox" id="' + index + '" class="margin-toggle"/><span class="sidenote">' + fn_sn + '</span>';
//   footnotes_anchors[index].parentNode.replaceChild(sidenote, footnotes_anchors[index]);
// });

//   Array.prototype.forEach.call(footnotes_HTML, function(index){
//     // Remove the return link and the preceding non-breaking space at the end of each footnote.
//     var fn_back = footnotes[index].removeChild(footnotes[index].childNodes.lastChild);
//     // Remove the extra non-breaking space in the sidenote text.
//     var fn_sn = footnotes[index].innerHTML.replace(/(&nbsp;)+$/g, '');
//     // Copy footnotes and place it in the side note margin.
//     this.replaceWith("<label for='"+index+"' class='margin-toggle sidenote-number'></label><input type='checkbox' id='"+index+"' class='margin-toggle'/><span class='sidenote'>"+fn_sn+"</span>")
//   }
//   // Hide footnotes at the bottom of the page.
//   // document.querySelector(".footnotes").hide();
// )});