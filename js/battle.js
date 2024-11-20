import { getRandomMessage } from "./messages.js";

export class Battle {
  constructor(player1, player2, battleLogElement, returnButton) {
    this.player1 = player1;
    this.player2 = player2;
    this.battleLogElement = battleLogElement;
    this.returnButton = returnButton;
    this.turn = Math.random() < 0.5 ? player1 : player2;
    this.usedMessages = [];
    this.interval = null;
  }

  start() {
    this.battleLogElement.innerHTML += `<p>Der Kampf beginnt!</p>`;
    this.interval = setInterval(() => {
      this.takeTurn();
    }, 1500);
  }

  takeTurn() {
    const actionMessage = getRandomMessage(this.usedMessages);

    if (this.turn === this.player1) {
      this.executeTurn(this.player1, this.player2, actionMessage);
      if (!this.player2.isAlive()) {
        this.endBattle(this.player1, this.player2);
        return;
      }
      this.turn = this.player2;
    } else {
      this.executeTurn(this.player2, this.player1, actionMessage);
      if (!this.player1.isAlive()) {
        this.endBattle(this.player2, this.player1);
        return;
      }
      this.turn = this.player1;
    }
  }

  executeTurn(attacker, defender, actionMessage) {
    const wasCritical = attacker.attack(defender);
    this.battleLogElement.innerHTML += `
      <div class="battle-log-entry">
          <p><span class="player-name">${attacker.name}</span> ${actionMessage} <span class="player-name">${defender.name}</span>!
          ${wasCritical ? '<span class="critical"> Kritisch!</span>' : ''}
          <span class="damage">${defender.health.toFixed(2)} HP übrig</span>.</p>
      </div>
    `;
  }

  endBattle(winner, loser) {
    clearInterval(this.interval);
    this.battleLogElement.innerHTML += `
      <div class="battle-log-entry">
          <p><span class="player-name">${loser.name}</span> wurde besiegt! <span class="player-name">${winner.name}</span> gewinnt!</p>
      </div>
    `;
    setTimeout(() => {
      this.returnButton.classList.add('show');
      this.returnButton.style.display = 'block';
    }, 5000);
  }
}
