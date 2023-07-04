function getSiteName(url: string): string {
  let i = 0;
  let siteName = "";
  let n = 1;
  while (url[i] !== ".") {
    if (url[i - n] === "/") {
      siteName += url[i].toUpperCase();
    }

    if (url[i - n - 1] === "/") {
      siteName += url[i];
      n++;
    }
    i++;
  }
  return siteName;
}

let site1 = getSiteName("https://codecool.com/"); // Codecool
let site2 = getSiteName("https://twitter.com/ "); //  Twitter
let site3 = getSiteName("http://nemzetisport.hu/"); // Nemzetisport

console.log(site1);
console.log(site2);
console.log(site3);
