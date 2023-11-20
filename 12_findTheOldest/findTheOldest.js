const findTheOldest = function (array) {
  const currentDate = new Date().getFullYear();
  return array.reduce((oldest, currentPerson) => {
    const oldAge = oldest.yearOfDeath
      ? oldest.yearOfDeath - oldest.yearOfBirth
      : currentDate - oldest.yearOfBirth;
    const currentAge = currentPerson.yearOfDeath
      ? currentPerson.yearOfDeath - currentPerson.yearOfBirth
      : currentDate - currentPerson.yearOfBirth;
    return oldAge < currentAge ? currentPerson : oldest;
  });
};
// Do not edit below this line
module.exports = findTheOldest;
