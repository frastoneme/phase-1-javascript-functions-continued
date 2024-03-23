// code your solution here
function saturdayFun(nothing="roller-skate") {     //default activity when nothing is passed
    return `This Saturday, I want to ${nothing}!`
  }
  let mondayWork = function(nothing="go to the office") {
    return `This Monday, I will ${nothing}.`
  }
  let wrapAdjective = function(style="*") {
    return function(adjective="special") {
      return `You are ${style}${adjective}${style}!`
    }
  }