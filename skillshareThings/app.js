"use strict";

const songs = [];

const song1 = {
  song: "Shape of you1",
  timeStreamed: 1.384,
  wonGrammy: true,
};
const song2 = {
  song: "Shape of you2",
  timeStreamed: 2.384,
  wonGrammy: true,
};
const song3 = {
  song: "Shape of you3",
  timeStreamed: 2.384,
  wonGrammy: true,
};
const song4 = {
  song: "Shape of you4",
  timeStreamed: 2.384,
  wonGrammy: false,
};

songs.push(song1, song2, song3, song4);

const hasWonGrammy = songs.some((song) => song.wonGrammy === true);
const hasTimeStreamed = songs.every((song) => song.timeStreamed > 1.5);

console.log(hasWonGrammy, hasTimeStreamed);

songs
  .map((song) =>
    song.timeStreamed > 2.3
      ? { ...song, great: true }
      : { ...song, great: false },
  )
  .forEach((song) => {
    if (song.great) {
      console.log(`The ${song.song} is great`);
    }
  });

console.log(songs);
