// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Yoochan
// Created on: Apr 2024
// This file contains the JS functions for index.html

function CaseTest() {
  const meter = parseFloat(document.getElementById("get_length").value)
  const foot = meter * 3.281
  document.getElementById("Ans").innerHTML = meter + "m" + " in feet is " + foot.toFixed(3) + "ft"
}