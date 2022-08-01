const N = 4;
const M = 4;
const Scors = {R:0,B:0};
let turn = "R";
let selectedLines = [];

const hoverClasses = { R: "hover-red", B: "hover-blue" };
const bgClasses = { R: "bg-red", B: "bg-blue" };

const playersTurnText = () =>{
let gamer = turn === "R" ? "Red" : "Blue"; 
return `It's ${gamer}'s turn`;
}
const isLineSelected = (line) =>
	line.classList.contains(bgClasses.R) || line.classList.contains(bgClasses.B);

const createGameGrid = () => {
	const gameGridContainer = document.getElementsByClassName(
		"game-grid-container"
	)[0];
	const rows = Array(N)
		.fill(0)
		.map((_, i) => i);
	const cols = Array(M)
		.fill(0)
		.map((_, i) => i);

	rows.forEach((row) => {
		cols.forEach((col) => {
			const dot = document.createElement("div");
			dot.setAttribute("class", "dot");

			const hLine = document.createElement("div");
			hLine.setAttribute("class", `line-horizontal ${hoverClasses[turn]}`);
			hLine.setAttribute("id", `h-${row}-${col}`);
			hLine.addEventListener("click", handleLineClick);

			gameGridContainer.appendChild(dot);
			if (col < M - 1) gameGridContainer.appendChild(hLine);
		});

		if (row < N - 1) {
			cols.forEach((col) => {
				const vLine = document.createElement("div");
				vLine.setAttribute("class", `line-vertical ${hoverClasses[turn]}`);
				vLine.setAttribute("id", `v-${row}-${col}`);
				vLine.addEventListener("click", handleLineClick);

				const box = document.createElement("div");
				box.setAttribute("class", "box Inactive");
				box.setAttribute("id", `box-${row}-${col}`);

				gameGridContainer.appendChild(vLine);
				if (col < M - 1) gameGridContainer.appendChild(box);
			});
		}
	});
};

const changeTurn = () => {
	const nextTurn = turn === "R" ? "B" : "R";
	const lines = document.querySelectorAll(".line-vertical, .line-horizontal");
	lines.forEach((l) => {
		//if line was not already selected, change it's hover color according to the next turn
		if (!isLineSelected(l)) {
			l.classList.replace(hoverClasses[turn], hoverClasses[nextTurn]);
		}
	});
	turn = nextTurn;
	turnRatings();
};

const handleLineClick = (e) => {
	const lineId = e.target.id;
	const selectedLine = document.getElementById(lineId);
	if (isLineSelected(selectedLine)) {
		//if line was already selected, return
		return;
	}
	selectedLines = [...selectedLines, lineId];
	colorLine(selectedLine);
	// new code **********
	if(result = changeBoxBgColor()){
	  turn=result;
	  playerScoring(result);
	}else{
	  changeTurn();	
	}
	// new code **********
	
};
const colorLine = (selectedLine) => {
	selectedLine.classList.remove(hoverClasses[turn]);
	selectedLine.classList.add(bgClasses[turn]);
	//start new code **********
	selectedLine.classList.add("active");
	//end new code **********
};
// start new cod **********

//This Code For Create 
const gameStatus =	document.getElementById("game-status");

// This Function For Writing TurnRatings 
const turnRatings =()=>{
gameStatus.innerHTML = playersTurnText();
}
turnRatings();

// This Function For Calculation of player points 
const playerScoring=(player)=>{
Scors[player] +=1;
let result = Scors["R"]+Scors["B"];
const boxes = document.querySelectorAll(".box");
if(result == boxes.length){
	gameOver();
}
}
// This Function For Writing Game Over And  Winer Player 
const gameOver =()=>{
const Winner = Scors["R"]>Scors["B"]?"Red":"Blue";
gameStatus.innerHTML = `Game Over Winner is ${Winner}`;
}
// end New cod *****
createGameGrid();

