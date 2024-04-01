let cities=['Fasisalabad','Lahore','Karachi','Islamabad','burewala','Sheikhupura','Kashmir'];

document.getElementById('simple-alert').onclick=function (){
    let input=document.getElementById('getInput').value
    alert(input)
    
}

document.getElementById('print-name').onclick=function (){
    let input=document.getElementById('getInput').value

    if(input===''){
        alert('Please Enter Your Name in Input')
    } else{
        document.getElementById('getOutput').innerHTML=input
    }
}

document.getElementById('print-cities').onclick=function (){
    document.getElementById('getOutput').innerHTML=""

    for(let i=0;i<cities.length;i++){
        document.getElementById('getOutput').innerHTML+=i+1+") "+cities[i]+"<br />"
    }
}

document.getElementById('add-city').onclick=function (){
    let input=document.getElementById('getInput').value

    if(input===''){
        alert('Please Enter Name of Some City in Input')
    }
    
    if(input!=''){
        cities.push(input)
        document.getElementById('getOutput').innerHTML="City has been Added Successfully"
    }
}

document.getElementById('print-table').onclick=function (){
    document.getElementById('getOutput').innerHTML=""

    let tableOfNumber=document.getElementById('getInput').value;

    if(tableOfNumber==='' || isNaN(tableOfNumber)){
        alert("Invalid Input")
    } else{
        let tableLength=+prompt('Enter value you want table upto') 

        for(let i=1;i<=tableLength;i++){
        document.getElementById('getOutput').innerHTML+=tableOfNumber + " x " + i + " = " + (tableOfNumber*i)+"<br />"
    }
    }

    
}


document.getElementById('clr-btn').onclick=function (){
    document.getElementById('getInput').value=""
}
document.getElementById('clr-output').onclick=function (){
    document.getElementById('getOutput').innerHTML=""
}