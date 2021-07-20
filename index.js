let satFun, monFun, flair, flair2


function saturdayFun(satFun){
    if (typeof(satFun) === "undefined"){
        return 'This Saturday, I want to roller-skate!' 
    }else{
        return 'This Saturday, I want to ' +satFun + '!' 
    }
     
}

const mondayWork = function(monFun){
    if(typeof(monFun) === "undefined")
    {
        return 'This Monday, I will go to the office.'
    }
    else{
        return 'This Monday, I will ' +monFun + '.'
    }
}

function wrapAdjective(flair = '*'){
    return function(flair2){
        return 'You are ' +flair +flair2 +flair + '!'
    }
}