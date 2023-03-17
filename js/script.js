"use strict";

const usedGB = document.getElementById("usedGB");
const emptyGB = document.getElementById("emptyGB");
const input = document.querySelector(".range");
const inputFill = document.querySelector(".fill");

// setting amount of GB
input.addEventListener("input", function () {
	usedGB.textContent = input.value;
	emptyGB.textContent = 1000 - Number(input.value);
	//  filling bar
	inputFill.style.width = `${input.value * 0.1}%`;
});
