//Global variable that holds the csv file once its been parsed thru by the fileReader 
let dataArray = [];
let readStatus = false;
let totalPoints =0;
let teamNames = [
    ["ATL", "Hawks"], ["BOS", "Celtics"], [""]
]

function handleFiles(files){
    if(window.FileReader){
        getAsText(files[0]);
    }else{
        alert('FileReader is not supported in this browser');
    }
}

function getAsText(filetoRead){
    var reader = new FileReader();
    
    reader.readAsText(filetoRead);
    
    reader.onload = loadHandler;
    reader.onerror = errorHandler;
}

function loadHandler(event){
    var csv = event.target.result;
    processData(csv);
}

function processData(csv){
    var allTextLines = csv.split(/\r\n|\n/);
    var lines = [];
    for (var i=0; i<allTextLines.length;i++){
        var data = allTextLines[i].split(',');
        var tarr=[];
        for (var j=0; j<data.length;j++){
            tarr.push(data[j]);
        }
        lines.push(tarr);
        dataArray.push(tarr);
    }
    console.log(lines);
    analyzeStats();
}
function errorHandler(evt){
    if(evt.target.error.name == "NotReadableError"){
        alert("Cannot read file!");
    }
}

function analyzeStats(){
    var counter = 0;
    var testDate = new Date(2020,01,02); //Dec. 16th 1996 
	var placeholder = new Date();
	//var todayDate = new Date(placeholder.getFullYear(), placeholder.getMonth(), placeholder.getDate());
    console.log(testDate);
    for(var i=0;i<dataArray.length;i++){
        //Get the date for the index that we are currently at. 
        var testString = dataArray[i][2];
        //console.log(testString);
        
        var year = parseInt(new String(testString.slice(0,4)),10);
        var month = parseInt(new String(testString.slice(5,7)),10);
        var day = parseInt(new String(testString.slice(8,10)),10);
        
        var tempDate = new Date(year,month, day);
    
        //console.log(tempDate.getDate());
        
        //Now we want to print out a list containing all the stats for the games Kobe played on today's date. 
        var ul = document.getElementById("list");
        
        if(testDate.getDate() == tempDate.getDate() && testDate.getMonth() == tempDate.getMonth()){
            console.log("Record date is:" + tempDate)
            var li = document.createElement('li');
            //console.log(dataArray[i][27]);
            var tempString = dataArray[i][8];
            if(dataArray[i][8] === "Did Not Dress" || dataArray[i][8] === "Did Not Play" || dataArray[i][8] === "Not With Team" || dataArray[i][8] === "Played Suspended"){
                console.log("Skip");
            }
            else{
                //If it's an away game 
                if(dataArray[i][5] == "@"){
                    //totalPoints = totalPoints + dataArray[i][27];
                    if(tempDate.getYear() > 100){
                        li.innerHTML = dataArray[i][27] + " points @ " + dataArray[i][6] + " in " + tempDate.getFullYear();
                    }
                    else{
                        li.innerHTML = dataArray[i][27] + " points @ " + dataArray[i][6] + " in 19" + tempDate.getYear();
                    }
                    
                    tempRow = i; 
                    console.log("ROW #" + tempRow)
                    totalPoints = totalPoints + parseInt(dataArray[tempRow][27],10);
                    //console.log(li);
                    console.log("iteration number" + i + "points:" + totalPoints);
                }
                //If it's a home game 
                else{
                    //totalPoints = totalPoints + dataArray[i][27];
                    tempRow = i; 
                    console.log("ROW #" + tempRow)
                    totalPoints = totalPoints + parseInt(dataArray[tempRow][27],10);
                    console.log(tempDate.getYear());
                    if(tempDate.getYear() >= 100){
                        li.innerHTML = dataArray[i][27] + " points Vs. " + dataArray[i][6] + " in " + tempDate.getFullYear();
                    }
                    else{
                        li.innerHTML = dataArray[i][27] + " points Vs. " + dataArray[i][6] + " in 19" + tempDate.getYear();
                    }
                    console.log("Temp Year is: " + tempDate.getFullYear() + " Temp month: " + tempDate.getMonth() + " tempDay: " + tempDate.getDate());
                    //console.log(li);
                    console.log("iteration number" + i + "points:" + totalPoints);
                }
                list.append(li);
            }
			var temp = totalPoints;
			setTimeout(() => { animateValue("points",0,temp,1000);},150);
            //animateValue("points",0,temp,1000);
        }
    }
}

function animateValue(id,start,end,duration){
    var range = end-start;
    var current = 0;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration/range));
    var obj = document.getElementById("points");
    var timer = setInterval(function(){
        current += increment; 
        obj.innerHTML = current;
        if(current == end){
            clearInterval(timer);
        }
    },stepTime);
}

//A function used to print the lines. Mostly used for testing)
function printLines(){
    var testDate = new Date(1996,11);
    var testDay = 1;
    
    var testString = dataArray[1][2];
    var year = parseInt(new String(testString.slice(0,4)),10);
    var month = parseInt(new String(testString.slice(5,7)),10);
    var day = parseInt(new String(testString.slice(8,10)),10);
    
    var tempDate = new Date(year,month, day);

    console.log('The tempDate is on the month:');
    console.log(testDay);
    console.log('TestDate is on the month');
    console.log(tempDate.getDate());
    
   if(tempDate.getDate() == testDay){
       document.getElementById("points").innerHTML = dataArray[2][27];
   }
    
    if(tempDate.getDay() == testDate.getDay() && tempDate.getMonth() == testDate.getMonth()){
        alert("Success");
        
    }else{
        alert('failure');
    }
    
}
