//storyGrammar.js
//contains a grammar written with Tracery that creates a children's storyGrammar

var storyGrammar = {
	'intro': ['Once upon a time', 'One day', 'A week ago', 'Last year', 'In the distant future', 'One sunny day'],
	'characters': ['fox', 'owl', 'panda', 'gecko', 'princess', 'prince', 'knight', 'bear', 'horse', 'unicorn', 'poof', 'frog', 't-rex'],
	'setting': ['in a forest', 'in a faraway land', 'in a galaxy far far away', 'in a magic swamp', 'in a large castle', 'at home', 'at school', 'at the park', 'in the big city'],
	
	'descript':['#introvert#', '#extravert#'],
	'introvert':['shy', 'insecure', 'quiet', 'contemplative', 'adventerous', 'friendly', 'calm', 'serene', 'reserved', 'mute', 'peaceful', 'muffled', 'timorous', 'fearful', 'nimble', 'purposeful'],
	'extravert':['brave', 'bold', 'outgoing', 'loud', 'adventerous', 'friendly', 'boisterous', 'turbulent', 'wild', 'uproarious', 'gallant', 'heroic', 'curageous', 'daring', 'lively', 'busy'],
	
	'action' : ['#objectverb# #object.a#', '#movementverb#', '#movementverb# #setting#'],
	'object' : ['apple', 'turnip', 'broccoli', 'baseball', 'tree', 'vase', 'mp3 player', 'balloon', 'teddybear', 'skateboard', 'banana', 'table', 'leg warmer', 'candle', 'shawl', 'paint brush', 'magnet', 'rubber band', 'sock', 'doll', 'box', 'model car', 'flower', 'leaf', 'rock', 'stick'], 
	'objectverb' : ['threw', 'found', 'investigated', 'saw', 'lost', 'collected', 'assembled', 'located', 'thought about', 'imagined', 'avoided', 'persuaded', 'built', 'wished upon'],
	'movementverb' : ['danced', 'jumped', 'ran', 'skipped', 'relaxed', 'swam', 'cartwheeled', 'shuffled', 'snuck', 'galloped', 'wobbled', 'sprinted', 'zipped', 'zoomed', 'flew', 'wandered', 'strolled', 'stretched'],
	
	'emotion' : ['#emotionNeg#', '#emotionPos#'],
	'emotionNeg' : ['sad', 'jealous', 'afraid', 'spooked', 'disgusted', 'pensiveness', 'melancholic', 'angry', 'anticipation', 'boredom'],
	'emotionPos' : ['happy', 'excited', 'proud', 'acceptance', 'amazement', 'joyous', 'joy', 'serenity', 'awe', 'optimistic'],
	
	'dialogue' : ['What a wonderful day!',  'Man, I really learned a lesson.', 'I felt #emotionPos# today.', 'I felt #emotionNeg# earlier, but now I feel #emotionPos#.'],
	
	'closing' : ['until bedtime and felt #emotionPos#', 'until bedtime', 'with friends', 'and saved the world', 'and made new friends', 'and saved the world and felt #emotionPos#', 'and lived happily ever after'],
	
	'p0' : ['The #personality.capitalize# #protagonist.capitalize#', '#protagonist.capitalize# #setting.capitalizeAll#'],
	'p1' : ['#intro#, #place#, there was #personality.a# #protagonist#.', '#intro#, there was #personality.a# #protagonist# who lived #place#.'],
	'p2' : ['The #protagonist# #action# and felt #emotion#.', 'Because the #protagonist# felt #emotion#, they #action#.', 'The #protagonist# had a friend, the #char2#. They #action# together.', 'The #protagonist# met #descript.a# #char2#.', 'The #protagonist# and the #char2# #movementverb# #setting#.'],
	'p3' : ['The #protagonist# and the #char2# #action# #closing#.', 'The #protagonist# and the #char2# #movementverb# #setting# #closing#.', 'Then, the #protagonist# #action# #closing#. The end.', 'Then, the #protagonist# said "#dialogue#" The end.', 'Then, the #protagonist# #action# and said "#dialogue#" The end.'],
	'story' : ['#p0#$#p1#$#p2#$#p3#'],
	'origin':['#[protagonist:#characters#][place:#setting#][personality:#descript#][char2:#characters#]story#'],
	}

 
