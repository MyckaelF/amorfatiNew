const numberOfPeoples = document.getElementById('contage')

peopleWatching(numberOfPeoples)

function peopleWatching(contage) {
    let counter = 0
    let contageNumber = parseInt(contage.textContent)
    const timer = setInterval(function() {
        counter += 21

        contage.textContent = contageNumber + counter
    
        
        if(parseInt(contage.textContent) >= 1060) {
            clearInterval(timer)
            
            const newTimer = setInterval(function(){
                let newContageNumber = parseInt(contage.textContent)
                if(newContageNumber < 1060) {
                    let number = 1 + Math.floor(Math.random() * 10)
                    parseInt(contage.textContent = newContageNumber + number)
                } else {
                    let numberNegative = 1 - Math.floor(Math.random() * 10)
                    parseInt(contage.textContent = newContageNumber + numberNegative)
                }
            }, 5000)
        }
    }, 3000)
}
