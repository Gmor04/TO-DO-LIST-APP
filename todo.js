

let addUp = document.querySelector('.search');
let displayBoard = document.querySelector('.display')  
let  listcon = document.querySelector('.shoow')
let  tasknum = document.querySelector('.myspan')
let  s = document.querySelector('.spaa')


let  looop = [];

function diplayloop() {
    

    displayBoard.innerHTML = ''

    for (let index = 0; index < looop.length; index++) {
        
        displayBoard.innerHTML += `  <div class="shoow">
                                            <div class="test">${looop[index]}</div>
                                            <button class="remm" onclick="remove(${index})">Remove</button>
                                        </div>
    

                                     `
}
    
}


function pending() {
    if (looop.length <= 1) {
        tasknum.innerHTML = `You have ${looop.length} pending task `
   
    } else {
        tasknum.innerHTML = `You have ${looop.length} pending tasks `
    }

}



function add() {
    if (addUp.value == '') {
        return
    }  
    looop.push(addUp.value)
 
    diplayloop()
    
    addUp.value = '' 

    // tasknum.innerHTML = `You have ${looop.length} pending task ` 
    pending()
    
    
}



function remove(index) {
    
    // console.log(index);
    
    looop.splice(index,1)

    diplayloop()

    
    // tasknum.innerHTML = `You have ${looop.length} pending task ` 
    pending()
}


function clearAll()  {
    pending()
    displayBoard.innerHTML = ''
    
}


tasknum.innerHTML = `You have ${looop.length} pending task `
