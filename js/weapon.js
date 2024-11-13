export function createWeapon(name, damage) {
  return {
    name,
    damage: Math.min(Math.max(damage, 1), 20),
  };
}
