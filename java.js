function Mix(){
    let numbers = [1,2,3,4,5,6,7,8,9];
    let randomNumbers = [];

    for(let i = 1; i < 10; i++){
        let index = RandomNumberGenerate(randomNumbers);

        let numberFromArray = numbers[index];
        delete numbers[index];

        document.getElementById(`box${i}`).innerHTML = `${numberFromArray}`;
    }
}

function RandomNumberGenerate(randomNumbers){
    let result = false;
    let rnd = 0;
    
    do{
        rnd = Math.floor(Math.random() * 9);

        if(!randomNumbers.includes(rnd)){
            randomNumbers.push(rnd);
            result = true;
        }

    } while(!result);

    return rnd;
}