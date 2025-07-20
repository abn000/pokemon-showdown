export const Moves: import('../../../sim/dex-moves').ModdedMoveDataTable = {
	allyswitch: {
		inherit: true,
		// Prevents setting the volatile used to check for Ally Switch failure
		onPrepareHit() {},
	},
	anchorshot: {
		inherit: true,
		isNonstandard: null,
	},
	aromatherapy: {
		inherit: true,
		isNonstandard: null,
	},
	assist: {
		inherit: true,
		flags: { failencore: 1, nosleeptalk: 1, noassist: 1, failcopycat: 1, failinstruct: 1 },
	},
	auroraveil: {
		inherit: true,
		onTry() {
			return this.field.isWeather('hail');
		},
	},
	autotomize: {
		inherit: true,
		isNonstandard: null,
	},
	beakblast: {
		inherit: true,
		isNonstandard: "Past",
	},
	blizzard: {
		inherit: true,
		onModifyMove(move) {
			if (this.field.isWeather('hail')) move.accuracy = true;
		},
	},
	boltbeak: {
		inherit: true,
		isNonstandard: null,
	},
	bonemerang: {
		inherit: true,
		isNonstandard: null,
	},
	burnup: {
		inherit: true,
		isNonstandard: null,
	},
	celebrate: {
		inherit: true,
		flags: { nosleeptalk: 1, noassist: 1, failcopycat: 1, failinstruct: 1 },
	},
	charge: {
		inherit: true,
		condition: {
			onStart(pokemon, source, effect) {
				this.add('-start', pokemon, 'Charge');
			},
			onRestart(pokemon, source, effect) {
				this.add('-start', pokemon, 'Charge');
			},
			onBasePowerPriority: 9,
			onBasePower(basePower, attacker, defender, move) {
				if (move.type === 'Electric') {
					this.debug('charge boost');
					return this.chainModify(2);
				}
			},
			onMoveAborted(pokemon, target, move) {
				if (move.id !== 'charge') {
					pokemon.removeVolatile('charge');
				}
			},
			onAfterMove(pokemon, target, move) {
				if (move.id !== 'charge') {
					pokemon.removeVolatile('charge');
				}
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Charge', '[silent]');
			},
		},
	},
	copycat: {
		inherit: true,
		flags: { failencore: 1, nosleeptalk: 1, noassist: 1, failcopycat: 1, failinstruct: 1 },
	},
	coreenforcer: {
		inherit: true,
		isNonstandard: null,
	},
	corrosivegas: {
		inherit: true,
		isNonstandard: null,
	},
	craftyshield: {
		inherit: true,
		isNonstandard: null,
	},
	curse: {
		inherit: true,
		onModifyMove(move, source, target) {
			if (!source.hasType('Ghost')) {
				move.target = move.nonGhostTarget!;
			}
		},
		target: "randomNormal",
	},
	doubleironbash: {
		inherit: true,
		isNonstandard: null,
	},
	dragonhammer: {
		inherit: true,
		flags: { contact: 1, protect: 1, mirror: 1 },
	},
	dualchop: {
		inherit: true,
		isNonstandard: null,
	},
	electrify: {
		inherit: true,
		isNonstandard: null,
	},
	eternabeam: {
		inherit: true,
		flags: { recharge: 1, protect: 1, mirror: 1, failinstruct: 1 },
		isNonstandard: null,
	},
	fishiousrend: {
		inherit: true,
		isNonstandard: null,
	},
	flowershield: {
		inherit: true,
		isNonstandard: null,
	},
	geargrind: {
		inherit: true,
		isNonstandard: null,
	},
	gearup: {
		inherit: true,
		isNonstandard: null,
	},
	geomancy: {
		inherit: true,
		isNonstandard: null,
	},
	glaciallance: {
		inherit: true,
		basePower: 130,
	},
	grassyglide: {
		inherit: true,
		basePower: 70,
	},
	grudge: {
		inherit: true,
		isNonstandard: null,
	},
	hail: {
		inherit: true,
		isNonstandard: null,
	},
	headcharge: {
		inherit: true,
		isNonstandard: null,
	},
	heartswap: {
		inherit: true,
		isNonstandard: "Past",
	},
	holdback: {
		inherit: true,
		isNonstandard: null,
	},
	holdhands: {
		inherit: true,
		isNonstandard: null,
		flags: { bypasssub: 1, nosleeptalk: 1, noassist: 1, failcopycat: 1, failinstruct: 1 },
	},
	hyperspacefury: {
		inherit: true,
		isNonstandard: "Past",
		flags: { mirror: 1, bypasssub: 1 },
	},
	hyperspacehole: {
		inherit: true,
		isNonstandard: "Past",
	},
	icehammer: {
		inherit: true,
		isNonstandard: "Past",
	},
	judgment: {
		inherit: true,
		isNonstandard: "Past",
	},
	kinesis: {
		inherit: true,
		isNonstandard: null,
	},
	kingsshield: {
		inherit: true,
		isNonstandard: null,
	},
	landswrath: {
		inherit: true,
		isNonstandard: null,
	},
	laserfocus: {
		inherit: true,
		isNonstandard: null,
	},
	leaftornado: {
		inherit: true,
		isNonstandard: null,
	},
	lovelykiss: {
		inherit: true,
		isNonstandard: null,
	},
	magiccoat: {
		inherit: true,
		isNonstandard: null,
	},
	matblock: {
		inherit: true,
		isNonstandard: null,
	},
	maxairstream: {
		inherit: true,
		isNonstandard: null,
	},
	maxdarkness: {
		inherit: true,
		isNonstandard: null,
	},
	maxflare: {
		inherit: true,
		isNonstandard: null,
	},
	maxflutterby: {
		inherit: true,
		isNonstandard: null,
	},
	maxgeyser: {
		inherit: true,
		isNonstandard: null,
	},
	maxguard: {
		inherit: true,
		isNonstandard: null,
	},
	maxhailstorm: {
		inherit: true,
		isNonstandard: null,
	},
	maxknuckle: {
		inherit: true,
		isNonstandard: null,
	},
	maxlightning: {
		inherit: true,
		isNonstandard: null,
	},
	maxmindstorm: {
		inherit: true,
		isNonstandard: null,
	},
	maxooze: {
		inherit: true,
		isNonstandard: null,
	},
	maxovergrowth: {
		inherit: true,
		isNonstandard: null,
	},
	maxphantasm: {
		inherit: true,
		isNonstandard: null,
	},
	maxquake: {
		inherit: true,
		isNonstandard: null,
	},
	maxrockfall: {
		inherit: true,
		isNonstandard: null,
	},
	maxstarfall: {
		inherit: true,
		isNonstandard: null,
	},
	maxsteelspike: {
		inherit: true,
		isNonstandard: null,
	},
	maxstrike: {
		inherit: true,
		isNonstandard: null,
	},
	maxwyrmwind: {
		inherit: true,
		isNonstandard: null,
	},
	mefirst: {
		inherit: true,
		flags: {
			protect: 1, bypasssub: 1, failencore: 1, failmefirst: 1, nosleeptalk: 1, noassist: 1, failcopycat: 1, failinstruct: 1,
		},
	},
	meteorassault: {
		inherit: true,
		isNonstandard: null,
	},
	metronome: {
		inherit: true,
		flags: { failencore: 1, nosleeptalk: 1, noassist: 1, failcopycat: 1, failinstruct: 1 },
	},
	milkdrink: {
		inherit: true,
		pp: 10,
	},
	mindblown: {
		inherit: true,
		isNonstandard: null,
	},
	mindreader: {
		inherit: true,
		isNonstandard: null,
	},
	mirrorcoat: {
		inherit: true,
		flags: { protect: 1, failmefirst: 1, noassist: 1, failcopycat: 1 },
	},
	mirrormove: {
		inherit: true,
		flags: { failencore: 1, nosleeptalk: 1, noassist: 1, failcopycat: 1, failinstruct: 1 },
	},
	multiattack: {
		inherit: true,
		isNonstandard: null,
	},
	naturepower: {
		inherit: true,
		isNonstandard: null,
		flags: { failencore: 1, nosleeptalk: 1, noassist: 1, failcopycat: 1, failinstruct: 1 },
	},
	naturesmadness: {
		inherit: true,
		isNonstandard: null,
	},
	oblivionwing: {
		inherit: true,
		isNonstandard: null,
	},
	obstruct: {
		inherit: true,
		isNonstandard: null,
	},
	octazooka: {
		inherit: true,
		isNonstandard: null,
	},
	octolock: {
		inherit: true,
		isNonstandard: null,
	},
	plasmafists: {
		inherit: true,
		isNonstandard: null,
	},
	poweruppunch: {
		inherit: true,
		isNonstandard: null,
	},
	psychoboost: {
		inherit: true,
		isNonstandard: "Past",
	},
	purify: {
		inherit: true,
		isNonstandard: null,
	},
	recover: {
		inherit: true,
		pp: 10,
	},
	relicsong: {
		inherit: true,
		isNonstandard: "Past",
	},
	rest: {
		inherit: true,
		pp: 10,
	},
	revelationdance: {
		inherit: true,
		isNonstandard: "Past",
	},
	revenge: {
		inherit: true,
		isNonstandard: null,
	},
	roost: {
		inherit: true,
		pp: 10,
	},
	searingshot: {
		inherit: true,
		isNonstandard: null,
	},
	secretsword: {
		inherit: true,
		isNonstandard: null,
	},
	seedflare: {
		inherit: true,
		isNonstandard: "Past",
	},
	shadowbone: {
		inherit: true,
		isNonstandard: null,
	},
	shelltrap: {
		inherit: true,
		isNonstandard: null,
	},
	shoreup: {
		inherit: true,
		pp: 10,
	},
	sketch: {
		inherit: true,
		isNonstandard: "Past",
	},
	skullbash: {
		inherit: true,
		isNonstandard: null,
	},
	slackoff: {
		inherit: true,
		pp: 10,
	},
	sleeptalk: {
		inherit: true,
		flags: { failencore: 1, nosleeptalk: 1, noassist: 1, failcopycat: 1, failinstruct: 1 },
	},
	snaptrap: {
		inherit: true,
		isNonstandard: null,
	},
	softboiled: {
		inherit: true,
		pp: 10,
	},
	spectralthief: {
		inherit: true,
		isNonstandard: null,
	},
	stickyweb: {
		inherit: true,
		condition: {
			onSideStart(side) {
				this.add('-sidestart', side, 'move: Sticky Web');
			},
			onSwitchIn(pokemon) {
				if (!pokemon.isGrounded() || pokemon.hasItem('heavydutyboots')) return;
				this.add('-activate', pokemon, 'move: Sticky Web');
				this.boost({ spe: -1 }, pokemon, this.effectState.source, this.dex.getActiveMove('stickyweb'));
			},
		},
	},
	submission: {
		inherit: true,
		isNonstandard: null,
	},
	tailglow: {
		inherit: true,
		isNonstandard: "Past",
	},
	thousandarrows: {
		inherit: true,
		isNonstandard: null,
	},
	thousandwaves: {
		inherit: true,
		isNonstandard: null,
	},
	toxicthread: {
		inherit: true,
		isNonstandard: "Past",
	},
	trickortreat: {
		inherit: true,
		isNonstandard: null,
	},
	vcreate: {
		inherit: true,
		isNonstandard: null,
	},
	venomdrench: {
		inherit: true,
		isNonstandard: null,
	},
	vitalthrow: {
		inherit: true,
		isNonstandard: null,
	},
	wickedblow: {
		inherit: true,
		basePower: 80,
	},
	fellstinger: {
		inherit: true,
		basePower: 80,
		secondary: {
			status: 'psn',
			chance: 30,
		}
	},
	tiroteo: {
		inherit: true,
		isNonstandard: null,
	},
	electrobaba: {
		inherit: true,
		isNonstandard: null,
	},
	fuegolunar: {
		inherit: true,
		isNonstandard: null,
	},
	rompehielos: {
		inherit: true,
		isNonstandard: null,
	},
	trinchar: {
		inherit: true,
		isNonstandard: null,
	},
	desbandada: {
		inherit: true,
		isNonstandard: null,
	},
	fiebredeloro: {
		inherit: true,
		isNonstandard: null,
	},
	maldignicion: {
		inherit: true,
		isNonstandard: null,
	},
	limpiasuenos: {
		inherit: true,
		isNonstandard: null,
	},
	alafunesta: {
		inherit: true,
		isNonstandard: null,
	},
	furiatotemica: {
		inherit: true,
		isNonstandard: null,
	},
	zarzas: {
		inherit: true,
		isNonstandard: null,
	},
	sombratela: {
		inherit: true,
		isNonstandard: null,
	},
	abrazoferoz: {
		inherit: true,
		isNonstandard: null,
	},
	geoimpacto: {
		inherit: true,
		isNonstandard: null,
	},
	pipadelapaz: {
		inherit: true,
		isNonstandard: null,
	},
	borrasca: {
		inherit: true,
		isNonstandard: null,
	},
	ojosterribles: {
		inherit: true,
		isNonstandard: null,
	},
	drenanima: {
		inherit: true,
		isNonstandard: null,
	},
	danzavudu: {
		inherit: true,
		isNonstandard: null,
	},
	choquevapor: {
		inherit: true,
		isNonstandard: null,
	},
	patadagelida: {
		inherit: true,
		isNonstandard: null,
	},
	colmillosalvaje: {
		inherit: true,
		isNonstandard: null,
	},
	brazomusgo: {
		inherit: true,
		isNonstandard: null,
	},
	laseresencia: {
		inherit: true,
		isNonstandard: null,
	},
	caricatura: {
		inherit: true,
		isNonstandard: null,
	},
	flechastral: {
		inherit: true,
		isNonstandard: null,
	},
	lingotazo: {
		inherit: true,
		isNonstandard: null,
	},
	absorbesencia: {
		inherit: true,
		isNonstandard: null,
	},
	fuerzaesencia: {
		inherit: true,
		isNonstandard: null,
	},
	ferroimpacto: {
		inherit: true,
		isNonstandard: null,
	},
	cortepetreo: {
		inherit: true,
		isNonstandard: null,
	},
	snarl: {
		basePower: 65,
		type: "Dark",
		category: "Special",
		accuracy: 100,
		inherit: true
	},
	assurance: {
		basePower: 50,
		type: "Dark",
		category: "Physical",
		accuracy: 100,
		inherit: true
	},
	darkvoid: {
		basePower: 0,
		type: "Dark",
		category: "Status",
		accuracy: 80,
		inherit: true
	},
	dracometeor: {
		basePower: 140,
		type: "Dragon",
		category: "Special",
		accuracy: 90,
		inherit: true
	},
	twister: {
		basePower: 60,
		type: "Dragon",
		category: "Special",
		accuracy: 100,
		inherit: true
	},
	wildcharge: {
		basePower: 100,
		type: "Electric",
		category: "Physical",
		accuracy: 100,
		inherit: true
	},
	thundershock: {
		basePower: 45,
		type: "Electric",
		category: "Special",
		accuracy: 100,
		inherit: true
	},
	thunderwave: {
		basePower: 0,
		type: "Electric",
		category: "Status",
		accuracy: 100,
		inherit: true
	},
	lowsweep: {
		basePower: 60,
		type: "Fighting",
		category: "Physical",
		accuracy: 100,
		inherit: true
	},
	wakeupslap: {
		basePower: 60,
		type: "Fighting",
		category: "Physical",
		accuracy: 100,
		inherit: true
	},
	rocksmash: {
		basePower: 55,
		type: "Fighting",
		category: "Physical",
		accuracy: 100,
		inherit: true
	},
	stormthrow: {
		basePower: 40,
		type: "Fighting",
		category: "Physical",
		accuracy: 100,
		inherit: true
	},
	armthrust: {
		basePower: 20,
		type: "Fighting",
		category: "Physical",
		accuracy: 100,
		inherit: true
	},
	magmastorm: {
		basePower: 120,
		type: "Fire",
		category: "Special",
		accuracy: 75,
		inherit: true
	},
	firepledge: {
		basePower: 50,
		type: "Fire",
		category: "Special",
		accuracy: 100,
		inherit: true
	},
	ember: {
		basePower: 45,
		type: "Fire",
		category: "Special",
		accuracy: 100,
		inherit: true
	},
	skyattack: {
		basePower: 140,
		type: "Flying",
		category: "Physical",
		accuracy: 100,
		inherit: true
	},
	fly: {
		basePower: 90,
		type: "Flying",
		category: "Physical",
		accuracy: 100,
		inherit: true
	},
	airslash: {
		basePower: 80,
		type: "Flying",
		category: "Special",
		accuracy: 100,
		inherit: true
	},
	chatter: {
		basePower: 60,
		type: "Flying",
		category: "Special",
		accuracy: 100,
		inherit: true
	},
	solarbeam: {
		basePower: 130,
		type: "Grass",
		category: "Special",
		accuracy: 100,
		inherit: true
	},
	grasspledge: {
		basePower: 50,
		type: "Grass",
		category: "Special",
		accuracy: 100,
		inherit: true
	},
	megadrain: {
		basePower: 55,
		type: "Grass",
		category: "Special",
		accuracy: 100,
		inherit: true
	},
	absorb: {
		basePower: 30,
		type: "Grass",
		category: "Special",
		accuracy: 100,
		inherit: true
	},
	mudslap: {
		basePower: 30,
		type: "Ground",
		category: "Special",
		accuracy: 100,
		inherit: true
	},
	powdersnow: {
		basePower: 50,
		type: "Ice",
		category: "Special",
		accuracy: 100,
		inherit: true
	},
	lastresort: {
		basePower: 70,
		type: "Normal",
		category: "Physical",
		accuracy: 100,
		inherit: true
	},
	technoblast: {
		basePower: 85,
		type: "Normal",
		category: "Special",
		accuracy: 100,
		inherit: true
	},
	razorwind: {
		basePower: 130,
		type: "Normal",
		category: "Special",
		accuracy: 100,
		inherit: true
	},
	strength: {
		basePower: 80,
		type: "Fighting",
		category: "Physical",
		accuracy: 100,
		inherit: true
	},
	smellingsalts: {
		basePower: 60,
		type: "Normal",
		category: "Physical",
		accuracy: 100,
		inherit: true
	},
	cut: {
		basePower: 65,
		type: "Normal",
		category: "Physical",
		accuracy: 95,
		inherit: true
	},
	snore: {
		basePower: 40,
		type: "Normal",
		category: "Special",
		accuracy: 100,
		inherit: true
	},
	rage: {
		basePower: 30,
		type: "Normal",
		category: "Physical",
		accuracy: 100,
		inherit: true
	},
	rapidspin: {
		basePower: 60,
		type: "Normal",
		category: "Physical",
		accuracy: 100,
		inherit: true
	},
	hiddenpower: {
		basePower: 0,
		type: "Normal",
		category: "Special",
		accuracy: 100,
		inherit: true
	},
	charm: {
		basePower: 0,
		type: "Normal",
		category: "Status",
		accuracy: 100,
		inherit: true
	},
	glare: {
		basePower: 0,
		type: "Normal",
		category: "Status",
		accuracy: 90,
		inherit: true
	},
	roar: {
		basePower: 0,
		type: "Normal",
		category: "Status",
		accuracy: 100,
		inherit: true
	},
	simplebeam: {
		basePower: 0,
		type: "Normal",
		category: "Status",
		accuracy: 10,
		inherit: true
	},
	supersonic: {
		basePower: 0,
		type: "Normal",
		category: "Status",
		accuracy: 75,
		inherit: true
	},
	swagger: {
		basePower: 0,
		type: "Normal",
		category: "Status",
		accuracy: 90,
		inherit: true
	},
	sweetkiss: {
		basePower: 0,
		type: "Normal",
		category: "Status",
		accuracy: 75,
		inherit: true
	},
	whirlwind: {
		basePower: 0,
		type: "Normal",
		category: "Status",
		accuracy: 100,
		inherit: true
	},
	poisonsting: {
		basePower: 25,
		type: "Poison",
		category: "Physical",
		accuracy: 100,
		inherit: true
	},
	poisongas: {
		basePower: 0,
		type: "Poison",
		category: "Status",
		accuracy: 80,
		inherit: true
	},
	futuresight: {
		basePower: 130,
		type: "Psychic",
		category: "Special",
		accuracy: 100,
		inherit: true
	},
	zenheadbutt: {
		basePower: 90,
		type: "Psychic",
		category: "Physical",
		accuracy: 90,
		inherit: true
	},
	lusterpurge: {
		basePower: 70,
		type: "Psychic",
		category: "Special",
		accuracy: 100,
		inherit: true
	},
	mistball: {
		basePower: 70,
		type: "Psychic",
		category: "Special",
		accuracy: 100,
		inherit: true
	},
	psywave: {
		basePower: 0,
		type: "Psychic",
		category: "Special",
		accuracy: 80,
		inherit: true
	},
	storedpower: {
		basePower: 0,
		type: "Psychic",
		category: "Special",
		accuracy: 100,
		inherit: true
	},
	psychoshift: {
		basePower: 0,
		type: "Psychic",
		category: "Status",
		accuracy: 90,
		inherit: true
	},
	rockslide: {
		basePower: 80,
		type: "Rock",
		category: "Physical",
		accuracy: 95,
		inherit: true
	},
	irontail: {
		basePower: 110,
		type: "Steel",
		category: "Physical",
		accuracy: 85,
		inherit: true
	},
	meteormash: {
		basePower: 100,
		type: "Steel",
		category: "Physical",
		accuracy: 85,
		inherit: true
	},
	steelwing: {
		basePower: 90,
		type: "Steel",
		category: "Physical",
		accuracy: 90,
		inherit: true
	},
	metalclaw: {
		basePower: 60,
		type: "Steel",
		category: "Physical",
		accuracy: 95,
		inherit: true
	},
	aquatail: {
		basePower: 95,
		type: "Water",
		category: "Physical",
		accuracy: 90,
		inherit: true
	},
	dive: {
		basePower: 90,
		type: "Water",
		category: "Physical",
		accuracy: 100,
		inherit: true
	},
	waterpledge: {
		basePower: 50,
		type: "Water",
		category: "Special",
		accuracy: 100,
		inherit: true
	},
	watergun: {
		basePower: 45,
		type: "Water",
		category: "Special",
		accuracy: 100,
		inherit: true
	},
	clamp: {
		basePower: 50,
		type: "Water",
		category: "Physical",
		accuracy: 85,
		inherit: true
	},
	soak: {
		basePower: 0,
		type: "Water",
		category: "Status",
		accuracy: true,
		inherit: true
	},
	belch: {
		basePower: 130,
		type: "Poison",
		category: "Special",
		accuracy: 100,
		inherit: true
	},
	drainingkiss: {
		basePower: 60,
		type: "Fairy",
		category: "Special",
		accuracy: 100,
		inherit: true
	},
	fairywind: {
		basePower: 50,
		type: "Fairy",
		category: "Special",
		accuracy: 100,
		inherit: true
	},
	flyingpress: {
		basePower: 80,
		type: "Fighting",
		category: "Physical",
		accuracy: 95,
		inherit: true
	},
	freezedry: {
		basePower: 80,
		type: "Ice",
		category: "Special",
		accuracy: 100,
		inherit: true
	},
	paraboliccharge: {
		basePower: 70,
		type: "Electric",
		category: "Special",
		accuracy: 100,
		inherit: true
	},
	originpulse: {
		basePower: 120,
		type: "Water",
		category: "Special",
		accuracy: 85,
		inherit: true
	}
};
