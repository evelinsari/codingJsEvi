type Music = {
  artist: string;
  title: string;
  album: string;
  year: number;
  length: number;
};

let songs: Music[] = [
  {
    artist: "Culture Shock",
    title: "Renaissance",
    album: "Sequence",
    year: 2017,
    length: 4,
  },
  {
    artist: "Culture Shock",
    title: "Have It All",
    album: "Have It All / Pandemic",
    year: 2016,
    length: 5,
  },
  {
    artist: "Culture Shock",
    title: "Bunker",
    album: "Sequence",
    year: 2019,
    length: 4,
  },
  {
    artist: "Culture Shock",
    title: "There For You",
    album: "Sequence",
    year: 2019,
    length: 3,
  },
  {
    artist: "Sub Focus",
    title: "Air Breathe",
    album: "Portals",
    year: 2020,
    length: 3,
  },
  {
    artist: "Sub Focus",
    title: "Air Breathe",
    album: "Portals",
    year: 2020,
    length: 4,
  },
  {
    artist: "Sub Focus",
    title: "Time",
    album: "Portals",
    year: 2020,
    length: 10,
  },
];

function getPortalsLongest(songs: Music[]) {
  let i = 0;
  let longSong = "";
  let number = 0;
  while (songs[i] !== undefined) {
    if (
      songs[i].artist === "Sub Focus" &&
      songs[i].album === "Portals" &&
      number < songs[i].length
    ) {
      number = songs[i].length;
      longSong = songs[i].title;
    }
    i++;
  }
  return longSong;
}
let long = getPortalsLongest(songs);
console.log(long);
console.log(
  "------------------------------------------------------------------------------------------------"
);

function getPortalShortest(songs: Music[]) {
  let i = 0;
  let shortList: Music[] = [];

  while (songs[i] !== undefined) {
    if (songs[i].artist === "Sub Focus" && songs[i].album === "Portals") {
      shortList = [...shortList, songs[i]];
    }
    i++;
  }

  i = 0;
  let lengthList: number[] = [];
  while (shortList[i] !== undefined) {
    lengthList = [...lengthList, shortList[i].length];
    i++;
  }

  lengthList = lengthList.sort((a: number, b: number) => a - b);

  i = 0;
  let newIndex = 0;
  while (shortList[i] !== undefined) {
    if (shortList[i].length === lengthList[0]) {
      newIndex = i;
    }
    i++;
  }
  return shortList[newIndex].title;
}

let sh1 = getPortalShortest(songs);
console.log(sh1);

console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++");

function getTheShortestTitle(songs: Music[]) {
  let i = 0;
  let allSubFocusList: Music[] = [];

  while (songs[i] !== undefined) {
    if (songs[i].artist === "Sub Focus") {
      allSubFocusList = [...allSubFocusList, songs[i]];
      
    }
    i++;
  }
    i = 0
  let lengthLi: number[] =  []

  while (allSubFocusList[i] !== undefined) {
    lengthLi = [...lengthLi,allSubFocusList[i].title.length ]
    i++
  }
lengthLi = lengthLi.sort((a: number, b: number) => a - b)

i = 0
let n = 0
while (allSubFocusList[i] !== undefined) {
    if (allSubFocusList[i].title.length === lengthLi[0]) {
        n = i
    }
    i++
   
}
return allSubFocusList[n].title
}

let title1 = getTheShortestTitle(songs);
console.log(title1);
