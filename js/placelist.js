/*var airport = [
	chicago ={
		name: "chicago",
		officialName: "Gerry Rafferty - Baker Street",
		place: "ohareairport", //facebook's place id
		video: "SSd0pJSKzNY", //youtube's video id
		checkins: "loading...", // "loading..." as initial value
		interval: null, //null as initial value
		startTime: 10, //what seconds this video starts at
		endTime: 20 //what seconds this video ends at
	},
	heathrow ={
		id: "heathrow",
		placename: "Heathrow International",
		place: "238343719514675",
		video: "Kej8DsnVVVk",
		checkins: "loading...",
		interval: null,
		startTime: 5,
		endTime: 10
	},
	tokyo ={
		id: "tokyo",
		placename: "Tokyo Narita International",
		place: "149087661792288",
		video: "XG7gK_67wDA",
		checkins: "loading...",
		interval: null,
		startTime: 10,
		endTime: 20
	}
]
*/

var placeObjs = [
	bakerSt ={
		id: "bakerSt",
		placename: "Baker Street",
		artist: "Gerry Raferty",
		songname: "Baker Street",
		place: "153350041353078",
		video: "SXCUGQHGi5o",
		checkins: "loading...",
		interval: null,
		startTime: 25,
		endTime: 57
	},
	waterloo ={
		id: "waterloo",
		placename: "Waterloo Station",
		artist: "The Kinks",
		songname: "Waterloo Sunset",
		place: "148598695180177",
		video: "fvDoDaCYrEY",
		checkins: "loading...",
		interval: null,
		startTime: 3,
		endTime: 40
		
	},
	brixton ={
		id: "brixton",
		placename: "Brixton Station",
		artist: "Gerry Raferty",
		songname: "Electric Avenue",
		place: "152383221448557",
		video: "vtPk5IUbdH0",
		checkins: "loading...",
		interval: null,
		startTime: 31,
		endTime: 48
	},
	soho ={
		id: "soho",
		placename: "Soho",
		artist: "The Pogues",
		songname: "Rainy Night in Soho",
		place: "150103361689259",
		video: "55Yp8vecWXM",
		checkins: "loading...",
		interval: null,
		startTime: 85,
		endTime: 140
	},
	piccadilly ={
		id: "piccadilly",
		placename: "Piccadilly Circus",
		artist: "Squeeze",
		songname: "Piccadilly",
		place: "143003915765979",
		video: "cUYEsFgHl_4",
		checkins: "loading...",
		interval: null,
		startTime: 0,
		endTime: 46
	},
	victoria ={
		id: "victoria",
		placename: "Victoria Station",
		artist: "The Kinks",
		songname: "Victoria",
		place: "108647005863529",
		video: "6VzsQoR806c",
		checkins: "loading...",
		interval: null,
		startTime: 67,
		endTime: 83
	},
	/*chelsea ={
		id: "chelsea",
		placename: "Chelsea",
		artist: "Elvis Costello",
		songname: "I Don't Want To Go Chelsea",
		place: "108647005863529", // not yet
		video: "DjYTgwDizbk",
		checkins: "loading...",
		interval: null,
		startTime: 44,
		endTime: 65
	},
	goodgeSt ={
		id: "goodgeSt",
		placename: "Goodge Street",
		artist: "Donovan",
		songname: "Sunny Goodge Street",
		place: "108647005863529",// not yet
		video: "kI434oaUT2Y",
		checkins: "loading...",
		interval: null,
		startTime: 33,
		endTime: 49
	},
	camden ={
		id: "camden",
		placename: "Camden Town",
		artist: "Suggs",
		songname: "Camden Town",
		place: "108647005863529",//not yet
		video: "6CyaEEYeR7w",
		checkins: "loading...",
		interval: null,
		startTime: 35,
		endTime: 58
	},
	warwickAv ={
		id: "warwickAv",
		placename: "Warwick Avenue",
		artist: "Duffy",
		songname: "Warwick Avenue",
		place: "108647005863529",//not yet
		video: "MkkmQNA_aRs",
		checkins: "loading...",
		interval: null,
		startTime: 35,
		endTime: 58
	},*/
	buckinghamPalace ={
		id: "buckinghamPalace",
		placename: "Buckingham Palace",
		artist: "Russ Conway",
		songname: "Westminster Waltz",
		place: "109943272365076",//Buckingham Palace
		video: "qsFyoSKNSic",
		checkins: "loading...",
		interval: null,
		startTime: 0,
		endTime: 48
	},
	/*newcross ={
		id: "newcross",
		placename: "New Cross",
		artist: "Carter USM",
		songname: "The Only Living Boy In New Cross",
		place: "108647005863529",//not yet
		video: "piyGAdcd_s8",
		checkins: "loading...",
		interval: null,
		startTime: 65,
		endTime: 110
	},
	finchley ={
		id: "finchley",
		placename: "Finchley Central",
		artist: "New Vaudeville Band",
		songname: "Finchley Central",
		place: "108647005863529",//not yet
		video: "UvMYHbN5baw",
		checkins: "loading...",
		interval: null,
		startTime: 0,
		endTime: 48
	},*/
	kingscross ={
		id: "kingscross",
		placename: "King's Cross",
		artist: "Pet Shop Boys",
		songname: "King's Cross",
		place: "kingscrosslondon",
		video: "jIcdlNvyRVI",
		checkins: "loading...",
		interval: null,
		startTime: 102,
		endTime: 132
	},
	/*mileend ={
		id: "mileend",
		placename: "Mile End",
		artist: "Pulp",
		songname: "Mile End",
		place: "238343719514675",//not yet
		video: "MEaKNNboFiE",
		checkins: "loading...",
		interval: null,
		startTime: 0,
		endTime: 49
	},
	wardourSt ={
		id: "wardourSt",
		placename: "Wardour Street",
		artist: "The Jam",
		songname: "A Bomb In Wardour Street",
		place: "ohareairport",//not yet
		video: "cZPSZYPHYtQ",
		checkins: "loading...",
		interval: null,
		startTime: 27,
		endTime: 60
	},*/
	westfield ={
			id: "westfield",
			placename: "Westfield Shopping Centre",
			artist: "The Pogues",
			songname: "White City",
			place: "153044794716969",
			video: "vCITD_Hi3tU",
			checkins: "loading...",
			interval: null,
			startTime: 12,
			endTime: 60
		},
	lutonAirport ={
			id: "lutonAirport",
			placename: "Luton Airport",
			artist: "Cats UK",
			songname: "Luton Airport",
			place: "163914683662328",
			video: "dldJCeZjcBo",
			checkins: "loading...",
			interval: null,
			startTime: 37,
			endTime: 52
		},
	paddington ={
				id: "paddington",
				placename: "Paddington Station",
				artist: "Herbert Chappell",
				songname: "Paddington Bear TV Theme Song",
				place: "147144708658259",
				video: "B2jlIytnw10",
				checkins: "loading...",
				interval: null,
				startTime: 37,
				endTime: 52
			},
	coventGarden ={
			id: "coventGarden",
			placename: "Covent Garden Market",
			artist: "Maria Callas",
			songname: "Carmen, Covent Garden Opera House",
			place: "138660022845831",
			video: "6fZRssq7UlM",
			checkins: "loading...",
			interval: null,
			startTime: 49,
			endTime: 83
		}
	
]
