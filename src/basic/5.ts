enum DayOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }

  const weekend = {
    day: DayOfWeek.Saturday | DayOfWeek.Sunday, 
  }
  
  
  const isWeekend = (day: DayOfWeek) => {
    if(weekend.day === day){
    return true;
  } else {
    return false;
  }
}