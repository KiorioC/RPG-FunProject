export function resetGame() {
  document.getElementById('playerSetup').style.display = 'block';
  document.getElementById('battleLog').style.display = 'none';
  document.getElementById('battleLog').innerHTML = '';
  document.getElementById('returnButton').style.display = 'none';
  document.body.classList.remove('blur-background');
}
