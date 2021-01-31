const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function (stations) {
  let goodStations = [];
  for (const station of stations) {
    const name = station[0];
    const capacity = station[1];
    const venueType = station[2];
    if (station[1] > 20 && (station[2] === 'school' || station[2] === 'community centre')) {
      goodStations.push(station[0]);
    }
  }
  return goodStations;
};

console.log(chooseStations(stations));
