'use strict';

var PVdragon, PVchev, dommage , tour = 0;
var dragon, chevalier;
var niveau, armure, arme; 
function depart() {
	console.clear();
	niveau = window.prompt("Niveau : facile=1, normal=2, difficile=3", 2);
	armure = window.prompt("Armure : cuivre=1, fer=2, magique=3", 2);
	arme = window.prompt("Arme : bois=1, acier=2, Excalibur=3", 2);
	pointVie()
	console.log("Le dragon commence avec " + PVdragon + "PV")
	console.log("Le chevalier commence avec " + PVchev + "PV")
}
function pointVie() {
	if (niveau == "1")
	{
		PVdragon = Math.floor(Math.random() * (201 - 150) + 150);
		PVchev = Math.floor(Math.random() * (251 - 200) + 200);
	}
	else if (niveau == "2")
	{
		PVdragon = Math.floor(Math.random() * (251 - 200) + 200);
		PVchev = Math.floor(Math.random() * (251 - 200) + 200);
	}
	else 
	{
		PVdragon = Math.floor(Math.random() * (251 - 200) + 200);
		PVchev = Math.floor(Math.random() * (201 - 150) + 150);
	}
}
// pointVie(niveau);
// console.log(PVchev);
// console.log(PVdragon);
function dommageDragonChevalier() 
{
	switch (niveau) {
		case "1" :
			dommage = Math.floor(Math.random()*(21 - 10) + 10);
				if (armure == 1)
				{
					
				}
				else if (armure == 2)
				{
					dommage *= 0.75;
					
				}
				else if (armure == 3)
				{
					dommage *= 0.5;
					
				}

		break;
		case "2" :
		case "3" :
			dommage = Math.floor(Math.random()*(31 - 20) + 20);
				if (armure == 1)
				{
					
				}
				else if (armure == 2)
				{
					dommage *= 0.75;
					
				}
				else if (armure == 3)
				{
					dommage *= 0.5;
					
				}

		break;
	}
}

function dommageChevalierDragon() 
{
	switch (niveau) {
		case "1" :
			dommage = Math.floor(Math.random()*(31 - 25) + 25);
				if (arme == 1)
				{
					dommage /= 2;
					
				}
				else if (arme == 2)
				{
					
				}
				else if (arme == 3)
				{
					dommage *= 1.5;
					
				}
		break;
		case "2" :
			dommage = Math.floor(Math.random()*(21 - 15) + 15);
				if (arme == 1)
				{
					dommage /= 2;
					
				}
				else if (arme == 2)
				{
					
				}
				else if (arme == 3)
				{
					dommage *= 1.5;
					
				}

		break;
		case "3" :
			dommage = Math.floor(Math.random()*(11 - 5) + 5);
				if (arme == 1)
				{
					dommage /= 2;
					
				}
				else if (arme == 2)
				{
					
				}
				else if (arme == 3)
				{
					dommage *= 1.5;
					
				}
		break;
	}
}
function attaque()
{
	chevalier = Math.random();
	dragon = Math.random();
		if (dragon < chevalier)
	{
		dommageDragonChevalier();
		PVchev -= dommage;
		console.log("le Dragon infligue " + dommage + " PV au chevalier")
	}		   
	else if (chevalier < dragon)
	{
		dommageChevalierDragon();
		PVdragon -= dommage;
		console.log("le chevalier infligue " + dommage + " PV au dragon")
	}
	else 
	{
		console.log("égalité !")
	}
	tour++;
}


depart();
while (PVchev > 0 && PVdragon > 0) {
	
	attaque();
}
if (PVdragon > 0) {
	document.write("Victoire du Dragon, il lui reste " + PVdragon + " PV")
	document.write("<p>" + "en " + tour + " tour")
}
else {
	document.write("Victoire du Chevalier, il lui reste " + PVchev + " PV")
	document.write("<p>" + "en " + tour + " tour")
}