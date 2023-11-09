function sortDates(arr) {
    const sortedDates = arr.slice().sort((date1, date2) => {
      const [day1, month1, year1] = date1.split('-');
      const [day2, month2, year2] = date2.split('-');

      const numericDate1 = parseInt(year1 + month1 + day1, 10);
      const numericDate2 = parseInt(year2 + month2 + day2, 10);

      return numericDate1 - numericDate2;
    });
  
    return sortedDates;
}
  

  const unsortedDates = ["15-01-2023", "10-05-2022", "30-11-2021", "05-04-2024"];
  const sortedDates = sortDates(unsortedDates);
  console.log("Fechas ordenadas cronológicamente:", sortedDates);