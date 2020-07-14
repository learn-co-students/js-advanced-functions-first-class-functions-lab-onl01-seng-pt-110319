const returnFirstTwoDrivers = function(drive) {
    let answer = []
    answer.push(drive[0], drive[1]);
    return answer 
}

const returnLastTwoDrivers = function(drive) {
   let i = drive.length - 1
   let answer = []
    answer.push(drive[i-1], drive[i]);
    return answer
}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

const createFareMultiplier = function (multiplyValue) {
    return function (value) {
      return multiplyValue * value;
    };
  };
  
  const fareDoubler = createFareMultiplier(2);
  
  const fareTripler = createFareMultiplier(3);

  const selectDifferentDrivers = function (drivers, answer) {
      return answer(drivers);
  };