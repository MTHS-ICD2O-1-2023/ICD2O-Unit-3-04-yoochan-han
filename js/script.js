// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Yoochan
// Created on: Apr 2024
// This file contains the JS functions for index.html

function CaseTestFahrenheit() {
  const fahrenheit = parseFloat(document.getElementById("get_fahrenheit").value)
  const celsius = (fahrenheit-32) * 5/9
  document.getElementById("Ans").innerHTML = fahrenheit + "ºF" + " in celsius is " + celsius.toFixed(3) + "ºC"
}