const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

const finalPosition = function (moves) {
  let pos = [0, 0];
  for (const move of moves) {
    if (move === 'north') {
      pos[1] += 1;
    } else if (move === 'south') {
      pos[1] -= 1;
    } else if (move === 'east') {
      pos[0] += 1;
    } else if (move === 'west') {
      pos[0] -= 1;
    }
  }
  return pos;
};

console.log(finalPosition(moves));
