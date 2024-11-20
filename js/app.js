
import { weapons } from "./weapons.js";
import { armors } from "./armors.js";
import { rings } from "./rings.js";
import { Player } from "./player.js";
import { Battle } from "./battle.js";
import { populateDropdown, getSelectedOption } from "./dropdown.js";
import { RPGGame } from "./resetgame.js";

class GameApp {
  constructor() {
    this.startButton = document.getElementById('startButton');
    this.randomizeButton = document.getElementById('randomizeButton');
    this.battleLog = document.getElementById('battleLog');
    this.returnButton = document.getElementById('returnButton');
    this.init();
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.setupUI();
      this.addEventListeners();
    });
  }

  setupUI() {
    populateDropdown('player1-weapon', weapons);
    populateDropdown('player1-armor', armors);
    populateDropdown('player1-ring', rings);
    populateDropdown('player2-weapon', weapons);
    populateDropdown('player2-armor', armors);
    populateDropdown('player2-ring', rings);

    this.battleLog.style.display = 'none';
    this.returnButton.style.display = 'none';
  }

  addEventListeners() {
    this.startButton.addEventListener('click', () => this.startBattle());
    this.randomizeButton.addEventListener('click', () => this.randomizeSelection());
    this.returnButton.addEventListener('click', () => this.resetGame());
  }

  startBattle() {
    const player1Name = document.getElementById('player1').value || "Spieler 1";
    const player2Name = document.getElementById('player2').value || "Spieler 2";

    const player1 = new Player(
      player1Name,
      100,
      getSelectedOption('player1-weapon', weapons),
      getSelectedOption('player1-armor', armors),
      getSelectedOption('player1-ring', rings)
    );

    const player2 = new Player(
      player2Name,
      100,
      getSelectedOption('player2-weapon', weapons),
      getSelectedOption('player2-armor', armors),
      getSelectedOption('player2-ring', rings)
    );

    document.getElementById('playerSetup').style.display = 'none';
    this.battleLog.style.display = 'block';
    this.returnButton.style.display = 'none';
    document.body.classList.remove('blur-background');

    this.displayBattleIntro(player1, player2);

    setTimeout(() => {
      const battle = new Battle(player1, player2, this.battleLog, this.returnButton);
      battle.start();
    }, 2000);
  }

  displayBattleIntro(player1, player2) {
    const formatRingDescription = (ring) => {
      let description = '';
      if (ring.effect.attack) description += `Erhöht den Angriff um ${ring.effect.attack} Punkte`;
      if (ring.effect.defense) description += `, Verteidigung um ${ring.effect.defense}%`;
      if (ring.effect.health) description += `, Gesundheit um ${ring.effect.health} HP`;
      if (ring.effect.critChance) description += `, Kritische Trefferchance um ${ring.effect.critChance}%`;
      return description;
    };

    this.battleLog.innerHTML = `
      <div class="battle-log-entry">
        <p><span class="player-name">${player1.name}</span> betritt den Kampf mit der Waffe <span class="message">${player1.weapon.name}</span> (<span class="damage">Schaden: ${player1.weapon.damage}</span>), der Rüstung <span class="message">${player1.armor.name}</span> (<span class="defense">Verteidigung: ${player1.armor.defense}%</span>), und dem Ring <span class="message">${player1.ring.name}</span> (<span class="ring-effect">${formatRingDescription(player1.ring)}</span>). <span class="crit">Kritische Trefferchance: ${player1.criticalChance}%</span>.</p>
        <hr class="player-divider">
        <p><span class="player-name">${player2.name}</span> betritt den Kampf mit der Waffe <span class="message">${player2.weapon.name}</span> (<span class="damage">Schaden: ${player2.weapon.damage}</span>), der Rüstung <span class="message">${player2.armor.name}</span> (<span class="defense">Verteidigung: ${player2.armor.defense}%</span>), und dem Ring <span class="message">${player2.ring.name}</span> (<span class="ring-effect">${formatRingDescription(player2.ring)}</span>). <span class="crit">Kritische Trefferchance: ${player2.criticalChance}%</span>.</p>
      </div>
    `;
  }

  randomizeSelection() {
    document.getElementById('player1-weapon').value = 'random';
    document.getElementById('player1-armor').value = 'random';
    document.getElementById('player1-ring').value = 'random';
    document.getElementById('player2-weapon').value = 'random';
    document.getElementById('player2-armor').value = 'random';
    document.getElementById('player2-ring').value = 'random';
  }

  resetGame() {
    const game = new RPGGame();
    game.resetGame();
  }
}

new GameApp();
