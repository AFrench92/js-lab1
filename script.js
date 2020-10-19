let name = "Tony French"
let age = 28
let birthday = "April 8th"
let detroitGC = true
let lifeEvents = [
    "I was born in Virginia, on Langley Air Force Base",
    "I went to Lansing Community College",
    "I met Sara at GenCon 2017",
    "We just bought a house today"
]

if(detroitGC === true){
    console.log(`My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`)
}else{
    console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`)
}