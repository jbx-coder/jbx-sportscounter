var point1=0
var point2=0
var score1=0
var score2=0
var redpoint =document.getElementById('redpoint')
var red =document.getElementById('red')
var bluepoint =document.getElementById('bluepoint')
var blue =document.getElementById('blue')
var clear=document.getElementById('clear')
getdata()

function getten(a){
    if (a>9){
        return a
    }else{
        return '0'+a
    }
}
function judge(){
    if(point1 >=21 && point1-point2>1){
        score1+=1
        bluepoint.innerHTML=score1
        point1=0
        point2=0
        red.innerHTML=getten(point2)
        blue.innerHTML=getten(point1)
    }else if(point2 >=21 && point2-point1>1){
        score2+=1
        redpoint.innerHTML=score2
        point1=0
        point2=0
        red.innerHTML=getten(point2)
        blue.innerHTML=getten(point1)
    }else{
        return
    }
}
function setdata(){
    data=[
        point1,
        point2,
        score1,
        score2
    ]
    localStorage.setItem('jbx-coder-sportscounter-badminton',JSON.stringify(data))
}
function getdata(){
    if('jbx-coder-sportscounter-badminton' in localStorage){
        data=JSON.parse(localStorage.getItem('jbx-coder-sportscounter-badminton'))
        point1=data[0]
        point2=data[1]
        score1=data[2]
        score2=data[3]
        red.innerHTML=getten(point2)
        blue.innerHTML=getten(point1)
        redpoint.innerHTML=score2
        bluepoint.innerHTML=score1
    }
}
clear.onclick=function(){
    point1=0
    point2=0
    score1=0
    score2=0
    red.innerHTML=getten(point2)
    blue.innerHTML=getten(point1)
    redpoint.innerHTML=score2
    bluepoint.innerHTML=score1
    setdata()
}
red.onclick=function(){
    point2+=1
    red.innerHTML=getten(point2)
    judge()
    setdata()
}
blue.onclick=function(){
    point1+=1
    blue.innerHTML=getten(point1)
    judge()
    setdata()
}