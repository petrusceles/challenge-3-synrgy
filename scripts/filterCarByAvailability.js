function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  let result = [];

  // Tulis code-mu disini
  cars.forEach((e) => {
    if(e.available==true) result.push(e)
  })
  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
