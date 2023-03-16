"use strict";

const usedGB = document.getElementById("usedGB");
const emptyGB = document.getElementById("emptyGB");
const input = document.querySelector(".range");

input.addEventListener("input", function () {
	usedGB.textContent = input.value;
	emptyGB.textContent = 1000 - Number(input.value);
});
