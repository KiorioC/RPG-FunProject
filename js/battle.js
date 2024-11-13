import { attack } from "./player.js";
import { getRandomMessage } from "./messages.js";

export function startBattle(player1, player2, battleLogElement, returnButton) {
  let turn = Math.random() < 0.5 ? player1 : player2;
  let usedMessages = [];

  const interval = setInterval(() => {
    const actionMessage = getRandomMessage(usedMessages);

    if (turn === player1) {
      const wasCritical = attack(player1, player2);
      battleLogElement.innerHTML += `
                <div class="battle-log-entry">
                    <p><span class="player-name">${player1.name}</span> ${actionMessage} <span class="player-name">${player2.name}</span>!
                    ${wasCritical ? '<span class="critical"> Kritisch!</span>' : ''}
                    <span class="damage">${player2.health.toFixed(2)} HP übrig</span>.</p>
                </div>
            `;
      if (!player2.isAlive()) {
        battleLogElement.innerHTML += `
                    <div class="battle-log-entry">
                        <p><span class="player-name">${player2.name}</span> wurde besiegt! <span class="player-name">${player1.name}</span> gewinnt!</p>
                    </div>
                `;
        clearInterval(interval);
        setTimeout(() => {
          returnButton.classList.add('show');
          returnButton.style.display = 'block';
        }, 5000);
        return;
      }
      turn = player2;
    } else {
      const wasCritical = attack(player2, player1);
      battleLogElement.innerHTML += `
                <div class="battle-log-entry">
                    <p><span class="player-name">${player2.name}</span> ${actionMessage} <span class="player-name">${player1.name}</span>!
                    ${wasCritical ? '<span class="critical"> Kritisch!</span>' : ''}
                    <span class="damage">${player1.health.toFixed(2)} HP übrig</span>.</p>
                </div>
            `;
      if (!player1.isAlive()) {
        battleLogElement.innerHTML += `
                    <div class="battle-log-entry">
                        <p><span class="player-name">${player1.name}</span> wurde besiegt! <span class="player-name">${player2.name}</span> gewinnt!</p>
                    </div>
                `;
        clearInterval(interval);
        setTimeout(() => {
          returnButton.classList.add('show');
          returnButton.style.display = 'block';
        }, 5000);
        return;
      }
      turn = player1;
    }
  }, 1500);
}
