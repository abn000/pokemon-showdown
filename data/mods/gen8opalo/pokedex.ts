export const Pokedex: import('../../../sim/dex-species').ModdedSpeciesDataTable = {
	growlithehisui: {
		inherit: true,
		abilities: { 0: "Intimidate", 1: "Flash Fire", H: "Justified" },
	},
	arcaninehisui: {
		inherit: true,
		abilities: { 0: "Intimidate", 1: "Flash Fire", H: "Justified" },
	},
	typhlosionhisui: {
		inherit: true,
		abilities: { 0: "Blaze", H: "Flash Fire" },
	},
	sneaselhisui: {
		inherit: true,
		abilities: { 0: "Inner Focus", 1: "Keen Eye", H: "Poison Touch" },
	},
	empoleon: {
		inherit: true,
		abilities: { 0: "Torrent", H: "Defiant" },
	},
	giratinaorigin: {
		inherit: true,
		requiredItem: "Griseous Orb",
	},
	samurotthisui: {
		inherit: true,
		abilities: { 0: "Torrent", H: "Shell Armor" },
	},
	braviaryhisui: {
		inherit: true,
		abilities: { 0: "Keen Eye", 1: "Sheer Force", H: "Defiant" },
	},
	vivillonfancy: {
		inherit: true,
		abilities: { 0: "Shield Dust", 1: "Compound Eyes" },
		prevo: undefined,
		evoLevel: undefined,
	},
	vivillonpokeball: {
		inherit: true,
		abilities: { 0: "Shield Dust", 1: "Compound Eyes" },
	},
	sliggoohisui: {
		inherit: true,
		abilities: { 0: "Sap Sipper", 1: "Overcoat", H: "Gooey" },
	},
	goodrahisui: {
		inherit: true,
		abilities: { 0: "Sap Sipper", 1: "Overcoat", H: "Gooey" },
	},
	decidueyehisui: {
		inherit: true,
		abilities: { 0: "Overgrow", H: "Long Reach" },
	},
	zaciancrowned: {
		inherit: true,
		baseStats: { hp: 92, atk: 170, def: 115, spa: 80, spd: 115, spe: 148 },
	},
	zamazentacrowned: {
		inherit: true,
		baseStats: { hp: 92, atk: 130, def: 145, spa: 80, spd: 145, spe: 128 },
	},
	basculegionf: {
		inherit: true,
		abilities: { 0: "Rattled", 1: "Adaptability", H: "Mold Breaker" },
	},
	enamorus: {
		inherit: true,
		abilities: { 0: "Healer", H: "Contrary" },
	},
	kitsunoh: {
		inherit: true,
		baseStats: { hp: 80, atk: 103, def: 85, spa: 55, spd: 80, spe: 110 },
		abilities: { 0: "Frisk", 1: "Limber", H: "Iron Fist" },
	},
	soundow: {
		inherit: true,
		baseStats: { hp: 100, atk: 60, def: 86, spa: 110, spd: 96, spe: 50 },
		abilities: { 0: "Healer", 1: "Regenerator", H: "Klutz" },
		types: ["Normal", "Dark"]
	},

	caterpie: {
		num: 10,
		name: "Caterpie",
		types: [
			"Bug"
		],
		baseStats: {
			hp: 45,
			atk: 40,
			def: 35,
			spe: 45,
			spa: 20,
			spd: 20
		},
		abilities: {
			0: "Shield Dust",
			H: "Run Away"
		},
		inherit: true,
		baseSpecies: "Caterpie",
		eggGroups: [
			"Bug"
		],
		weightkg: 2.9
	},
	metapod: {
		num: 11,
		name: "Metapod",
		types: [
			"Bug"
		],
		baseStats: {
			hp: 50,
			atk: 60,
			def: 55,
			spe: 30,
			spa: 25,
			spd: 25
		},
		abilities: {
			0: "Shed Skin"
		},
		inherit: true,
		baseSpecies: "Metapod",
		eggGroups: [
			"Bug"
		],
		weightkg: 9.9
	},
	butterfree: {
		num: 12,
		name: "Butterfree",
		types: [
			"Bug",
			"Flying"
		],
		baseStats: {
			hp: 60,
			atk: 45,
			def: 50,
			spe: 90,
			spa: 100,
			spd: 100
		},
		abilities: {
			0: "Compound Eyes",
			H: "Tinted Lens"
		},
		inherit: true,
		baseSpecies: "Butterfree",
		eggGroups: [
			"Bug"
		],
		weightkg: 32.0
	},
	weedle: {
		num: 13,
		name: "Weedle",
		types: [
			"Bug",
			"Poison"
		],
		baseStats: {
			hp: 40,
			atk: 45,
			def: 30,
			spe: 50,
			spa: 20,
			spd: 20
		},
		abilities: {
			0: "Shield Dust",
			H: "Run Away"
		},
		inherit: true,
		baseSpecies: "Weedle",
		eggGroups: [
			"Bug"
		],
		weightkg: 3.2
	},
	kakuna: {
		num: 14,
		name: "Kakuna",
		types: [
			"Bug",
			"Poison"
		],
		baseStats: {
			hp: 45,
			atk: 65,
			def: 50,
			spe: 35,
			spa: 25,
			spd: 25
		},
		abilities: {
			0: "Shed Skin"
		},
		inherit: true,
		baseSpecies: "Kakuna",
		eggGroups: [
			"Bug"
		],
		weightkg: 10.0
	},
	beedrill: {
		num: 15,
		name: "Beedrill",
		types: [
			"Bug",
			"Poison"
		],
		baseStats: {
			hp: 65,
			atk: 100,
			def: 40,
			spe: 110,
			spa: 65,
			spd: 80
		},
		abilities: {
			0: "Swarm",
			H: "Sniper"
		},
		inherit: true,
		baseSpecies: "Beedrill",
		eggGroups: [
			"Bug"
		],
		weightkg: 29.5
	},
	pidgey: {
		num: 16,
		name: "Pidgey",
		types: [
			"Normal",
			"Flying"
		],
		baseStats: {
			hp: 40,
			atk: 50,
			def: 40,
			spe: 56,
			spa: 35,
			spd: 35
		},
		abilities: {
			0: "Keen Eye",
			1: "Tangled Feet",
			H: "Big Pecks"
		},
		inherit: true,
		baseSpecies: "Pidgey",
		eggGroups: [
			"Flying"
		],
		weightkg: 1.8
	},
	pidgeotto: {
		num: 17,
		name: "Pidgeotto",
		types: [
			"Normal",
			"Flying"
		],
		baseStats: {
			hp: 63,
			atk: 83,
			def: 55,
			spe: 81,
			spa: 75,
			spd: 50
		},
		abilities: {
			0: "Keen Eye",
			1: "Tangled Feet",
			H: "Big Pecks"
		},
		inherit: true,
		baseSpecies: "Pidgeotto",
		eggGroups: [
			"Flying"
		],
		weightkg: 30.0
	},
	pidgeot: {
		num: 18,
		name: "Pidgeot",
		types: [
			"Normal",
			"Flying"
		],
		baseStats: {
			hp: 83,
			atk: 95,
			def: 75,
			spe: 100,
			spa: 105,
			spd: 70
		},
		abilities: {
			0: "Keen Eye",
			1: "Tangled Feet",
			H: "No Guard"
		},
		inherit: true,
		baseSpecies: "Pidgeot",
		eggGroups: [
			"Flying"
		],
		weightkg: 39.5
	},
	rattata: {
		num: 19,
		name: "Rattata",
		types: [
			"Normal",
			"Dark"
		],
		baseStats: {
			hp: 30,
			atk: 56,
			def: 35,
			spe: 72,
			spa: 25,
			spd: 35
		},
		abilities: {
			0: "Run Away",
			1: "Guts",
			H: "Hustle"
		},
		inherit: true,
		baseSpecies: "Rattata",
		eggGroups: [
			"Field"
		],
		weightkg: 3.5
	},
	raticate: {
		num: 20,
		name: "Raticate",
		types: [
			"Normal",
			"Dark"
		],
		baseStats: {
			hp: 65,
			atk: 100,
			def: 60,
			spe: 110,
			spa: 50,
			spd: 70
		},
		abilities: {
			0: "Run Away",
			1: "Guts",
			H: "Hustle"
		},
		inherit: true,
		baseSpecies: "Raticate",
		eggGroups: [
			"Field"
		],
		weightkg: 18.5
	},
	fearow: {
		num: 22,
		name: "Fearow",
		types: [
			"Normal",
			"Flying"
		],
		baseStats: {
			hp: 65,
			atk: 115,
			def: 65,
			spe: 100,
			spa: 61,
			spd: 61
		},
		abilities: {
			0: "Keen Eye",
			1: "Intimidate",
			H: "Sniper"
		},
		inherit: true,
		baseSpecies: "Fearow",
		eggGroups: [
			"Flying"
		],
		weightkg: 38.0
	},
	arbok: {
		num: 24,
		name: "Arbok",
		types: [
			"Poison"
		],
		baseStats: {
			hp: 70,
			atk: 95,
			def: 69,
			spe: 95,
			spa: 65,
			spd: 79
		},
		abilities: {
			0: "Intimidate",
			1: "Shed Skin",
			H: "Unnerve"
		},
		inherit: true,
		baseSpecies: "Arbok",
		eggGroups: [
			"Field",
			"Dragon"
		],
		weightkg: 65.0
	},
	pikachu: {
		num: 25,
		name: "Pikachu",
		types: [
			"Electric"
		],
		baseStats: {
			hp: 35,
			atk: 55,
			def: 30,
			spe: 90,
			spa: 50,
			spd: 40
		},
		abilities: {
			0: "Static",
			H: "Lightning Rod"
		},
		inherit: true,
		baseSpecies: "Pikachu",
		eggGroups: [
			"Field",
			"Fairy"
		],
		weightkg: 6.0
	},
	raichu: {
		num: 26,
		name: "Raichu",
		types: [
			"Electric"
		],
		baseStats: {
			hp: 60,
			atk: 100,
			def: 55,
			spe: 110,
			spa: 100,
			spd: 80
		},
		abilities: {
			0: "Static",
			H: "Lightning Rod"
		},
		inherit: true,
		baseSpecies: "Raichu",
		eggGroups: [
			"Field",
			"Fairy"
		],
		weightkg: 30.0
	},
	sandslash: {
		num: 28,
		name: "Sandslash",
		types: [
			"Ground"
		],
		baseStats: {
			hp: 75,
			atk: 110,
			def: 110,
			spe: 70,
			spa: 45,
			spd: 55
		},
		abilities: {
			0: "Sand Veil",
			H: "Sand Rush"
		},
		inherit: true,
		baseSpecies: "Sandslash",
		eggGroups: [
			"Field"
		],
		weightkg: 29.5
	},
	nidoranf: {
		num: 29,
		name: "Nidoran",
		types: [
			"Poison"
		],
		baseStats: {
			hp: 55,
			atk: 47,
			def: 52,
			spe: 41,
			spa: 40,
			spd: 40
		},
		abilities: {
			0: "Poison Point",
			1: "Rivalry",
			H: "Hustle"
		},
		inherit: true,
		baseSpecies: "Nidoran",
		eggGroups: [
			"Monster",
			"Field"
		],
		weightkg: 7.0
	},
	nidoqueen: {
		num: 31,
		name: "Nidoqueen",
		types: [
			"Poison",
			"Ground"
		],
		baseStats: {
			hp: 90,
			atk: 82,
			def: 87,
			spe: 76,
			spa: 75,
			spd: 85
		},
		abilities: {
			0: "Poison Point",
			1: "Sheer Force",
			H: "Rivalry"
		},
		inherit: true,
		baseSpecies: "Nidoqueen",
		eggGroups: [
			"Monster",
			"Field"
		],
		weightkg: 60.0
	},
	nidoranm: {
		num: 32,
		name: "Nidoran",
		types: [
			"Poison"
		],
		baseStats: {
			hp: 46,
			atk: 57,
			def: 40,
			spe: 50,
			spa: 40,
			spd: 40
		},
		abilities: {
			0: "Poison Point",
			1: "Rivalry",
			H: "Hustle"
		},
		inherit: true,
		baseSpecies: "Nidoran",
		eggGroups: [
			"Monster",
			"Field"
		],
		weightkg: 9.0
	},
	nidoking: {
		num: 34,
		name: "Nidoking",
		types: [
			"Poison",
			"Ground"
		],
		baseStats: {
			hp: 81,
			atk: 92,
			def: 77,
			spe: 85,
			spa: 85,
			spd: 75
		},
		abilities: {
			0: "Poison Point",
			1: "Sheer Force",
			H: "Rivalry"
		},
		inherit: true,
		baseSpecies: "Nidoking",
		eggGroups: [
			"Monster",
			"Field"
		],
		weightkg: 62.0
	},
	clefairy: {
		num: 35,
		name: "Clefairy",
		types: [
			"Fairy"
		],
		baseStats: {
			hp: 70,
			atk: 45,
			def: 48,
			spe: 35,
			spa: 60,
			spd: 65
		},
		abilities: {
			0: "Cute Charm",
			H: "Friend Guard"
		},
		inherit: true,
		baseSpecies: "Clefairy",
		eggGroups: [
			"Fairy"
		],
		weightkg: 7.5
	},
	clefable: {
		num: 36,
		name: "Clefable",
		types: [
			"Fairy"
		],
		baseStats: {
			hp: 95,
			atk: 70,
			def: 73,
			spe: 60,
			spa: 95,
			spd: 90
		},
		abilities: {
			0: "Cute Charm",
			H: "Unaware"
		},
		inherit: true,
		baseSpecies: "Clefable",
		eggGroups: [
			"Fairy"
		],
		weightkg: 40.0
	},
	vulpix: {
		num: 37,
		name: "Vulpix",
		types: [
			"Fire"
		],
		baseStats: {
			hp: 38,
			atk: 41,
			def: 40,
			spe: 65,
			spa: 60,
			spd: 65
		},
		abilities: {
			0: "Flash Fire",
			H: "Drought"
		},
		inherit: true,
		baseSpecies: "Vulpix",
		eggGroups: [
			"Field"
		],
		weightkg: 9.9
	},
	ninetales: {
		num: 38,
		name: "Ninetales",
		types: [
			"Fire"
		],
		baseStats: {
			hp: 73,
			atk: 76,
			def: 75,
			spe: 100,
			spa: 100,
			spd: 100
		},
		abilities: {
			0: "Flash Fire",
			H: "Drought"
		},
		inherit: true,
		baseSpecies: "Ninetales",
		eggGroups: [
			"Field"
		],
		weightkg: 19.9
	},
	jigglypuff: {
		num: 39,
		name: "Jigglypuff",
		types: [
			"Normal",
			"Fairy"
		],
		baseStats: {
			hp: 115,
			atk: 45,
			def: 20,
			spe: 20,
			spa: 45,
			spd: 25
		},
		abilities: {
			0: "Cute Charm",
			H: "Friend Guard"
		},
		inherit: true,
		baseSpecies: "Jigglypuff",
		eggGroups: [
			"Fairy"
		],
		weightkg: 5.5
	},
	wigglytuff: {
		num: 40,
		name: "Wigglytuff",
		types: [
			"Normal",
			"Fairy"
		],
		baseStats: {
			hp: 140,
			atk: 65,
			def: 65,
			spe: 45,
			spa: 85,
			spd: 70
		},
		abilities: {
			0: "Cute Charm",
			1: "Competitive",
			H: "Frisk"
		},
		inherit: true,
		baseSpecies: "Wigglytuff",
		eggGroups: [
			"Fairy"
		],
		weightkg: 12.0
	},
	zubat: {
		num: 41,
		name: "Zubat",
		types: [
			"Poison",
			"Flying"
		],
		baseStats: {
			hp: 40,
			atk: 55,
			def: 35,
			spe: 75,
			spa: 30,
			spd: 40
		},
		abilities: {
			0: "Inner Focus",
			H: "Infiltrator"
		},
		inherit: true,
		baseSpecies: "Zubat",
		eggGroups: [
			"Flying"
		],
		weightkg: 7.5
	},
	golbat: {
		num: 42,
		name: "Golbat",
		types: [
			"Poison",
			"Flying"
		],
		baseStats: {
			hp: 75,
			atk: 80,
			def: 70,
			spe: 100,
			spa: 65,
			spd: 75
		},
		abilities: {
			0: "Inner Focus",
			H: "Infiltrator"
		},
		inherit: true,
		baseSpecies: "Golbat",
		eggGroups: [
			"Flying"
		],
		weightkg: 55.0
	},
	vileplume: {
		num: 45,
		name: "Vileplume",
		types: [
			"Grass",
			"Poison"
		],
		baseStats: {
			hp: 75,
			atk: 80,
			def: 85,
			spe: 50,
			spa: 110,
			spd: 100
		},
		abilities: {
			0: "Chlorophyll",
			H: "Effect Spore"
		},
		inherit: true,
		baseSpecies: "Vileplume",
		eggGroups: [
			"Grass"
		],
		weightkg: 18.6
	},
	paras: {
		num: 46,
		name: "Paras",
		types: [
			"Bug",
			"Grass"
		],
		baseStats: {
			hp: 65,
			atk: 70,
			def: 55,
			spe: 25,
			spa: 45,
			spd: 55
		},
		abilities: {
			0: "Effect Spore",
			1: "Dry Skin",
			H: "Damp"
		},
		inherit: true,
		baseSpecies: "Paras",
		eggGroups: [
			"Bug",
			"Grass"
		],
		weightkg: 5.4
	},
	parasect: {
		num: 47,
		name: "Parasect",
		types: [
			"Bug",
			"Grass"
		],
		baseStats: {
			hp: 95,
			atk: 100,
			def: 80,
			spe: 30,
			spa: 60,
			spd: 90
		},
		abilities: {
			0: "Effect Spore",
			1: "Dry Skin",
			H: "Damp"
		},
		inherit: true,
		baseSpecies: "Parasect",
		eggGroups: [
			"Bug",
			"Grass"
		],
		weightkg: 29.5
	},
	venonat: {
		num: 48,
		name: "Venonat",
		types: [
			"Bug",
			"Poison"
		],
		baseStats: {
			hp: 60,
			atk: 55,
			def: 50,
			spe: 45,
			spa: 60,
			spd: 55
		},
		abilities: {
			0: "Compound Eyes",
			1: "Tinted Lens",
			H: "Run Away"
		},
		inherit: true,
		baseSpecies: "Venonat",
		eggGroups: [
			"Bug"
		],
		weightkg: 30.0
	},
	psyduck: {
		num: 54,
		name: "Psyduck",
		types: [
			"Water"
		],
		baseStats: {
			hp: 60,
			atk: 52,
			def: 48,
			spe: 55,
			spa: 65,
			spd: 50
		},
		abilities: {
			0: "Damp",
			1: "Cloud Nine",
			H: "Swift Swim"
		},
		inherit: true,
		baseSpecies: "Psyduck",
		eggGroups: [
			"Water1",
			"Field"
		],
		weightkg: 19.6
	},
	golduck: {
		num: 55,
		name: "Golduck",
		types: [
			"Water",
			"Psychic"
		],
		baseStats: {
			hp: 80,
			atk: 82,
			def: 78,
			spe: 85,
			spa: 95,
			spd: 80
		},
		abilities: {
			0: "Damp",
			1: "Cloud Nine",
			H: "Swift Swim"
		},
		inherit: true,
		baseSpecies: "Golduck",
		eggGroups: [
			"Water1",
			"Field"
		],
		weightkg: 76.6
	},
	mankey: {
		num: 56,
		name: "Mankey",
		types: [
			"Fighting"
		],
		baseStats: {
			hp: 40,
			atk: 80,
			def: 35,
			spe: 70,
			spa: 35,
			spd: 45
		},
		abilities: {
			0: "Run Away",
			1: "Anger Point",
			H: "Defiant"
		},
		inherit: true,
		baseSpecies: "Mankey",
		eggGroups: [
			"Field"
		],
		weightkg: 28.0
	},
	primeape: {
		num: 57,
		name: "Primeape",
		types: [
			"Fighting"
		],
		baseStats: {
			hp: 65,
			atk: 115,
			def: 60,
			spe: 105,
			spa: 60,
			spd: 70
		},
		abilities: {
			0: "Run Away",
			1: "Anger Point",
			H: "Defiant"
		},
		inherit: true,
		baseSpecies: "Primeape",
		eggGroups: [
			"Field"
		],
		weightkg: 32.0
	},
	poliwag: {
		num: 60,
		name: "Poliwag",
		types: [
			"Water"
		],
		baseStats: {
			hp: 55,
			atk: 60,
			def: 40,
			spe: 75,
			spa: 55,
			spd: 50
		},
		abilities: {
			0: "Water Absorb",
			H: "Swift Swim"
		},
		inherit: true,
		baseSpecies: "Poliwag",
		eggGroups: [
			"Water1"
		],
		weightkg: 12.4
	},
	poliwhirl: {
		num: 61,
		name: "Poliwhirl",
		types: [
			"Water"
		],
		baseStats: {
			hp: 65,
			atk: 80,
			def: 65,
			spe: 80,
			spa: 65,
			spd: 55
		},
		abilities: {
			0: "Water Absorb",
			H: "Swift Swim"
		},
		inherit: true,
		baseSpecies: "Poliwhirl",
		eggGroups: [
			"Water1"
		],
		weightkg: 20.0
	},
	poliwrath: {
		num: 62,
		name: "Poliwrath",
		types: [
			"Water",
			"Fighting"
		],
		baseStats: {
			hp: 90,
			atk: 95,
			def: 95,
			spe: 70,
			spa: 70,
			spd: 90
		},
		abilities: {
			0: "Water Absorb",
			H: "Swift Swim"
		},
		inherit: true,
		baseSpecies: "Poliwrath",
		eggGroups: [
			"Water1"
		],
		weightkg: 54.0
	},
	abra: {
		num: 63,
		name: "Abra",
		types: [
			"Psychic"
		],
		baseStats: {
			hp: 25,
			atk: 20,
			def: 15,
			spe: 90,
			spa: 105,
			spd: 55
		},
		abilities: {
			0: "Synchronize",
			H: "Magic Guard"
		},
		inherit: true,
		baseSpecies: "Abra",
		eggGroups: [
			"Humanlike"
		],
		weightkg: 19.5
	},
	kadabra: {
		num: 64,
		name: "Kadabra",
		types: [
			"Psychic"
		],
		baseStats: {
			hp: 40,
			atk: 35,
			def: 30,
			spe: 105,
			spa: 120,
			spd: 70
		},
		abilities: {
			0: "Synchronize",
			H: "Magic Guard"
		},
		inherit: true,
		baseSpecies: "Kadabra",
		eggGroups: [
			"Humanlike"
		],
		weightkg: 56.5
	},
	alakazam: {
		num: 65,
		name: "Alakazam",
		types: [
			"Psychic"
		],
		baseStats: {
			hp: 55,
			atk: 50,
			def: 45,
			spe: 120,
			spa: 135,
			spd: 95
		},
		abilities: {
			0: "Synchronize",
			H: "Magic Guard"
		},
		inherit: true,
		baseSpecies: "Alakazam",
		eggGroups: [
			"Humanlike"
		],
		weightkg: 48.0
	},
	victreebel: {
		num: 71,
		name: "Victreebel",
		types: [
			"Grass",
			"Poison"
		],
		baseStats: {
			hp: 80,
			atk: 105,
			def: 65,
			spe: 70,
			spa: 100,
			spd: 60
		},
		abilities: {
			0: "Chlorophyll",
			H: "Gluttony"
		},
		inherit: true,
		baseSpecies: "Victreebel",
		eggGroups: [
			"Grass"
		],
		weightkg: 15.5
	},
	geodude: {
		num: 74,
		name: "Geodude",
		types: [
			"Rock",
			"Ground"
		],
		baseStats: {
			hp: 50,
			atk: 80,
			def: 100,
			spe: 20,
			spa: 30,
			spd: 30
		},
		abilities: {
			0: "Rock Head",
			1: "Sturdy",
			H: "Sand Veil"
		},
		inherit: true,
		baseSpecies: "Geodude",
		eggGroups: [
			"Mineral"
		],
		weightkg: 20.0
	},
	graveler: {
		num: 75,
		name: "Graveler",
		types: [
			"Rock",
			"Ground"
		],
		baseStats: {
			hp: 80,
			atk: 95,
			def: 115,
			spe: 35,
			spa: 45,
			spd: 45
		},
		abilities: {
			0: "Rock Head",
			1: "Sturdy",
			H: "Sand Veil"
		},
		inherit: true,
		baseSpecies: "Graveler",
		eggGroups: [
			"Mineral"
		],
		weightkg: 105.0
	},
	golem: {
		num: 76,
		name: "Golem",
		types: [
			"Rock",
			"Ground"
		],
		baseStats: {
			hp: 110,
			atk: 120,
			def: 130,
			spe: 45,
			spa: 55,
			spd: 65
		},
		abilities: {
			0: "Rock Head",
			1: "Sturdy",
			H: "Sand Veil"
		},
		inherit: true,
		baseSpecies: "Golem",
		eggGroups: [
			"Mineral"
		],
		weightkg: 300.0
	},
	rapidash: {
		num: 78,
		name: "Rapidash",
		types: [
			"Fire"
		],
		baseStats: {
			hp: 85,
			atk: 110,
			def: 70,
			spe: 105,
			spa: 80,
			spd: 80
		},
		abilities: {
			0: "Reckless",
			1: "Flash Fire",
			H: "Flame Body"
		},
		inherit: true,
		baseSpecies: "Rapidash",
		eggGroups: [
			"Field"
		],
		weightkg: 95.0
	},
	slowbro: {
		num: 80,
		name: "Slowbro",
		types: [
			"Water",
			"Psychic"
		],
		baseStats: {
			hp: 95,
			atk: 75,
			def: 110,
			spe: 30,
			spa: 100,
			spd: 80
		},
		abilities: {
			0: "Oblivious",
			1: "Regenerator",
			H: "Regenerator"
		},
		inherit: true,
		baseSpecies: "Slowbro",
		eggGroups: [
			"Monster",
			"Water1"
		],
		weightkg: 78.5
	},
	dodrio: {
		num: 85,
		name: "Dodrio",
		types: [
			"Normal",
			"Flying"
		],
		baseStats: {
			hp: 70,
			atk: 110,
			def: 70,
			spe: 110,
			spa: 60,
			spd: 60
		},
		abilities: {
			0: "Moxie",
			1: "Early Bird",
			H: "Tangled Feet"
		},
		inherit: true,
		baseSpecies: "Dodrio",
		eggGroups: [
			"Flying"
		],
		weightkg: 85.2
	},
	dewgong: {
		num: 87,
		name: "Dewgong",
		types: [
			"Water",
			"Ice"
		],
		baseStats: {
			hp: 90,
			atk: 70,
			def: 80,
			spe: 70,
			spa: 90,
			spd: 95
		},
		abilities: {
			0: "Thick Fat",
			1: "Hydration",
			H: "Ice Body"
		},
		inherit: true,
		baseSpecies: "Dewgong",
		eggGroups: [
			"Water1",
			"Field"
		],
		weightkg: 120.0
	},
	grimer: {
		num: 88,
		name: "Grimer",
		types: [
			"Poison"
		],
		baseStats: {
			hp: 80,
			atk: 60,
			def: 50,
			spe: 25,
			spa: 60,
			spd: 50
		},
		abilities: {
			0: "Stench",
			1: "Sticky Hold",
			H: "Poison Touch"
		},
		inherit: true,
		baseSpecies: "Grimer",
		eggGroups: [
			"Amorphous"
		],
		weightkg: 30.0
	},
	muk: {
		num: 89,
		name: "Muk",
		types: [
			"Poison"
		],
		baseStats: {
			hp: 105,
			atk: 105,
			def: 75,
			spe: 50,
			spa: 65,
			spd: 100
		},
		abilities: {
			0: "Stench",
			1: "Poison Touch",
			H: "Poison Touch"
		},
		inherit: true,
		baseSpecies: "Muk",
		eggGroups: [
			"Amorphous"
		],
		weightkg: 30.0
	},
	shellder: {
		num: 90,
		name: "Shellder",
		types: [
			"Water"
		],
		baseStats: {
			hp: 30,
			atk: 65,
			def: 100,
			spe: 50,
			spa: 50,
			spd: 25
		},
		abilities: {
			0: "Shell Armor",
			1: "Skill Link",
			H: "Overcoat"
		},
		inherit: true,
		baseSpecies: "Shellder",
		eggGroups: [
			"Water3"
		],
		weightkg: 4.0
	},
	onix: {
		num: 95,
		name: "Onix",
		types: [
			"Rock",
			"Ground"
		],
		baseStats: {
			hp: 55,
			atk: 80,
			def: 160,
			spe: 70,
			spa: 30,
			spd: 45
		},
		abilities: {
			0: "Rock Head",
			1: "Sturdy",
			H: "Weak Armor"
		},
		inherit: true,
		baseSpecies: "Onix",
		eggGroups: [
			"Mineral"
		],
		weightkg: 210.0
	},
	drowzee: {
		num: 96,
		name: "Drowzee",
		types: [
			"Psychic"
		],
		baseStats: {
			hp: 60,
			atk: 48,
			def: 45,
			spe: 42,
			spa: 63,
			spd: 90
		},
		abilities: {
			0: "Run Away",
			1: "Forewarn",
			H: "Inner Focus"
		},
		inherit: true,
		baseSpecies: "Drowzee",
		eggGroups: [
			"Humanlike"
		],
		weightkg: 32.4
	},
	hypno: {
		num: 97,
		name: "Hypno",
		types: [
			"Psychic"
		],
		baseStats: {
			hp: 85,
			atk: 80,
			def: 70,
			spe: 67,
			spa: 95,
			spd: 115
		},
		abilities: {
			0: "Run Away",
			1: "Forewarn",
			H: "Inner Focus"
		},
		inherit: true,
		baseSpecies: "Hypno",
		eggGroups: [
			"Humanlike"
		],
		weightkg: 75.6
	},
	krabby: {
		num: 98,
		name: "Krabby",
		types: [
			"Water"
		],
		baseStats: {
			hp: 30,
			atk: 105,
			def: 90,
			spe: 50,
			spa: 40,
			spd: 35
		},
		abilities: {
			0: "Hyper Cutter",
			1: "Shell Armor",
			H: "Sheer Force"
		},
		inherit: true,
		baseSpecies: "Krabby",
		eggGroups: [
			"Water3"
		],
		weightkg: 6.5
	},
	kingler: {
		num: 99,
		name: "Kingler",
		types: [
			"Water"
		],
		baseStats: {
			hp: 75,
			atk: 130,
			def: 115,
			spe: 75,
			spa: 50,
			spd: 50
		},
		abilities: {
			0: "Hyper Cutter",
			1: "Shell Armor",
			H: "Sheer Force"
		},
		inherit: true,
		baseSpecies: "Kingler",
		eggGroups: [
			"Water3"
		],
		weightkg: 60.0
	},
	voltorb: {
		num: 100,
		name: "Voltorb",
		types: [
			"Electric"
		],
		baseStats: {
			hp: 40,
			atk: 30,
			def: 50,
			spe: 100,
			spa: 55,
			spd: 55
		},
		abilities: {
			0: "Soundproof",
			1: "Static",
			H: "Run Away"
		},
		inherit: true,
		baseSpecies: "Voltorb",
		eggGroups: [
			"Mineral"
		],
		weightkg: 10.4
	},
	electrode: {
		num: 101,
		name: "Electrode",
		types: [
			"Electric"
		],
		baseStats: {
			hp: 60,
			atk: 50,
			def: 70,
			spe: 150,
			spa: 100,
			spd: 80
		},
		abilities: {
			0: "Soundproof",
			1: "Static",
			H: "Run Away"
		},
		inherit: true,
		baseSpecies: "Electrode",
		eggGroups: [
			"Mineral"
		],
		weightkg: 66.6
	},
	exeggutor: {
		num: 103,
		name: "Exeggutor",
		types: [
			"Grass",
			"Psychic"
		],
		baseStats: {
			hp: 95,
			atk: 95,
			def: 85,
			spe: 55,
			spa: 125,
			spd: 80
		},
		abilities: {
			0: "Chlorophyll",
			H: "Harvest"
		},
		inherit: true,
		baseSpecies: "Exeggutor",
		eggGroups: [
			"Grass"
		],
		weightkg: 120.0
	},
	hitmonlee: {
		num: 106,
		name: "Hitmonlee",
		types: [
			"Fighting"
		],
		baseStats: {
			hp: 60,
			atk: 120,
			def: 53,
			spe: 87,
			spa: 35,
			spd: 110
		},
		abilities: {
			0: "Limber",
			1: "Reckless",
			H: "Unburden"
		},
		inherit: true,
		baseSpecies: "Hitmonlee",
		eggGroups: [
			"Humanlike"
		],
		weightkg: 49.8
	},
	hitmonchan: {
		num: 107,
		name: "Hitmonchan",
		types: [
			"Fighting"
		],
		baseStats: {
			hp: 60,
			atk: 105,
			def: 79,
			spe: 76,
			spa: 35,
			spd: 110
		},
		abilities: {
			0: "Keen Eye",
			1: "Iron Fist",
			H: "Inner Focus"
		},
		inherit: true,
		baseSpecies: "Hitmonchan",
		eggGroups: [
			"Humanlike"
		],
		weightkg: 50.2
	},
	koffing: {
		num: 109,
		name: "Koffing",
		types: [
			"Poison"
		],
		baseStats: {
			hp: 40,
			atk: 65,
			def: 95,
			spe: 35,
			spa: 60,
			spd: 45
		},
		abilities: {
			0: "Levitate"
		},
		inherit: true,
		baseSpecies: "Koffing",
		eggGroups: [
			"Amorphous"
		],
		weightkg: 1.0
	},
	weezing: {
		num: 110,
		name: "Weezing",
		types: [
			"Poison"
		],
		baseStats: {
			hp: 65,
			atk: 90,
			def: 120,
			spe: 60,
			spa: 95,
			spd: 70
		},
		abilities: {
			0: "Levitate"
		},
		inherit: true,
		baseSpecies: "Weezing",
		eggGroups: [
			"Amorphous"
		],
		weightkg: 9.5
	},
	tangela: {
		num: 114,
		name: "Tangela",
		types: [
			"Grass",
			"Ground"
		],
		baseStats: {
			hp: 65,
			atk: 100,
			def: 115,
			spe: 60,
			spa: 55,
			spd: 40
		},
		abilities: {
			0: "Rough Skin",
			H: "Regenerator"
		},
		inherit: true,
		baseSpecies: "Tangela",
		eggGroups: [
			"Grass"
		],
		weightkg: 35.0
	},
	seaking: {
		num: 119,
		name: "Seaking",
		types: [
			"Water"
		],
		baseStats: {
			hp: 80,
			atk: 110,
			def: 75,
			spe: 80,
			spa: 65,
			spd: 80
		},
		abilities: {
			0: "Swift Swim",
			1: "Water Veil",
			H: "Lightning Rod"
		},
		inherit: true,
		baseSpecies: "Seaking",
		eggGroups: [
			"Water2"
		],
		weightkg: 39.0
	},
	mrmime: {
		num: 122,
		name: "Mr. Mime",
		types: [
			"Psychic",
			"Fairy"
		],
		baseStats: {
			hp: 50,
			atk: 45,
			def: 65,
			spe: 90,
			spa: 100,
			spd: 120
		},
		abilities: {
			0: "Soundproof",
			1: "Filter",
			H: "Technician"
		},
		inherit: true,
		baseSpecies: "Mr. mime",
		eggGroups: [
			"Humanlike"
		],
		weightkg: 54.5
	},
	electabuzz: {
		num: 125,
		name: "Electabuzz",
		types: [
			"Electric"
		],
		baseStats: {
			hp: 65,
			atk: 83,
			def: 57,
			spe: 105,
			spa: 95,
			spd: 85
		},
		abilities: {
			0: "Static",
			H: "Run Away"
		},
		inherit: true,
		baseSpecies: "Electabuzz",
		eggGroups: [
			"Humanlike"
		],
		weightkg: 30.0
	},
	magmar: {
		num: 126,
		name: "Magmar",
		types: [
			"Fire"
		],
		baseStats: {
			hp: 65,
			atk: 95,
			def: 57,
			spe: 93,
			spa: 100,
			spd: 85
		},
		abilities: {
			0: "Flame Body",
			H: "Run Away"
		},
		inherit: true,
		baseSpecies: "Magmar",
		eggGroups: [
			"Humanlike"
		],
		weightkg: 44.5
	},
	tauros: {
		num: 128,
		name: "Tauros",
		types: [
			"Normal"
		],
		baseStats: {
			hp: 75,
			atk: 110,
			def: 95,
			spe: 110,
			spa: 40,
			spd: 70
		},
		abilities: {
			0: "Intimidate",
			1: "Anger Point",
			H: "Sheer Force"
		},
		inherit: true,
		baseSpecies: "Tauros",
		eggGroups: [
			"Field"
		],
		weightkg: 88.4
	},
	lapras: {
		num: 131,
		name: "Lapras",
		types: [
			"Water",
			"Ice"
		],
		baseStats: {
			hp: 130,
			atk: 75,
			def: 80,
			spe: 60,
			spa: 95,
			spd: 95
		},
		abilities: {
			0: "Water Absorb",
			1: "Shell Armor",
			H: "Hydration"
		},
		inherit: true,
		baseSpecies: "Lapras",
		eggGroups: [
			"Monster",
			"Water1"
		],
		weightkg: 220.0
	},
	ditto: {
		num: 132,
		name: "Ditto",
		types: [
			"Normal"
		],
		baseStats: {
			hp: 48,
			atk: 48,
			def: 48,
			spe: 48,
			spa: 48,
			spd: 48
		},
		abilities: {
			0: "Imposter",
			H: "Imposter"
		},
		inherit: true,
		baseSpecies: "Ditto",
		eggGroups: [
			"Ditto"
		],
		weightkg: 4.0
	},
	flareon: {
		num: 136,
		name: "Flareon",
		types: [
			"Fire"
		],
		baseStats: {
			hp: 75,
			atk: 130,
			def: 60,
			spe: 65,
			spa: 85,
			spd: 110
		},
		abilities: {
			0: "Flash Fire",
			H: "Guts"
		},
		inherit: true,
		baseSpecies: "Flareon",
		eggGroups: [
			"Field"
		],
		weightkg: 25.0
	},
	zapdos: {
		num: 145,
		name: "Zapdos",
		types: [
			"Electric",
			"Flying"
		],
		baseStats: {
			hp: 90,
			atk: 90,
			def: 85,
			spe: 100,
			spa: 125,
			spd: 90
		},
		abilities: {
			0: "Pressure",
			H: "Lightning Rod"
		},
		inherit: true,
		baseSpecies: "Zapdos",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 52.6
	},
	mewtwo: {
		num: 150,
		name: "Mewtwo",
		types: [
			"Psychic"
		],
		baseStats: {
			hp: 110,
			atk: 110,
			def: 100,
			spe: 130,
			spa: 154,
			spd: 130
		},
		abilities: {
			0: "Pressure",
			H: "Unnerve"
		},
		inherit: true,
		baseSpecies: "Mewtwo",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 122.0
	},
	meganium: {
		num: 154,
		name: "Meganium",
		types: [
			"Grass",
			"Fairy"
		],
		baseStats: {
			hp: 80,
			atk: 82,
			def: 100,
			spe: 80,
			spa: 90,
			spd: 100
		},
		abilities: {
			0: "Overgrow",
			H: "Leaf Guard"
		},
		inherit: true,
		baseSpecies: "Meganium",
		eggGroups: [
			"Monster",
			"Grass"
		],
		weightkg: 100.5
	},
	quilava: {
		num: 156,
		name: "Quilava",
		types: [
			"Fire"
		],
		baseStats: {
			hp: 58,
			atk: 64,
			def: 58,
			spe: 80,
			spa: 80,
			spd: 65
		},
		abilities: {
			0: "Blaze",
			H: "Adaptability"
		},
		inherit: true,
		baseSpecies: "Quilava",
		eggGroups: [
			"Field"
		],
		weightkg: 19.0
	},
	typhlosion: {
		num: 157,
		name: "Typhlosion",
		types: [
			"Fire"
		],
		baseStats: {
			hp: 78,
			atk: 84,
			def: 78,
			spe: 100,
			spa: 109,
			spd: 85
		},
		abilities: {
			0: "Blaze",
			H: "Adaptability"
		},
		inherit: true,
		baseSpecies: "Typhlosion",
		eggGroups: [
			"Field"
		],
		weightkg: 79.5
	},
	croconaw: {
		num: 159,
		name: "Croconaw",
		types: [
			"Water",
			"Dark"
		],
		baseStats: {
			hp: 65,
			atk: 80,
			def: 80,
			spe: 58,
			spa: 59,
			spd: 63
		},
		abilities: {
			0: "Torrent",
			H: "Sheer Force"
		},
		inherit: true,
		baseSpecies: "Croconaw",
		eggGroups: [
			"Monster",
			"Water1"
		],
		weightkg: 25.0
	},
	feraligatr: {
		num: 160,
		name: "Feraligatr",
		types: [
			"Water",
			"Dark"
		],
		baseStats: {
			hp: 85,
			atk: 105,
			def: 100,
			spe: 78,
			spa: 79,
			spd: 83
		},
		abilities: {
			0: "Torrent",
			H: "Sheer Force"
		},
		inherit: true,
		baseSpecies: "Feraligatr",
		eggGroups: [
			"Monster",
			"Water1"
		],
		weightkg: 88.8
	},
	sentret: {
		num: 161,
		name: "Sentret",
		types: [
			"Normal"
		],
		baseStats: {
			hp: 35,
			atk: 66,
			def: 34,
			spe: 70,
			spa: 35,
			spd: 45
		},
		abilities: {
			0: "Run Away",
			1: "Keen Eye",
			H: "Frisk"
		},
		inherit: true,
		baseSpecies: "Sentret",
		eggGroups: [
			"Field"
		],
		weightkg: 6.0
	},
	furret: {
		num: 162,
		name: "Furret",
		types: [
			"Normal"
		],
		baseStats: {
			hp: 85,
			atk: 90,
			def: 64,
			spe: 110,
			spa: 45,
			spd: 65
		},
		abilities: {
			0: "Fur Coat",
			1: "Keen Eye",
			H: "Frisk"
		},
		inherit: true,
		baseSpecies: "Furret",
		eggGroups: [
			"Field"
		],
		weightkg: 32.5
	},
	hoothoot: {
		num: 163,
		name: "Hoothoot",
		types: [
			"Normal",
			"Flying"
		],
		baseStats: {
			hp: 60,
			atk: 30,
			def: 30,
			spe: 50,
			spa: 66,
			spd: 56
		},
		abilities: {
			0: "Run Away",
			1: "Keen Eye",
			H: "Tinted Lens"
		},
		inherit: true,
		baseSpecies: "Hoothoot",
		eggGroups: [
			"Flying"
		],
		weightkg: 21.2
	},
	noctowl: {
		num: 164,
		name: "Noctowl",
		types: [
			"Psychic",
			"Flying"
		],
		baseStats: {
			hp: 100,
			atk: 50,
			def: 65,
			spe: 70,
			spa: 95,
			spd: 96
		},
		abilities: {
			0: "Tinted Lens",
			1: "Keen Eye",
			H: "Tinted Lens"
		},
		inherit: true,
		baseSpecies: "Noctowl",
		eggGroups: [
			"Flying"
		],
		weightkg: 40.8
	},
	ledyba: {
		num: 165,
		name: "Ledyba",
		types: [
			"Bug",
			"Flying"
		],
		baseStats: {
			hp: 40,
			atk: 40,
			def: 30,
			spe: 55,
			spa: 60,
			spd: 80
		},
		abilities: {
			0: "Swarm",
			1: "Early Bird",
			H: "Rattled"
		},
		inherit: true,
		baseSpecies: "Ledyba",
		eggGroups: [
			"Bug"
		],
		weightkg: 10.8
	},
	ledian: {
		num: 166,
		name: "Ledian",
		types: [
			"Bug",
			"Flying"
		],
		baseStats: {
			hp: 75,
			atk: 70,
			def: 55,
			spe: 85,
			spa: 85,
			spd: 110
		},
		abilities: {
			0: "Huge Power",
			H: "Iron Fist"
		},
		inherit: true,
		baseSpecies: "Ledian",
		eggGroups: [
			"Bug"
		],
		weightkg: 35.6
	},
	cleffa: {
		num: 173,
		name: "Cleffa",
		types: [
			"Fairy"
		],
		baseStats: {
			hp: 50,
			atk: 25,
			def: 28,
			spe: 15,
			spa: 45,
			spd: 55
		},
		abilities: {
			0: "Cute Charm",
			H: "Friend Guard"
		},
		inherit: true,
		baseSpecies: "Cleffa",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 3.0
	},
	igglybuff: {
		num: 174,
		name: "Igglybuff",
		types: [
			"Normal"
		],
		baseStats: {
			hp: 90,
			atk: 30,
			def: 15,
			spe: 15,
			spa: 40,
			spd: 20
		},
		abilities: {
			0: "Cute Charm",
			H: "Friend Guard"
		},
		inherit: true,
		baseSpecies: "Igglybuff",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 1.0
	},
	togepi: {
		num: 175,
		name: "Togepi",
		types: [
			"Fairy"
		],
		baseStats: {
			hp: 35,
			atk: 20,
			def: 65,
			spe: 20,
			spa: 40,
			spd: 65
		},
		abilities: {
			0: "Serene Grace",
			H: "Super Luck"
		},
		inherit: true,
		baseSpecies: "Togepi",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 1.5
	},
	togetic: {
		num: 176,
		name: "Togetic",
		types: [
			"Fairy",
			"Flying"
		],
		baseStats: {
			hp: 55,
			atk: 40,
			def: 85,
			spe: 40,
			spa: 80,
			spd: 105
		},
		abilities: {
			0: "Serene Grace",
			H: "Super Luck"
		},
		inherit: true,
		baseSpecies: "Togetic",
		eggGroups: [
			"Flying",
			"Fairy"
		],
		weightkg: 3.2
	},
	natu: {
		num: 177,
		name: "Natu",
		types: [
			"Psychic",
			"Flying"
		],
		baseStats: {
			hp: 40,
			atk: 50,
			def: 45,
			spe: 70,
			spa: 70,
			spd: 45
		},
		abilities: {
			0: "Magic Bounce",
			1: "Early Bird",
			H: "Magic Bounce"
		},
		inherit: true,
		baseSpecies: "Natu",
		eggGroups: [
			"Flying"
		],
		weightkg: 2.0
	},
	xatu: {
		num: 178,
		name: "Xatu",
		types: [
			"Psychic",
			"Flying"
		],
		baseStats: {
			hp: 65,
			atk: 75,
			def: 70,
			spe: 100,
			spa: 95,
			spd: 70
		},
		abilities: {
			0: "Magic Bounce",
			1: "Early Bird",
			H: "Magic Bounce"
		},
		inherit: true,
		baseSpecies: "Xatu",
		eggGroups: [
			"Flying"
		],
		weightkg: 15.0
	},
	bellossom: {
		num: 182,
		name: "Bellossom",
		types: [
			"Grass"
		],
		baseStats: {
			hp: 75,
			atk: 80,
			def: 85,
			spe: 50,
			spa: 100,
			spd: 100
		},
		abilities: {
			0: "Chlorophyll",
			H: "Healer"
		},
		inherit: true,
		baseSpecies: "Bellossom",
		eggGroups: [
			"Grass"
		],
		weightkg: 5.8
	},
	azumarill: {
		num: 184,
		name: "Azumarill",
		types: [
			"Water",
			"Fairy"
		],
		baseStats: {
			hp: 100,
			atk: 50,
			def: 80,
			spe: 50,
			spa: 50,
			spd: 80
		},
		abilities: {
			0: "Thick Fat",
			1: "Huge Power",
			H: "Sap Sipper"
		},
		inherit: true,
		baseSpecies: "Azumarill",
		eggGroups: [
			"Water1",
			"Fairy"
		],
		weightkg: 28.5
	},
	sudowoodo: {
		num: 185,
		name: "Sudowoodo",
		types: [
			"Rock"
		],
		baseStats: {
			hp: 80,
			atk: 100,
			def: 125,
			spe: 30,
			spa: 30,
			spd: 85
		},
		abilities: {
			0: "Sturdy",
			1: "Rock Head",
			H: "Rattled"
		},
		inherit: true,
		baseSpecies: "Sudowoodo",
		eggGroups: [
			"Mineral"
		],
		weightkg: 38.0
	},
	hoppip: {
		num: 187,
		name: "Hoppip",
		types: [
			"Grass",
			"Flying"
		],
		baseStats: {
			hp: 35,
			atk: 45,
			def: 40,
			spe: 50,
			spa: 35,
			spd: 55
		},
		abilities: {
			0: "Chlorophyll",
			1: "Leaf Guard",
			H: "Infiltrator"
		},
		inherit: true,
		baseSpecies: "Hoppip",
		eggGroups: [
			"Fairy",
			"Grass"
		],
		weightkg: 0.5
	},
	skiploom: {
		num: 188,
		name: "Skiploom",
		types: [
			"Grass",
			"Flying"
		],
		baseStats: {
			hp: 55,
			atk: 65,
			def: 50,
			spe: 80,
			spa: 45,
			spd: 65
		},
		abilities: {
			0: "Chlorophyll",
			1: "Leaf Guard",
			H: "Infiltrator"
		},
		inherit: true,
		baseSpecies: "Skiploom",
		eggGroups: [
			"Fairy",
			"Grass"
		],
		weightkg: 1.0
	},
	jumpluff: {
		num: 189,
		name: "Jumpluff",
		types: [
			"Grass",
			"Flying"
		],
		baseStats: {
			hp: 75,
			atk: 90,
			def: 70,
			spe: 110,
			spa: 55,
			spd: 95
		},
		abilities: {
			0: "Chlorophyll",
			1: "Leaf Guard",
			H: "Infiltrator"
		},
		inherit: true,
		baseSpecies: "Jumpluff",
		eggGroups: [
			"Fairy",
			"Grass"
		],
		weightkg: 3.0
	},
	sunkern: {
		num: 191,
		name: "Sunkern",
		types: [
			"Grass"
		],
		baseStats: {
			hp: 30,
			atk: 50,
			def: 30,
			spe: 30,
			spa: 50,
			spd: 30
		},
		abilities: {
			0: "Chlorophyll",
			1: "Solar Power",
			H: "Early Bird"
		},
		inherit: true,
		baseSpecies: "Sunkern",
		eggGroups: [
			"Grass"
		],
		weightkg: 1.8
	},
	sunflora: {
		num: 192,
		name: "Sunflora",
		types: [
			"Grass"
		],
		baseStats: {
			hp: 75,
			atk: 75,
			def: 75,
			spe: 30,
			spa: 115,
			spd: 95
		},
		abilities: {
			0: "Chlorophyll",
			1: "Solar Power",
			H: "Early Bird"
		},
		inherit: true,
		baseSpecies: "Sunflora",
		eggGroups: [
			"Grass"
		],
		weightkg: 8.5
	},
	wooper: {
		num: 194,
		name: "Wooper",
		types: [
			"Water",
			"Ground"
		],
		baseStats: {
			hp: 55,
			atk: 55,
			def: 45,
			spe: 15,
			spa: 35,
			spd: 35
		},
		abilities: {
			0: "Damp",
			1: "Water Absorb",
			H: "Unaware"
		},
		inherit: true,
		baseSpecies: "Wooper",
		eggGroups: [
			"Water1",
			"Field"
		],
		weightkg: 8.5
	},
	quagsire: {
		num: 195,
		name: "Quagsire",
		types: [
			"Water",
			"Ground"
		],
		baseStats: {
			hp: 95,
			atk: 100,
			def: 95,
			spe: 35,
			spa: 65,
			spd: 65
		},
		abilities: {
			0: "Damp",
			1: "Water Absorb",
			H: "Unaware"
		},
		inherit: true,
		baseSpecies: "Quagsire",
		eggGroups: [
			"Water1",
			"Field"
		],
		weightkg: 75.0
	},
	murkrow: {
		num: 198,
		name: "Murkrow",
		types: [
			"Dark",
			"Flying"
		],
		baseStats: {
			hp: 60,
			atk: 85,
			def: 42,
			spe: 91,
			spa: 85,
			spd: 42
		},
		abilities: {
			0: "Run Away",
			1: "Super Luck",
			H: "Prankster"
		},
		inherit: true,
		baseSpecies: "Murkrow",
		eggGroups: [
			"Flying"
		],
		weightkg: 2.1
	},
	unown: {
		num: 201,
		name: "Unown",
		types: [
			"Psychic"
		],
		baseStats: {
			hp: 80,
			atk: 72,
			def: 48,
			spe: 48,
			spa: 80,
			spd: 80
		},
		abilities: {
			0: "Levitate"
		},
		inherit: true,
		baseSpecies: "Unown",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 5.0
	},
	girafarig: {
		num: 203,
		name: "Girafarig",
		types: [
			"Normal",
			"Psychic"
		],
		baseStats: {
			hp: 70,
			atk: 90,
			def: 65,
			spe: 85,
			spa: 105,
			spd: 65
		},
		abilities: {
			0: "Inner Focus",
			1: "Early Bird",
			H: "Sap Sipper"
		},
		inherit: true,
		baseSpecies: "Girafarig",
		eggGroups: [
			"Field"
		],
		weightkg: 41.5
	},
	dunsparce: {
		num: 206,
		name: "Dunsparce",
		types: [
			"Normal"
		],
		baseStats: {
			hp: 100,
			atk: 90,
			def: 90,
			spe: 45,
			spa: 65,
			spd: 65
		},
		abilities: {
			0: "Serene Grace",
			1: "Run Away",
			H: "Rattled"
		},
		inherit: true,
		baseSpecies: "Dunsparce",
		eggGroups: [
			"Field"
		],
		weightkg: 14.0
	},
	steelix: {
		num: 208,
		name: "Steelix",
		types: [
			"Steel",
			"Ground"
		],
		baseStats: {
			hp: 75,
			atk: 100,
			def: 200,
			spe: 30,
			spa: 55,
			spd: 65
		},
		abilities: {
			0: "Rock Head",
			1: "Sturdy",
			H: "Sheer Force"
		},
		inherit: true,
		baseSpecies: "Steelix",
		eggGroups: [
			"Mineral"
		],
		weightkg: 400.0
	},
	shuckle: {
		num: 213,
		name: "Shuckle",
		types: [
			"Bug",
			"Rock"
		],
		baseStats: {
			hp: 20,
			atk: 10,
			def: 230,
			spe: 5,
			spa: 10,
			spd: 230
		},
		abilities: {
			0: "Contrary",
			1: "Gluttony",
			H: "Gluttony"
		},
		inherit: true,
		baseSpecies: "Shuckle",
		eggGroups: [
			"Bug"
		],
		weightkg: 20.5
	},
	sneasel: {
		num: 215,
		name: "Sneasel",
		types: [
			"Dark",
			"Ice"
		],
		baseStats: {
			hp: 55,
			atk: 95,
			def: 55,
			spe: 115,
			spa: 35,
			spd: 75
		},
		abilities: {
			0: "Technician",
			H: "Pickpocket"
		},
		inherit: true,
		baseSpecies: "Sneasel",
		eggGroups: [
			"Field"
		],
		weightkg: 28.0
	},
	corsola: {
		num: 222,
		name: "Corsola",
		types: [
			"Water",
			"Rock"
		],
		baseStats: {
			hp: 85,
			atk: 85,
			def: 85,
			spe: 35,
			spa: 95,
			spd: 85
		},
		abilities: {
			0: "Natural Cure",
			H: "Regenerator"
		},
		inherit: true,
		baseSpecies: "Corsola",
		eggGroups: [
			"Water1",
			"Water3"
		],
		weightkg: 5.0
	},
	remoraid: {
		num: 223,
		name: "Remoraid",
		types: [
			"Water"
		],
		baseStats: {
			hp: 35,
			atk: 65,
			def: 35,
			spe: 65,
			spa: 65,
			spd: 35
		},
		abilities: {
			0: "Sniper",
			H: "Moody"
		},
		inherit: true,
		baseSpecies: "Remoraid",
		eggGroups: [
			"Water1",
			"Water2"
		],
		weightkg: 12.0
	},
	stantler: {
		num: 234,
		name: "Stantler",
		types: [
			"Normal"
		],
		baseStats: {
			hp: 75,
			atk: 95,
			def: 62,
			spe: 85,
			spa: 85,
			spd: 65
		},
		abilities: {
			0: "Intimidate",
			1: "Frisk",
			H: "Sap Sipper"
		},
		inherit: true,
		baseSpecies: "Stantler",
		eggGroups: [
			"Field"
		],
		weightkg: 71.2
	},
	tyrogue: {
		num: 236,
		name: "Tyrogue",
		types: [
			"Fighting"
		],
		baseStats: {
			hp: 55,
			atk: 60,
			def: 60,
			spe: 65,
			spa: 35,
			spd: 45
		},
		abilities: {
			0: "Guts",
			1: "Steadfast",
			H: "Run Away"
		},
		inherit: true,
		baseSpecies: "Tyrogue",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 21.0
	},
	elekid: {
		num: 239,
		name: "Elekid",
		types: [
			"Electric"
		],
		baseStats: {
			hp: 45,
			atk: 63,
			def: 37,
			spe: 95,
			spa: 65,
			spd: 55
		},
		abilities: {
			0: "Static",
			H: "Run Away"
		},
		inherit: true,
		baseSpecies: "Elekid",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 23.5
	},
	magby: {
		num: 240,
		name: "Magby",
		types: [
			"Fire"
		],
		baseStats: {
			hp: 45,
			atk: 75,
			def: 37,
			spe: 83,
			spa: 70,
			spd: 55
		},
		abilities: {
			0: "Flame Body",
			H: "Run Away"
		},
		inherit: true,
		baseSpecies: "Magby",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 21.4
	},
	miltank: {
		num: 241,
		name: "Miltank",
		types: [
			"Normal"
		],
		baseStats: {
			hp: 95,
			atk: 90,
			def: 105,
			spe: 100,
			spa: 40,
			spd: 70
		},
		abilities: {
			0: "Thick Fat",
			1: "Scrappy",
			H: "Sap Sipper"
		},
		inherit: true,
		baseSpecies: "Miltank",
		eggGroups: [
			"Field"
		],
		weightkg: 75.5
	},
	raikou: {
		num: 243,
		name: "Raikou",
		types: [
			"Electric"
		],
		baseStats: {
			hp: 90,
			atk: 85,
			def: 75,
			spe: 115,
			spa: 115,
			spd: 100
		},
		abilities: {
			0: "Pressure",
			H: "Volt Absorb"
		},
		inherit: true,
		baseSpecies: "Raikou",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 178.0
	},
	entei: {
		num: 244,
		name: "Entei",
		types: [
			"Fire"
		],
		baseStats: {
			hp: 115,
			atk: 115,
			def: 85,
			spe: 100,
			spa: 90,
			spd: 75
		},
		abilities: {
			0: "Pressure",
			H: "Flash Fire"
		},
		inherit: true,
		baseSpecies: "Entei",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 198.0
	},
	suicune: {
		num: 245,
		name: "Suicune",
		types: [
			"Water"
		],
		baseStats: {
			hp: 100,
			atk: 75,
			def: 115,
			spe: 85,
			spa: 90,
			spd: 115
		},
		abilities: {
			0: "Pressure",
			H: "Water Absorb"
		},
		inherit: true,
		baseSpecies: "Suicune",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 187.0
	},
	sceptile: {
		num: 254,
		name: "Sceptile",
		types: [
			"Grass",
			"Dragon"
		],
		baseStats: {
			hp: 70,
			atk: 105,
			def: 65,
			spe: 120,
			spa: 85,
			spd: 85
		},
		abilities: {
			0: "Overgrow",
			H: "Unburden"
		},
		inherit: true,
		baseSpecies: "Sceptile",
		eggGroups: [
			"Monster",
			"Dragon"
		],
		weightkg: 52.2
	},
	mightyena: {
		num: 262,
		name: "Mightyena",
		types: [
			"Dark"
		],
		baseStats: {
			hp: 70,
			atk: 110,
			def: 70,
			spe: 90,
			spa: 60,
			spd: 60
		},
		abilities: {
			0: "Intimidate",
			1: "Quick Feet",
			H: "Moxie"
		},
		inherit: true,
		baseSpecies: "Mightyena",
		eggGroups: [
			"Field"
		],
		weightkg: 37.0
	},
	zigzagoon: {
		num: 263,
		name: "Zigzagoon",
		types: [
			"Normal",
			"Dark"
		],
		baseStats: {
			hp: 38,
			atk: 30,
			def: 41,
			spe: 60,
			spa: 30,
			spd: 41
		},
		abilities: {
			0: "Pickpocket",
			1: "Guts",
			H: "Quick Feet"
		},
		inherit: true,
		baseSpecies: "Zigzagoon",
		eggGroups: [
			"Field"
		],
		weightkg: 17.5
	},
	linoone: {
		num: 264,
		name: "Linoone",
		types: [
			"Normal",
			"Dark"
		],
		baseStats: {
			hp: 85,
			atk: 100,
			def: 61,
			spe: 110,
			spa: 50,
			spd: 61
		},
		abilities: {
			0: "Pickpocket",
			1: "Guts",
			H: "Quick Feet"
		},
		inherit: true,
		baseSpecies: "Linoone",
		eggGroups: [
			"Field"
		],
		weightkg: 32.5
	},
	beautifly: {
		num: 267,
		name: "Beautifly",
		types: [
			"Bug",
			"Flying"
		],
		baseStats: {
			hp: 70,
			atk: 70,
			def: 60,
			spe: 85,
			spa: 110,
			spd: 75
		},
		abilities: {
			0: "Swarm",
			H: "Rivalry"
		},
		inherit: true,
		baseSpecies: "Beautifly",
		eggGroups: [
			"Bug"
		],
		weightkg: 28.4
	},
	dustox: {
		num: 269,
		name: "Dustox",
		types: [
			"Bug",
			"Poison"
		],
		baseStats: {
			hp: 70,
			atk: 50,
			def: 70,
			spe: 85,
			spa: 90,
			spd: 105
		},
		abilities: {
			0: "Shield Dust",
			H: "Compound Eyes"
		},
		inherit: true,
		baseSpecies: "Dustox",
		eggGroups: [
			"Bug"
		],
		weightkg: 31.6
	},
	seedot: {
		num: 273,
		name: "Seedot",
		types: [
			"Grass"
		],
		baseStats: {
			hp: 50,
			atk: 55,
			def: 50,
			spe: 55,
			spa: 50,
			spd: 50
		},
		abilities: {
			0: "Overgrow",
			H: "Pickpocket"
		},
		inherit: true,
		baseSpecies: "Seedot",
		eggGroups: [
			"Field",
			"Grass"
		],
		weightkg: 4.0
	},
	nuzleaf: {
		num: 274,
		name: "Nuzleaf",
		types: [
			"Grass",
			"Dark"
		],
		baseStats: {
			hp: 70,
			atk: 70,
			def: 50,
			spe: 90,
			spa: 60,
			spd: 50
		},
		abilities: {
			0: "Overgrow",
			H: "Pickpocket"
		},
		inherit: true,
		baseSpecies: "Nuzleaf",
		eggGroups: [
			"Field",
			"Grass"
		],
		weightkg: 28.0
	},
	shiftry: {
		num: 275,
		name: "Shiftry",
		types: [
			"Grass",
			"Dark"
		],
		baseStats: {
			hp: 90,
			atk: 110,
			def: 60,
			spe: 90,
			spa: 95,
			spd: 60
		},
		abilities: {
			0: "Overgrow",
			H: "Pickpocket"
		},
		inherit: true,
		baseSpecies: "Shiftry",
		eggGroups: [
			"Field",
			"Grass"
		],
		weightkg: 59.6
	},
	taillow: {
		num: 276,
		name: "Taillow",
		types: [
			"Normal",
			"Flying"
		],
		baseStats: {
			hp: 40,
			atk: 65,
			def: 30,
			spe: 85,
			spa: 30,
			spd: 30
		},
		abilities: {
			0: "Guts",
			H: "Scrappy"
		},
		inherit: true,
		baseSpecies: "Taillow",
		eggGroups: [
			"Flying"
		],
		weightkg: 2.3
	},
	swellow: {
		num: 277,
		name: "Swellow",
		types: [
			"Normal",
			"Flying"
		],
		baseStats: {
			hp: 75,
			atk: 105,
			def: 60,
			spe: 125,
			spa: 50,
			spd: 50
		},
		abilities: {
			0: "Guts",
			H: "Scrappy"
		},
		inherit: true,
		baseSpecies: "Swellow",
		eggGroups: [
			"Flying"
		],
		weightkg: 19.8
	},
	wingull: {
		num: 278,
		name: "Wingull",
		types: [
			"Water",
			"Flying"
		],
		baseStats: {
			hp: 40,
			atk: 30,
			def: 30,
			spe: 85,
			spa: 55,
			spd: 30
		},
		abilities: {
			0: "Keen Eye",
			H: "Rain Dish"
		},
		inherit: true,
		baseSpecies: "Wingull",
		eggGroups: [
			"Water1",
			"Flying"
		],
		weightkg: 9.5
	},
	pelipper: {
		num: 279,
		name: "Pelipper",
		types: [
			"Water",
			"Flying"
		],
		baseStats: {
			hp: 80,
			atk: 50,
			def: 100,
			spe: 65,
			spa: 95,
			spd: 70
		},
		abilities: {
			0: "Keen Eye",
			1: "Drizzle",
			H: "Rain Dish"
		},
		inherit: true,
		baseSpecies: "Pelipper",
		eggGroups: [
			"Water1",
			"Flying"
		],
		weightkg: 28.0
	},
	kirlia: {
		num: 281,
		name: "Kirlia",
		types: [
			"Psychic",
			"Fairy"
		],
		baseStats: {
			hp: 55,
			atk: 35,
			def: 45,
			spe: 50,
			spa: 75,
			spd: 75
		},
		abilities: {
			0: "Synchronize",
			1: "Trace",
			H: "Telepathy"
		},
		inherit: true,
		baseSpecies: "Kirlia",
		eggGroups: [
			"Amorphous"
		],
		weightkg: 20.2
	},
	surskit: {
		num: 283,
		name: "Surskit",
		types: [
			"Bug",
			"Water"
		],
		baseStats: {
			hp: 55,
			atk: 30,
			def: 32,
			spe: 65,
			spa: 60,
			spd: 60
		},
		abilities: {
			0: "Swift Swim",
			H: "Rain Dish"
		},
		inherit: true,
		baseSpecies: "Surskit",
		eggGroups: [
			"Water1",
			"Bug"
		],
		weightkg: 1.7
	},
	masquerain: {
		num: 284,
		name: "Masquerain",
		types: [
			"Bug",
			"Flying"
		],
		baseStats: {
			hp: 70,
			atk: 60,
			def: 62,
			spe: 80,
			spa: 100,
			spd: 90
		},
		abilities: {
			0: "Intimidate",
			H: "Unnerve"
		},
		inherit: true,
		baseSpecies: "Masquerain",
		eggGroups: [
			"Water1",
			"Bug"
		],
		weightkg: 3.6
	},
	breloom: {
		num: 286,
		name: "Breloom",
		types: [
			"Grass",
			"Fighting"
		],
		baseStats: {
			hp: 60,
			atk: 130,
			def: 80,
			spe: 70,
			spa: 60,
			spd: 60
		},
		abilities: {
			0: "Effect Spore",
			1: "Technician",
			H: "Technician"
		},
		inherit: true,
		baseSpecies: "Breloom",
		eggGroups: [
			"Fairy",
			"Grass"
		],
		weightkg: 39.2
	},
	vigoroth: {
		num: 288,
		name: "Vigoroth",
		types: [
			"Normal"
		],
		baseStats: {
			hp: 80,
			atk: 80,
			def: 80,
			spe: 90,
			spa: 55,
			spd: 55
		},
		abilities: {
			0: "Run Away"
		},
		inherit: true,
		baseSpecies: "Vigoroth",
		eggGroups: [
			"Field"
		],
		weightkg: 46.5
	},
	ninjask: {
		num: 291,
		name: "Ninjask",
		types: [
			"Bug",
			"Flying"
		],
		baseStats: {
			hp: 61,
			atk: 105,
			def: 45,
			spe: 160,
			spa: 50,
			spd: 50
		},
		abilities: {
			0: "Speed Boost",
			H: "Infiltrator"
		},
		inherit: true,
		baseSpecies: "Ninjask",
		eggGroups: [
			"Bug"
		],
		weightkg: 12.0
	},
	whismur: {
		num: 293,
		name: "Whismur",
		types: [
			"Normal"
		],
		baseStats: {
			hp: 64,
			atk: 60,
			def: 36,
			spe: 28,
			spa: 51,
			spd: 36
		},
		abilities: {
			0: "Soundproof",
			H: "Rattled"
		},
		inherit: true,
		baseSpecies: "Whismur",
		eggGroups: [
			"Monster",
			"Field"
		],
		weightkg: 16.3
	},
	loudred: {
		num: 294,
		name: "Loudred",
		types: [
			"Normal"
		],
		baseStats: {
			hp: 84,
			atk: 80,
			def: 43,
			spe: 48,
			spa: 80,
			spd: 43
		},
		abilities: {
			0: "Soundproof",
			H: "Scrappy"
		},
		inherit: true,
		baseSpecies: "Loudred",
		eggGroups: [
			"Monster",
			"Field"
		],
		weightkg: 40.5
	},
	exploud: {
		num: 295,
		name: "Exploud",
		types: [
			"Normal"
		],
		baseStats: {
			hp: 104,
			atk: 100,
			def: 63,
			spe: 68,
			spa: 100,
			spd: 63
		},
		abilities: {
			0: "Soundproof",
			H: "Scrappy"
		},
		inherit: true,
		baseSpecies: "Exploud",
		eggGroups: [
			"Monster",
			"Field"
		],
		weightkg: 84.0
	},
	azurill: {
		num: 298,
		name: "Azurill",
		types: [
			"Normal"
		],
		baseStats: {
			hp: 50,
			atk: 20,
			def: 40,
			spe: 20,
			spa: 20,
			spd: 40
		},
		abilities: {
			0: "Thick Fat",
			1: "Huge Power",
			H: "Sap Sipper"
		},
		inherit: true,
		baseSpecies: "Azurill",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 2.0
	},
	skitty: {
		num: 300,
		name: "Skitty",
		types: [
			"Normal"
		],
		baseStats: {
			hp: 50,
			atk: 65,
			def: 45,
			spe: 60,
			spa: 35,
			spd: 35
		},
		abilities: {
			0: "Cute Charm",
			1: "Normalize",
			H: "Wonder Skin"
		},
		inherit: true,
		baseSpecies: "Skitty",
		eggGroups: [
			"Field",
			"Fairy"
		],
		weightkg: 11.0
	},
	delcatty: {
		num: 301,
		name: "Delcatty",
		types: [
			"Normal",
			"Fairy"
		],
		baseStats: {
			hp: 90,
			atk: 95,
			def: 85,
			spe: 100,
			spa: 95,
			spd: 75
		},
		abilities: {
			0: "Pixilate",
			H: "Wonder Skin"
		},
		inherit: true,
		baseSpecies: "Delcatty",
		eggGroups: [
			"Field",
			"Fairy"
		],
		weightkg: 32.6
	},
	mawile: {
		num: 303,
		name: "Mawile",
		types: [
			"Steel",
			"Fairy"
		],
		baseStats: {
			hp: 65,
			atk: 85,
			def: 85,
			spe: 50,
			spa: 55,
			spd: 55
		},
		abilities: {
			0: "Hyper Cutter",
			1: "Intimidate",
			H: "Sheer Force"
		},
		inherit: true,
		baseSpecies: "Mawile",
		eggGroups: [
			"Field",
			"Fairy"
		],
		weightkg: 11.5
	},
	plusle: {
		num: 311,
		name: "Plusle",
		types: [
			"Electric"
		],
		baseStats: {
			hp: 60,
			atk: 50,
			def: 40,
			spe: 95,
			spa: 105,
			spd: 75
		},
		abilities: {
			0: "Plus"
		},
		inherit: true,
		baseSpecies: "Plusle",
		eggGroups: [
			"Fairy"
		],
		weightkg: 4.2
	},
	minun: {
		num: 312,
		name: "Minun",
		types: [
			"Electric"
		],
		baseStats: {
			hp: 60,
			atk: 40,
			def: 50,
			spe: 95,
			spa: 75,
			spd: 105
		},
		abilities: {
			0: "Minus"
		},
		inherit: true,
		baseSpecies: "Minun",
		eggGroups: [
			"Fairy"
		],
		weightkg: 4.2
	},
	volbeat: {
		num: 313,
		name: "Volbeat",
		types: [
			"Bug",
			"Electric"
		],
		baseStats: {
			hp: 65,
			atk: 53,
			def: 55,
			spe: 115,
			spa: 100,
			spd: 75
		},
		abilities: {
			0: "Illuminate",
			1: "Swarm",
			H: "Prankster"
		},
		inherit: true,
		baseSpecies: "Volbeat",
		eggGroups: [
			"Bug",
			"Humanlike"
		],
		weightkg: 17.7
	},
	illumise: {
		num: 314,
		name: "Illumise",
		types: [
			"Bug",
			"Electric"
		],
		baseStats: {
			hp: 65,
			atk: 47,
			def: 55,
			spe: 85,
			spa: 100,
			spd: 110
		},
		abilities: {
			0: "Oblivious",
			1: "Tinted Lens",
			H: "Prankster"
		},
		inherit: true,
		baseSpecies: "Illumise",
		eggGroups: [
			"Bug",
			"Humanlike"
		],
		weightkg: 17.7
	},
	roselia: {
		num: 315,
		name: "Roselia",
		types: [
			"Grass",
			"Poison"
		],
		baseStats: {
			hp: 50,
			atk: 70,
			def: 45,
			spe: 65,
			spa: 100,
			spd: 80
		},
		abilities: {
			0: "Natural Cure",
			H: "Leaf Guard"
		},
		inherit: true,
		baseSpecies: "Roselia",
		eggGroups: [
			"Fairy",
			"Grass"
		],
		weightkg: 2.0
	},
	gulpin: {
		num: 316,
		name: "Gulpin",
		types: [
			"Poison"
		],
		baseStats: {
			hp: 70,
			atk: 43,
			def: 53,
			spe: 40,
			spa: 53,
			spd: 53
		},
		abilities: {
			0: "Liquid Ooze",
			1: "Sticky Hold",
			H: "Gluttony"
		},
		inherit: true,
		baseSpecies: "Gulpin",
		eggGroups: [
			"Amorphous"
		],
		weightkg: 10.3
	},
	swalot: {
		num: 317,
		name: "Swalot",
		types: [
			"Poison"
		],
		baseStats: {
			hp: 100,
			atk: 73,
			def: 83,
			spe: 55,
			spa: 80,
			spd: 83
		},
		abilities: {
			0: "Liquid Ooze",
			1: "Sticky Hold",
			H: "Gluttony"
		},
		inherit: true,
		baseSpecies: "Swalot",
		eggGroups: [
			"Amorphous"
		],
		weightkg: 80.0
	},
	wailord: {
		num: 321,
		name: "Wailord",
		types: [
			"Water"
		],
		baseStats: {
			hp: 170,
			atk: 80,
			def: 65,
			spe: 60,
			spa: 90,
			spd: 65
		},
		abilities: {
			0: "Water Veil",
			1: "Oblivious",
			H: "Pressure"
		},
		inherit: true,
		baseSpecies: "Wailord",
		eggGroups: [
			"Field",
			"Water2"
		],
		weightkg: 398.0
	},
	torkoal: {
		num: 324,
		name: "Torkoal",
		types: [
			"Fire"
		],
		baseStats: {
			hp: 70,
			atk: 85,
			def: 140,
			spe: 20,
			spa: 95,
			spd: 70
		},
		abilities: {
			0: "White Smoke",
			1: "Drought",
			H: "Shell Armor"
		},
		inherit: true,
		baseSpecies: "Torkoal",
		eggGroups: [
			"Field"
		],
		weightkg: 80.4
	},
	grumpig: {
		num: 326,
		name: "Grumpig",
		types: [
			"Psychic"
		],
		baseStats: {
			hp: 80,
			atk: 45,
			def: 75,
			spe: 80,
			spa: 100,
			spd: 110
		},
		abilities: {
			0: "Thick Fat",
			1: "Own Tempo",
			H: "Gluttony"
		},
		inherit: true,
		baseSpecies: "Grumpig",
		eggGroups: [
			"Field"
		],
		weightkg: 71.5
	},
	spinda: {
		num: 327,
		name: "Spinda",
		types: [
			"Normal"
		],
		baseStats: {
			hp: 70,
			atk: 100,
			def: 60,
			spe: 60,
			spa: 100,
			spd: 60
		},
		abilities: {
			0: "Own Tempo",
			1: "Tangled Feet",
			H: "Contrary"
		},
		inherit: true,
		baseSpecies: "Spinda",
		eggGroups: [
			"Field",
			"Humanlike"
		],
		weightkg: 5.0
	},
	vibrava: {
		num: 329,
		name: "Vibrava",
		types: [
			"Bug",
			"Dragon"
		],
		baseStats: {
			hp: 50,
			atk: 70,
			def: 50,
			spe: 70,
			spa: 50,
			spd: 50
		},
		abilities: {
			0: "Cole\u00f3ptero"
		},
		inherit: true,
		baseSpecies: "Vibrava",
		eggGroups: [
			"Bug"
		],
		weightkg: 15.3
	},
	flygon: {
		num: 330,
		name: "Flygon",
		types: [
			"Bug",
			"Dragon"
		],
		baseStats: {
			hp: 80,
			atk: 100,
			def: 80,
			spe: 100,
			spa: 80,
			spd: 80
		},
		abilities: {
			0: "Cole\u00f3ptero"
		},
		inherit: true,
		baseSpecies: "Flygon",
		eggGroups: [
			"Bug"
		],
		weightkg: 82.0
	},
	cacturne: {
		num: 332,
		name: "Cacturne",
		types: [
			"Grass",
			"Dark"
		],
		baseStats: {
			hp: 85,
			atk: 115,
			def: 60,
			spe: 55,
			spa: 115,
			spd: 60
		},
		abilities: {
			0: "Water Absorb",
			H: "Water Absorb"
		},
		inherit: true,
		baseSpecies: "Cacturne",
		eggGroups: [
			"Grass",
			"Humanlike"
		],
		weightkg: 77.4
	},
	zangoose: {
		num: 335,
		name: "Zangoose",
		types: [
			"Normal"
		],
		baseStats: {
			hp: 83,
			atk: 115,
			def: 70,
			spe: 100,
			spa: 60,
			spd: 70
		},
		abilities: {
			0: "Immunity",
			H: "Toxic Boost"
		},
		inherit: true,
		baseSpecies: "Zangoose",
		eggGroups: [
			"Field"
		],
		weightkg: 40.3
	},
	seviper: {
		num: 336,
		name: "Seviper",
		types: [
			"Poison"
		],
		baseStats: {
			hp: 83,
			atk: 110,
			def: 80,
			spe: 75,
			spa: 90,
			spd: 70
		},
		abilities: {
			0: "Shed Skin",
			H: "Infiltrator"
		},
		inherit: true,
		baseSpecies: "Seviper",
		eggGroups: [
			"Field",
			"Dragon"
		],
		weightkg: 52.5
	},
	lunatone: {
		num: 337,
		name: "Lunatone",
		types: [
			"Rock",
			"Psychic"
		],
		baseStats: {
			hp: 90,
			atk: 55,
			def: 70,
			spe: 70,
			spa: 115,
			spd: 90
		},
		abilities: {
			0: "Levitate"
		},
		inherit: true,
		baseSpecies: "Lunatone",
		eggGroups: [
			"Mineral"
		],
		weightkg: 168.0
	},
	solrock: {
		num: 338,
		name: "Solrock",
		types: [
			"Rock",
			"Psychic"
		],
		baseStats: {
			hp: 90,
			atk: 115,
			def: 90,
			spe: 70,
			spa: 55,
			spd: 70
		},
		abilities: {
			0: "Levitate"
		},
		inherit: true,
		baseSpecies: "Solrock",
		eggGroups: [
			"Mineral"
		],
		weightkg: 154.0
	},
	barboach: {
		num: 339,
		name: "Barboach",
		types: [
			"Water",
			"Ground"
		],
		baseStats: {
			hp: 60,
			atk: 65,
			def: 43,
			spe: 60,
			spa: 65,
			spd: 41
		},
		abilities: {
			0: "Oblivious",
			1: "Anticipation",
			H: "Hydration"
		},
		inherit: true,
		baseSpecies: "Barboach",
		eggGroups: [
			"Water2"
		],
		weightkg: 1.9
	},
	whiscash: {
		num: 340,
		name: "Whiscash",
		types: [
			"Water",
			"Ground"
		],
		baseStats: {
			hp: 110,
			atk: 95,
			def: 73,
			spe: 60,
			spa: 76,
			spd: 81
		},
		abilities: {
			0: "Oblivious",
			1: "Anticipation",
			H: "Hydration"
		},
		inherit: true,
		baseSpecies: "Whiscash",
		eggGroups: [
			"Water2"
		],
		weightkg: 23.6
	},
	corphish: {
		num: 341,
		name: "Corphish",
		types: [
			"Water"
		],
		baseStats: {
			hp: 43,
			atk: 80,
			def: 65,
			spe: 35,
			spa: 50,
			spd: 35
		},
		abilities: {
			0: "Hyper Cutter",
			1: "Adaptability",
			H: "Adaptability"
		},
		inherit: true,
		baseSpecies: "Corphish",
		eggGroups: [
			"Water1",
			"Water3"
		],
		weightkg: 11.5
	},
	crawdaunt: {
		num: 342,
		name: "Crawdaunt",
		types: [
			"Water",
			"Dark"
		],
		baseStats: {
			hp: 63,
			atk: 120,
			def: 85,
			spe: 55,
			spa: 90,
			spd: 55
		},
		abilities: {
			0: "Hyper Cutter",
			1: "Adaptability",
			H: "Adaptability"
		},
		inherit: true,
		baseSpecies: "Crawdaunt",
		eggGroups: [
			"Water1",
			"Water3"
		],
		weightkg: 32.8
	},
	baltoy: {
		num: 343,
		name: "Baltoy",
		types: [
			"Ground",
			"Psychic"
		],
		baseStats: {
			hp: 40,
			atk: 40,
			def: 55,
			spe: 55,
			spa: 60,
			spd: 70
		},
		abilities: {
			0: "Levitate"
		},
		inherit: true,
		baseSpecies: "Baltoy",
		eggGroups: [
			"Mineral"
		],
		weightkg: 21.5
	},
	claydol: {
		num: 344,
		name: "Claydol",
		types: [
			"Ground",
			"Psychic"
		],
		baseStats: {
			hp: 70,
			atk: 60,
			def: 105,
			spe: 75,
			spa: 90,
			spd: 120
		},
		abilities: {
			0: "Levitate"
		},
		inherit: true,
		baseSpecies: "Claydol",
		eggGroups: [
			"Mineral"
		],
		weightkg: 108.0
	},
	feebas: {
		num: 349,
		name: "Feebas",
		types: [
			"Water"
		],
		baseStats: {
			hp: 50,
			atk: 45,
			def: 35,
			spe: 70,
			spa: 60,
			spd: 55
		},
		abilities: {
			0: "Swift Swim",
			H: "Adaptability"
		},
		inherit: true,
		baseSpecies: "Feebas",
		eggGroups: [
			"Water1",
			"Dragon"
		],
		weightkg: 7.4
	},
	castform: {
		num: 351,
		name: "Castform",
		types: [
			"Normal"
		],
		baseStats: {
			hp: 90,
			atk: 70,
			def: 90,
			spe: 70,
			spa: 100,
			spd: 90
		},
		abilities: {
			0: "Forecast"
		},
		inherit: true,
		baseSpecies: "Castform",
		eggGroups: [
			"Fairy",
			"Amorphous"
		],
		weightkg: 0.8
	},
	kecleon: {
		num: 352,
		name: "Kecleon",
		types: [
			"Normal"
		],
		baseStats: {
			hp: 60,
			atk: 100,
			def: 70,
			spe: 40,
			spa: 60,
			spd: 120
		},
		abilities: {
			0: "Color Change",
			H: "Protean"
		},
		inherit: true,
		baseSpecies: "Kecleon",
		eggGroups: [
			"Field"
		],
		weightkg: 22.0
	},
	shuppet: {
		num: 353,
		name: "Shuppet",
		types: [
			"Ghost"
		],
		baseStats: {
			hp: 44,
			atk: 75,
			def: 35,
			spe: 45,
			spa: 63,
			spd: 33
		},
		abilities: {
			0: "Run Away",
			1: "Frisk",
			H: "Cursed Body"
		},
		inherit: true,
		baseSpecies: "Shuppet",
		eggGroups: [
			"Amorphous"
		],
		weightkg: 2.3
	},
	banette: {
		num: 354,
		name: "Banette",
		types: [
			"Ghost"
		],
		baseStats: {
			hp: 64,
			atk: 115,
			def: 65,
			spe: 65,
			spa: 83,
			spd: 63
		},
		abilities: {
			0: "Cursed Body",
			1: "Frisk",
			H: "Cursed Body"
		},
		inherit: true,
		baseSpecies: "Banette",
		eggGroups: [
			"Amorphous"
		],
		weightkg: 12.5
	},
	duskull: {
		num: 355,
		name: "Duskull",
		types: [
			"Ghost"
		],
		baseStats: {
			hp: 20,
			atk: 55,
			def: 90,
			spe: 25,
			spa: 30,
			spd: 90
		},
		abilities: {
			0: "Levitate"
		},
		inherit: true,
		baseSpecies: "Duskull",
		eggGroups: [
			"Amorphous"
		],
		weightkg: 15.0
	},
	dusclops: {
		num: 356,
		name: "Dusclops",
		types: [
			"Ghost"
		],
		baseStats: {
			hp: 40,
			atk: 70,
			def: 130,
			spe: 25,
			spa: 60,
			spd: 130
		},
		abilities: {
			0: "Pressure"
		},
		inherit: true,
		baseSpecies: "Dusclops",
		eggGroups: [
			"Amorphous"
		],
		weightkg: 30.6
	},
	tropius: {
		num: 357,
		name: "Tropius",
		types: [
			"Grass",
			"Flying"
		],
		baseStats: {
			hp: 99,
			atk: 90,
			def: 93,
			spe: 51,
			spa: 90,
			spd: 87
		},
		abilities: {
			0: "Chlorophyll",
			1: "Aerilate",
			H: "Harvest"
		},
		inherit: true,
		baseSpecies: "Tropius",
		eggGroups: [
			"Monster",
			"Grass"
		],
		weightkg: 100.0
	},
	chimecho: {
		num: 358,
		name: "Chimecho",
		types: [
			"Psychic"
		],
		baseStats: {
			hp: 85,
			atk: 50,
			def: 70,
			spe: 65,
			spa: 110,
			spd: 100
		},
		abilities: {
			0: "Levitate"
		},
		inherit: true,
		baseSpecies: "Chimecho",
		eggGroups: [
			"Amorphous"
		],
		weightkg: 1.0
	},
	walrein: {
		num: 365,
		name: "Walrein",
		types: [
			"Ice",
			"Water"
		],
		baseStats: {
			hp: 110,
			atk: 90,
			def: 90,
			spe: 65,
			spa: 95,
			spd: 90
		},
		abilities: {
			0: "Thick Fat",
			1: "Ice Body",
			H: "Oblivious"
		},
		inherit: true,
		baseSpecies: "Walrein",
		eggGroups: [
			"Water1",
			"Field"
		],
		weightkg: 150.6
	},
	huntail: {
		num: 367,
		name: "Huntail",
		types: [
			"Water"
		],
		baseStats: {
			hp: 55,
			atk: 104,
			def: 105,
			spe: 52,
			spa: 94,
			spd: 75
		},
		abilities: {
			0: "Swift Swim",
			1: "Strong Jaw",
			H: "Water Veil"
		},
		inherit: true,
		baseSpecies: "Huntail",
		eggGroups: [
			"Water1"
		],
		weightkg: 27.0
	},
	relicanth: {
		num: 369,
		name: "Relicanth",
		types: [
			"Water",
			"Rock"
		],
		baseStats: {
			hp: 100,
			atk: 100,
			def: 130,
			spe: 55,
			spa: 45,
			spd: 65
		},
		abilities: {
			0: "Swift Swim",
			1: "Rock Head",
			H: "Sturdy"
		},
		inherit: true,
		baseSpecies: "Relicanth",
		eggGroups: [
			"Water1",
			"Water2"
		],
		weightkg: 23.4
	},
	luvdisc: {
		num: 370,
		name: "Luvdisc",
		types: [
			"Water"
		],
		baseStats: {
			hp: 63,
			atk: 30,
			def: 55,
			spe: 110,
			spa: 100,
			spd: 65
		},
		abilities: {
			0: "Swift Swim",
			H: "Hydration"
		},
		inherit: true,
		baseSpecies: "Luvdisc",
		eggGroups: [
			"Water2"
		],
		weightkg: 8.7
	},
	torterra: {
		num: 389,
		name: "Torterra",
		types: [
			"Grass",
			"Ground"
		],
		baseStats: {
			hp: 95,
			atk: 109,
			def: 105,
			spe: 56,
			spa: 75,
			spd: 85
		},
		abilities: {
			0: "Overgrow",
			H: "Solid Rock"
		},
		inherit: true,
		baseSpecies: "Torterra",
		eggGroups: [
			"Monster",
			"Grass"
		],
		weightkg: 310.0
	},
	piplup: {
		num: 393,
		name: "Piplup",
		types: [
			"Water"
		],
		baseStats: {
			hp: 53,
			atk: 51,
			def: 53,
			spe: 40,
			spa: 61,
			spd: 56
		},
		abilities: {
			0: "Torrent",
			H: "Defiant"
		},
		inherit: true,
		baseSpecies: "Piplup",
		eggGroups: [
			"Water1",
			"Field"
		],
		weightkg: 5.2
	},
	prinplup: {
		num: 394,
		name: "Prinplup",
		types: [
			"Water"
		],
		baseStats: {
			hp: 64,
			atk: 66,
			def: 68,
			spe: 50,
			spa: 81,
			spd: 76
		},
		abilities: {
			0: "Torrent",
			H: "Defiant"
		},
		inherit: true,
		baseSpecies: "Prinplup",
		eggGroups: [
			"Water1",
			"Field"
		],
		weightkg: 23.0
	},
	starly: {
		num: 396,
		name: "Starly",
		types: [
			"Normal",
			"Flying"
		],
		baseStats: {
			hp: 40,
			atk: 55,
			def: 30,
			spe: 60,
			spa: 30,
			spd: 30
		},
		abilities: {
			0: "Keen Eye"
		},
		inherit: true,
		baseSpecies: "Starly",
		eggGroups: [
			"Flying"
		],
		weightkg: 2.0
	},
	staraptor: {
		num: 398,
		name: "Staraptor",
		types: [
			"Normal",
			"Flying"
		],
		baseStats: {
			hp: 85,
			atk: 120,
			def: 70,
			spe: 100,
			spa: 50,
			spd: 50
		},
		abilities: {
			0: "Intimidate",
			H: "Reckless"
		},
		inherit: true,
		baseSpecies: "Staraptor",
		eggGroups: [
			"Flying"
		],
		weightkg: 24.9
	},
	bibarel: {
		num: 400,
		name: "Bibarel",
		types: [
			"Normal",
			"Water"
		],
		baseStats: {
			hp: 90,
			atk: 85,
			def: 70,
			spe: 71,
			spa: 70,
			spd: 80
		},
		abilities: {
			0: "Simple",
			1: "Unaware",
			H: "Moody"
		},
		inherit: true,
		baseSpecies: "Bibarel",
		eggGroups: [
			"Water1",
			"Field"
		],
		weightkg: 31.5
	},
	kricketune: {
		num: 402,
		name: "Kricketune",
		types: [
			"Bug"
		],
		baseStats: {
			hp: 77,
			atk: 110,
			def: 81,
			spe: 80,
			spa: 55,
			spd: 81
		},
		abilities: {
			0: "Swarm",
			H: "Technician"
		},
		inherit: true,
		baseSpecies: "Kricketune",
		eggGroups: [
			"Bug"
		],
		weightkg: 25.5
	},
	shinx: {
		num: 403,
		name: "Shinx",
		types: [
			"Electric"
		],
		baseStats: {
			hp: 45,
			atk: 65,
			def: 34,
			spe: 65,
			spa: 40,
			spd: 34
		},
		abilities: {
			0: "Rivalry",
			1: "Intimidate",
			H: "Guts"
		},
		inherit: true,
		baseSpecies: "Shinx",
		eggGroups: [
			"Field"
		],
		weightkg: 9.5
	},
	luxio: {
		num: 404,
		name: "Luxio",
		types: [
			"Electric"
		],
		baseStats: {
			hp: 60,
			atk: 85,
			def: 49,
			spe: 80,
			spa: 65,
			spd: 49
		},
		abilities: {
			0: "Rivalry",
			1: "Intimidate",
			H: "Guts"
		},
		inherit: true,
		baseSpecies: "Luxio",
		eggGroups: [
			"Field"
		],
		weightkg: 30.5
	},
	luxray: {
		num: 405,
		name: "Luxray",
		types: [
			"Electric"
		],
		baseStats: {
			hp: 80,
			atk: 120,
			def: 75,
			spe: 100,
			spa: 75,
			spd: 75
		},
		abilities: {
			0: "Strong Jaw",
			1: "Intimidate",
			H: "Guts"
		},
		inherit: true,
		baseSpecies: "Luxray",
		eggGroups: [
			"Field"
		],
		weightkg: 42.0
	},
	budew: {
		num: 406,
		name: "Budew",
		types: [
			"Grass",
			"Poison"
		],
		baseStats: {
			hp: 50,
			atk: 50,
			def: 35,
			spe: 55,
			spa: 55,
			spd: 60
		},
		abilities: {
			0: "Natural Cure",
			1: "Poison Point",
			H: "Leaf Guard"
		},
		inherit: true,
		baseSpecies: "Budew",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 1.2
	},
	roserade: {
		num: 407,
		name: "Roserade",
		types: [
			"Grass",
			"Poison"
		],
		baseStats: {
			hp: 60,
			atk: 70,
			def: 65,
			spe: 90,
			spa: 125,
			spd: 105
		},
		abilities: {
			0: "Natural Cure",
			H: "Technician"
		},
		inherit: true,
		baseSpecies: "Roserade",
		eggGroups: [
			"Fairy",
			"Grass"
		],
		weightkg: 14.5
	},
	rampardos: {
		num: 409,
		name: "Rampardos",
		types: [
			"Rock"
		],
		baseStats: {
			hp: 97,
			atk: 165,
			def: 60,
			spe: 68,
			spa: 65,
			spd: 50
		},
		abilities: {
			0: "Mold Breaker",
			H: "Sheer Force"
		},
		inherit: true,
		baseSpecies: "Rampardos",
		eggGroups: [
			"Monster"
		],
		weightkg: 102.5
	},
	bastiodon: {
		num: 411,
		name: "Bastiodon",
		types: [
			"Rock",
			"Steel"
		],
		baseStats: {
			hp: 70,
			atk: 52,
			def: 168,
			spe: 30,
			spa: 47,
			spd: 138
		},
		abilities: {
			0: "Sturdy",
			H: "Soundproof"
		},
		inherit: true,
		baseSpecies: "Bastiodon",
		eggGroups: [
			"Monster"
		],
		weightkg: 149.5
	},
	wormadam: {
		num: 413,
		name: "Wormadam",
		types: [
			"Bug",
			"Grass"
		],
		baseStats: {
			hp: 80,
			atk: 59,
			def: 95,
			spe: 36,
			spa: 95,
			spd: 105
		},
		abilities: {
			0: "Anticipation",
			H: "Overcoat"
		},
		inherit: true,
		baseSpecies: "Wormadam",
		eggGroups: [
			"Bug"
		],
		weightkg: 6.5
	},
	mothim: {
		num: 414,
		name: "Mothim",
		types: [
			"Bug",
			"Flying"
		],
		baseStats: {
			hp: 70,
			atk: 84,
			def: 60,
			spe: 86,
			spa: 105,
			spd: 70
		},
		abilities: {
			0: "Swarm",
			H: "Tinted Lens"
		},
		inherit: true,
		baseSpecies: "Mothim",
		eggGroups: [
			"Bug"
		],
		weightkg: 23.3
	},
	vespiquen: {
		num: 416,
		name: "Vespiquen",
		types: [
			"Bug",
			"Flying"
		],
		baseStats: {
			hp: 70,
			atk: 90,
			def: 102,
			spe: 40,
			spa: 70,
			spd: 102
		},
		abilities: {
			0: "Pressure",
			1: "Intimidate",
			H: "Unnerve"
		},
		inherit: true,
		baseSpecies: "Vespiquen",
		eggGroups: [
			"Bug"
		],
		weightkg: 38.5
	},
	pachirisu: {
		num: 417,
		name: "Pachirisu",
		types: [
			"Electric"
		],
		baseStats: {
			hp: 60,
			atk: 45,
			def: 70,
			spe: 115,
			spa: 90,
			spd: 90
		},
		abilities: {
			0: "Fur Coat",
			1: "Pickup",
			H: "Volt Absorb"
		},
		inherit: true,
		baseSpecies: "Pachirisu",
		eggGroups: [
			"Field",
			"Fairy"
		],
		weightkg: 3.9
	},
	floatzel: {
		num: 419,
		name: "Floatzel",
		types: [
			"Water"
		],
		baseStats: {
			hp: 85,
			atk: 110,
			def: 55,
			spe: 115,
			spa: 85,
			spd: 50
		},
		abilities: {
			0: "Swift Swim",
			H: "Water Veil"
		},
		inherit: true,
		baseSpecies: "Floatzel",
		eggGroups: [
			"Water1",
			"Field"
		],
		weightkg: 33.5
	},
	cherrim: {
		num: 421,
		name: "Cherrim",
		types: [
			"Grass"
		],
		baseStats: {
			hp: 70,
			atk: 60,
			def: 70,
			spe: 100,
			spa: 100,
			spd: 88
		},
		abilities: {
			0: "Flower Gift"
		},
		inherit: true,
		baseSpecies: "Cherrim",
		eggGroups: [
			"Fairy",
			"Grass"
		],
		weightkg: 9.3
	},
	drifloon: {
		num: 425,
		name: "Drifloon",
		types: [
			"Ghost",
			"Flying"
		],
		baseStats: {
			hp: 90,
			atk: 50,
			def: 34,
			spe: 70,
			spa: 60,
			spd: 44
		},
		abilities: {
			0: "Run Away",
			1: "Unburden",
			H: "Flare Boost"
		},
		inherit: true,
		baseSpecies: "Drifloon",
		eggGroups: [
			"Amorphous"
		],
		weightkg: 1.2
	},
	drifblim: {
		num: 426,
		name: "Drifblim",
		types: [
			"Ghost",
			"Flying"
		],
		baseStats: {
			hp: 150,
			atk: 80,
			def: 44,
			spe: 80,
			spa: 90,
			spd: 54
		},
		abilities: {
			0: "Run Away",
			1: "Unburden",
			H: "Flare Boost"
		},
		inherit: true,
		baseSpecies: "Drifblim",
		eggGroups: [
			"Amorphous"
		],
		weightkg: 15.0
	},
	honchkrow: {
		num: 430,
		name: "Honchkrow",
		types: [
			"Dark",
			"Flying"
		],
		baseStats: {
			hp: 100,
			atk: 125,
			def: 52,
			spe: 71,
			spa: 105,
			spd: 52
		},
		abilities: {
			0: "Run Away",
			1: "Super Luck",
			H: "Moxie"
		},
		inherit: true,
		baseSpecies: "Honchkrow",
		eggGroups: [
			"Flying"
		],
		weightkg: 27.3
	},
	purugly: {
		num: 432,
		name: "Purugly",
		types: [
			"Normal"
		],
		baseStats: {
			hp: 85,
			atk: 102,
			def: 64,
			spe: 112,
			spa: 64,
			spd: 59
		},
		abilities: {
			0: "Thick Fat",
			1: "Own Tempo",
			H: "Defiant"
		},
		inherit: true,
		baseSpecies: "Purugly",
		eggGroups: [
			"Field"
		],
		weightkg: 43.8
	},
	stunky: {
		num: 434,
		name: "Stunky",
		types: [
			"Poison",
			"Dark"
		],
		baseStats: {
			hp: 63,
			atk: 63,
			def: 47,
			spe: 74,
			spa: 41,
			spd: 41
		},
		abilities: {
			0: "Stench",
			1: "Run Away",
			H: "Keen Eye"
		},
		inherit: true,
		baseSpecies: "Stunky",
		eggGroups: [
			"Field"
		],
		weightkg: 19.2
	},
	skuntank: {
		num: 435,
		name: "Skuntank",
		types: [
			"Poison",
			"Dark"
		],
		baseStats: {
			hp: 103,
			atk: 103,
			def: 67,
			spe: 84,
			spa: 71,
			spd: 61
		},
		abilities: {
			0: "Stench",
			1: "Run Away",
			H: "Keen Eye"
		},
		inherit: true,
		baseSpecies: "Skuntank",
		eggGroups: [
			"Field"
		],
		weightkg: 38.0
	},
	mimejr: {
		num: 439,
		name: "Mime Jr.",
		types: [
			"Psychic"
		],
		baseStats: {
			hp: 60,
			atk: 25,
			def: 45,
			spe: 90,
			spa: 90,
			spd: 90
		},
		abilities: {
			0: "Soundproof",
			1: "Filter",
			H: "Technician"
		},
		inherit: true,
		baseSpecies: "Mime jr.",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 13.0
	},
	chatot: {
		num: 441,
		name: "Chatot",
		types: [
			"Normal",
			"Flying"
		],
		baseStats: {
			hp: 76,
			atk: 90,
			def: 55,
			spe: 100,
			spa: 100,
			spd: 52
		},
		abilities: {
			0: "Keen Eye",
			1: "Tangled Feet",
			H: "Big Pecks"
		},
		inherit: true,
		baseSpecies: "Chatot",
		eggGroups: [
			"Flying"
		],
		weightkg: 1.9
	},
	spiritomb: {
		num: 442,
		name: "Spiritomb",
		types: [
			"Ghost",
			"Dark"
		],
		baseStats: {
			hp: 60,
			atk: 92,
			def: 108,
			spe: 35,
			spa: 92,
			spd: 108
		},
		abilities: {
			0: "Pressure",
			H: "Infiltrator"
		},
		inherit: true,
		baseSpecies: "Spiritomb",
		eggGroups: [
			"Amorphous"
		],
		weightkg: 108.0
	},
	croagunk: {
		num: 453,
		name: "Croagunk",
		types: [
			"Poison",
			"Fighting"
		],
		baseStats: {
			hp: 48,
			atk: 61,
			def: 40,
			spe: 50,
			spa: 61,
			spd: 40
		},
		abilities: {
			0: "Poison Touch",
			1: "Dry Skin",
			H: "Poison Touch"
		},
		inherit: true,
		baseSpecies: "Croagunk",
		eggGroups: [
			"Humanlike"
		],
		weightkg: 23.0
	},
	toxicroak: {
		num: 454,
		name: "Toxicroak",
		types: [
			"Poison",
			"Fighting"
		],
		baseStats: {
			hp: 83,
			atk: 106,
			def: 65,
			spe: 90,
			spa: 86,
			spd: 65
		},
		abilities: {
			0: "Poison Touch",
			1: "Dry Skin",
			H: "Poison Touch"
		},
		inherit: true,
		baseSpecies: "Toxicroak",
		eggGroups: [
			"Humanlike"
		],
		weightkg: 44.4
	},
	carnivine: {
		num: 455,
		name: "Carnivine",
		types: [
			"Grass"
		],
		baseStats: {
			hp: 80,
			atk: 110,
			def: 85,
			spe: 46,
			spa: 90,
			spd: 72
		},
		abilities: {
			0: "Levitate"
		},
		inherit: true,
		baseSpecies: "Carnivine",
		eggGroups: [
			"Grass"
		],
		weightkg: 27.0
	},
	finneon: {
		num: 456,
		name: "Finneon",
		types: [
			"Water"
		],
		baseStats: {
			hp: 49,
			atk: 49,
			def: 56,
			spe: 66,
			spa: 69,
			spd: 61
		},
		abilities: {
			0: "Swift Swim",
			1: "Storm Drain",
			H: "Water Veil"
		},
		inherit: true,
		baseSpecies: "Finneon",
		eggGroups: [
			"Water2"
		],
		weightkg: 7.0
	},
	lumineon: {
		num: 457,
		name: "Lumineon",
		types: [
			"Water"
		],
		baseStats: {
			hp: 79,
			atk: 69,
			def: 76,
			spe: 91,
			spa: 100,
			spd: 86
		},
		abilities: {
			0: "Swift Swim",
			1: "Storm Drain",
			H: "Water Veil"
		},
		inherit: true,
		baseSpecies: "Lumineon",
		eggGroups: [
			"Water2"
		],
		weightkg: 24.0
	},
	weavile: {
		num: 461,
		name: "Weavile",
		types: [
			"Dark",
			"Ice"
		],
		baseStats: {
			hp: 70,
			atk: 120,
			def: 65,
			spe: 125,
			spa: 45,
			spd: 85
		},
		abilities: {
			0: "Technician",
			H: "Pickpocket"
		},
		inherit: true,
		baseSpecies: "Weavile",
		eggGroups: [
			"Field"
		],
		weightkg: 34.0
	},
	electivire: {
		num: 466,
		name: "Electivire",
		types: [
			"Electric"
		],
		baseStats: {
			hp: 75,
			atk: 123,
			def: 67,
			spe: 95,
			spa: 95,
			spd: 85
		},
		abilities: {
			0: "Motor Drive",
			H: "Run Away"
		},
		inherit: true,
		baseSpecies: "Electivire",
		eggGroups: [
			"Humanlike"
		],
		weightkg: 138.6
	},
	magmortar: {
		num: 467,
		name: "Magmortar",
		types: [
			"Fire"
		],
		baseStats: {
			hp: 75,
			atk: 95,
			def: 67,
			spe: 83,
			spa: 125,
			spd: 95
		},
		abilities: {
			0: "Flame Body",
			H: "Mega Launcher"
		},
		inherit: true,
		baseSpecies: "Magmortar",
		eggGroups: [
			"Humanlike"
		],
		weightkg: 68.0
	},
	togekiss: {
		num: 468,
		name: "Togekiss",
		types: [
			"Fairy",
			"Flying"
		],
		baseStats: {
			hp: 85,
			atk: 50,
			def: 95,
			spe: 80,
			spa: 120,
			spd: 115
		},
		abilities: {
			0: "Serene Grace",
			H: "Super Luck"
		},
		inherit: true,
		baseSpecies: "Togekiss",
		eggGroups: [
			"Flying",
			"Fairy"
		],
		weightkg: 38.0
	},
	gallade: {
		num: 475,
		name: "Gallade",
		types: [
			"Psychic",
			"Fighting"
		],
		baseStats: {
			hp: 68,
			atk: 125,
			def: 65,
			spe: 80,
			spa: 65,
			spd: 115
		},
		abilities: {
			0: "Steadfast",
			H: "Justified"
		},
		inherit: true,
		baseSpecies: "Gallade",
		eggGroups: [
			"Amorphous"
		],
		weightkg: 52.0
	},
	dusknoir: {
		num: 477,
		name: "Dusknoir",
		types: [
			"Ghost"
		],
		baseStats: {
			hp: 45,
			atk: 100,
			def: 135,
			spe: 45,
			spa: 65,
			spd: 135
		},
		abilities: {
			0: "Pressure",
			1: "Iron Fist",
			H: "Frisk"
		},
		inherit: true,
		baseSpecies: "Dusknoir",
		eggGroups: [
			"Amorphous"
		],
		weightkg: 106.6
	},
	cresselia: {
		num: 488,
		name: "Cresselia",
		types: [
			"Psychic"
		],
		baseStats: {
			hp: 120,
			atk: 70,
			def: 120,
			spe: 85,
			spa: 75,
			spd: 130
		},
		abilities: {
			0: "Levitate"
		},
		inherit: true,
		baseSpecies: "Cresselia",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 85.6
	},
	shaymin: {
		num: 492,
		name: "Shaymin",
		types: [
			"Grass",
			"Flying"
		],
		baseStats: {
			hp: 100,
			atk: 100,
			def: 75,
			spe: 130,
			spa: 120,
			spd: 75
		},
		abilities: {
			0: "Serene Grace"
		},
		inherit: true,
		baseSpecies: "Shaymin",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 2.1
	},
	snivy: {
		num: 495,
		name: "Snivy",
		types: [
			"Grass"
		],
		baseStats: {
			hp: 45,
			atk: 50,
			def: 55,
			spe: 63,
			spa: 50,
			spd: 55
		},
		abilities: {
			0: "Overgrow",
			H: "Contrary"
		},
		inherit: true,
		baseSpecies: "Snivy",
		eggGroups: [
			"Field",
			"Grass"
		],
		weightkg: 8.1
	},
	servine: {
		num: 496,
		name: "Servine",
		types: [
			"Grass"
		],
		baseStats: {
			hp: 60,
			atk: 70,
			def: 75,
			spe: 83,
			spa: 70,
			spd: 75
		},
		abilities: {
			0: "Overgrow",
			H: "Contrary"
		},
		inherit: true,
		baseSpecies: "Servine",
		eggGroups: [
			"Field",
			"Grass"
		],
		weightkg: 16.0
	},
	serperior: {
		num: 497,
		name: "Serperior",
		types: [
			"Grass"
		],
		baseStats: {
			hp: 75,
			atk: 85,
			def: 95,
			spe: 113,
			spa: 85,
			spd: 95
		},
		abilities: {
			0: "Overgrow",
			H: "Contrary"
		},
		inherit: true,
		baseSpecies: "Serperior",
		eggGroups: [
			"Field",
			"Grass"
		],
		weightkg: 63.0
	},
	samurott: {
		num: 503,
		name: "Samurott",
		types: [
			"Water",
			"Fighting"
		],
		baseStats: {
			hp: 95,
			atk: 108,
			def: 85,
			spe: 70,
			spa: 100,
			spd: 70
		},
		abilities: {
			0: "Torrent",
			H: "Shell Armor"
		},
		inherit: true,
		baseSpecies: "Samurott",
		eggGroups: [
			"Field"
		],
		weightkg: 94.6
	},
	watchog: {
		num: 505,
		name: "Watchog",
		types: [
			"Normal"
		],
		baseStats: {
			hp: 70,
			atk: 95,
			def: 69,
			spe: 110,
			spa: 60,
			spd: 69
		},
		abilities: {
			0: "Illuminate",
			1: "Keen Eye",
			H: "Analytic"
		},
		inherit: true,
		baseSpecies: "Watchog",
		eggGroups: [
			"Field"
		],
		weightkg: 27.0
	},
	lillipup: {
		num: 506,
		name: "Lillipup",
		types: [
			"Normal"
		],
		baseStats: {
			hp: 45,
			atk: 60,
			def: 45,
			spe: 55,
			spa: 25,
			spd: 45
		},
		abilities: {
			0: "Run Away",
			1: "Pickup",
			H: "Run Away"
		},
		inherit: true,
		baseSpecies: "Lillipup",
		eggGroups: [
			"Field"
		],
		weightkg: 4.1
	},
	stoutland: {
		num: 508,
		name: "Stoutland",
		types: [
			"Normal"
		],
		baseStats: {
			hp: 85,
			atk: 100,
			def: 90,
			spe: 80,
			spa: 45,
			spd: 90
		},
		abilities: {
			0: "Intimidate",
			1: "Sand Rush",
			H: "Scrappy"
		},
		inherit: true,
		baseSpecies: "Stoutland",
		eggGroups: [
			"Field"
		],
		weightkg: 61.0
	},
	liepard: {
		num: 510,
		name: "Liepard",
		types: [
			"Dark"
		],
		baseStats: {
			hp: 70,
			atk: 110,
			def: 60,
			spe: 120,
			spa: 88,
			spd: 60
		},
		abilities: {
			0: "Limber",
			1: "Unburden",
			H: "Prankster"
		},
		inherit: true,
		baseSpecies: "Liepard",
		eggGroups: [
			"Field"
		],
		weightkg: 37.5
	},
	pansage: {
		num: 511,
		name: "Pansage",
		types: [
			"Grass"
		],
		baseStats: {
			hp: 50,
			atk: 60,
			def: 48,
			spe: 64,
			spa: 53,
			spd: 48
		},
		abilities: {
			0: "Gluttony",
			H: "Overgrow"
		},
		inherit: true,
		baseSpecies: "Pansage",
		eggGroups: [
			"Field"
		],
		weightkg: 10.5
	},
	simisage: {
		num: 512,
		name: "Simisage",
		types: [
			"Grass"
		],
		baseStats: {
			hp: 75,
			atk: 98,
			def: 63,
			spe: 101,
			spa: 98,
			spd: 63
		},
		abilities: {
			0: "Gluttony",
			H: "Poder Sabio"
		},
		inherit: true,
		baseSpecies: "Simisage",
		eggGroups: [
			"Field"
		],
		weightkg: 30.5
	},
	pansear: {
		num: 513,
		name: "Pansear",
		types: [
			"Fire"
		],
		baseStats: {
			hp: 50,
			atk: 53,
			def: 48,
			spe: 64,
			spa: 60,
			spd: 48
		},
		abilities: {
			0: "Gluttony",
			H: "Blaze"
		},
		inherit: true,
		baseSpecies: "Pansear",
		eggGroups: [
			"Field"
		],
		weightkg: 11.0
	},
	simisear: {
		num: 514,
		name: "Simisear",
		types: [
			"Fire"
		],
		baseStats: {
			hp: 75,
			atk: 98,
			def: 63,
			spe: 101,
			spa: 98,
			spd: 63
		},
		abilities: {
			0: "Gluttony",
			H: "Poder Sabio"
		},
		inherit: true,
		baseSpecies: "Simisear",
		eggGroups: [
			"Field"
		],
		weightkg: 28.0
	},
	panpour: {
		num: 515,
		name: "Panpour",
		types: [
			"Water"
		],
		baseStats: {
			hp: 50,
			atk: 53,
			def: 48,
			spe: 64,
			spa: 60,
			spd: 48
		},
		abilities: {
			0: "Gluttony",
			H: "Torrent"
		},
		inherit: true,
		baseSpecies: "Panpour",
		eggGroups: [
			"Field"
		],
		weightkg: 13.5
	},
	simipour: {
		num: 516,
		name: "Simipour",
		types: [
			"Water"
		],
		baseStats: {
			hp: 75,
			atk: 98,
			def: 63,
			spe: 101,
			spa: 98,
			spd: 63
		},
		abilities: {
			0: "Gluttony",
			H: "Poder Sabio"
		},
		inherit: true,
		baseSpecies: "Simipour",
		eggGroups: [
			"Field"
		],
		weightkg: 29.0
	},
	unfezant: {
		num: 521,
		name: "Unfezant",
		types: [
			"Normal",
			"Flying"
		],
		baseStats: {
			hp: 90,
			atk: 105,
			def: 80,
			spe: 93,
			spa: 65,
			spd: 55
		},
		abilities: {
			0: "Tough Claws",
			1: "Super Luck",
			H: "Rivalry"
		},
		inherit: true,
		baseSpecies: "Unfezant",
		eggGroups: [
			"Flying"
		],
		weightkg: 29.0
	},
	zebstrika: {
		num: 523,
		name: "Zebstrika",
		types: [
			"Electric"
		],
		baseStats: {
			hp: 85,
			atk: 110,
			def: 63,
			spe: 116,
			spa: 80,
			spd: 63
		},
		abilities: {
			0: "Lightning Rod",
			1: "Motor Drive",
			H: "Sap Sipper"
		},
		inherit: true,
		baseSpecies: "Zebstrika",
		eggGroups: [
			"Field"
		],
		weightkg: 79.5
	},
	roggenrola: {
		num: 524,
		name: "Roggenrola",
		types: [
			"Rock"
		],
		baseStats: {
			hp: 55,
			atk: 75,
			def: 85,
			spe: 15,
			spa: 25,
			spd: 25
		},
		abilities: {
			0: "Sturdy",
			H: "Sand Force"
		},
		inherit: true,
		baseSpecies: "Roggenrola",
		eggGroups: [
			"Mineral"
		],
		weightkg: 18.0
	},
	boldore: {
		num: 525,
		name: "Boldore",
		types: [
			"Rock"
		],
		baseStats: {
			hp: 80,
			atk: 105,
			def: 105,
			spe: 20,
			spa: 50,
			spd: 60
		},
		abilities: {
			0: "Sturdy",
			H: "Sand Force"
		},
		inherit: true,
		baseSpecies: "Boldore",
		eggGroups: [
			"Mineral"
		],
		weightkg: 102.0
	},
	gigalith: {
		num: 526,
		name: "Gigalith",
		types: [
			"Rock"
		],
		baseStats: {
			hp: 95,
			atk: 135,
			def: 130,
			spe: 25,
			spa: 60,
			spd: 80
		},
		abilities: {
			0: "Sturdy",
			1: "Sand Stream",
			H: "Sand Force"
		},
		inherit: true,
		baseSpecies: "Gigalith",
		eggGroups: [
			"Mineral"
		],
		weightkg: 260.0
	},
	woobat: {
		num: 527,
		name: "Woobat",
		types: [
			"Psychic",
			"Flying"
		],
		baseStats: {
			hp: 55,
			atk: 45,
			def: 43,
			spe: 72,
			spa: 55,
			spd: 43
		},
		abilities: {
			0: "Unaware",
			1: "Klutz",
			H: "Simple"
		},
		inherit: true,
		baseSpecies: "Woobat",
		eggGroups: [
			"Flying",
			"Field"
		],
		weightkg: 2.1
	},
	swoobat: {
		num: 528,
		name: "Swoobat",
		types: [
			"Psychic",
			"Flying"
		],
		baseStats: {
			hp: 67,
			atk: 67,
			def: 55,
			spe: 114,
			spa: 100,
			spd: 65
		},
		abilities: {
			0: "Unaware",
			1: "Klutz",
			H: "Simple"
		},
		inherit: true,
		baseSpecies: "Swoobat",
		eggGroups: [
			"Flying",
			"Field"
		],
		weightkg: 10.5
	},
	audino: {
		num: 531,
		name: "Audino",
		types: [
			"Normal"
		],
		baseStats: {
			hp: 80,
			atk: 60,
			def: 86,
			spe: 50,
			spa: 90,
			spd: 86
		},
		abilities: {
			0: "Healer",
			1: "Regenerator",
			H: "Klutz"
		},
		inherit: true,
		baseSpecies: "Audino",
		eggGroups: [
			"Fairy"
		],
		weightkg: 31.0
	},
	timburr: {
		num: 532,
		name: "Timburr",
		types: [
			"Fighting"
		],
		baseStats: {
			hp: 75,
			atk: 80,
			def: 55,
			spe: 35,
			spa: 35,
			spd: 35
		},
		abilities: {
			0: "Guts",
			H: "Iron Fist"
		},
		inherit: true,
		baseSpecies: "Timburr",
		eggGroups: [
			"Humanlike"
		],
		weightkg: 12.5
	},
	gurdurr: {
		num: 533,
		name: "Gurdurr",
		types: [
			"Fighting"
		],
		baseStats: {
			hp: 85,
			atk: 105,
			def: 85,
			spe: 40,
			spa: 50,
			spd: 50
		},
		abilities: {
			0: "Guts",
			H: "Iron Fist"
		},
		inherit: true,
		baseSpecies: "Gurdurr",
		eggGroups: [
			"Humanlike"
		],
		weightkg: 40.0
	},
	conkeldurr: {
		num: 534,
		name: "Conkeldurr",
		types: [
			"Fighting"
		],
		baseStats: {
			hp: 105,
			atk: 140,
			def: 95,
			spe: 45,
			spa: 55,
			spd: 65
		},
		abilities: {
			0: "Guts",
			H: "Iron Fist"
		},
		inherit: true,
		baseSpecies: "Conkeldurr",
		eggGroups: [
			"Humanlike"
		],
		weightkg: 87.0
	},
	seismitoad: {
		num: 537,
		name: "Seismitoad",
		types: [
			"Water",
			"Ground"
		],
		baseStats: {
			hp: 105,
			atk: 95,
			def: 75,
			spe: 74,
			spa: 90,
			spd: 75
		},
		abilities: {
			0: "Swift Swim",
			1: "Poison Touch",
			H: "Water Absorb"
		},
		inherit: true,
		baseSpecies: "Seismitoad",
		eggGroups: [
			"Water1"
		],
		weightkg: 62.0
	},
	leavanny: {
		num: 542,
		name: "Leavanny",
		types: [
			"Bug",
			"Grass"
		],
		baseStats: {
			hp: 75,
			atk: 110,
			def: 80,
			spe: 92,
			spa: 70,
			spd: 70
		},
		abilities: {
			0: "Swarm",
			1: "Chlorophyll",
			H: "Overcoat"
		},
		inherit: true,
		baseSpecies: "Leavanny",
		eggGroups: [
			"Bug"
		],
		weightkg: 20.5
	},
	venipede: {
		num: 543,
		name: "Venipede",
		types: [
			"Bug",
			"Poison"
		],
		baseStats: {
			hp: 30,
			atk: 45,
			def: 59,
			spe: 57,
			spa: 30,
			spd: 39
		},
		abilities: {
			0: "Poison Point",
			1: "Swarm",
			H: "Quick Feet"
		},
		inherit: true,
		baseSpecies: "Venipede",
		eggGroups: [
			"Bug"
		],
		weightkg: 5.3
	},
	whirlipede: {
		num: 544,
		name: "Whirlipede",
		types: [
			"Bug",
			"Poison"
		],
		baseStats: {
			hp: 40,
			atk: 55,
			def: 99,
			spe: 47,
			spa: 40,
			spd: 79
		},
		abilities: {
			0: "Poison Point",
			1: "Swarm",
			H: "Quick Feet"
		},
		inherit: true,
		baseSpecies: "Whirlipede",
		eggGroups: [
			"Bug"
		],
		weightkg: 58.5
	},
	whimsicott: {
		num: 547,
		name: "Whimsicott",
		types: [
			"Grass",
			"Fairy"
		],
		baseStats: {
			hp: 60,
			atk: 67,
			def: 85,
			spe: 116,
			spa: 97,
			spd: 75
		},
		abilities: {
			0: "Prankster",
			1: "Infiltrator",
			H: "Chlorophyll"
		},
		inherit: true,
		baseSpecies: "Whimsicott",
		eggGroups: [
			"Fairy",
			"Grass"
		],
		weightkg: 6.6
	},
	darumaka: {
		num: 554,
		name: "Darumaka",
		types: [
			"Fire"
		],
		baseStats: {
			hp: 70,
			atk: 90,
			def: 45,
			spe: 50,
			spa: 15,
			spd: 45
		},
		abilities: {
			0: "Sheer Force",
			H: "Inner Focus"
		},
		inherit: true,
		baseSpecies: "Darumaka",
		eggGroups: [
			"Field"
		],
		weightkg: 37.5
	},
	darmanitan: {
		num: 555,
		name: "Darmanitan",
		types: [
			"Fire"
		],
		baseStats: {
			hp: 105,
			atk: 140,
			def: 55,
			spe: 95,
			spa: 30,
			spd: 55
		},
		abilities: {
			0: "Sheer Force",
			H: "Sheer Force"
		},
		inherit: true,
		baseSpecies: "Darmanitan",
		eggGroups: [
			"Field"
		],
		weightkg: 92.9
	},
	maractus: {
		num: 556,
		name: "Maractus",
		types: [
			"Grass"
		],
		baseStats: {
			hp: 75,
			atk: 86,
			def: 77,
			spe: 60,
			spa: 106,
			spd: 77
		},
		abilities: {
			0: "Water Absorb",
			1: "Chlorophyll",
			H: "Storm Drain"
		},
		inherit: true,
		baseSpecies: "Maractus",
		eggGroups: [
			"Grass"
		],
		weightkg: 28.0
	},
	crustle: {
		num: 558,
		name: "Crustle",
		types: [
			"Bug",
			"Rock"
		],
		baseStats: {
			hp: 70,
			atk: 105,
			def: 135,
			spe: 45,
			spa: 65,
			spd: 75
		},
		abilities: {
			0: "Sturdy",
			1: "Shell Armor",
			H: "Weak Armor"
		},
		inherit: true,
		baseSpecies: "Crustle",
		eggGroups: [
			"Bug",
			"Mineral"
		],
		weightkg: 200.0
	},
	sigilyph: {
		num: 561,
		name: "Sigilyph",
		types: [
			"Psychic",
			"Flying"
		],
		baseStats: {
			hp: 72,
			atk: 58,
			def: 80,
			spe: 97,
			spa: 103,
			spd: 80
		},
		abilities: {
			0: "Wonder Skin",
			H: "Tinted Lens"
		},
		inherit: true,
		baseSpecies: "Sigilyph",
		eggGroups: [
			"Flying"
		],
		weightkg: 14.0
	},
	trubbish: {
		num: 568,
		name: "Trubbish",
		types: [
			"Poison"
		],
		baseStats: {
			hp: 65,
			atk: 50,
			def: 62,
			spe: 65,
			spa: 50,
			spd: 62
		},
		abilities: {
			0: "Stench",
			1: "Sticky Hold",
			H: "Run Away"
		},
		inherit: true,
		baseSpecies: "Trubbish",
		eggGroups: [
			"Mineral"
		],
		weightkg: 31.0
	},
	garbodor: {
		num: 569,
		name: "Garbodor",
		types: [
			"Poison"
		],
		baseStats: {
			hp: 100,
			atk: 95,
			def: 82,
			spe: 55,
			spa: 85,
			spd: 82
		},
		abilities: {
			0: "Stench",
			1: "Weak Armor",
			H: "Run Away"
		},
		inherit: true,
		baseSpecies: "Garbodor",
		eggGroups: [
			"Mineral"
		],
		weightkg: 107.3
	},
	zorua: {
		num: 570,
		name: "Zorua",
		types: [
			"Dark"
		],
		baseStats: {
			hp: 40,
			atk: 65,
			def: 40,
			spe: 65,
			spa: 80,
			spd: 40
		},
		abilities: {
			0: "Super Luck"
		},
		inherit: true,
		baseSpecies: "Zorua",
		eggGroups: [
			"Field"
		],
		weightkg: 12.5
	},
	gothita: {
		num: 574,
		name: "Gothita",
		types: [
			"Psychic"
		],
		baseStats: {
			hp: 45,
			atk: 30,
			def: 50,
			spe: 45,
			spa: 55,
			spd: 65
		},
		abilities: {
			0: "Frisk",
			H: "Shadow Tag"
		},
		inherit: true,
		baseSpecies: "Gothita",
		eggGroups: [
			"Humanlike"
		],
		weightkg: 5.8
	},
	gothorita: {
		num: 575,
		name: "Gothorita",
		types: [
			"Psychic"
		],
		baseStats: {
			hp: 60,
			atk: 45,
			def: 70,
			spe: 55,
			spa: 75,
			spd: 85
		},
		abilities: {
			0: "Frisk",
			H: "Shadow Tag"
		},
		inherit: true,
		baseSpecies: "Gothorita",
		eggGroups: [
			"Humanlike"
		],
		weightkg: 18.0
	},
	solosis: {
		num: 577,
		name: "Solosis",
		types: [
			"Psychic"
		],
		baseStats: {
			hp: 45,
			atk: 30,
			def: 40,
			spe: 20,
			spa: 105,
			spd: 50
		},
		abilities: {
			0: "Overcoat",
			H: "Regenerator"
		},
		inherit: true,
		baseSpecies: "Solosis",
		eggGroups: [
			"Amorphous"
		],
		weightkg: 1.0
	},
	duosion: {
		num: 578,
		name: "Duosion",
		types: [
			"Psychic"
		],
		baseStats: {
			hp: 65,
			atk: 40,
			def: 50,
			spe: 30,
			spa: 125,
			spd: 60
		},
		abilities: {
			0: "Overcoat",
			H: "Regenerator"
		},
		inherit: true,
		baseSpecies: "Duosion",
		eggGroups: [
			"Amorphous"
		],
		weightkg: 8.0
	},
	reuniclus: {
		num: 579,
		name: "Reuniclus",
		types: [
			"Psychic"
		],
		baseStats: {
			hp: 110,
			atk: 65,
			def: 75,
			spe: 30,
			spa: 125,
			spd: 85
		},
		abilities: {
			0: "Overcoat",
			H: "Regenerator"
		},
		inherit: true,
		baseSpecies: "Reuniclus",
		eggGroups: [
			"Amorphous"
		],
		weightkg: 20.1
	},
	ducklett: {
		num: 580,
		name: "Ducklett",
		types: [
			"Water",
			"Flying"
		],
		baseStats: {
			hp: 62,
			atk: 44,
			def: 50,
			spe: 55,
			spa: 64,
			spd: 50
		},
		abilities: {
			0: "Keen Eye",
			1: "Big Pecks",
			H: "Hydration"
		},
		inherit: true,
		baseSpecies: "Ducklett",
		eggGroups: [
			"Water1",
			"Flying"
		],
		weightkg: 5.5
	},
	swanna: {
		num: 581,
		name: "Swanna",
		types: [
			"Water",
			"Flying"
		],
		baseStats: {
			hp: 75,
			atk: 87,
			def: 63,
			spe: 98,
			spa: 107,
			spd: 63
		},
		abilities: {
			0: "Liquid Voice",
			H: "Hydration"
		},
		inherit: true,
		baseSpecies: "Swanna",
		eggGroups: [
			"Water1",
			"Flying"
		],
		weightkg: 24.2
	},
	vanillite: {
		num: 582,
		name: "Vanillite",
		types: [
			"Ice"
		],
		baseStats: {
			hp: 36,
			atk: 50,
			def: 50,
			spe: 44,
			spa: 65,
			spd: 60
		},
		abilities: {
			0: "Ice Body",
			H: "Weak Armor"
		},
		inherit: true,
		baseSpecies: "Vanillite",
		eggGroups: [
			"Mineral"
		],
		weightkg: 5.7
	},
	vanillish: {
		num: 583,
		name: "Vanillish",
		types: [
			"Ice"
		],
		baseStats: {
			hp: 51,
			atk: 65,
			def: 65,
			spe: 59,
			spa: 80,
			spd: 75
		},
		abilities: {
			0: "Ice Body",
			H: "Weak Armor"
		},
		inherit: true,
		baseSpecies: "Vanillish",
		eggGroups: [
			"Mineral"
		],
		weightkg: 41.0
	},
	vanilluxe: {
		num: 584,
		name: "Vanilluxe",
		types: [
			"Ice"
		],
		baseStats: {
			hp: 71,
			atk: 85,
			def: 85,
			spe: 79,
			spa: 120,
			spd: 95
		},
		abilities: {
			0: "Ice Body",
			1: "Snow Warning",
			H: "Weak Armor"
		},
		inherit: true,
		baseSpecies: "Vanilluxe",
		eggGroups: [
			"Mineral"
		],
		weightkg: 57.5
	},
	sawsbuck: {
		num: 586,
		name: "Sawsbuck",
		types: [
			"Normal",
			"Grass"
		],
		baseStats: {
			hp: 80,
			atk: 115,
			def: 70,
			spe: 105,
			spa: 60,
			spd: 70
		},
		abilities: {
			0: "Chlorophyll",
			1: "Sap Sipper",
			H: "Serene Grace"
		},
		inherit: true,
		baseSpecies: "Sawsbuck",
		eggGroups: [
			"Field"
		],
		weightkg: 92.5
	},
	emolga: {
		num: 587,
		name: "Emolga",
		types: [
			"Electric",
			"Flying"
		],
		baseStats: {
			hp: 55,
			atk: 95,
			def: 60,
			spe: 110,
			spa: 95,
			spd: 60
		},
		abilities: {
			0: "Static",
			H: "Motor Drive"
		},
		inherit: true,
		baseSpecies: "Emolga",
		eggGroups: [
			"Field"
		],
		weightkg: 5.0
	},
	alomomola: {
		num: 594,
		name: "Alomomola",
		types: [
			"Water"
		],
		baseStats: {
			hp: 165,
			atk: 75,
			def: 80,
			spe: 65,
			spa: 75,
			spd: 45
		},
		abilities: {
			0: "Hydration",
			1: "Healer",
			H: "Regenerator"
		},
		inherit: true,
		baseSpecies: "Alomomola",
		eggGroups: [
			"Water1",
			"Water2"
		],
		weightkg: 31.6
	},
	ferrothorn: {
		num: 598,
		name: "Ferrothorn",
		types: [
			"Grass",
			"Steel"
		],
		baseStats: {
			hp: 74,
			atk: 94,
			def: 131,
			spe: 20,
			spa: 54,
			spd: 116
		},
		abilities: {
			0: "Iron Barbs"
		},
		inherit: true,
		baseSpecies: "Ferrothorn",
		eggGroups: [
			"Grass",
			"Mineral"
		],
		weightkg: 110.0
	},
	klinklang: {
		num: 601,
		name: "Klinklang",
		types: [
			"Steel"
		],
		baseStats: {
			hp: 60,
			atk: 100,
			def: 115,
			spe: 90,
			spa: 70,
			spd: 85
		},
		abilities: {
			0: "Levitate",
			H: "Clear Body"
		},
		inherit: true,
		baseSpecies: "Klinklang",
		eggGroups: [
			"Mineral"
		],
		weightkg: 81.0
	},
	elgyem: {
		num: 605,
		name: "Elgyem",
		types: [
			"Psychic"
		],
		baseStats: {
			hp: 55,
			atk: 55,
			def: 55,
			spe: 30,
			spa: 85,
			spd: 55
		},
		abilities: {
			0: "Telepathy",
			1: "Analytic",
			H: "Analytic"
		},
		inherit: true,
		baseSpecies: "Elgyem",
		eggGroups: [
			"Humanlike"
		],
		weightkg: 9.0
	},
	beheeyem: {
		num: 606,
		name: "Beheeyem",
		types: [
			"Psychic"
		],
		baseStats: {
			hp: 75,
			atk: 75,
			def: 85,
			spe: 40,
			spa: 125,
			spd: 95
		},
		abilities: {
			0: "Telepathy",
			1: "Analytic",
			H: "Analytic"
		},
		inherit: true,
		baseSpecies: "Beheeyem",
		eggGroups: [
			"Humanlike"
		],
		weightkg: 34.5
	},
	litwick: {
		num: 607,
		name: "Litwick",
		types: [
			"Ghost",
			"Fire"
		],
		baseStats: {
			hp: 50,
			atk: 50,
			def: 55,
			spe: 20,
			spa: 65,
			spd: 65
		},
		abilities: {
			0: "Flash Fire",
			H: "Shadow Tag"
		},
		inherit: true,
		baseSpecies: "Litwick",
		eggGroups: [
			"Amorphous"
		],
		weightkg: 3.1
	},
	lampent: {
		num: 608,
		name: "Lampent",
		types: [
			"Ghost",
			"Fire"
		],
		baseStats: {
			hp: 60,
			atk: 55,
			def: 65,
			spe: 55,
			spa: 95,
			spd: 65
		},
		abilities: {
			0: "Flash Fire",
			H: "Shadow Tag"
		},
		inherit: true,
		baseSpecies: "Lampent",
		eggGroups: [
			"Amorphous"
		],
		weightkg: 13.0
	},
	chandelure: {
		num: 609,
		name: "Chandelure",
		types: [
			"Ghost",
			"Fire"
		],
		baseStats: {
			hp: 60,
			atk: 55,
			def: 90,
			spe: 80,
			spa: 145,
			spd: 90
		},
		abilities: {
			0: "Flash Fire",
			H: "Shadow Tag"
		},
		inherit: true,
		baseSpecies: "Chandelure",
		eggGroups: [
			"Amorphous"
		],
		weightkg: 34.3
	},
	cubchoo: {
		num: 613,
		name: "Cubchoo",
		types: [
			"Ice"
		],
		baseStats: {
			hp: 55,
			atk: 70,
			def: 40,
			spe: 40,
			spa: 60,
			spd: 40
		},
		abilities: {
			0: "Snow Cloak",
			H: "Rattled"
		},
		inherit: true,
		baseSpecies: "Cubchoo",
		eggGroups: [
			"Field"
		],
		weightkg: 8.5
	},
	beartic: {
		num: 614,
		name: "Beartic",
		types: [
			"Ice"
		],
		baseStats: {
			hp: 95,
			atk: 130,
			def: 80,
			spe: 50,
			spa: 70,
			spd: 80
		},
		abilities: {
			0: "Snow Cloak",
			H: "Slush Rush"
		},
		inherit: true,
		baseSpecies: "Beartic",
		eggGroups: [
			"Field"
		],
		weightkg: 260.0
	},
	accelgor: {
		num: 617,
		name: "Accelgor",
		types: [
			"Bug"
		],
		baseStats: {
			hp: 80,
			atk: 70,
			def: 40,
			spe: 145,
			spa: 100,
			spd: 60
		},
		abilities: {
			0: "Hydration",
			1: "Dry Skin",
			H: "Unburden"
		},
		inherit: true,
		baseSpecies: "Accelgor",
		eggGroups: [
			"Bug"
		],
		weightkg: 25.3
	},
	stunfisk: {
		num: 618,
		name: "Stunfisk",
		types: [
			"Ground",
			"Electric"
		],
		baseStats: {
			hp: 109,
			atk: 66,
			def: 84,
			spe: 32,
			spa: 81,
			spd: 99
		},
		abilities: {
			0: "Static",
			1: "Limber",
			H: "Storm Drain"
		},
		inherit: true,
		baseSpecies: "Stunfisk",
		eggGroups: [
			"Water1",
			"Amorphous"
		],
		weightkg: 11.0
	},
	mienfoo: {
		num: 619,
		name: "Mienfoo",
		types: [
			"Fighting"
		],
		baseStats: {
			hp: 45,
			atk: 85,
			def: 50,
			spe: 65,
			spa: 55,
			spd: 50
		},
		abilities: {
			0: "Reckless",
			1: "Regenerator",
			H: "Reckless"
		},
		inherit: true,
		baseSpecies: "Mienfoo",
		eggGroups: [
			"Field",
			"Humanlike"
		],
		weightkg: 20.0
	},
	mienshao: {
		num: 620,
		name: "Mienshao",
		types: [
			"Fighting"
		],
		baseStats: {
			hp: 65,
			atk: 125,
			def: 60,
			spe: 105,
			spa: 95,
			spd: 60
		},
		abilities: {
			0: "Reckless",
			1: "Regenerator",
			H: "Reckless"
		},
		inherit: true,
		baseSpecies: "Mienshao",
		eggGroups: [
			"Field",
			"Humanlike"
		],
		weightkg: 35.5
	},
	heatmor: {
		num: 631,
		name: "Heatmor",
		types: [
			"Fire"
		],
		baseStats: {
			hp: 85,
			atk: 110,
			def: 86,
			spe: 65,
			spa: 95,
			spd: 86
		},
		abilities: {
			0: "Gluttony",
			1: "Flash Fire",
			H: "White Smoke"
		},
		inherit: true,
		baseSpecies: "Heatmor",
		eggGroups: [
			"Field"
		],
		weightkg: 58.0
	},
	deino: {
		num: 633,
		name: "Deino",
		types: [
			"Dark",
			"Dragon"
		],
		baseStats: {
			hp: 52,
			atk: 65,
			def: 50,
			spe: 38,
			spa: 45,
			spd: 50
		},
		abilities: {
			0: "Intimidate"
		},
		inherit: true,
		baseSpecies: "Deino",
		eggGroups: [
			"Dragon"
		],
		weightkg: 17.3
	},
	zweilous: {
		num: 634,
		name: "Zweilous",
		types: [
			"Dark",
			"Dragon"
		],
		baseStats: {
			hp: 72,
			atk: 85,
			def: 70,
			spe: 58,
			spa: 65,
			spd: 70
		},
		abilities: {
			0: "Intimidate"
		},
		inherit: true,
		baseSpecies: "Zweilous",
		eggGroups: [
			"Dragon"
		],
		weightkg: 50.0
	},
	larvesta: {
		num: 636,
		name: "Larvesta",
		types: [
			"Bug",
			"Fire"
		],
		baseStats: {
			hp: 75,
			atk: 85,
			def: 55,
			spe: 70,
			spa: 85,
			spd: 55
		},
		abilities: {
			0: "Flame Body",
			H: "Swarm"
		},
		inherit: true,
		baseSpecies: "Larvesta",
		eggGroups: [
			"Bug"
		],
		weightkg: 28.8
	},
	thundurus: {
		num: 642,
		name: "Thundurus",
		types: [
			"Electric",
			"Flying"
		],
		baseStats: {
			hp: 79,
			atk: 115,
			def: 70,
			spe: 111,
			spa: 125,
			spd: 80
		},
		abilities: {
			0: "Volt Absorb",
			H: "Defiant"
		},
		inherit: true,
		baseSpecies: "Thundurus",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 61.0
	},
	landorus: {
		num: 645,
		name: "Landorus",
		types: [
			"Ground",
			"Flying"
		],
		baseStats: {
			hp: 89,
			atk: 125,
			def: 90,
			spe: 101,
			spa: 115,
			spd: 80
		},
		abilities: {
			0: "Intimidate",
			H: "Sheer Force"
		},
		inherit: true,
		baseSpecies: "Landorus",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 68.0
	},
	chespin: {
		num: 650,
		name: "Chespin",
		types: [
			"Grass"
		],
		baseStats: {
			hp: 56,
			atk: 61,
			def: 65,
			spe: 38,
			spa: 48,
			spd: 45
		},
		abilities: {
			0: "Overgrow",
			H: "Guts"
		},
		inherit: true,
		baseSpecies: "Chespin",
		eggGroups: [
			"Field"
		],
		weightkg: 9.0
	},
	quilladin: {
		num: 651,
		name: "Quilladin",
		types: [
			"Grass"
		],
		baseStats: {
			hp: 71,
			atk: 78,
			def: 95,
			spe: 57,
			spa: 56,
			spd: 58
		},
		abilities: {
			0: "Overgrow",
			H: "Guts"
		},
		inherit: true,
		baseSpecies: "Quilladin",
		eggGroups: [
			"Field"
		],
		weightkg: 29.0
	},
	chesnaught: {
		num: 652,
		name: "Chesnaught",
		types: [
			"Grass",
			"Fighting"
		],
		baseStats: {
			hp: 100,
			atk: 107,
			def: 122,
			spe: 64,
			spa: 74,
			spd: 75
		},
		abilities: {
			0: "Overgrow",
			H: "Iron Barbs"
		},
		inherit: true,
		baseSpecies: "Chesnaught",
		eggGroups: [
			"Field"
		],
		weightkg: 90.0
	},
	fennekin: {
		num: 653,
		name: "Fennekin",
		types: [
			"Fire"
		],
		baseStats: {
			hp: 40,
			atk: 45,
			def: 40,
			spe: 60,
			spa: 62,
			spd: 60
		},
		abilities: {
			0: "Blaze",
			H: "Flash Fire"
		},
		inherit: true,
		baseSpecies: "Fennekin",
		eggGroups: [
			"Field"
		],
		weightkg: 9.4
	},
	braixen: {
		num: 654,
		name: "Braixen",
		types: [
			"Fire"
		],
		baseStats: {
			hp: 59,
			atk: 59,
			def: 58,
			spe: 73,
			spa: 90,
			spd: 70
		},
		abilities: {
			0: "Blaze",
			H: "Flash Fire"
		},
		inherit: true,
		baseSpecies: "Braixen",
		eggGroups: [
			"Field"
		],
		weightkg: 14.5
	},
	delphox: {
		num: 655,
		name: "Delphox",
		types: [
			"Fire",
			"Psychic"
		],
		baseStats: {
			hp: 75,
			atk: 69,
			def: 72,
			spe: 104,
			spa: 114,
			spd: 100
		},
		abilities: {
			0: "Blaze",
			H: "Flash Fire"
		},
		inherit: true,
		baseSpecies: "Delphox",
		eggGroups: [
			"Field"
		],
		weightkg: 39.0
	},
	greninja: {
		num: 658,
		name: "Greninja",
		types: [
			"Water",
			"Dark"
		],
		baseStats: {
			hp: 72,
			atk: 95,
			def: 67,
			spe: 122,
			spa: 103,
			spd: 71
		},
		abilities: {
			0: "Torrent",
			H: "Protean"
		},
		inherit: true,
		baseSpecies: "Greninja",
		eggGroups: [
			"Water1"
		],
		weightkg: 40.0
	},
	bunnelby: {
		num: 659,
		name: "Bunnelby",
		types: [
			"Normal"
		],
		baseStats: {
			hp: 38,
			atk: 35,
			def: 38,
			spe: 57,
			spa: 32,
			spd: 36
		},
		abilities: {
			0: "Huge Power",
			H: "Huge Power"
		},
		inherit: true,
		baseSpecies: "Bunnelby",
		eggGroups: [
			"Field"
		],
		weightkg: 5.0
	},
	diggersby: {
		num: 660,
		name: "Diggersby",
		types: [
			"Normal",
			"Ground"
		],
		baseStats: {
			hp: 85,
			atk: 56,
			def: 77,
			spe: 78,
			spa: 50,
			spd: 77
		},
		abilities: {
			0: "Huge Power",
			H: "Huge Power"
		},
		inherit: true,
		baseSpecies: "Diggersby",
		eggGroups: [
			"Field"
		],
		weightkg: 42.4
	},
	fletchling: {
		num: 661,
		name: "Fletchling",
		types: [
			"Normal",
			"Flying"
		],
		baseStats: {
			hp: 45,
			atk: 50,
			def: 43,
			spe: 62,
			spa: 40,
			spd: 38
		},
		abilities: {
			0: "Big Pecks",
			H: "Reckless"
		},
		inherit: true,
		baseSpecies: "Fletchling",
		eggGroups: [
			"Flying"
		],
		weightkg: 1.7
	},
	fletchinder: {
		num: 662,
		name: "Fletchinder",
		types: [
			"Fire",
			"Flying"
		],
		baseStats: {
			hp: 62,
			atk: 73,
			def: 55,
			spe: 84,
			spa: 56,
			spd: 52
		},
		abilities: {
			0: "Big Pecks",
			H: "Reckless"
		},
		inherit: true,
		baseSpecies: "Fletchinder",
		eggGroups: [
			"Flying"
		],
		weightkg: 16.0
	},
	talonflame: {
		num: 663,
		name: "Talonflame",
		types: [
			"Fire",
			"Flying"
		],
		baseStats: {
			hp: 78,
			atk: 100,
			def: 71,
			spe: 126,
			spa: 74,
			spd: 69
		},
		abilities: {
			0: "Big Pecks",
			H: "Reckless"
		},
		inherit: true,
		baseSpecies: "Talonflame",
		eggGroups: [
			"Flying"
		],
		weightkg: 24.5
	},
	scatterbug: {
		num: 664,
		name: "Scatterbug",
		types: [
			"Bug"
		],
		baseStats: {
			hp: 38,
			atk: 35,
			def: 40,
			spe: 35,
			spa: 27,
			spd: 25
		},
		abilities: {
			0: "Shield Dust",
			1: "Compound Eyes",
			H: "Tinted Lens"
		},
		inherit: true,
		baseSpecies: "Scatterbug",
		eggGroups: [
			"Bug"
		],
		weightkg: 2.5
	},
	spewpa: {
		num: 665,
		name: "Spewpa",
		types: [
			"Bug"
		],
		baseStats: {
			hp: 45,
			atk: 22,
			def: 60,
			spe: 29,
			spa: 27,
			spd: 30
		},
		abilities: {
			0: "Shed Skin",
			1: "Tinted Lens"
		},
		inherit: true,
		baseSpecies: "Spewpa",
		eggGroups: [
			"Bug"
		],
		weightkg: 8.4
	},
	vivillon: {
		num: 666,
		name: "Vivillon",
		types: [
			"Bug",
			"Flying"
		],
		baseStats: {
			hp: 80,
			atk: 52,
			def: 50,
			spe: 89,
			spa: 105,
			spd: 90
		},
		abilities: {
			0: "Shield Dust",
			1: "Compound Eyes",
			H: "Tinted Lens"
		},
		inherit: true,
		baseSpecies: "Vivillon",
		eggGroups: [
			"Bug"
		],
		weightkg: 17.0
	},
	pyroar: {
		num: 668,
		name: "Pyroar",
		types: [
			"Fire",
			"Normal"
		],
		baseStats: {
			hp: 86,
			atk: 68,
			def: 72,
			spe: 106,
			spa: 115,
			spd: 66
		},
		abilities: {
			0: "Rivalry",
			1: "Unnerve",
			H: "Moxie"
		},
		inherit: true,
		baseSpecies: "Pyroar",
		eggGroups: [
			"Field"
		],
		weightkg: 81.5
	},
	flabebe: {
		num: 669,
		name: "Flabebe",
		types: [
			"Fairy"
		],
		baseStats: {
			hp: 44,
			atk: 38,
			def: 39,
			spe: 42,
			spa: 61,
			spd: 79
		},
		abilities: {
			0: "Regenerator"
		},
		inherit: true,
		baseSpecies: "Flabebe",
		eggGroups: [
			"Fairy"
		],
		weightkg: 0.1
	},
	floette: {
		num: 670,
		name: "Floette",
		types: [
			"Fairy"
		],
		baseStats: {
			hp: 54,
			atk: 45,
			def: 47,
			spe: 52,
			spa: 75,
			spd: 98
		},
		abilities: {
			0: "Regenerator"
		},
		inherit: true,
		baseSpecies: "Floette",
		eggGroups: [
			"Fairy"
		],
		weightkg: 0.9
	},
	florges: {
		num: 671,
		name: "Florges",
		types: [
			"Fairy"
		],
		baseStats: {
			hp: 78,
			atk: 65,
			def: 68,
			spe: 75,
			spa: 112,
			spd: 154
		},
		abilities: {
			0: "Regenerator"
		},
		inherit: true,
		baseSpecies: "Florges",
		eggGroups: [
			"Fairy"
		],
		weightkg: 10.0
	},
	skiddo: {
		num: 672,
		name: "Skiddo",
		types: [
			"Grass"
		],
		baseStats: {
			hp: 66,
			atk: 65,
			def: 48,
			spe: 52,
			spa: 62,
			spd: 57
		},
		abilities: {
			0: "Sap Sipper"
		},
		inherit: true,
		baseSpecies: "Skiddo",
		eggGroups: [
			"Field"
		],
		weightkg: 31.0
	},
	gogoat: {
		num: 673,
		name: "Gogoat",
		types: [
			"Grass"
		],
		baseStats: {
			hp: 123,
			atk: 100,
			def: 62,
			spe: 68,
			spa: 97,
			spd: 81
		},
		abilities: {
			0: "Sap Sipper"
		},
		inherit: true,
		baseSpecies: "Gogoat",
		eggGroups: [
			"Field"
		],
		weightkg: 91.0
	},
	meowstic: {
		num: 678,
		name: "Meowstic",
		types: [
			"Psychic"
		],
		baseStats: {
			hp: 74,
			atk: 48,
			def: 76,
			spe: 104,
			spa: 83,
			spd: 81
		},
		abilities: {
			0: "Prankster",
			1: "Competitive",
			H: "Prankster"
		},
		inherit: true,
		baseSpecies: "Meowstic",
		eggGroups: [
			"Field"
		],
		weightkg: 8.5
	},
	aegislash: {
		num: 681,
		name: "Aegislash",
		types: [
			"Steel",
			"Ghost"
		],
		baseStats: {
			hp: 60,
			atk: 50,
			def: 140,
			spe: 60,
			spa: 50,
			spd: 150
		},
		abilities: {
			0: "Stance Change"
		},
		inherit: true,
		baseSpecies: "Aegislash",
		eggGroups: [
			"Mineral"
		],
		weightkg: 53.0
	},
	spritzee: {
		num: 682,
		name: "Spritzee",
		types: [
			"Fairy"
		],
		baseStats: {
			hp: 78,
			atk: 52,
			def: 60,
			spe: 23,
			spa: 63,
			spd: 65
		},
		abilities: {
			0: "Healer",
			1: "Cute Charm"
		},
		inherit: true,
		baseSpecies: "Spritzee",
		eggGroups: [
			"Fairy"
		],
		weightkg: 0.5
	},
	aromatisse: {
		num: 683,
		name: "Aromatisse",
		types: [
			"Fairy"
		],
		baseStats: {
			hp: 101,
			atk: 72,
			def: 72,
			spe: 29,
			spa: 99,
			spd: 89
		},
		abilities: {
			0: "Healer",
			1: "Cute Charm"
		},
		inherit: true,
		baseSpecies: "Aromatisse",
		eggGroups: [
			"Fairy"
		],
		weightkg: 15.5
	},
	swirlix: {
		num: 684,
		name: "Swirlix",
		types: [
			"Fairy"
		],
		baseStats: {
			hp: 62,
			atk: 48,
			def: 66,
			spe: 49,
			spa: 59,
			spd: 57
		},
		abilities: {
			0: "Cute Charm",
			1: "Unburden"
		},
		inherit: true,
		baseSpecies: "Swirlix",
		eggGroups: [
			"Fairy"
		],
		weightkg: 3.5
	},
	slurpuff: {
		num: 685,
		name: "Slurpuff",
		types: [
			"Fairy"
		],
		baseStats: {
			hp: 82,
			atk: 80,
			def: 86,
			spe: 72,
			spa: 85,
			spd: 75
		},
		abilities: {
			0: "Cute Charm",
			1: "Unburden"
		},
		inherit: true,
		baseSpecies: "Slurpuff",
		eggGroups: [
			"Fairy"
		],
		weightkg: 5.0
	},
	inkay: {
		num: 686,
		name: "Inkay",
		types: [
			"Dark",
			"Psychic"
		],
		baseStats: {
			hp: 53,
			atk: 54,
			def: 53,
			spe: 45,
			spa: 37,
			spd: 46
		},
		abilities: {
			0: "Contrary",
			H: "Infiltrator"
		},
		inherit: true,
		baseSpecies: "Inkay",
		eggGroups: [
			"Water1",
			"Water2"
		],
		weightkg: 3.5
	},
	malamar: {
		num: 687,
		name: "Malamar",
		types: [
			"Dark",
			"Psychic"
		],
		baseStats: {
			hp: 86,
			atk: 100,
			def: 88,
			spe: 73,
			spa: 68,
			spd: 85
		},
		abilities: {
			0: "Contrary",
			H: "Infiltrator"
		},
		inherit: true,
		baseSpecies: "Malamar",
		eggGroups: [
			"Water1",
			"Water2"
		],
		weightkg: 47.0
	},
	binacle: {
		num: 688,
		name: "Binacle",
		types: [
			"Rock",
			"Water"
		],
		baseStats: {
			hp: 42,
			atk: 52,
			def: 67,
			spe: 50,
			spa: 39,
			spd: 56
		},
		abilities: {
			0: "Sturdy",
			1: "Sniper",
			H: "Pickpocket"
		},
		inherit: true,
		baseSpecies: "Binacle",
		eggGroups: [
			"Water3",
			"Water1"
		],
		weightkg: 31.0
	},
	barbaracle: {
		num: 689,
		name: "Barbaracle",
		types: [
			"Rock",
			"Water"
		],
		baseStats: {
			hp: 72,
			atk: 115,
			def: 115,
			spe: 54,
			spa: 86,
			spd: 68
		},
		abilities: {
			0: "Sturdy",
			1: "Sniper",
			H: "Pickpocket"
		},
		inherit: true,
		baseSpecies: "Barbaracle",
		eggGroups: [
			"Water3",
			"Water1"
		],
		weightkg: 96.0
	},
	heliolisk: {
		num: 695,
		name: "Heliolisk",
		types: [
			"Electric",
			"Normal"
		],
		baseStats: {
			hp: 62,
			atk: 55,
			def: 52,
			spe: 109,
			spa: 115,
			spd: 94
		},
		abilities: {
			0: "Dry Skin",
			1: "Sand Veil",
			H: "Solar Power"
		},
		inherit: true,
		baseSpecies: "Heliolisk",
		eggGroups: [
			"Monster",
			"Dragon"
		],
		weightkg: 21.0
	},
	tyrunt: {
		num: 696,
		name: "Tyrunt",
		types: [
			"Rock",
			"Dragon"
		],
		baseStats: {
			hp: 58,
			atk: 89,
			def: 77,
			spe: 48,
			spa: 45,
			spd: 45
		},
		abilities: {
			0: "Sheer Force",
			1: "Sturdy"
		},
		inherit: true,
		baseSpecies: "Tyrunt",
		eggGroups: [
			"Monster",
			"Dragon"
		],
		weightkg: 26.0
	},
	tyrantrum: {
		num: 697,
		name: "Tyrantrum",
		types: [
			"Rock",
			"Dragon"
		],
		baseStats: {
			hp: 82,
			atk: 121,
			def: 119,
			spe: 71,
			spa: 69,
			spd: 59
		},
		abilities: {
			0: "Strong Jaw",
			1: "Rock Head"
		},
		inherit: true,
		baseSpecies: "Tyrantrum",
		eggGroups: [
			"Monster",
			"Dragon"
		],
		weightkg: 270.0
	},
	amaura: {
		num: 698,
		name: "Amaura",
		types: [
			"Rock",
			"Ice"
		],
		baseStats: {
			hp: 77,
			atk: 59,
			def: 50,
			spe: 46,
			spa: 67,
			spd: 63
		},
		abilities: {
			0: "Piel Helada"
		},
		inherit: true,
		baseSpecies: "Amaura",
		eggGroups: [
			"Monster"
		],
		weightkg: 25.2
	},
	aurorus: {
		num: 699,
		name: "Aurorus",
		types: [
			"Rock",
			"Ice"
		],
		baseStats: {
			hp: 123,
			atk: 77,
			def: 72,
			spe: 58,
			spa: 99,
			spd: 92
		},
		abilities: {
			0: "Piel Helada"
		},
		inherit: true,
		baseSpecies: "Aurorus",
		eggGroups: [
			"Monster"
		],
		weightkg: 255.0
	},
	sylveon: {
		num: 700,
		name: "Sylveon",
		types: [
			"Fairy"
		],
		baseStats: {
			hp: 95,
			atk: 65,
			def: 65,
			spe: 60,
			spa: 110,
			spd: 130
		},
		abilities: {
			0: "Pixilate",
			H: "Cute Charm"
		},
		inherit: true,
		baseSpecies: "Sylveon",
		eggGroups: [
			"Field"
		],
		weightkg: 23.5
	},
	hawlucha: {
		num: 701,
		name: "Hawlucha",
		types: [
			"Fighting",
			"Flying"
		],
		baseStats: {
			hp: 78,
			atk: 92,
			def: 75,
			spe: 118,
			spa: 74,
			spd: 63
		},
		abilities: {
			0: "Unburden",
			1: "Limber",
			H: "Mold Breaker"
		},
		inherit: true,
		baseSpecies: "Hawlucha",
		eggGroups: [
			"Humanlike"
		],
		weightkg: 21.5
	},
	dedenne: {
		num: 702,
		name: "Dedenne",
		types: [
			"Electric",
			"Fairy"
		],
		baseStats: {
			hp: 67,
			atk: 58,
			def: 57,
			spe: 101,
			spa: 100,
			spd: 85
		},
		abilities: {
			0: "Pickup",
			H: "Pixilate"
		},
		inherit: true,
		baseSpecies: "Dedenne",
		eggGroups: [
			"Field",
			"Fairy"
		],
		weightkg: 2.2
	},
	carbink: {
		num: 703,
		name: "Carbink",
		types: [
			"Rock",
			"Fairy"
		],
		baseStats: {
			hp: 50,
			atk: 50,
			def: 150,
			spe: 50,
			spa: 50,
			spd: 150
		},
		abilities: {
			0: "Clear Body",
			1: "Sturdy"
		},
		inherit: true,
		baseSpecies: "Carbink",
		eggGroups: [
			"Fairy",
			"Mineral"
		],
		weightkg: 5.7
	},
	goomy: {
		num: 704,
		name: "Goomy",
		types: [
			"Dragon"
		],
		baseStats: {
			hp: 45,
			atk: 50,
			def: 35,
			spe: 40,
			spa: 55,
			spd: 75
		},
		abilities: {
			0: "Sap Sipper",
			1: "Hydration",
			H: "Liquid Ooze"
		},
		inherit: true,
		baseSpecies: "Goomy",
		eggGroups: [
			"Dragon"
		],
		weightkg: 2.8
	},
	sliggoo: {
		num: 705,
		name: "Sliggoo",
		types: [
			"Dragon"
		],
		baseStats: {
			hp: 68,
			atk: 75,
			def: 53,
			spe: 60,
			spa: 83,
			spd: 113
		},
		abilities: {
			0: "Sap Sipper",
			1: "Hydration",
			H: "Liquid Ooze"
		},
		inherit: true,
		baseSpecies: "Sliggoo",
		eggGroups: [
			"Dragon"
		],
		weightkg: 17.5
	},
	goodra: {
		num: 706,
		name: "Goodra",
		types: [
			"Dragon"
		],
		baseStats: {
			hp: 90,
			atk: 100,
			def: 70,
			spe: 80,
			spa: 110,
			spd: 150
		},
		abilities: {
			0: "Sap Sipper",
			1: "Hydration",
			H: "Liquid Ooze"
		},
		inherit: true,
		baseSpecies: "Goodra",
		eggGroups: [
			"Dragon"
		],
		weightkg: 150.5
	},
	trevenant: {
		num: 709,
		name: "Trevenant",
		types: [
			"Ghost",
			"Grass"
		],
		baseStats: {
			hp: 85,
			atk: 110,
			def: 86,
			spe: 56,
			spa: 65,
			spd: 82
		},
		abilities: {
			0: "Natural Cure",
			1: "Frisk",
			H: "Harvest"
		},
		inherit: true,
		baseSpecies: "Trevenant",
		eggGroups: [
			"Grass",
			"Amorphous"
		],
		weightkg: 71.0
	},
	pumpkaboo: {
		num: 710,
		name: "Pumpkaboo",
		types: [
			"Ghost",
			"Grass"
		],
		baseStats: {
			hp: 59,
			atk: 66,
			def: 70,
			spe: 41,
			spa: 44,
			spd: 55
		},
		abilities: {
			0: "Pickup",
			1: "Frisk",
			H: "Run Away"
		},
		inherit: true,
		baseSpecies: "Pumpkaboo",
		eggGroups: [
			"Amorphous"
		],
		weightkg: 15.0
	},
	gourgeist: {
		num: 711,
		name: "Gourgeist",
		types: [
			"Ghost",
			"Grass"
		],
		baseStats: {
			hp: 85,
			atk: 100,
			def: 122,
			spe: 54,
			spa: 58,
			spd: 75
		},
		abilities: {
			0: "Pickup",
			1: "Frisk",
			H: "Run Away"
		},
		inherit: true,
		baseSpecies: "Gourgeist",
		eggGroups: [
			"Amorphous"
		],
		weightkg: 39.0
	},
	noibat: {
		num: 714,
		name: "Noibat",
		types: [
			"Flying",
			"Dragon"
		],
		baseStats: {
			hp: 60,
			atk: 65,
			def: 55,
			spe: 80,
			spa: 65,
			spd: 50
		},
		abilities: {
			0: "Frisk",
			1: "Infiltrator",
			H: "Telepathy"
		},
		inherit: true,
		baseSpecies: "Noibat",
		eggGroups: [
			"Flying"
		],
		weightkg: 8.0
	},
	xerneas: {
		num: 716,
		name: "Xerneas",
		types: [
			"Fairy"
		],
		baseStats: {
			hp: 126,
			atk: 131,
			def: 95,
			spe: 99,
			spa: 131,
			spd: 98
		},
		abilities: {
			0: "Justified"
		},
		inherit: true,
		baseSpecies: "Xerneas",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 215.0
	},
	yveltal: {
		num: 717,
		name: "Yveltal",
		types: [
			"Dark",
			"Flying"
		],
		baseStats: {
			hp: 126,
			atk: 131,
			def: 95,
			spe: 99,
			spa: 131,
			spd: 98
		},
		abilities: {
			0: "Cursed Body"
		},
		inherit: true,
		baseSpecies: "Yveltal",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 203.0
	},
	zygarde: {
		num: 718,
		name: "Zygarde",
		types: [
			"Dragon",
			"Ground"
		],
		baseStats: {
			hp: 108,
			atk: 100,
			def: 121,
			spe: 95,
			spa: 81,
			spd: 95
		},
		abilities: {
			0: "Rough Skin"
		},
		inherit: true,
		baseSpecies: "Zygarde",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 305.0
	},
	diancie: {
		num: 719,
		name: "Diancie",
		types: [
			"Rock",
			"Fairy"
		],
		baseStats: {
			hp: 50,
			atk: 100,
			def: 150,
			spe: 50,
			spa: 100,
			spd: 150
		},
		abilities: {
			0: "Magic Bounce"
		},
		inherit: true,
		baseSpecies: "Diancie",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 27.8
	},
	hoopa: {
		num: 720,
		name: "Hoopa",
		types: [
			"Psychic",
			"Ghost"
		],
		baseStats: {
			hp: 80,
			atk: 110,
			def: 60,
			spe: 70,
			spa: 150,
			spd: 130
		},
		abilities: {
			0: "Magic Bounce"
		},
		inherit: true,
		baseSpecies: "Hoopa",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 9.0
	},
	volcanion: {
		num: 721,
		name: "Volcanion",
		types: [
			"Fire",
			"Water"
		],
		baseStats: {
			hp: 100,
			atk: 70,
			def: 120,
			spe: 80,
			spa: 130,
			spd: 130
		},
		abilities: {
			0: "Water Absorb",
			1: "Flash Fire"
		},
		inherit: true,
		baseSpecies: "Volcanion",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 195.0
	},
	rowlet: {
		num: 722,
		name: "Rowlet",
		types: [
			"Grass",
			"Flying"
		],
		baseStats: {
			hp: 68,
			atk: 55,
			def: 55,
			spe: 42,
			spa: 50,
			spd: 50
		},
		abilities: {
			0: "Overgrow",
			H: "Sniper"
		},
		inherit: true,
		baseSpecies: "Rowlet",
		eggGroups: [
			"Flying"
		],
		weightkg: 1.5
	},
	dartrix: {
		num: 723,
		name: "Dartrix",
		types: [
			"Grass",
			"Flying"
		],
		baseStats: {
			hp: 78,
			atk: 75,
			def: 75,
			spe: 52,
			spa: 70,
			spd: 70
		},
		abilities: {
			0: "Overgrow",
			H: "Sniper"
		},
		inherit: true,
		baseSpecies: "Dartrix",
		eggGroups: [
			"Flying"
		],
		weightkg: 16.0
	},
	decidueye: {
		num: 724,
		name: "Decidueye",
		types: [
			"Grass",
			"Ghost"
		],
		baseStats: {
			hp: 78,
			atk: 107,
			def: 75,
			spe: 70,
			spa: 100,
			spd: 100
		},
		abilities: {
			0: "Overgrow",
			H: "Sniper"
		},
		inherit: true,
		baseSpecies: "Decidueye",
		eggGroups: [
			"Flying"
		],
		weightkg: 36.6
	},
	popplio: {
		num: 728,
		name: "Popplio",
		types: [
			"Water"
		],
		baseStats: {
			hp: 50,
			atk: 54,
			def: 54,
			spe: 40,
			spa: 66,
			spd: 56
		},
		abilities: {
			0: "Torrent",
			H: "Cute Charm"
		},
		inherit: true,
		baseSpecies: "Popplio",
		eggGroups: [
			"Water1",
			"Field"
		],
		weightkg: 7.5
	},
	brionne: {
		num: 729,
		name: "Brionne",
		types: [
			"Water"
		],
		baseStats: {
			hp: 60,
			atk: 69,
			def: 69,
			spe: 50,
			spa: 91,
			spd: 81
		},
		abilities: {
			0: "Torrent",
			H: "Cute Charm"
		},
		inherit: true,
		baseSpecies: "Brionne",
		eggGroups: [
			"Water1",
			"Field"
		],
		weightkg: 17.5
	},
	toucannon: {
		num: 733,
		name: "Toucannon",
		types: [
			"Normal",
			"Flying"
		],
		baseStats: {
			hp: 80,
			atk: 120,
			def: 75,
			spe: 60,
			spa: 75,
			spd: 75
		},
		abilities: {
			0: "Keen Eye",
			1: "Skill Link",
			H: "Pickup"
		},
		inherit: true,
		baseSpecies: "Toucannon",
		eggGroups: [
			"Flying"
		],
		weightkg: 26.0
	},
	yungoos: {
		num: 734,
		name: "Yungoos",
		types: [
			"Normal"
		],
		baseStats: {
			hp: 48,
			atk: 70,
			def: 30,
			spe: 45,
			spa: 30,
			spd: 30
		},
		abilities: {
			0: "Intimidate",
			H: "Unaware"
		},
		inherit: true,
		baseSpecies: "Yungoos",
		eggGroups: [
			"Field"
		],
		weightkg: 6.0
	},
	gumshoos: {
		num: 735,
		name: "Gumshoos",
		types: [
			"Normal"
		],
		baseStats: {
			hp: 88,
			atk: 110,
			def: 60,
			spe: 85,
			spa: 55,
			spd: 60
		},
		abilities: {
			0: "Strong Jaw",
			H: "Adaptability"
		},
		inherit: true,
		baseSpecies: "Gumshoos",
		eggGroups: [
			"Field"
		],
		weightkg: 14.2
	},
	charjabug: {
		num: 737,
		name: "Charjabug",
		types: [
			"Bug",
			"Electric"
		],
		baseStats: {
			hp: 57,
			atk: 82,
			def: 95,
			spe: 36,
			spa: 55,
			spd: 75
		},
		abilities: {
			0: "Static"
		},
		inherit: true,
		baseSpecies: "Charjabug",
		eggGroups: [
			"Bug"
		],
		weightkg: 10.5
	},
	oricorio: {
		num: 741,
		name: "Oricorio",
		types: [
			"Fire",
			"Flying"
		],
		baseStats: {
			hp: 75,
			atk: 70,
			def: 70,
			spe: 93,
			spa: 98,
			spd: 70
		},
		abilities: {
			0: "Own Tempo"
		},
		inherit: true,
		baseSpecies: "Oricorio",
		eggGroups: [
			"Flying"
		],
		weightkg: 3.4
	},
	cutiefly: {
		num: 742,
		name: "Cutiefly",
		types: [
			"Bug",
			"Fairy"
		],
		baseStats: {
			hp: 40,
			atk: 45,
			def: 40,
			spe: 84,
			spa: 55,
			spd: 40
		},
		abilities: {
			0: "Tinted Lens",
			H: "Cute Charm"
		},
		inherit: true,
		baseSpecies: "Cutiefly",
		eggGroups: [
			"Bug",
			"Fairy"
		],
		weightkg: 0.2
	},
	ribombee: {
		num: 743,
		name: "Ribombee",
		types: [
			"Bug",
			"Fairy"
		],
		baseStats: {
			hp: 60,
			atk: 55,
			def: 60,
			spe: 124,
			spa: 95,
			spd: 75
		},
		abilities: {
			0: "Tinted Lens",
			H: "Cute Charm"
		},
		inherit: true,
		baseSpecies: "Ribombee",
		eggGroups: [
			"Bug",
			"Fairy"
		],
		weightkg: 0.5
	},
	rockruff: {
		num: 744,
		name: "Rockruff",
		types: [
			"Rock"
		],
		baseStats: {
			hp: 45,
			atk: 65,
			def: 40,
			spe: 60,
			spa: 30,
			spd: 40
		},
		abilities: {
			0: "Keen Eye",
			1: "Vital Spirit",
			H: "Steadfast"
		},
		inherit: true,
		baseSpecies: "Rockruff",
		eggGroups: [
			"Field"
		],
		weightkg: 9.2
	},
	wishiwashi: {
		num: 746,
		name: "Wishiwashi",
		types: [
			"Water"
		],
		baseStats: {
			hp: 95,
			atk: 90,
			def: 80,
			spe: 40,
			spa: 85,
			spd: 85
		},
		abilities: {
			0: "Drizzle"
		},
		inherit: true,
		baseSpecies: "Wishiwashi",
		eggGroups: [
			"Water2"
		],
		weightkg: 0.3
	},
	mareanie: {
		num: 747,
		name: "Mareanie",
		types: [
			"Poison",
			"Water"
		],
		baseStats: {
			hp: 50,
			atk: 53,
			def: 62,
			spe: 45,
			spa: 43,
			spd: 52
		},
		abilities: {
			0: "Poison Point",
			1: "Limber",
			H: "Regenerator"
		},
		inherit: true,
		baseSpecies: "Mareanie",
		eggGroups: [
			"Water1"
		],
		weightkg: 8.0
	},
	toxapex: {
		num: 748,
		name: "Toxapex",
		types: [
			"Poison",
			"Water"
		],
		baseStats: {
			hp: 50,
			atk: 63,
			def: 152,
			spe: 35,
			spa: 53,
			spd: 142
		},
		abilities: {
			0: "Poison Point",
			1: "Limber",
			H: "Regenerator"
		},
		inherit: true,
		baseSpecies: "Toxapex",
		eggGroups: [
			"Water1"
		],
		weightkg: 14.5
	},
	mudsdale: {
		num: 750,
		name: "Mudsdale",
		types: [
			"Ground"
		],
		baseStats: {
			hp: 100,
			atk: 125,
			def: 100,
			spe: 35,
			spa: 55,
			spd: 85
		},
		abilities: {
			0: "Stamina",
			H: "Inner Focus"
		},
		inherit: true,
		baseSpecies: "Mudsdale",
		eggGroups: [
			"Field"
		],
		weightkg: 920.0
	},
	morelull: {
		num: 755,
		name: "Morelull",
		types: [
			"Grass",
			"Fairy"
		],
		baseStats: {
			hp: 55,
			atk: 35,
			def: 55,
			spe: 15,
			spa: 65,
			spd: 75
		},
		abilities: {
			0: "Illuminate",
			1: "Effect Spore",
			H: "Rain Dish"
		},
		inherit: true,
		baseSpecies: "Morelull",
		eggGroups: [
			"Grass"
		],
		weightkg: 1.5
	},
	shiinotic: {
		num: 756,
		name: "Shiinotic",
		types: [
			"Grass",
			"Fairy"
		],
		baseStats: {
			hp: 85,
			atk: 45,
			def: 85,
			spe: 30,
			spa: 95,
			spd: 100
		},
		abilities: {
			0: "Illuminate",
			1: "Effect Spore",
			H: "Rain Dish"
		},
		inherit: true,
		baseSpecies: "Shiinotic",
		eggGroups: [
			"Grass"
		],
		weightkg: 11.5
	},
	salandit: {
		num: 757,
		name: "Salandit",
		types: [
			"Poison",
			"Fire"
		],
		baseStats: {
			hp: 48,
			atk: 44,
			def: 40,
			spe: 77,
			spa: 71,
			spd: 40
		},
		abilities: {
			0: "Poison Point",
			H: "Oblivious"
		},
		inherit: true,
		baseSpecies: "Salandit",
		eggGroups: [
			"Monster",
			"Dragon"
		],
		weightkg: 4.8
	},
	salazzle: {
		num: 758,
		name: "Salazzle",
		types: [
			"Poison",
			"Fire"
		],
		baseStats: {
			hp: 68,
			atk: 64,
			def: 60,
			spe: 117,
			spa: 111,
			spd: 60
		},
		abilities: {
			0: "Poison Point",
			H: "Oblivious"
		},
		inherit: true,
		baseSpecies: "Salazzle",
		eggGroups: [
			"Monster",
			"Dragon"
		],
		weightkg: 22.2
	},
	bewear: {
		num: 760,
		name: "Bewear",
		types: [
			"Normal",
			"Fighting"
		],
		baseStats: {
			hp: 120,
			atk: 125,
			def: 80,
			spe: 60,
			spa: 55,
			spd: 60
		},
		abilities: {
			0: "Fluffy",
			H: "Unnerve"
		},
		inherit: true,
		baseSpecies: "Bewear",
		eggGroups: [
			"Field"
		],
		weightkg: 135.0
	},
	bounsweet: {
		num: 761,
		name: "Bounsweet",
		types: [
			"Grass"
		],
		baseStats: {
			hp: 42,
			atk: 30,
			def: 38,
			spe: 32,
			spa: 30,
			spd: 38
		},
		abilities: {
			0: "Leaf Guard",
			1: "Oblivious",
			H: "Cute Charm"
		},
		inherit: true,
		baseSpecies: "Bounsweet",
		eggGroups: [
			"Grass"
		],
		weightkg: 3.2
	},
	steenee: {
		num: 762,
		name: "Steenee",
		types: [
			"Grass"
		],
		baseStats: {
			hp: 52,
			atk: 40,
			def: 48,
			spe: 62,
			spa: 40,
			spd: 48
		},
		abilities: {
			0: "Leaf Guard",
			1: "Oblivious",
			H: "Cute Charm"
		},
		inherit: true,
		baseSpecies: "Steenee",
		eggGroups: [
			"Grass"
		],
		weightkg: 8.2
	},
	tsareena: {
		num: 763,
		name: "Tsareena",
		types: [
			"Grass"
		],
		baseStats: {
			hp: 72,
			atk: 120,
			def: 98,
			spe: 72,
			spa: 50,
			spd: 98
		},
		abilities: {
			0: "Leaf Guard",
			1: "Chlorophyll",
			H: "Cute Charm"
		},
		inherit: true,
		baseSpecies: "Tsareena",
		eggGroups: [
			"Grass"
		],
		weightkg: 21.4
	},
	comfey: {
		num: 764,
		name: "Comfey",
		types: [
			"Fairy"
		],
		baseStats: {
			hp: 51,
			atk: 52,
			def: 90,
			spe: 100,
			spa: 82,
			spd: 110
		},
		abilities: {
			0: "Regenerator",
			H: "Natural Cure"
		},
		inherit: true,
		baseSpecies: "Comfey",
		eggGroups: [
			"Grass"
		],
		weightkg: 0.3
	},
	oranguru: {
		num: 765,
		name: "Oranguru",
		types: [
			"Normal",
			"Psychic"
		],
		baseStats: {
			hp: 90,
			atk: 60,
			def: 80,
			spe: 60,
			spa: 90,
			spd: 110
		},
		abilities: {
			0: "Inner Focus",
			1: "Telepathy",
			H: "Anticipation"
		},
		inherit: true,
		baseSpecies: "Oranguru",
		eggGroups: [
			"Field"
		],
		weightkg: 76.0
	},
	passimian: {
		num: 766,
		name: "Passimian",
		types: [
			"Fighting"
		],
		baseStats: {
			hp: 100,
			atk: 120,
			def: 90,
			spe: 80,
			spa: 40,
			spd: 60
		},
		abilities: {
			0: "Forewarn",
			H: "Defiant"
		},
		inherit: true,
		baseSpecies: "Passimian",
		eggGroups: [
			"Field"
		],
		weightkg: 82.8
	},
	wimpod: {
		num: 767,
		name: "Wimpod",
		types: [
			"Bug",
			"Water"
		],
		baseStats: {
			hp: 25,
			atk: 35,
			def: 40,
			spe: 80,
			spa: 20,
			spd: 30
		},
		abilities: {
			0: "Unnerve"
		},
		inherit: true,
		baseSpecies: "Wimpod",
		eggGroups: [
			"Bug",
			"Water3"
		],
		weightkg: 12.0
	},
	golisopod: {
		num: 768,
		name: "Golisopod",
		types: [
			"Bug",
			"Water"
		],
		baseStats: {
			hp: 75,
			atk: 125,
			def: 110,
			spe: 40,
			spa: 60,
			spd: 90
		},
		abilities: {
			0: "Damp"
		},
		inherit: true,
		baseSpecies: "Golisopod",
		eggGroups: [
			"Bug",
			"Water3"
		],
		weightkg: 108.0
	},
	sandygast: {
		num: 769,
		name: "Sandygast",
		types: [
			"Ghost",
			"Ground"
		],
		baseStats: {
			hp: 55,
			atk: 55,
			def: 80,
			spe: 15,
			spa: 70,
			spd: 45
		},
		abilities: {
			0: "Water Absorb",
			H: "Sand Veil"
		},
		inherit: true,
		baseSpecies: "Sandygast",
		eggGroups: [
			"Amorphous"
		],
		weightkg: 70.0
	},
	palossand: {
		num: 770,
		name: "Palossand",
		types: [
			"Ghost",
			"Ground"
		],
		baseStats: {
			hp: 85,
			atk: 75,
			def: 110,
			spe: 35,
			spa: 100,
			spd: 75
		},
		abilities: {
			0: "Water Absorb",
			H: "Sand Veil"
		},
		inherit: true,
		baseSpecies: "Palossand",
		eggGroups: [
			"Amorphous"
		],
		weightkg: 250.0
	},
	pyukumuku: {
		num: 771,
		name: "Pyukumuku",
		types: [
			"Water"
		],
		baseStats: {
			hp: 55,
			atk: 60,
			def: 130,
			spe: 5,
			spa: 30,
			spd: 130
		},
		abilities: {
			0: "Iron Barbs",
			H: "Unaware"
		},
		inherit: true,
		baseSpecies: "Pyukumuku",
		eggGroups: [
			"Water1"
		],
		weightkg: 1.2
	},
	typenull: {
		num: 772,
		name: "C\u00f3digo Cero",
		types: [
			"Normal"
		],
		baseStats: {
			hp: 95,
			atk: 95,
			def: 95,
			spe: 59,
			spa: 95,
			spd: 95
		},
		abilities: {
			0: "Battle Armor"
		},
		inherit: true,
		baseSpecies: "C\u00f3digo cero",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 120.5
	},
	silvally: {
		num: 773,
		name: "Silvally",
		types: [
			"Normal"
		],
		baseStats: {
			hp: 95,
			atk: 95,
			def: 95,
			spe: 95,
			spa: 95,
			spd: 95
		},
		abilities: {
			0: "Adaptability"
		},
		inherit: true,
		baseSpecies: "Silvally",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 100.5
	},
	minior: {
		num: 774,
		name: "Minior",
		types: [
			"Rock",
			"Flying"
		],
		baseStats: {
			hp: 60,
			atk: 60,
			def: 100,
			spe: 60,
			spa: 60,
			spd: 100
		},
		abilities: {
			0: "Weak Armor"
		},
		inherit: true,
		baseSpecies: "Minior",
		eggGroups: [
			"Mineral"
		],
		weightkg: 40.0
	},
	komala: {
		num: 775,
		name: "Komala",
		types: [
			"Normal"
		],
		baseStats: {
			hp: 75,
			atk: 115,
			def: 65,
			spe: 65,
			spa: 75,
			spd: 95
		},
		abilities: {
			0: "Sap Sipper"
		},
		inherit: true,
		baseSpecies: "Komala",
		eggGroups: [
			"Field"
		],
		weightkg: 19.9
	},
	bruxish: {
		num: 779,
		name: "Bruxish",
		types: [
			"Water",
			"Psychic"
		],
		baseStats: {
			hp: 68,
			atk: 110,
			def: 70,
			spe: 100,
			spa: 70,
			spd: 70
		},
		abilities: {
			0: "Strong Jaw",
			H: "Wonder Skin"
		},
		inherit: true,
		baseSpecies: "Bruxish",
		eggGroups: [
			"Water2"
		],
		weightkg: 19.0
	},
	drampa: {
		num: 780,
		name: "Drampa",
		types: [
			"Normal",
			"Dragon"
		],
		baseStats: {
			hp: 85,
			atk: 60,
			def: 85,
			spe: 36,
			spa: 135,
			spd: 91
		},
		abilities: {
			0: "Sap Sipper",
			H: "Cloud Nine"
		},
		inherit: true,
		baseSpecies: "Drampa",
		eggGroups: [
			"Monster",
			"Dragon"
		],
		weightkg: 185.0
	},
	jangmoo: {
		num: 782,
		name: "Jangmo-o",
		types: [
			"Dragon"
		],
		baseStats: {
			hp: 45,
			atk: 55,
			def: 65,
			spe: 45,
			spa: 45,
			spd: 45
		},
		abilities: {
			0: "Overcoat",
			H: "Overcoat"
		},
		inherit: true,
		baseSpecies: "Jangmo-o",
		eggGroups: [
			"Dragon"
		],
		weightkg: 29.7
	},
	hakamoo: {
		num: 783,
		name: "Hakamo-o",
		types: [
			"Dragon",
			"Fighting"
		],
		baseStats: {
			hp: 55,
			atk: 75,
			def: 90,
			spe: 65,
			spa: 65,
			spd: 70
		},
		abilities: {
			0: "Overcoat",
			H: "Overcoat"
		},
		inherit: true,
		baseSpecies: "Hakamo-o",
		eggGroups: [
			"Dragon"
		],
		weightkg: 47.0
	},
	kommoo: {
		num: 784,
		name: "Kommo-o",
		types: [
			"Dragon",
			"Fighting"
		],
		baseStats: {
			hp: 75,
			atk: 110,
			def: 125,
			spe: 85,
			spa: 100,
			spd: 105
		},
		abilities: {
			0: "Overcoat",
			H: "Overcoat"
		},
		inherit: true,
		baseSpecies: "Kommo-o",
		eggGroups: [
			"Dragon"
		],
		weightkg: 78.2
	},
	tapukoko: {
		num: 785,
		name: "Tapu Koko",
		types: [
			"Electric",
			"Fairy"
		],
		baseStats: {
			hp: 70,
			atk: 115,
			def: 85,
			spe: 130,
			spa: 95,
			spd: 75
		},
		abilities: {
			0: "Volt Absorb",
			H: "Telepathy"
		},
		inherit: true,
		baseSpecies: "Tapu koko",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 20.5
	},
	tapulele: {
		num: 786,
		name: "Tapu Lele",
		types: [
			"Psychic",
			"Fairy"
		],
		baseStats: {
			hp: 70,
			atk: 85,
			def: 75,
			spe: 95,
			spa: 130,
			spd: 115
		},
		abilities: {
			0: "Levitate",
			H: "Telepathy"
		},
		inherit: true,
		baseSpecies: "Tapu lele",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 18.6
	},
	tapubulu: {
		num: 787,
		name: "Tapu Bulu",
		types: [
			"Grass",
			"Fairy"
		],
		baseStats: {
			hp: 70,
			atk: 130,
			def: 115,
			spe: 75,
			spa: 85,
			spd: 95
		},
		abilities: {
			0: "Sap Sipper",
			H: "Telepathy"
		},
		inherit: true,
		baseSpecies: "Tapu bulu",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 45.5
	},
	tapufini: {
		num: 788,
		name: "Tapu Fini",
		types: [
			"Water",
			"Fairy"
		],
		baseStats: {
			hp: 70,
			atk: 75,
			def: 115,
			spe: 85,
			spa: 95,
			spd: 130
		},
		abilities: {
			0: "Levitate",
			H: "Telepathy"
		},
		inherit: true,
		baseSpecies: "Tapu fini",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 21.2
	},
	cosmoem: {
		num: 790,
		name: "Cosmoem",
		types: [
			"Psychic"
		],
		baseStats: {
			hp: 43,
			atk: 29,
			def: 131,
			spe: 37,
			spa: 131,
			spd: 37
		},
		abilities: {
			0: "Sturdy"
		},
		inherit: true,
		baseSpecies: "Cosmoem",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 999.9
	},
	solgaleo: {
		num: 791,
		name: "Solgaleo",
		types: [
			"Psychic",
			"Steel"
		],
		baseStats: {
			hp: 137,
			atk: 137,
			def: 107,
			spe: 97,
			spa: 113,
			spd: 89
		},
		abilities: {
			0: "Pressure"
		},
		inherit: true,
		baseSpecies: "Solgaleo",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 230.0
	},
	lunala: {
		num: 792,
		name: "Lunala",
		types: [
			"Psychic",
			"Ghost"
		],
		baseStats: {
			hp: 137,
			atk: 113,
			def: 89,
			spe: 97,
			spa: 137,
			spd: 107
		},
		abilities: {
			0: "Pressure"
		},
		inherit: true,
		baseSpecies: "Lunala",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 120.0
	},
	magearna: {
		num: 793,
		name: "Magearna",
		types: [
			"Steel",
			"Fairy"
		],
		baseStats: {
			hp: 80,
			atk: 95,
			def: 115,
			spe: 65,
			spa: 130,
			spd: 115
		},
		abilities: {
			0: "Pressure"
		},
		inherit: true,
		baseSpecies: "Magearna",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 80.5
	},
	missingno: {
		num: 804,
		name: "Missingno",
		types: [
			"Normal"
		],
		baseStats: {
			hp: 80,
			atk: 80,
			def: 80,
			spe: 80,
			spa: 80,
			spd: 80
		},
		abilities: {
			0: "Trace"
		},
		inherit: true,
		baseSpecies: "Missingno",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 5.0
	},
	necrozma: {
		num: 805,
		name: "Necrozma",
		types: [
			"Psychic"
		],
		baseStats: {
			hp: 97,
			atk: 107,
			def: 101,
			spe: 79,
			spa: 127,
			spd: 89
		},
		abilities: {
			0: "Filter"
		},
		inherit: true,
		baseSpecies: "Necrozma",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 100.5
	},
	meltan: {
		num: 808,
		name: "Meltan",
		types: [
			"Steel"
		],
		baseStats: {
			hp: 46,
			atk: 65,
			def: 65,
			spe: 55,
			spa: 35,
			spd: 34
		},
		abilities: {
			0: "Magnet Pull"
		},
		inherit: true,
		baseSpecies: "Meltan",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 8.0
	},
	melmetal: {
		num: 809,
		name: "Melmetal",
		types: [
			"Steel"
		],
		baseStats: {
			hp: 135,
			atk: 143,
			def: 143,
			spe: 80,
			spa: 65,
			spd: 34
		},
		abilities: {
			0: "Iron Fist"
		},
		inherit: true,
		baseSpecies: "Melmetal",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 800.0
	},
	grookey: {
		num: 810,
		name: "Grookey",
		types: [
			"Grass"
		],
		baseStats: {
			hp: 50,
			atk: 65,
			def: 50,
			spe: 65,
			spa: 40,
			spd: 40
		},
		abilities: {
			0: "Overgrow",
			H: "Chlorophyll"
		},
		inherit: true,
		baseSpecies: "Grookey",
		eggGroups: [
			"Field",
			"Grass"
		],
		weightkg: 5.0
	},
	thwackey: {
		num: 811,
		name: "Thwackey",
		types: [
			"Grass"
		],
		baseStats: {
			hp: 70,
			atk: 95,
			def: 70,
			spe: 80,
			spa: 55,
			spd: 60
		},
		abilities: {
			0: "Overgrow",
			H: "Chlorophyll"
		},
		inherit: true,
		baseSpecies: "Thwackey",
		eggGroups: [
			"Field",
			"Grass"
		],
		weightkg: 14.0
	},
	rillaboom: {
		num: 812,
		name: "Rillaboom",
		types: [
			"Grass"
		],
		baseStats: {
			hp: 100,
			atk: 125,
			def: 90,
			spe: 86,
			spa: 60,
			spd: 70
		},
		abilities: {
			0: "Overgrow",
			H: "Chlorophyll"
		},
		inherit: true,
		baseSpecies: "Rillaboom",
		eggGroups: [
			"Field",
			"Grass"
		],
		weightkg: 90.0
	},
	scorbunny: {
		num: 813,
		name: "Scorbunny",
		types: [
			"Fire"
		],
		baseStats: {
			hp: 50,
			atk: 71,
			def: 40,
			spe: 69,
			spa: 40,
			spd: 40
		},
		abilities: {
			0: "Blaze",
			H: "Protean"
		},
		inherit: true,
		baseSpecies: "Scorbunny",
		eggGroups: [
			"Field",
			"Humanlike"
		],
		weightkg: 4.5
	},
	raboot: {
		num: 814,
		name: "Raboot",
		types: [
			"Fire"
		],
		baseStats: {
			hp: 65,
			atk: 86,
			def: 60,
			spe: 94,
			spa: 55,
			spd: 60
		},
		abilities: {
			0: "Blaze",
			H: "Protean"
		},
		inherit: true,
		baseSpecies: "Raboot",
		eggGroups: [
			"Field",
			"Humanlike"
		],
		weightkg: 9.0
	},
	cinderace: {
		num: 815,
		name: "Cinderace",
		types: [
			"Fire"
		],
		baseStats: {
			hp: 80,
			atk: 116,
			def: 75,
			spe: 119,
			spa: 65,
			spd: 75
		},
		abilities: {
			0: "Blaze",
			H: "Protean"
		},
		inherit: true,
		baseSpecies: "Cinderace",
		eggGroups: [
			"Field",
			"Humanlike"
		],
		weightkg: 33.0
	},
	drizzile: {
		num: 817,
		name: "Drizzile",
		types: [
			"Water"
		],
		baseStats: {
			hp: 65,
			atk: 50,
			def: 55,
			spe: 90,
			spa: 95,
			spd: 50
		},
		abilities: {
			0: "Torrent",
			H: "Sniper"
		},
		inherit: true,
		baseSpecies: "Drizzile",
		eggGroups: [
			"Water1",
			"Field"
		],
		weightkg: 11.5
	},
	inteleon: {
		num: 818,
		name: "Inteleon",
		types: [
			"Water",
			"Dark"
		],
		baseStats: {
			hp: 70,
			atk: 85,
			def: 65,
			spe: 120,
			spa: 125,
			spd: 65
		},
		abilities: {
			0: "Torrent",
			H: "Sniper"
		},
		inherit: true,
		baseSpecies: "Inteleon",
		eggGroups: [
			"Water1",
			"Field"
		],
		weightkg: 45.2
	},
	skwovet: {
		num: 819,
		name: "Skwovet",
		types: [
			"Normal"
		],
		baseStats: {
			hp: 70,
			atk: 55,
			def: 55,
			spe: 25,
			spa: 35,
			spd: 35
		},
		abilities: {
			0: "Thick Fat",
			H: "Gluttony"
		},
		inherit: true,
		baseSpecies: "Skwovet",
		eggGroups: [
			"Field"
		],
		weightkg: 2.5
	},
	greedent: {
		num: 820,
		name: "Greedent",
		types: [
			"Normal"
		],
		baseStats: {
			hp: 120,
			atk: 95,
			def: 95,
			spe: 20,
			spa: 55,
			spd: 75
		},
		abilities: {
			0: "Thick Fat",
			H: "Gluttony"
		},
		inherit: true,
		baseSpecies: "Greedent",
		eggGroups: [
			"Field"
		],
		weightkg: 6.0
	},
	corviknight: {
		num: 823,
		name: "Corviknight",
		types: [
			"Flying",
			"Steel"
		],
		baseStats: {
			hp: 98,
			atk: 87,
			def: 105,
			spe: 67,
			spa: 53,
			spd: 85
		},
		abilities: {
			0: "Pressure",
			1: "Unnerve",
			H: "Clear Body"
		},
		inherit: true,
		baseSpecies: "Corviknight",
		eggGroups: [
			"Flying"
		],
		weightkg: 75.0
	},
	nickit: {
		num: 827,
		name: "Nickit",
		types: [
			"Dark"
		],
		baseStats: {
			hp: 40,
			atk: 28,
			def: 28,
			spe: 50,
			spa: 48,
			spd: 52
		},
		abilities: {
			0: "Run Away",
			1: "Unburden",
			H: "Technician"
		},
		inherit: true,
		baseSpecies: "Nickit",
		eggGroups: [
			"Field"
		],
		weightkg: 8.9
	},
	thievul: {
		num: 828,
		name: "Thievul",
		types: [
			"Dark"
		],
		baseStats: {
			hp: 70,
			atk: 58,
			def: 58,
			spe: 90,
			spa: 87,
			spd: 92
		},
		abilities: {
			0: "Run Away",
			1: "Unburden",
			H: "Technician"
		},
		inherit: true,
		baseSpecies: "Thievul",
		eggGroups: [
			"Field"
		],
		weightkg: 19.9
	},
	gossifleur: {
		num: 829,
		name: "Gossifleur",
		types: [
			"Grass"
		],
		baseStats: {
			hp: 40,
			atk: 40,
			def: 60,
			spe: 10,
			spa: 40,
			spd: 60
		},
		abilities: {
			0: "Regenerator",
			H: "Effect Spore"
		},
		inherit: true,
		baseSpecies: "Gossifleur",
		eggGroups: [
			"Grass"
		],
		weightkg: 2.2
	},
	eldegoss: {
		num: 830,
		name: "Eldegoss",
		types: [
			"Grass"
		],
		baseStats: {
			hp: 60,
			atk: 50,
			def: 90,
			spe: 60,
			spa: 90,
			spd: 120
		},
		abilities: {
			0: "Effect Spore",
			H: "Regenerator"
		},
		inherit: true,
		baseSpecies: "Eldegoss",
		eggGroups: [
			"Grass"
		],
		weightkg: 2.5
	},
	wooloo: {
		num: 831,
		name: "Wooloo",
		types: [
			"Normal"
		],
		baseStats: {
			hp: 42,
			atk: 40,
			def: 55,
			spe: 48,
			spa: 40,
			spd: 45
		},
		abilities: {
			0: "Fluffy",
			H: "Sap Sipper"
		},
		inherit: true,
		baseSpecies: "Wooloo",
		eggGroups: [
			"Field"
		],
		weightkg: 6.9
	},
	dubwool: {
		num: 832,
		name: "Dubwool",
		types: [
			"Normal"
		],
		baseStats: {
			hp: 72,
			atk: 80,
			def: 100,
			spe: 88,
			spa: 60,
			spd: 90
		},
		abilities: {
			0: "Fluffy",
			H: "Sap Sipper"
		},
		inherit: true,
		baseSpecies: "Dubwool",
		eggGroups: [
			"Field"
		],
		weightkg: 43.0
	},
	chewtle: {
		num: 833,
		name: "Chewtle",
		types: [
			"Water"
		],
		baseStats: {
			hp: 50,
			atk: 64,
			def: 50,
			spe: 44,
			spa: 38,
			spd: 38
		},
		abilities: {
			0: "Intimidate",
			1: "Shell Armor",
			H: "Swift Swim"
		},
		inherit: true,
		baseSpecies: "Chewtle",
		eggGroups: [
			"Monster",
			"Water1"
		],
		weightkg: 8.5
	},
	yamper: {
		num: 835,
		name: "Yamper",
		types: [
			"Electric"
		],
		baseStats: {
			hp: 59,
			atk: 45,
			def: 50,
			spe: 26,
			spa: 40,
			spd: 50
		},
		abilities: {
			0: "Static",
			H: "Rattled"
		},
		inherit: true,
		baseSpecies: "Yamper",
		eggGroups: [
			"Field"
		],
		weightkg: 13.5
	},
	boltund: {
		num: 836,
		name: "Boltund",
		types: [
			"Electric"
		],
		baseStats: {
			hp: 69,
			atk: 90,
			def: 60,
			spe: 121,
			spa: 90,
			spd: 60
		},
		abilities: {
			0: "Strong Jaw",
			1: "Competitive",
			H: "Static"
		},
		inherit: true,
		baseSpecies: "Boltund",
		eggGroups: [
			"Field"
		],
		weightkg: 34.0
	},
	rolycoly: {
		num: 837,
		name: "Rolycoly",
		types: [
			"Rock"
		],
		baseStats: {
			hp: 30,
			atk: 40,
			def: 50,
			spe: 30,
			spa: 40,
			spd: 50
		},
		abilities: {
			0: "Heatproof",
			H: "Water Absorb"
		},
		inherit: true,
		baseSpecies: "Rolycoly",
		eggGroups: [
			"Mineral"
		],
		weightkg: 12.0
	},
	carkol: {
		num: 838,
		name: "Carkol",
		types: [
			"Rock",
			"Fire"
		],
		baseStats: {
			hp: 80,
			atk: 60,
			def: 90,
			spe: 50,
			spa: 60,
			spd: 70
		},
		abilities: {
			0: "Flame Body",
			H: "Water Absorb"
		},
		inherit: true,
		baseSpecies: "Carkol",
		eggGroups: [
			"Mineral"
		],
		weightkg: 78.0
	},
	coalossal: {
		num: 839,
		name: "Coalossal",
		types: [
			"Rock",
			"Fire"
		],
		baseStats: {
			hp: 110,
			atk: 80,
			def: 120,
			spe: 30,
			spa: 80,
			spd: 90
		},
		abilities: {
			0: "Flame Body",
			H: "Water Absorb"
		},
		inherit: true,
		baseSpecies: "Coalossal",
		eggGroups: [
			"Mineral"
		],
		weightkg: 310.0
	},
	applin: {
		num: 840,
		name: "Applin",
		types: [
			"Grass",
			"Dragon"
		],
		baseStats: {
			hp: 40,
			atk: 40,
			def: 80,
			spe: 20,
			spa: 40,
			spd: 40
		},
		abilities: {
			0: "Harvest",
			1: "Gluttony",
			H: "Harvest"
		},
		inherit: true,
		baseSpecies: "Applin",
		eggGroups: [
			"Grass",
			"Dragon"
		],
		weightkg: 0.5
	},
	flapple: {
		num: 841,
		name: "Flapple",
		types: [
			"Grass",
			"Dragon"
		],
		baseStats: {
			hp: 70,
			atk: 110,
			def: 80,
			spe: 70,
			spa: 95,
			spd: 60
		},
		abilities: {
			0: "Harvest",
			1: "Gluttony",
			H: "Hustle"
		},
		inherit: true,
		baseSpecies: "Flapple",
		eggGroups: [
			"Grass",
			"Dragon"
		],
		weightkg: 1.0
	},
	appletun: {
		num: 842,
		name: "Appletun",
		types: [
			"Grass",
			"Dragon"
		],
		baseStats: {
			hp: 110,
			atk: 85,
			def: 80,
			spe: 30,
			spa: 100,
			spd: 80
		},
		abilities: {
			0: "Harvest",
			1: "Gluttony",
			H: "Thick Fat"
		},
		inherit: true,
		baseSpecies: "Appletun",
		eggGroups: [
			"Grass",
			"Dragon"
		],
		weightkg: 13.0
	},
	silicobra: {
		num: 843,
		name: "Silicobra",
		types: [
			"Ground"
		],
		baseStats: {
			hp: 52,
			atk: 57,
			def: 75,
			spe: 46,
			spa: 35,
			spd: 50
		},
		abilities: {
			0: "Shed Skin",
			H: "Sand Veil"
		},
		inherit: true,
		baseSpecies: "Silicobra",
		eggGroups: [
			"Flying",
			"Dragon"
		],
		weightkg: 7.6
	},
	sandaconda: {
		num: 844,
		name: "Sandaconda",
		types: [
			"Ground"
		],
		baseStats: {
			hp: 72,
			atk: 107,
			def: 125,
			spe: 71,
			spa: 65,
			spd: 70
		},
		abilities: {
			0: "Shed Skin",
			H: "Sand Veil"
		},
		inherit: true,
		baseSpecies: "Sandaconda",
		eggGroups: [
			"Flying",
			"Dragon"
		],
		weightkg: 65.5
	},
	cramorant: {
		num: 845,
		name: "Cramorant",
		types: [
			"Flying",
			"Water"
		],
		baseStats: {
			hp: 70,
			atk: 85,
			def: 55,
			spe: 85,
			spa: 95,
			spd: 85
		},
		abilities: {
			0: "Simple"
		},
		inherit: true,
		baseSpecies: "Cramorant",
		eggGroups: [
			"Water1",
			"Flying"
		],
		weightkg: 18.0
	},
	arrokuda: {
		num: 846,
		name: "Arrokuda",
		types: [
			"Water"
		],
		baseStats: {
			hp: 41,
			atk: 63,
			def: 40,
			spe: 66,
			spa: 40,
			spd: 30
		},
		abilities: {
			0: "Swift Swim",
			H: "Intimidate"
		},
		inherit: true,
		baseSpecies: "Arrokuda",
		eggGroups: [
			"Water2"
		],
		weightkg: 1.0
	},
	barraskewda: {
		num: 847,
		name: "Barraskewda",
		types: [
			"Water"
		],
		baseStats: {
			hp: 61,
			atk: 123,
			def: 60,
			spe: 136,
			spa: 60,
			spd: 50
		},
		abilities: {
			0: "Swift Swim",
			H: "Intimidate"
		},
		inherit: true,
		baseSpecies: "Barraskewda",
		eggGroups: [
			"Water2"
		],
		weightkg: 30.0
	},
	toxel: {
		num: 848,
		name: "Toxel",
		types: [
			"Electric",
			"Poison"
		],
		baseStats: {
			hp: 40,
			atk: 38,
			def: 35,
			spe: 40,
			spa: 35,
			spd: 40
		},
		abilities: {
			0: "Rattled",
			1: "Static",
			H: "Klutz"
		},
		inherit: true,
		baseSpecies: "Toxel",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 11.0
	},
	toxtricity: {
		num: 849,
		name: "Toxtricity",
		types: [
			"Electric",
			"Poison"
		],
		baseStats: {
			hp: 75,
			atk: 98,
			def: 70,
			spe: 75,
			spa: 114,
			spd: 70
		},
		abilities: {
			0: "Soundproof",
			1: "Plus",
			H: "Technician"
		},
		inherit: true,
		baseSpecies: "Toxtricity",
		eggGroups: [
			"Humanlike"
		],
		weightkg: 40.0
	},
	sinistea: {
		num: 854,
		name: "Sinistea",
		types: [
			"Ghost"
		],
		baseStats: {
			hp: 40,
			atk: 45,
			def: 45,
			spe: 50,
			spa: 74,
			spd: 50
		},
		abilities: {
			0: "Weak Armor",
			H: "Cursed Body"
		},
		inherit: true,
		baseSpecies: "Sinistea",
		eggGroups: [
			"Mineral",
			"Amorphous"
		],
		weightkg: 0.2
	},
	hatenna: {
		num: 856,
		name: "Hatenna",
		types: [
			"Psychic"
		],
		baseStats: {
			hp: 42,
			atk: 30,
			def: 45,
			spe: 39,
			spa: 56,
			spd: 53
		},
		abilities: {
			0: "Anticipation",
			H: "Magic Bounce"
		},
		inherit: true,
		baseSpecies: "Hatenna",
		eggGroups: [
			"Fairy"
		],
		weightkg: 3.4
	},
	hattrem: {
		num: 857,
		name: "Hattrem",
		types: [
			"Psychic"
		],
		baseStats: {
			hp: 57,
			atk: 40,
			def: 65,
			spe: 49,
			spa: 86,
			spd: 73
		},
		abilities: {
			0: "Anticipation",
			H: "Magic Bounce"
		},
		inherit: true,
		baseSpecies: "Hattrem",
		eggGroups: [
			"Fairy"
		],
		weightkg: 4.8
	},
	hatterene: {
		num: 858,
		name: "Hatterene",
		types: [
			"Psychic",
			"Fairy"
		],
		baseStats: {
			hp: 57,
			atk: 90,
			def: 95,
			spe: 29,
			spa: 136,
			spd: 103
		},
		abilities: {
			0: "Anticipation",
			H: "Magic Bounce"
		},
		inherit: true,
		baseSpecies: "Hatterene",
		eggGroups: [
			"Fairy"
		],
		weightkg: 5.1
	},
	impidimp: {
		num: 859,
		name: "Impidimp",
		types: [
			"Dark",
			"Fairy"
		],
		baseStats: {
			hp: 45,
			atk: 45,
			def: 30,
			spe: 50,
			spa: 40,
			spd: 50
		},
		abilities: {
			0: "Prankster",
			1: "Frisk",
			H: "Pickpocket"
		},
		inherit: true,
		baseSpecies: "Impidimp",
		eggGroups: [
			"Fairy",
			"Humanlike"
		],
		weightkg: 5.5
	},
	morgrem: {
		num: 860,
		name: "Morgrem",
		types: [
			"Dark",
			"Fairy"
		],
		baseStats: {
			hp: 65,
			atk: 60,
			def: 45,
			spe: 70,
			spa: 55,
			spd: 70
		},
		abilities: {
			0: "Prankster",
			1: "Frisk",
			H: "Pickpocket"
		},
		inherit: true,
		baseSpecies: "Morgrem",
		eggGroups: [
			"Fairy",
			"Humanlike"
		],
		weightkg: 12.5
	},
	obstagoon: {
		num: 862,
		name: "Obstagoon",
		types: [
			"Dark",
			"Normal"
		],
		baseStats: {
			hp: 93,
			atk: 95,
			def: 101,
			spe: 95,
			spa: 60,
			spd: 81
		},
		abilities: {
			0: "Reckless",
			1: "Guts",
			H: "Defiant"
		},
		inherit: true,
		baseSpecies: "Obstagoon",
		eggGroups: [
			"Field"
		],
		weightkg: 46.0
	},
	milcery: {
		num: 863,
		name: "Milcery",
		types: [
			"Fairy"
		],
		baseStats: {
			hp: 45,
			atk: 40,
			def: 40,
			spe: 34,
			spa: 50,
			spd: 61
		},
		abilities: {
			0: "Regenerator",
			H: "Cute Charm"
		},
		inherit: true,
		baseSpecies: "Milcery",
		eggGroups: [
			"Fairy",
			"Amorphous"
		],
		weightkg: 0.3
	},
	alcremie: {
		num: 864,
		name: "Alcremie",
		types: [
			"Fairy"
		],
		baseStats: {
			hp: 65,
			atk: 60,
			def: 75,
			spe: 64,
			spa: 110,
			spd: 121
		},
		abilities: {
			0: "Cute Charm",
			H: "Cute Charm"
		},
		inherit: true,
		baseSpecies: "Alcremie",
		eggGroups: [
			"Fairy",
			"Amorphous"
		],
		weightkg: 0.5
	},
	falinks: {
		num: 865,
		name: "Falinks",
		types: [
			"Fairy",
			"Fighting"
		],
		baseStats: {
			hp: 65,
			atk: 110,
			def: 110,
			spe: 75,
			spa: 70,
			spd: 60
		},
		abilities: {
			0: "Skill Link",
			H: "Defiant"
		},
		inherit: true,
		baseSpecies: "Falinks",
		eggGroups: [
			"Fairy",
			"Mineral"
		],
		weightkg: 62.0
	},
	pincurchin: {
		num: 866,
		name: "Pincurchin",
		types: [
			"Electric"
		],
		baseStats: {
			hp: 48,
			atk: 101,
			def: 95,
			spe: 15,
			spa: 91,
			spd: 85
		},
		abilities: {
			0: "Lightning Rod",
			H: "Static"
		},
		inherit: true,
		baseSpecies: "Pincurchin",
		eggGroups: [
			"Water1",
			"Amorphous"
		],
		weightkg: 2.2
	},
	snom: {
		num: 867,
		name: "Snom",
		types: [
			"Ice",
			"Bug"
		],
		baseStats: {
			hp: 30,
			atk: 25,
			def: 35,
			spe: 20,
			spa: 45,
			spd: 30
		},
		abilities: {
			0: "Shield Dust",
			H: "Snow Warning"
		},
		inherit: true,
		baseSpecies: "Snom",
		eggGroups: [
			"Bug"
		],
		weightkg: 3.6
	},
	frosmoth: {
		num: 868,
		name: "Frosmoth",
		types: [
			"Ice",
			"Bug"
		],
		baseStats: {
			hp: 70,
			atk: 65,
			def: 60,
			spe: 65,
			spa: 125,
			spd: 90
		},
		abilities: {
			0: "Shield Dust",
			1: "Tinted Lens",
			H: "Snow Warning"
		},
		inherit: true,
		baseSpecies: "Frosmoth",
		eggGroups: [
			"Bug"
		],
		weightkg: 42.0
	},
	stonjourner: {
		num: 869,
		name: "Stonjourner",
		types: [
			"Rock"
		],
		baseStats: {
			hp: 100,
			atk: 125,
			def: 135,
			spe: 70,
			spa: 20,
			spd: 20
		},
		abilities: {
			0: "Sturdy"
		},
		inherit: true,
		baseSpecies: "Stonjourner",
		eggGroups: [
			"Mineral"
		],
		weightkg: 520.0
	},
	eiscue: {
		num: 870,
		name: "Eiscue",
		types: [
			"Ice"
		],
		baseStats: {
			hp: 75,
			atk: 80,
			def: 110,
			spe: 50,
			spa: 65,
			spd: 90
		},
		abilities: {
			0: "Adaptability"
		},
		inherit: true,
		baseSpecies: "Eiscue",
		eggGroups: [
			"Water1",
			"Field"
		],
		weightkg: 89.0
	},
	indeedee: {
		num: 871,
		name: "Indeedee",
		types: [
			"Psychic",
			"Normal"
		],
		baseStats: {
			hp: 60,
			atk: 65,
			def: 55,
			spe: 95,
			spa: 105,
			spd: 95
		},
		abilities: {
			0: "Inner Focus",
			1: "Synchronize",
			H: "Synchronize"
		},
		inherit: true,
		baseSpecies: "Indeedee",
		eggGroups: [
			"Fairy"
		],
		weightkg: 28.0
	},
	morpeko: {
		num: 872,
		name: "Morpeko",
		types: [
			"Electric",
			"Dark"
		],
		baseStats: {
			hp: 58,
			atk: 95,
			def: 58,
			spe: 97,
			spa: 70,
			spd: 58
		},
		abilities: {
			0: "Static"
		},
		inherit: true,
		baseSpecies: "Morpeko",
		eggGroups: [
			"Field",
			"Fairy"
		],
		weightkg: 3.0
	},
	cufant: {
		num: 873,
		name: "Cufant",
		types: [
			"Steel"
		],
		baseStats: {
			hp: 72,
			atk: 80,
			def: 49,
			spe: 40,
			spa: 49,
			spd: 40
		},
		abilities: {
			0: "Sheer Force",
			H: "Heavy Metal"
		},
		inherit: true,
		baseSpecies: "Cufant",
		eggGroups: [
			"Field",
			"Mineral"
		],
		weightkg: 100.0
	},
	dracozolt: {
		num: 875,
		name: "Dracozolt",
		types: [
			"Electric",
			"Dragon"
		],
		baseStats: {
			hp: 90,
			atk: 115,
			def: 90,
			spe: 75,
			spa: 80,
			spd: 70
		},
		abilities: {
			0: "Volt Absorb",
			1: "Hustle",
			H: "Sand Rush"
		},
		inherit: true,
		baseSpecies: "Dracozolt",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 190.0
	},
	arctozolt: {
		num: 876,
		name: "Arctozolt",
		types: [
			"Electric",
			"Ice"
		],
		baseStats: {
			hp: 90,
			atk: 115,
			def: 90,
			spe: 55,
			spa: 90,
			spd: 80
		},
		abilities: {
			0: "Volt Absorb",
			1: "Static",
			H: "Snow Cloak"
		},
		inherit: true,
		baseSpecies: "Arctozolt",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 150.0
	},
	dracovish: {
		num: 877,
		name: "Dracovish",
		types: [
			"Water",
			"Dragon"
		],
		baseStats: {
			hp: 90,
			atk: 110,
			def: 100,
			spe: 75,
			spa: 70,
			spd: 80
		},
		abilities: {
			0: "Water Absorb",
			1: "Strong Jaw",
			H: "Sand Rush"
		},
		inherit: true,
		baseSpecies: "Dracovish",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 215.0
	},
	arctovish: {
		num: 878,
		name: "Arctovish",
		types: [
			"Water",
			"Ice"
		],
		baseStats: {
			hp: 90,
			atk: 115,
			def: 90,
			spe: 55,
			spa: 90,
			spd: 80
		},
		abilities: {
			0: "Water Absorb",
			1: "Ice Body",
			H: "Snow Cloak"
		},
		inherit: true,
		baseSpecies: "Arctovish",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 175.0
	},
	duraludon: {
		num: 879,
		name: "Duraludon",
		types: [
			"Steel",
			"Dragon"
		],
		baseStats: {
			hp: 70,
			atk: 95,
			def: 115,
			spe: 85,
			spa: 120,
			spd: 50
		},
		abilities: {
			0: "Light Metal",
			1: "Heavy Metal",
			H: "Clear Body"
		},
		inherit: true,
		baseSpecies: "Duraludon",
		eggGroups: [
			"Mineral",
			"Dragon"
		],
		weightkg: 40.0
	},
	mrrime: {
		num: 883,
		name: "Mr. Rime",
		types: [
			"Ice",
			"Psychic"
		],
		baseStats: {
			hp: 80,
			atk: 85,
			def: 75,
			spe: 70,
			spa: 110,
			spd: 100
		},
		abilities: {
			0: "Tangled Feet",
			H: "Ice Body"
		},
		inherit: true,
		baseSpecies: "Mr. rime",
		eggGroups: [
			"Humanlike"
		],
		weightkg: 58.2
	},
	sirfetchd: {
		num: 884,
		name: "Sirfetch'd",
		types: [
			"Fighting",
			"Steel"
		],
		baseStats: {
			hp: 62,
			atk: 135,
			def: 95,
			spe: 65,
			spa: 68,
			spd: 82
		},
		abilities: {
			0: "Technician",
			H: "Scrappy"
		},
		inherit: true,
		baseSpecies: "Sirfetch'd",
		eggGroups: [
			"Flying",
			"Field"
		],
		weightkg: 117.0
	},
	cursola: {
		num: 885,
		name: "Cursola",
		types: [
			"Ghost"
		],
		baseStats: {
			hp: 60,
			atk: 95,
			def: 50,
			spe: 30,
			spa: 145,
			spd: 130
		},
		abilities: {
			0: "Weak Armor",
			H: "Cursed Body"
		},
		inherit: true,
		baseSpecies: "Cursola",
		eggGroups: [
			"Water1",
			"Water3"
		],
		weightkg: 0.4
	},
	zacian: {
		num: 886,
		name: "Zacian",
		types: [
			"Fairy",
			"Steel"
		],
		baseStats: {
			hp: 92,
			atk: 130,
			def: 115,
			spe: 138,
			spa: 80,
			spd: 115
		},
		abilities: {
			0: "Pressure"
		},
		inherit: true,
		baseSpecies: "Zacian",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 110.0
	},
	zamazenta: {
		num: 887,
		name: "Zamazenta",
		types: [
			"Fighting",
			"Steel"
		],
		baseStats: {
			hp: 92,
			atk: 130,
			def: 115,
			spe: 138,
			spa: 80,
			spd: 115
		},
		abilities: {
			0: "Pressure"
		},
		inherit: true,
		baseSpecies: "Zamazenta",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 210.0
	},
	nihilego: {
		num: 895,
		name: "Nihilego",
		types: [
			"Rock",
			"Poison"
		],
		baseStats: {
			hp: 99,
			atk: 53,
			def: 47,
			spe: 93,
			spa: 117,
			spd: 111
		},
		abilities: {
			0: "Levitate"
		},
		inherit: true,
		baseSpecies: "Nihilego",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 55.5
	},
	buzzwole: {
		num: 896,
		name: "Buzzwole",
		types: [
			"Bug",
			"Fighting"
		],
		baseStats: {
			hp: 97,
			atk: 129,
			def: 119,
			spe: 89,
			spa: 53,
			spd: 53
		},
		abilities: {
			0: "Iron Fist"
		},
		inherit: true,
		baseSpecies: "Buzzwole",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 333.6
	},
	pheromosa: {
		num: 897,
		name: "Pheromosa",
		types: [
			"Bug",
			"Fighting"
		],
		baseStats: {
			hp: 71,
			atk: 127,
			def: 37,
			spe: 131,
			spa: 117,
			spd: 37
		},
		abilities: {
			0: "Reckless"
		},
		inherit: true,
		baseSpecies: "Pheromosa",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 25.0
	},
	xurkitree: {
		num: 898,
		name: "Xurkitree",
		types: [
			"Electric"
		],
		baseStats: {
			hp: 73,
			atk: 89,
			def: 61,
			spe: 83,
			spa: 143,
			spd: 71
		},
		abilities: {
			0: "Volt Absorb"
		},
		inherit: true,
		baseSpecies: "Xurkitree",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 100.0
	},
	celesteela: {
		num: 899,
		name: "Celesteela",
		types: [
			"Steel",
			"Flying"
		],
		baseStats: {
			hp: 87,
			atk: 91,
			def: 93,
			spe: 61,
			spa: 97,
			spd: 91
		},
		abilities: {
			0: "Heavy Metal"
		},
		inherit: true,
		baseSpecies: "Celesteela",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 999.9
	},
	kartana: {
		num: 900,
		name: "Kartana",
		types: [
			"Grass",
			"Steel"
		],
		baseStats: {
			hp: 59,
			atk: 151,
			def: 111,
			spe: 109,
			spa: 59,
			spd: 31
		},
		abilities: {
			0: "Weak Armor"
		},
		inherit: true,
		baseSpecies: "Kartana",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 0.1
	},
	guzzlord: {
		num: 901,
		name: "Guzzlord",
		types: [
			"Dark",
			"Dragon"
		],
		baseStats: {
			hp: 173,
			atk: 101,
			def: 53,
			spe: 43,
			spa: 97,
			spd: 53
		},
		abilities: {
			0: "Gluttony"
		},
		inherit: true,
		baseSpecies: "Guzzlord",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 888.0
	},
	poipole: {
		num: 902,
		name: "Poipole",
		types: [
			"Poison"
		],
		baseStats: {
			hp: 67,
			atk: 73,
			def: 67,
			spe: 73,
			spa: 73,
			spd: 67
		},
		abilities: {
			0: "Infiltrator"
		},
		inherit: true,
		baseSpecies: "Poipole",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 1.8
	},
	naganadel: {
		num: 903,
		name: "Naganadel",
		types: [
			"Poison",
			"Dragon"
		],
		baseStats: {
			hp: 73,
			atk: 73,
			def: 73,
			spe: 121,
			spa: 117,
			spd: 73
		},
		abilities: {
			0: "Infiltrator"
		},
		inherit: true,
		baseSpecies: "Naganadel",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 150.0
	},
	stakataka: {
		num: 904,
		name: "Stakataka",
		types: [
			"Rock",
			"Steel"
		],
		baseStats: {
			hp: 61,
			atk: 121,
			def: 181,
			spe: 13,
			spa: 53,
			spd: 91
		},
		abilities: {
			0: "Sturdy"
		},
		inherit: true,
		baseSpecies: "Stakataka",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 820.0
	},
	blacephalon: {
		num: 905,
		name: "Blacephalon",
		types: [
			"Fire",
			"Ghost"
		],
		baseStats: {
			hp: 53,
			atk: 97,
			def: 53,
			spe: 107,
			spa: 141,
			spd: 69
		},
		abilities: {
			0: "Prankster"
		},
		inherit: true,
		baseSpecies: "Blacephalon",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 13.0
	},
	runerigus: {
		num: 916,
		name: "Runerigus",
		types: [
			"Ghost",
			"Ground"
		],
		baseStats: {
			hp: 58,
			atk: 95,
			def: 145,
			spe: 30,
			spa: 50,
			spd: 105
		},
		abilities: {
			0: "Mummy"
		},
		inherit: true,
		baseSpecies: "Runerigus",
		eggGroups: [
			"Mineral",
			"Amorphous"
		],
		weightkg: 76.5
	},
	perrserker: {
		num: 917,
		name: "Perrserker",
		types: [
			"Steel"
		],
		baseStats: {
			hp: 70,
			atk: 110,
			def: 100,
			spe: 50,
			spa: 50,
			spd: 60
		},
		abilities: {
			0: "Battle Armor",
			1: "Tough Claws",
			H: "Intimidate"
		},
		inherit: true,
		baseSpecies: "Perrserker",
		eggGroups: [
			"Field"
		],
		weightkg: 28.0
	},
	urshifu: {
		num: 919,
		name: "Urshifu",
		types: [
			"Fighting",
			"Dark"
		],
		baseStats: {
			hp: 100,
			atk: 130,
			def: 100,
			spe: 97,
			spa: 63,
			spd: 60
		},
		abilities: {
			0: "Iron Fist"
		},
		inherit: true,
		baseSpecies: "Urshifu",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 105.0
	},
	regieleki: {
		num: 921,
		name: "Regieleki",
		types: [
			"Electric"
		],
		baseStats: {
			hp: 80,
			atk: 100,
			def: 50,
			spe: 200,
			spa: 100,
			spd: 50
		},
		abilities: {
			0: "Volt Absorb"
		},
		inherit: true,
		baseSpecies: "Regieleki",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 200.0
	},
	regidrago: {
		num: 922,
		name: "Regidrago",
		types: [
			"Dragon"
		],
		baseStats: {
			hp: 200,
			atk: 100,
			def: 50,
			spe: 80,
			spa: 100,
			spd: 50
		},
		abilities: {
			0: "Intimidate"
		},
		inherit: true,
		baseSpecies: "Regidrago",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 200.0
	},
	glastrier: {
		num: 923,
		name: "Glastrier",
		types: [
			"Ice"
		],
		baseStats: {
			hp: 100,
			atk: 145,
			def: 130,
			spe: 30,
			spa: 65,
			spd: 110
		},
		abilities: {
			0: "Snow Warning"
		},
		inherit: true,
		baseSpecies: "Glastrier",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 800.0
	},
	spectrier: {
		num: 924,
		name: "Spectrier",
		types: [
			"Ghost"
		],
		baseStats: {
			hp: 100,
			atk: 65,
			def: 60,
			spe: 130,
			spa: 145,
			spd: 80
		},
		abilities: {
			0: "Espanto"
		},
		inherit: true,
		baseSpecies: "Spectrier",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 44.5
	},
	calyrex: {
		num: 925,
		name: "Calyrex",
		types: [
			"Psychic",
			"Grass"
		],
		baseStats: {
			hp: 100,
			atk: 100,
			def: 100,
			spe: 100,
			spa: 100,
			spd: 100
		},
		abilities: {
			0: "Unnerve"
		},
		inherit: true,
		baseSpecies: "Calyrex",
		eggGroups: [
			"Undiscovered"
		],
		weightkg: 7.7
	},
	kleavor: {
		num: 926,
		name: "Kleavor",
		types: [
			"Bug",
			"Rock"
		],
		baseStats: {
			hp: 70,
			atk: 135,
			def: 95,
			spe: 85,
			spa: 45,
			spd: 70
		},
		abilities: {
			0: "Swarm",
			1: "Technician",
			H: "Steadfast"
		},
		inherit: true,
		baseSpecies: "Kleavor",
		eggGroups: [
			"Bug"
		],
		weightkg: 118.0
	},
	basculegion: {
		num: 928,
		name: "Basculegion",
		types: [
			"Water",
			"Ghost"
		],
		baseStats: {
			hp: 120,
			atk: 112,
			def: 65,
			spe: 78,
			spa: 80,
			spd: 75
		},
		abilities: {
			0: "Reckless",
			1: "Adaptability",
			H: "Mold Breaker"
		},
		inherit: true,
		baseSpecies: "Basculegion",
		eggGroups: [
			"Water2"
		],
		weightkg: 18.0
	},
	sneasler: {
		num: 930,
		name: "Sneasler",
		types: [
			"Fighting",
			"Poison"
		],
		baseStats: {
			hp: 80,
			atk: 130,
			def: 60,
			spe: 120,
			spa: 40,
			spd: 80
		},
		abilities: {
			0: "Poison Touch",
			H: "Pickpocket"
		},
		inherit: true,
		baseSpecies: "Sneasler",
		eggGroups: [
			"Field"
		],
		weightkg: 34.0
	}
};
