// messages.js

export class ActionMessages {
  constructor() {
    this.actionMessages = [
      "greift kraftvoll an",
      "schlägt mit voller Wucht zu",
      "setzt einen präzisen Stoß an",
      "schwingt die Waffe geschickt",
      "wirft seine Waffe auf",
      "versucht einen wilden Angriff auf",
      "führt einen schnellen Hieb aus auf",
      "geht in die Offensive gegen",
      "blockt einen Angriff ab und kontert",
      "setzt eine Spezialattacke eingegen",
      "verpasst einen Haken an",
      "stürmt mutig auf den Gegner zu",
      "täuscht einen Angriff vor und schlägt",
      "führt einen Drehschlag aus gegen",
      "versucht einen hinterhältigen Angriff auf",
      "springt in die Luft und schlägt von oben",
      "führt eine unerwartete Finte aus und verletzt",
      "setzt eine Kombo-Attacke gegen",
      "stößt den Gegner zurück und schlägt erneut",
      "ruft ein Kampfschrei aus und greift an"
    ];
    this.usedMessages = [];
  }

  getRandomMessage() {
    let remainingMessages = this.actionMessages.filter(msg => !this.usedMessages.includes(msg));
    if (remainingMessages.length === 0) {
      this.usedMessages.length = 0;
      remainingMessages = [...this.actionMessages];
    }
    const randomIndex = Math.floor(Math.random() * remainingMessages.length);
    const message = remainingMessages[randomIndex];
    this.usedMessages.push(message);
    return message;
  }
}
