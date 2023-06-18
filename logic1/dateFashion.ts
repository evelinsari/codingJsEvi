function dateFashion(you: number, date: number): number {
  if (you <= 2 || date <= 2) {
    return 0;
  }
  if (you >= 8 || date >= 8) {
    return 2;
  } else {
    return 1;
  }
}
let date1 = dateFashion(5, 10); // 2
let date2 = dateFashion(5, 2); // 0
let date3 = dateFashion(5, 5); // 1

console.log(date1);
console.log(date2);
console.log(date3);
