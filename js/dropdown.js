export function populateDropdown(selectId, items) {
  const select = document.getElementById(selectId);
  items.forEach(item => {
    const option = document.createElement('option');
    option.value = item.name;
    option.textContent = item.name;
    select.appendChild(option);
  });
}

export function getSelectedOption(selectId, items) {
  const selected = document.getElementById(selectId).value;
  return selected === 'random' ? items[Math.floor(Math.random() * items.length)] : items.find(item => item.name === selected);
}
