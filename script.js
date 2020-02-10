console.log('connected!')


let eachBox = document.querySelectorAll(".square")



eachBox.forEach(item => {
	item.addEventListener("click", changeColor)
	function changeColor(event){
		if(clickCount%2===0 && event.target.style.backgroundColor==='white'){
		event.target.style.backgroundColor = 'red';
		clickUp()
		} else if (clickCount%2!==0 && event.target.style.backgroundColor==='white') {
			event.target.style.backgroundColor = 'blue'
			clickUp()
		}
	}
}
)

let clickCount = 0

function clickUp(){
	clickCount+=1
	console.log(clickCount)
}

// document.querySelector("#gameBoard").addEventListener('click', clickUp)

document.querySelector("#resetButton").addEventListener('click', resetGame)
function resetGame(){
	document.querySelectorAll('.square').forEach(item=>{
		item.style.backgroundColor = "white"
	})
}