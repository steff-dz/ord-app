//Sidenote: the inactive skaters start from Fanny and below

import ORDLogo from './images/oslo.png';
import Torture from './images/Torture.jpg';
import Skrekkspill from './images/Skrekkspill.jpg';
import Pikante from './images/Pika.jpg';
import Rocky from './images/Rocky.jpg';
import Feline from './images/Feline.jpg';
import Fancy from './images/Fancy.jpg';
import Flower from './images/Flower.jpg';
import Suzi from './images/Suzi.jpg';
import Wolf from './images/Wolf.jpg';
import Bella from './images/Bella.jpg';
import Deer from './images/Deer.jpg';
import Berta from './images/Berta.jpg';
import Torill from './images/Torill.jpg';
import Kiki from './images/Kiki.jpg';
import Mona from './images/Mona.jpg';
import Boogie from './images/Boogie.jpg';
import Dover from './images/Dover.jpg';
import Ace from './images/Ace.jpg';
import Kaos from './images/Kaos.jpg';
import Celia from './images/Celia.jpg';
import Katla from './images/Katla.jpg';
import Eda from './images/Eda.jpg';
import IconCelia from './images/IconCelia.jpg';
import IconGunvor from './images/IconGunvor.jpg';
import IconIH from './images/IconIH.jpg';
import IconKaos from './images/IconKaos.jpg';
import IconKiki from './images/IconKiki.jpg';
import IconVictor from './images/IconVictor.jpg';
import IconBritt from './images/IconBritt.jpg';
import tiger from './images/tiger.svg';
import Hedgehog from './images/Hedgehog.jpg';
import Incatgnito from './images/Incatgnito.jpg';
import AlterLego from './images/AlterLego.jpg';
import IconBerta from './images/IconBerta.jpg';
import IconKaren from './images/IconKaren.jpg';
import IconOhDeer from './images/IconOhDeer.jpg';
import IconPika from './images/IconPika.jpg';
import IconRebecca from './images/IconRebecca.jpg';
import IconRocky from './images/IconRocky.jpg';
import IconSarah from './images/IconSarah.jpg';
import IconSkrekk from './images/IconSkrekk.jpg';
import IconStine from './images/IconStine.jpg';
import IconTorill from './images/IconTorill.jpg';
import IconTorture from './images/IconTorture.jpg';
import IconKatla from './images/IconKatla.jpg';

