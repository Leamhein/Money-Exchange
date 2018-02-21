// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  var answer = {}, //create object with answers (in future)
  cash = currency,
  [halfDollar, quarter, dime, nickel, pennie] = [50, 25, 10, 5, 1];
  function divider (coin, abbr) { //consider whole parts when dividing into a monetary unit
    var obj = {};
    obj[abbr] = 0;
    while (cash >= coin) {
      cash -= coin;
      obj[abbr]++;
    };
    if (obj[abbr] > 0) { //only values greater than 0 entered in the answer 
      Object.assign(answer, obj);
    };
  };
  if (cash > 10000) {
    return {error: "You are rich, my friend! We don't have so much coins for exchange"};
  };
  divider(halfDollar, "H");
  divider(quarter, "Q");
  divider(dime, "D");
  divider(nickel, "N");
  divider(pennie, "P");

  return answer;
};
