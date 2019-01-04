'use strict';
// var niveau = 1, armure = 1, dommage;


// 	switch (niveau) {
// 		case 1 :
// 			dommage = Math.floor(Math.random() * (21 - 10) + 10);
// 				// if (armure == 1)
// 				// {
// 				// 	break;
// 				// }
// 				// else if (armure == 2)
// 				// {
// 				// 	dommage *= 0.75;
// 				// 	break;
// 				// }
// 				// else if (armure == 3)
// 				// {
// 				// 	dommage *= 0.5;
// 				// 	break;
// 				// }

// 		break;
// 		case 2 :
// 		case 3 :
// 			dommage = Math.floor(Math.random() * (31 - 20) + 20);
// 				// if (armure == 1)
// 				// {
// 				// 	break;
// 				// }
// 				// else if (armure == 2)
// 				// {
// 				// 	dommage *= 0.75;
// 				// 	break;
// 				// }
// 				// else if (armure == 3)
// 				// {
// 				// 	dommage *= 0.5;
// 				// 	break;
// 				// }

// 		break;
// 	}

// 	console.log(dommage);
var PVdragon = 20, PVchev = 50, dommage;
var niveau = 1, armure = 1, arme = 1, tour;

	switch (niveau) {
		case 1 :
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
		case 2 :
			dommage = Math.floor(Math.random()*(21 - 15) + 15);
				if (arme == 1)
				{
					dommage /= 2;
					break;
				}
				else if (arme == 2)
				{
					break;
				}
				else if (arme == 3)
				{
					dommage *= 1.5;
					break;
				}

		break;
		case 3 :
			dommage = Math.floor(Math.random()*(11 - 5) + 5);
				if (arme == 1)
				{
					dommage /= 2;
					break;
				}
				else if (arme == 2)
				{
					break;
				}
				else if (arme == 3)
				{
					dommage *= 1.5;
					break;
				}
		break;
	}

	console.log(dommage);