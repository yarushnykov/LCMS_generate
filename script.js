let cell,
    dateNow,
    init,
    cellArray = [],
    finalStr,
    runButton = document.querySelector(".runButton");    

function checkValue(){

    cell = document.getElementsByClassName("cellButton")[0].value;
    init = document.getElementsByClassName("initButton")[0].value; 

    cell = cell.toUpperCase();
    init = init.toUpperCase();  
    
    if(cell == '' || init == ''){
        alert("Ошибка ввода данных. Заполните все поля!")
    }else{
        createArr();
    }
}

runButton.addEventListener('click',checkValue);

function createArr(){    
    let strTemp;        

label:for (let i = 1; i <= 8; i++ ){
    for (let k = 1; k <= 12; k++){
        switch(i){
            case 1: strTemp= 'A' + k; break;
            case 2: strTemp= 'B' + k; break;
            case 3: strTemp= 'C' + k; break;
            case 4: strTemp= 'D' + k; break;
            case 5: strTemp= 'E' + k; break;
            case 6: strTemp= 'F' + k; break;
            case 7: strTemp= 'G' + k; break;
            case 8: strTemp= 'H' + k; break;
        }
        cellArray.push(strTemp);
        if(strTemp == cell){
            break label;
        }
    }
}
realDateNow();
}

function realDateNow(){
    let tmpDay,
        tmpMonth,
        tmpYear;       

    let date = new Date();
    
    tmpDay = String(date.getDate());
    if(tmpDay.length<2){
        tmpDay = '0' + tmpDay;
    } 
    tmpMonth = String(date.getMonth() + 1);
    if(tmpMonth.length<2){
        tmpMonth = "0" + tmpMonth;
    }
    tmpYear = String(date.getFullYear()%100);
    if(tmpYear.length<2){
        tmpYear = "0" + tmpYear;
    } 
    dateNow = tmpDay + tmpMonth + tmpYear;

    createFinalStr();    
}

function createFinalStr(){
    finalStr = '';
    for (let i=0; i<cellArray.length; i++){
        finalStr = (finalStr + init + dateNow + cellArray[i] + "\n");        
    }  
    alert("Загрузите текстовый файл с помощью ссылки."); 

    let blob = new Blob([finalStr], {type: 'text/plain'});
    link.href = URL.createObjectURL(blob);    
}











    
    

