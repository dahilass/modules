const myName = 'Danil';

export function greet(name = myName) {
  return `Привет ${name}! Как твои дела?`;
}
