export function createArmor(name, defense) {
  return {
    name,
    defense: Math.min(Math.max(defense, 0), 50)
  };
}