export const allSkaters = [
	{
		name: 'Oh Deer',
		number: '08',
		position: 'Blocker',
		team: 'Oslo Roller Derby',
		currTeam: 'Oslo A',
		image: Deer,
		icon: IconOhDeer,
		active: true
	},
	{
		name: 'Pikante',
		number: '1314',
		position: 'Jammer',
		image: Pikante,
		icon: IconPika,
		team: 'Toronto Roller Derby, Oslo Roller Derby, Team Portugal Roller Derby',
		currTeam: 'Oslo A',
		active: true
	},
	{
		name: 'Fatal Feline',
		number: '2',
		position: 'Blocker and Pivot',
		image: Feline,
		icon: IconRebecca,
		team: 'Nidaros Roller Derby, Oslo Roller Derby, Team Norway Roller Derby',
		currTeam: 'Oslo A',
		active: true
	},
	{
		name: 'Winter Wolf',
		number: '242',
		position: 'Blocker',
		image: Wolf,
		icon: IconKaren,
		team: 'Oslo Tiger City Beasts, Oslo Roller Derby',
		currTeam: 'Oslo A',
		active: true
	},
	{
		name: "Bee'Cha",
		number: '33',
		position: 'Blocker and Pivot',
		team: 'Oslo Tiger City Beasts, Oslo Roller Derby, Team Spain Roller Derby',
		currTeam: 'Oslo A',
		image: Berta,
		icon: IconBerta,
		active: true
	},
	{
		name: 'Panserbinna',
		number: '42',
		position: 'Blocker',
		team: 'Arctic City Roller Derby, Oslo Tiger City Beasts, Oslo Roller Derby',
		currTeam: 'Oslo A',
		image: Torill,
		icon: IconTorill,
		active: true
	},
	{
		name: 'Rocky Gold',
		number: '52',
		position: 'Jammer',
		image: Rocky,
		icon: IconRocky,
		team: 'Oslo Roller Derby, Team Norway Roller Derby',
		currTeam: 'Oslo A',
		active: true
	},
	{
		name: 'Katla Nightmar',
		number: '59',
		position: 'Blocker',
		team: 'Oslo Tiger City Beasts, Oslo Roller Derby, Team Iceland Roller Derby',
		currTeam: 'Oslo A',
		image: Katla,
		icon: IconKatla,
		active: true
	},
	{
		name: 'Skrekkspill, Just Jeff',
		number: '6',
		position: 'Jammer',
		image: Skrekkspill,
		icon: IconSkrekk,
		team: 'Oslo Tiger City Beasts, Oslo Roller Derby, Team Poland Roller Derby',
		currTeam: 'Oslo A',
		active: true
	},
	{
		name: 'Suzi Dog',
		number: '61',
		position: 'Blocker',
		image: Suzi,
		icon: IconStine,
		team: 'Oslo Roller Derby, Team Norway Roller Derby',
		currTeam: 'Oslo A',
		active: true
	},
	{
		name: 'Torture',
		number: '79',
		position: 'Jammer',
		image: Torture,
		icon: IconTorture,
		team: 'Oslo Roller Derby, Team Norway Roller Derby',
		currTeam: 'Oslo A',
		active: true
	},
	{
		name: 'Flower Ka-Power',
		number: '02',
		position: 'Blocker',
		image: Flower,
		icon: IconGunvor,
		team: 'Oslo Tiger City Beasts, Oslo Roller Derby',
		currTeam: 'Oslo A, Oslo B',
		active: true
	},
	{
		name: 'Kiki Longskates',
		number: '108',
		position: 'Jammer',
		team: 'Oslo Tiger City Beasts, Oslo Roller Derby',
		currTeam: 'Oslo A, Oslo B',
		image: Kiki,
		icon: IconKiki,
		active: true
	},
	{
		name: 'Victor',
		number: '117',
		position: 'Blocker',
		team: 'Oslo Tiger City Beasts, Oslo Roller Derby',
		currTeam: 'Oslo A, Oslo B',
		image: tiger,
		icon: IconVictor,
		active: true
	},
	{
		name: 'KAOS',
		number: '70',
		position: 'Blocker',
		team: 'Oslo Tiger City Beasts, Oslo Roller Derby',
		currTeam: 'Oslo A, Oslo B',
		image: Kaos,
		icon: IconKaos,
		active: true
	},
	{
		name: 'Seitanist',
		number: '273',
		position: 'Blocker',
		team: 'Oslo Tiger City Beasts',
		currTeam: 'Oslo B',
		image: ORDLogo,
		icon: tiger,
		active: true
	},
	{
		name: 'Bruisie Derkins',
		number: '40',
		position: 'Blocker',
		team: 'Oslo Tiger City Beasts',
		currTeam: 'Oslo B',
		image: ORDLogo,
		icon: IconIH,
		active: true
	},
	{
		name: 'Assassin Creedy',
		number: '72',
		position: 'Blocker',
		team: 'Oslo Tiger City Beasts',
		currTeam: 'Oslo B',
		image: Celia,
		icon: IconCelia,
		active: true
	},
	{
		name: 'Brattany, Switch',
		number: '92',
		position: 'Blocker, Jammer',
		team: 'Oslo Tiger City Beasts',
		currTeam: 'Oslo B',
		image: ORDLogo,
		icon: IconBritt,
		active: true
	},
	{
		name: 'Killer Rosenkål, Ace',
		number: '933',
		position: 'Blocker',
		team: 'Oslo Tiger City Beasts, Oslo Roller Derby, Team Norway Roller Derby',
		currTeam: 'Oslo A',
		image: Ace,
		icon: IconSarah,
		active: true
	},
	{
		name: 'Machingunn',
		number: '100',
		position: 'Blocker',
		image: ORDLogo,
		active: true
	},

	{
		name: 'Fancy Rocks',
		number: '870',
		position: 'Blocker',
		image: Fancy,
		team: 'Uppsala Roller Derby, Oslo Tiger City Beasts, Oslo Roller Derby',
		image: Fancy,
		active: false
	},
	{
		name: 'La Ida Loca',
		number: '23',
		position: 'Blocker',
		team: 'Oslo Tiger City Beasts, Oslo Roller Derby',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Die-Oh-My',
		number: '0',
		position: 'Jammer',
		team: 'Oslo Tiger City Beasts',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Flatline',
		number: '000',
		position: 'Blocker',
		team: 'Oslo Roller Derby',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Madeleine Bye',
		number: '07',
		position: 'Blocker',
		team: 'Oslo Tiger City Beasts',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Wylverine',
		number: '11',
		position: 'Jammer',
		team: 'Oslo Tiger City Beasts, Berlin Roller Derby',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Kung Fury Panda',
		number: '111',
		position: 'Blocker',
		team: 'Oslo Tiger City Beasts',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Baronessa',
		number: '113',
		position: 'Blocker',
		team: 'Oslo Tiger City Beasts, Oil City Roller Derby',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Tina Thunder',
		number: '115',
		position: 'Blocker',
		team: 'Oslo Tiger City Beasts',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Eda Lyngra, Betty D Reaper',
		number: '12',
		position: 'Blocker, Jammer, Pivot',
		team: 'Oslo Roller Derby, Team Norway Roller Derby',
		active: false,
		image: Eda,
		numReserve: true
	},
	{
		name: 'Skarface',
		number: '14',
		position: 'Blocker',
		team: 'Oslo Tiger City Beasts',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Roligheten',
		number: '15',
		position: 'Blocker',
		team: 'Oslo Tiger City Beasts',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Bella Boomerang',
		number: '16',
		position: [ 'Blocker', 'Pivot' ],
		team: 'Oslo Tiger City Beasts, Oslo Roller Derby',
		active: false,
		image: Bella,
		numReserve: true
	},
	{
		name: 'Demona, Mister',
		number: '17',
		position: [ 'Blocker', 'Pivot' ],
		team: 'Oslo Tiger City Beasts, Oslo Roller Derby, Team Germany Roller Derby',
		active: false,
		image: Mona,
		numReserve: true
	},
	{
		name: 'Berg',
		number: '18',
		position: 'Blocker',
		team: 'Oslo Tiger City Beasts, Oslo Roller Derby',
		image: ORDLogo,
		active: false
	},
	{
		name: "Boogie Ma'am",
		number: '21',
		position: 'Blocker, Pivot',
		team: 'Oslo Tiger City Beasts, Oslo Roller Derby',
		image: Boogie,
		active: false,
		numReserve: true
	},
	{
		name: 'Princess Monster Truck',
		number: '22',
		position: [ 'Blocker', 'Pivot' ],
		team: 'Oslo Tiger City Beasts, Oslo Roller Derby',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Bouty Hunter',
		number: '222',
		position: 'Jammer',
		team: 'Oslo Tiger City Beasts',
		image: ORDLogo,
		active: false,
		numReserve: true
	},
	{
		name: 'Buzz Lightlinn',
		number: '26',
		position: 'Blocker, Jammer',
		team: 'Oslo Tiger City Beasts, Oslo Roller Derby, Malmo Roller Derby',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Rampe Tanta',
		number: '28',
		position: 'Blocker',
		team: 'Oslo Tiger City Beasts',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Wheelful Misconduct',
		number: '29',
		position: 'Blocker',
		team: 'Oslo Tiger City Beasts',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Geordie Gore',
		number: '291',
		position: [ 'Blocker', 'Jammer', 'Pivot' ],
		team: 'Oslo Tiger City Beasts, Oslo Roller Derby',
		active: false,
		image: Dover,
		numReserve: true
	},
	{
		name: 'The Hammer',
		number: '31',
		position: 'Jammer',
		team: 'Oslo Tiger City Beasts, Oslo Roller Derby, Team Norway Roller Derby',
		image: ORDLogo,
		active: false
	},
	{
		name: 'WallNuts',
		number: '403',
		position: 'Jammer',
		team: 'Oslo Tiger City Beasts',
		active: false,
		image: ORDLogo,
		numReserve: true
	},
	{
		name: 'Goldie the Grinder',
		number: '57',
		position: 'Blocker',
		team: 'Oslo Tiger City Beasts, Oslo Roller Derby, Team Norway Roller Derby',
		image: ORDLogo,
		active: false,
		numReserve: true
	},
	{
		name: 'Dynamic Domino',
		number: '616',
		position: 'Blocker',
		team: 'Oslo Tiger City Beasts',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Nancy Bout Win',
		number: '64',
		position: 'Blocker',
		team: 'Oslo Roller Derby',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Flaming Hips',
		number: '666',
		position: 'Blocker',
		team: 'Oslo Roller Derby',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Jane Airstrike',
		number: '68',
		position: 'Blocker',
		team: 'Oslo Tiger City Beasts, Oslo Roller Derby',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Virginia Creeper',
		number: '804',
		position: 'Blocker',
		team: 'Oslo Tiger City Beasts',
		image: ORDLogo,
		active: false,
		numReserve: true
	},
	{
		name: 'Punky Bruised Her',
		number: '82',
		position: 'Blocker, Jammer',
		team: 'Oslo Tiger City Beasts',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Meowly Cyrus',
		number: '9',
		position: 'Blocker, Jammer',
		team: 'Oslo Tiger City Beasts',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Ann-ilateHer',
		number: '90',
		position: 'Blocker',
		team: 'Oslo Tiger City Beasts',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Tanker Bell',
		number: '91',
		position: 'Blocker',
		team: 'Oslo Tiger City Beasts',
		image: ORDLogo,
		active: false,
		numReserve: true
	},
	{
		name: 'Obi Wang Kenobi',
		number: '93',
		position: 'Blocker',
		team: 'Oslo Tiger City Beasts',
		image: ORDLogo,
		active: false,
		numReserve: true
	},
	{
		name: 'MadDIE',
		number: '99',
		position: 'Blocker',
		team: 'Oslo Tiger City Beasts',
		image: ORDLogo,
		active: false,
		numReserve: true
	},
	{
		name: 'Doctor Whoop',
		number: '10',
		position: 'Blocker',
		team: 'Oslo Tiger City Beasts',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Ophelia Jawbreak',
		number: '13',
		position: 'Blocker',
		image: ORDLogo,
		active: false
	},
	{
		name: "Eve'il X",
		number: '19',
		position: 'Jammer',
		image: ORDLogo,
		active: false
	},
	{
		name: 'YOLO',
		number: '20',
		position: 'Uknown',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Cave Capra',
		number: '200',
		position: 'Unknown',
		image: ORDLogo,
		active: false
	},
	{
		name: "Hulk'n'Hips",
		number: '24',
		position: 'Blocker',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Maggie-Sin-Some',
		number: '3',
		position: 'Blocker',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Minnie the Bruiser',
		number: '311',
		position: 'Unknown',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Like.A.Girl',
		number: '321',
		position: 'Uknown',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Rude Ruby',
		number: '360',
		position: 'Unknown',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Anna Blix',
		number: '42',
		position: 'Unknown',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Tourette',
		number: '424',
		position: 'Unknown',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Emmi-Lee Razorknee',
		number: '7',
		position: 'Unknown',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Die Die Love',
		number: '77',
		position: 'Blocker',
		team: 'Oslo Roller Derby, London Roller Derby',
		image: ORDLogo,
		active: false,
		numReserve: true
	},
	{
		name: 'Mother Punchie',
		number: '800',
		position: 'Blocker',
		team: 'Oslo Roller Derby',
		image: ORDLogo,
		active: false,
		numReserve: true
	},
	{
		name: 'Janis',
		number: '89',
		position: 'Unknown',
		image: ORDLogo,
		active: false
	},
	{
		name: 'MonaFims',
		number: '9',
		position: 'Unknown',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Jamakaze',
		number: '4',
		position: 'Unknown',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Boobs Bazooka',
		number: '462',
		position: 'Blocker',
		team: 'Oslo Tiger City Beasts',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Rach Against the Machine',
		number: '5',
		position: 'Blocker',
		team: 'Oslo Tiger City Beasts, Oslo Roller Derby',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Charlie',
		number: '55',
		position: 'Blocker, Jammer',
		team: 'Oslo Tiger City Beasts',
		image: ORDLogo,
		active: false,
		numReserve: true
	},
	{
		name: 'Betty Rough',
		number: '247',
		position: 'Unknown',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Will B Blood',
		number: '3,14A',
		position: 'Unknown',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Malice in Derbyland',
		number: '22',
		position: 'Unknown',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Kathrine',
		number: '11',
		position: 'Unknown',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Turid',
		number: '45',
		position: 'Unknown',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Monty Spankalot',
		number: '6',
		position: 'Unknown',
		image: ORDLogo,
		active: false
	},
	{
		name: 'KittyPunch',
		number: '73',
		position: 'Unknown',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Sunny',
		number: '8',
		position: 'Unknown',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Miss Kekka von Kill',
		number: '54-46',
		position: 'Unknown',
		image: ORDLogo,
		active: false
	},
	{
		name: "Dr.What's On",
		number: '26',
		position: 'Unknown',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Tessie Toothless',
		number: '53',
		position: 'Unknown',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Zombie Assassin',
		number: '731',
		position: 'Unknown',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Glamorama',
		number: '88',
		position: 'Unknown',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Miss Motorizer',
		number: 'B-52',
		position: 'Unknown',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Anniken',
		number: '101',
		position: 'Unknown',
		image: ORDLogo,
		active: false
	},
	{
		name: 'HammerTime',
		number: '2',
		position: 'Jammer',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Karoline',
		number: '27',
		position: 'Unknown',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Marzipain',
		number: '29',
		position: 'Unknown',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Elise',
		number: '25',
		position: 'Unknown',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Bruiseberry Havoc',
		number: '13',
		position: 'Unknown',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Lori Meyers',
		number: '24',
		position: 'Unknown',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Rut',
		number: '2',
		position: 'Uknown',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Raging Ragster',
		number: '47',
		position: 'Unknown',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Miss Ivy Rage',
		number: '333',
		position: 'Unknown',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Stagger Lee',
		number: '99',
		position: 'Unknown',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Kick Ass',
		number: '87',
		position: 'Unknown',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Dandelion Gingerdoom',
		number: '119',
		position: 'Unknown',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Talullah Gouge',
		number: '61',
		position: 'Unknown',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Marion',
		number: '444',
		position: 'Unknown',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Rushka Rebelle',
		number: '3',
		position: 'Unknown',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Clara',
		number: '8',
		position: 'Unknown',
		image: ORDLogo,
		active: false
	},

	{
		name: 'Emma Right',
		number: '14',
		position: 'Unknown',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Piperolla',
		number: '88',
		position: 'Unknown',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Sonic',
		number: '35',
		position: 'Unknown',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Kine Knievel',
		number: '37',
		position: 'Unknown',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Reggae',
		number: '56',
		position: 'Jammer',
		team: 'Oslo Roller Derby, Denmark??',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Wasp',
		number: '2',
		position: 'Unknown',
		image: ORDLogo,
		active: false
	},
	{
		name: "Rock'n roll Cobra",
		number: '85',
		position: 'Unknown',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Ann',
		number: '007',
		position: 'Unknown',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Incatgnito',
		number: '321',
		position: 'Blocker',
		team: 'Oslo Tiger City Beasts',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Luka',
		number: '98',
		position: 'Blocker',
		team: 'Oslo Tiger City Beasts',
		image: ORDLogo,
		active: false,
		numReserve: true
	},
	{
		name: 'Helen',
		number: '49',
		position: 'Blocker',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Cecilie',
		number: '05',
		position: 'Uknown',
		image: ORDLogo,
		active: false
	},
	{
		name: 'NataS',
		number: '999',
		position: 'Jammer',
		team: 'Oslo Tiger City Beasts',
		image: ORDLogo,
		active: false
	},
	{
		name: 'Alter Lego',
		position: 'NSO, Ref',
		team: 'Oslo Roller Derby',
		currTeam: 'Officials',
		active: true,
		image: AlterLego,
		icon: AlterLego
	},
	{
		name: 'Fairy Hedgehog',
		position: 'NSO',
		team: 'Oslo Roller Derby',
		currTeam: 'Officials',
		image: Hedgehog,
		icon: Hedgehog,
		active: true
	},
	{
		name: 'Incatgnito',
		position: 'Ref',
		team: 'Oslo Roller Derby',
		currTeam: 'Officials',
		image: Incatgnito,
		icon: Incatgnito,
		active: true
	}
];
