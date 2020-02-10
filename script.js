console.log('connected!')


let eachBox = document.querySelectorAll(".square")

let boxColors

function assign(){

let box1 =  document.querySelector('#box1')
let box1Color = box1.style.backgroundColor


let box2 =  document.querySelector('#box2')
let box2Color = box2.style.backgroundColor


let box3 =  document.querySelector('#box3')
let box3Color = box3.style.backgroundColor


let box4 =  document.querySelector('#box4')
let box4Color = box4.style.backgroundColor


let box5 =  document.querySelector('#box5')
let box5Color = box5.style.backgroundColor


let box6 =  document.querySelector('#box6')
let box6Color = box6.style.backgroundColor


let box7 =  document.querySelector('#box7')
let box7Color = box7.style.backgroundColor


let box8 =  document.querySelector('#box8')
let box8Color = box8.style.backgroundColor


let box9 =  document.querySelector('#box9')
let box9Color = box9.style.backgroundColor


boxColors = [box1Color, box2Color, box3Color, box4Color, box5Color, box6Color, box7Color, box8Color, box9Color]

}

eachBox.forEach(item => {
	item.addEventListener("click", changeColor)
	function changeColor(event){
		if(clickCount%2===0 && event.target.style.backgroundColor==='white'){
		event.target.style.backgroundColor = 'red';
		clickUp();
		assign()
		alertWinner()
		} else if (clickCount%2!==0 && event.target.style.backgroundColor==='white') {
			event.target.style.backgroundColor = 'blue'
			clickUp()
			assign()
			alertWinner()
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
	clickCount = 0
}



// function alertWinner(){
// 	if(boxColors[0]===boxColors[1] && boxColors[1]===boxColors[2]){
// 		if(boxColors[0]==='red'){
// 			console.log('Red wins')
// 		}
// 		else if(boxColors[0]==='blue'){
// 			console.log('Blue wins')
// 		}
// 	}
// 	else if(boxColors[0]===boxColors[3] && boxColors[3]===boxColors[6]){
// 		if(boxColors[0]==='red'){
// 			console.log('Red wins')
// 		}
// 		else if(boxColors[0]==='blue'){
// 			console.log('Blue wins')
// 		}
// 	}
// 	else if(boxColors[0]===boxColors[4] && boxColors[4]===boxColors[8]){
// 		if(boxColors[0]==='red'){
// 			console.log('Red wins')
// 		}
// 		else if(boxColors[0]==='blue'){
// 			console.log('Blue wins')
// 		}
// 	}
// 	else if(boxColors[1]===boxColors[4] && boxColors[4]===boxColors[7]){
// 		if(boxColors[1]==='red'){
// 			console.log('Red wins')
// 		}
// 		else if(boxColors[1]==='blue'){
// 			console.log('Blue wins')
// 		}

// 	}
// 	else if(boxColors[2]===boxColors[4] && boxColors[4]===boxColors[6]){
// 		if(boxColors[6]==='red'){
// 			console.log('Red wins')
// 		}
// 		else if(boxColors[6]==='blue'){
// 			console.log('Blue wins')
// 		}

// 	}
// 	else if(boxColors[2]===boxColors[5] && boxColors[5]===boxColors[8] && boxColors[5]==='red'){
// 		console.log('wtf')
// 	}
// 	else if(clickCount===9){
// 		console.log('Tie')
// 	}

// }
function alertWinner(){
	if(boxColors[0]==='red' && boxColors[1] === 'red' && boxColors[2] === 'red'){
		eachBox.forEach(item=>{item.style.backgroundColor='red'})
		alert('Red wins. Click the New Game button to play again.')
	}
	if(boxColors[0]==='blue' && boxColors[1] === 'blue' && boxColors[2] === 'blue'){
		eachBox.forEach(item=>{item.style.backgroundColor='blue'})
		alert('Blue wins. Click the New Game button to play again.')
	}
	if(boxColors[0]==='red' && boxColors[3] === 'red' && boxColors[6] === 'red'){
		eachBox.forEach(item=>{item.style.backgroundColor='red'})
		alert('Red wins. Click the New Game button to play again.')
	}
	if(boxColors[0]==='blue' && boxColors[3] === 'blue' && boxColors[6] === 'blue'){
		eachBox.forEach(item=>{item.style.backgroundColor='blue'})
		alert('Blue wins. Click the New Game button to play again.')
	}
	if(boxColors[1]==='red' && boxColors[4] === 'red' && boxColors[7] === 'red'){
		eachBox.forEach(item=>{item.style.backgroundColor='red'})
		alert('Red wins. Click the New Game button to play again.')
	}
	if(boxColors[1]==='blue' && boxColors[4] === 'blue' && boxColors[7] === 'blue'){
		eachBox.forEach(item=>{item.style.backgroundColor='blue'})
		alert('Blue wins. Click the New Game button to play again.')
	}
	if(boxColors[3]==='red' && boxColors[4] === 'red' && boxColors[5] === 'red'){
		eachBox.forEach(item=>{item.style.backgroundColor='red'})
		alert('Red wins. Click the New Game button to play again.')
	}
	if(boxColors[3]==='blue' && boxColors[4] === 'blue' && boxColors[5] === 'blue'){
		eachBox.forEach(item=>{item.style.backgroundColor='blue'})
		alert('Blue wins. Click the New Game button to play again.')
	}
	if(boxColors[2]==='red' && boxColors[5] === 'red' && boxColors[8] === 'red'){
		eachBox.forEach(item=>{item.style.backgroundColor='red'})
		alert('Red wins. Click the New Game button to play again.')
	}
	if(boxColors[2]==='blue' && boxColors[5] === 'blue' && boxColors[8] === 'blue'){
		eachBox.forEach(item=>{item.style.backgroundColor='blue'})
		alert('Blue wins. Click the New Game button to play again.')
	}
	if(boxColors[6]==='red' && boxColors[7] === 'red' && boxColors[8] === 'red'){
		eachBox.forEach(item=>{item.style.backgroundColor='red'})
		alert('Red wins. Click the New Game button to play again.')
	}
	if(boxColors[6]==='blue' && boxColors[7] === 'blue' && boxColors[8] === 'blue'){
		eachBox.forEach(item=>{item.style.backgroundColor='blue'})
		alert('Blue wins. Click the New Game button to play again.')
	}
	if(boxColors[0]==='red' && boxColors[4] === 'red' && boxColors[8] === 'red'){
		eachBox.forEach(item=>{item.style.backgroundColor='red'})
		alert('Red wins. Click the New Game button to play again.')
	}
	if(boxColors[0]==='blue' && boxColors[4] === 'blue' && boxColors[8] === 'blue'){
		eachBox.forEach(item=>{item.style.backgroundColor='blue'})
		alert('Blue wins. Click the New Game button to play again.')
	}
	if(boxColors[2]==='red' && boxColors[4] === 'red' && boxColors[6] === 'red'){
		eachBox.forEach(item=>{item.style.backgroundColor='red'})
		alert('Red wins. Click the New Game button to play again.')
	}
	if(boxColors[2]==='blue' && boxColors[4] === 'blue' && boxColors[6] === 'blue'){
		eachBox.forEach(item=>{item.style.backgroundColor='blue'})
		alert('Blue wins. Click the New Game button to play again.')
	}
	else if(clickCount===9){
		alert('Tie')
	}
}


