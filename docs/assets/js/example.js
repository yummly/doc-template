// Collect all copy to clipboard buttons
const allCopyButtons = [...document.querySelectorAll('.copy-to-clipboard')];

//
if (allCopyButtons.length > 0) {
  // Set up all toolclip buttons
  allCopyButtons.forEach(item => {
    const data = document.querySelector(`span#${item.id}`);
    item.addEventListener('click', () => handleCopyToClipboard(data.textContent));
  });
}
