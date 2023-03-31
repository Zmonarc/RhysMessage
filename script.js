function showAlert() {
	let messages = [		"I love you more than words can express.",		"You make my life better just by being in it.",		"You are the sunshine in my day and the stars in my night.",		"I am so lucky to have you in my life.",		"Your love is the most precious gift I have ever received.",		"I cannot imagine my life without you.",		"You make my heart skip a beat every time I see you.",		"You are beautiful inside and out.",		"You are the missing piece that completes me.",		"I will always love and cherish you.",	];
	let randomIndex = Math.floor(Math.random() * messages.length);
	let message = messages[randomIndex];
	alert(message);
}

function showMotivational() {
	let quotes = [		"Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",		"The future belongs to those who believe in the beauty of their dreams.",		"Success is not final, failure is not fatal: It is the courage to continue that counts.",		"Hardships often prepare ordinary people for an extraordinary destiny.",		"Believe you can and you're halfway there.",		"It does not matter how slowly you go as long as you do not stop.",		"You are never too old to set another goal or to dream a new dream.",		"Don't watch the clock; do what it does. Keep going.",		"The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",		"The greatest glory in living lies not in never falling, but in rising every time we fall.",	];
	let randomIndex = Math.floor(Math.random() * quotes.length);
	let quote = quotes[randomIndex];
	alert(quote);
}
