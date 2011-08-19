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
		startTime: 29,
		endTime: 84
	},
	chelsea ={
		id: "chelsea",
		placename: "Chelsea FC",
		artist: "Elvis Costello",
		songname: "I Don't Want To Go Chelsea",
		place: "210658373173",
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
		place: "115863865148235",
		video: "kI434oaUT2Y",
		checkins: "loading...",
		interval: null,
		startTime: 33,
		endTime: 49
	},
	camden ={
		id: "camden",
		placename: "Camden Town Station",
		artist: "Suggs",
		songname: "Camden Town",
		place: "126390497413455",
		video: "6CyaEEYeR7w",
		checkins: "loading...",
		interval: null,
		startTime: 35,
		endTime: 58
	},
	warwickAv ={
		id: "warwickAv",
		placename: "Little Venice",
		artist: "Duffy",
		songname: "Warwick Avenue",
		place: "155122281183013",
		video: "MkkmQNA_aRs",
		checkins: "loading...",
		interval: null,
		startTime: 35,
		endTime: 58
	},
	westminster ={
		id: "westminster",
		placename: "Westminster, London",
		artist: "Russ Conway",
		songname: "Westminster Waltz",
		place: "106078429431815",
		video: "qsFyoSKNSic",
		checkins: "loading...",
		interval: null,
		startTime: 0,
		endTime: 48
	},
	newcross ={
		id: "newcross",
		placename: "New Cross Inn",
		artist: "Carter USM",
		songname: "The Only Living Boy In New Cross",
		place: "NewXInn",
		video: "piyGAdcd_s8",
		checkins: "loading...",
		interval: null,
		startTime: 65,
		endTime: 110
	},
	finchley ={
		id: "finchley",
		placename: "Finchley central station",
		artist: "New Vaudeville Band",
		songname: "Finchley Central",
		place: "142955922434488",
		video: "UvMYHbN5baw",
		checkins: "loading...",
		interval: null,
		startTime: 0,
		endTime: 48
	},
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
	mileend ={
		id: "mileend",
		placename: "Mile End Station",
		artist: "Pulp",
		songname: "Mile End",
		place: "147194711982590",
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
		place: "160821167264510",
		video: "cZPSZYPHYtQ",
		checkins: "loading...",
		interval: null,
		startTime: 27,
		endTime: 60
	}
]
