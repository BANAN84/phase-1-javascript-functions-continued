
  
 
  
  function saturdayFun(string= "roller-skate") {
    return `This Saturday, I want to ${string}!`;
  }
  
  const mondayWork= function (str= "go to the office") {
    return `This Monday, I will ${str}.`;
  }

  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  