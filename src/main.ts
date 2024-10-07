function hello(): any {
  const grettings = 'Welcome to everyone';
  return grettings;
}

const meesageFisrtPart = 'Message :';
const messageSecondPart = hello();

console.log(`${meesageFisrtPart} ${messageSecondPart}`);
