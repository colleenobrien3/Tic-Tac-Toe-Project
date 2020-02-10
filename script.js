console.log('connected!')


let eachBox = document.querySelectorAll(".square")

let boxColors

function assign(){

let box1 =  document.querySelector('#box1')
let box1Color = box1.style.backgroundColor
console.log(box1Color)

let box2 =  document.querySelector('#box2')
let box2Color = box2.style.backgroundColor
console.log(box2Color)

let box3 =  document.querySelector('#box3')
let box3Color = box3.style.backgroundColor
console.log(box3Color)

let box4 =  document.querySelector('#box4')
let box4Color = box4.style.backgroundColor
console.log(box4Color)

let box5 =  document.querySelector('#box5')
let box5Color = box5.style.backgroundColor
console.log(box5Color)

let box6 =  document.querySelector('#box6')
let box6Color = box6.style.backgroundColor
console.log(box6Color)

let box7 =  document.querySelector('#box7')
let box7Color = box7.style.backgroundColor
console.log(box7Color)

let box8 =  document.querySelector('#box8')
let box8Color = box8.style.backgroundColor
console.log(box8Color)

let box9 =  document.querySelector('#box9')
let box9Color = box9.style.backgroundColor
console.log(box9Color)

boxColors = [box1Color, box2Color, box3Color, box4Color, box5Color, box6Color, box7Color, box8Color, box9Color]

}

eachBox.forEach(item => {
	item.addEventListener("click", changeColor)
	function changeColor(event){
		if(clickCount%2===0 && event.target.style.backgroundColor==='white'){
		event.target.style.backgroundColor = 'red';
		clickUp();
		assign()
		console.log(boxColors)
		} else if (clickCount%2!==0 && event.target.style.backgroundColor==='white') {
			event.target.style.backgroundColor = 'blue'
			clickUp()
			assign()
			console.log(boxColors)
		}
	}
}
)

let clickCount = 0

function clickUp(){
	clickCount+=1
	console.log(clickCount)
}


document.querySelector("#resetButton").addEventListener('click', resetGame)
function resetGame(){
	document.querySelectorAll('.square').forEach(item=>{
		item.style.backgroundColor = "white"
	})
}






// g

