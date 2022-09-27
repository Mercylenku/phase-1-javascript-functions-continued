// code your solution here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
function mondayWork(doWhat = 'go to the office'){
    console.log(`This Monday, I will ${doWhat}.`);
    return `This Monday, I will ${doWhat}.`;
}
function wrapAdjective(par1 = "*"){
    return function (par2 = "a hard worker"){
    return `You are ${par1}${par2}${par1}!`
    }
}