//************************   Start  My written codes *********************************
const h00 = document.getElementById("h-0-0"),
	 h01 = document.getElementById("h-0-1"),
	 h02 = document.getElementById("h-0-2"),
	 h03 = document.getElementById("h-1-0"),
	 h04 = document.getElementById("h-1-1"),
	 h05 = document.getElementById("h-1-2"),
	 h06 = document.getElementById("h-2-0"),
	 h07 = document.getElementById("h-2-1"),
	 h08 = document.getElementById("h-2-2"),
	 h09 = document.getElementById("h-3-0"),
	 h10 = document.getElementById("h-3-1"),
	 h11 = document.getElementById("h-3-2"),
	 v00 = document.getElementById("v-0-0"),
	 v01 = document.getElementById("v-0-1"),
	 v02 = document.getElementById("v-0-2"),
	 v03 = document.getElementById("v-0-3"),
	 v04 = document.getElementById("v-1-0"),
	 v05 = document.getElementById("v-1-1"),
	 v06 = document.getElementById("v-1-2"),
	 v07 = document.getElementById("v-1-3"),
	 v08 = document.getElementById("v-2-0"),
	 v09 = document.getElementById("v-2-1"),
	 v10 = document.getElementById("v-2-2"),
	 v11 = document.getElementById("v-2-3"),
	 box1 = document.getElementById("box-0-0"),
	 box2 = document.getElementById("box-0-1"),
	 box3 = document.getElementById("box-0-2"),
	 box4 = document.getElementById("box-1-0"),
	 box5 = document.getElementById("box-1-1"),
	 box6 = document.getElementById("box-1-2"),
	 box7 = document.getElementById("box-2-0"),
	 box8 = document.getElementById("box-2-1"),
	 box9 = document.getElementById("box-2-2");

// This Function For Change Box Background Color 	 
const changeBoxBgColor = ()=>{
	if(h00.classList.contains("active") && h03.classList.contains("active") &&v00.classList.contains("active")&& v01.classList.contains("active") && box1.classList.contains("Inactive")){
	    box1.classList.add(bgClasses[turn]);
	    box1.classList.remove("Inactive");
		return turn;	
	}
	if(h01.classList.contains("active") && h04.classList.contains("active") &&v02.classList.contains("active")&& v01.classList.contains("active") && box2.classList.contains("Inactive")){
		box2.classList.add(bgClasses[turn]);
		box2.classList.remove("Inactive");
		return turn;	
	}
	if(h02.classList.contains("active") && h05.classList.contains("active") &&v02.classList.contains("active")&& v03.classList.contains("active") && box3.classList.contains("Inactive")){
		box3.classList.add(bgClasses[turn]);
		box3.classList.remove("Inactive");
		return turn;	
	} 
	if(h03.classList.contains("active") && h06.classList.contains("active") &&v04.classList.contains("active")&& v05.classList.contains("active") && box4.classList.contains("Inactive")){
		box4.classList.add(bgClasses[turn]);
		box4.classList.remove("Inactive");
		return turn;	
	}
	if(h04.classList.contains("active") && h07.classList.contains("active") &&v05.classList.contains("active")&& v06.classList.contains("active") && box5.classList.contains("Inactive")){
		box5.classList.add(bgClasses[turn]);
		box5.classList.remove("Inactive");
		return turn;	
	}
	if(h05.classList.contains("active") && h08.classList.contains("active") &&v07.classList.contains("active")&& v06.classList.contains("active") && box6.classList.contains("Inactive")){
		box6.classList.add(bgClasses[turn]);
		box6.classList.remove("Inactive");
		return turn;	
	}
	if(h06.classList.contains("active") && h09.classList.contains("active") &&v08.classList.contains("active")&& v09.classList.contains("active") && box7.classList.contains("Inactive")){
		box7.classList.add(bgClasses[turn]);
		box7.classList.remove("Inactive");
		return turn;	
	}
	if(h07.classList.contains("active") && h10.classList.contains("active") &&v10.classList.contains("active")&& v09.classList.contains("active") && box8.classList.contains("Inactive")){
		box8.classList.add(bgClasses[turn]);
		box8.classList.remove("Inactive");
		return turn;	
	}
	if(h08.classList.contains("active") && h11.classList.contains("active") &&v10.classList.contains("active")&& v11.classList.contains("active") && box9.classList.contains("Inactive")){
		box9.classList.add(bgClasses[turn]);
		box9.classList.remove("Inactive");
		return turn;	
	}
	else{
		return false;
	}	
	}
//************************   End  My written codes *********************************