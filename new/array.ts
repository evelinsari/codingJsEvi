type Movie = {
  title: string;
  genre: string;
  originalLanguage: string;
  length: number;
};

let movies: Movie[] = [
  {
    title: "CCCCCCCC",
    genre: "comedy",
    originalLanguage: "english",
    length: 908,
  },
  {
    title: "Titanic",
    genre: "action",
    originalLanguage: "english",
    length: 280,
  },
  {
    title: "Titanic2222",
    genre: "comedy",
    originalLanguage: "english",
    length: 280,
  },
  {
    title: "AAAAAAAAXY",
    genre: "comedy",
    originalLanguage: "english",
    length: 908,
  },
  {
    title: "BBBBTitanic2222",
    genre: "comedy",
    originalLanguage: "hun",
    length: 200,
  },
  {
    title: "CCCCCTitanic2222",
    genre: "drama",
    originalLanguage: "english",
    length: 190,
  },
  {
    title: "XY",
    genre: "comedy",
    originalLanguage: "english",
    length: 90,
  },
];

function getLongestEnglishComedy(movies:Movie[]): string |null {
  let comedyList: Movie[]= movies.filter(movie =>movie.genre === "comedy" && movie.originalLanguage === "english")
  if(comedyList.length === 0) return null
 
  let i = 0
  
  let longest = 0
  let newIndex = 0
  while (comedyList[i] !== undefined) {
    if (comedyList[i].length > longest) {
      longest = comedyList[i].length
      newIndex = i
    }
    i++
  }
  return comedyList[newIndex].title
}

let long1 =getLongestEnglishComedy(movies)
console.log(long1)

function getShorterTitle(movies: Movie[]): string | null {
  let comList: Movie[] = movies.filter((movie) => movie.genre === "comedy");
  if (comList.length === 0) return null;

  let i = 0;
  let titleShort: number[] = [];
  while (comList[i] !== undefined) {
    titleShort = [...titleShort, comList[i].title.length];
    i++;
  }

  titleShort = titleShort.sort((a: number, b: number) => a - b);
  i = 0;
  let lastI = 0;
  while (comList[i] !== undefined) {
    if (comList[i].title.length === titleShort[0]) {
      lastI = i;
    }
    i++;
  }
  return comList[lastI].title;
}

let short1 = getShorterTitle(movies);
console.log(short1);


 