export class RPGGame {
  constructor() {
    this.playerSetup = document.getElementById('playerSetup');
    this.battleLog = document.getElementById('battleLog');
    this.returnButton = document.getElementById('returnButton');
  }

  resetGame() {
    this.playerSetup.style.display = 'block';
    this.battleLog.style.display = 'none';
    this.battleLog.innerHTML = '';
    this.returnButton.style.display = 'none';
  }
}
