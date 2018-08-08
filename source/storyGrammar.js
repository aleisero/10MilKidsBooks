//storyGrammar.js
//contains a grammar written with Tracery that creates a children's storyGrammar

var storyGrammar = {
	'intro': ['Once upon a time', 'One day', 'A week ago', 'Last year', 'In the distant future', 'One sunny day'],
	'characters': ['fox', 'owl', 'panda', 'gecko', 'princess', 'prince', 'knight', 'bear', 'horse', 'unicorn'],
	'setting': ['in a forest', 'in a faraway land', 'in a galaxy far far away', 'in a magic swamp', 'in a large castle'],
	
	'descript':['#introvert#', '#extravert#'],
	'introvert':['shy', 'insecure', 'quiet', 'contemplative', 'adventerous', 'friendly'],
	'extravert':['brave', 'bold', 'outgoing', 'loud', 'adventerous', 'friendly'],
	
	'action' : ['#objectverb# #object.a#', '#standaloneverb#'],
	'object' : ['apple', 'turnip', 'baseball', 'clothes', 'vase', 'mp3 player', 'balloon', 'teddybear'], 
	'objectverb' : ['threw', 'found', 'investigated', 'saw', 'lost'],
	'standaloneverb' : ['danced', 'jumped', 'ran', 'skipped'],
	
	'emotion' : ['sad', 'happy', 'excited', 'jelous', 'afraid', 'spooked', 'proud'],
	
	'p1': ['#intro#, #place#, there was #descript.a# #protagonist#.'],
	'p2': ['The #protagonist# #action# and felt #emotion#.'],
	'p3': ['Then, the #protagonist# #action# until bedtime. The end.'],
	'story' : ['#p1#$#p2#$#p3#'],
	'origin':['#[protagonist:#characters#][place:#setting#][personality:#descript#]story#'],
	}

