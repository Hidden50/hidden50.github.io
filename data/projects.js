export const linkLogos = {
	"https://hidden50.github.io/brmt/": "https://hidden50.github.io/brmt/img/favicon.ico",
	"https://hidden50.github.io/pq/":   "https://hidden50.github.io/pq/favicon.ico",
	Github:                             "https://github.com/favicon.ico",
	Forum:                              "https://www.entwickler-ecke.de/favicon.ico"
};

export const projectlist = [{

	title:      "<b>BreakMyTeam</b>",
	thumbnail:  "./img/brmt.png",
	languages:  "html",
	desc:       "Threatlist generator website for Pokemon Teams.",
	links:      {
		Website: "https://hidden50.github.io/brmt/",
		Github:  "https://github.com/Hidden50/brmt"
	},
	work:       "<ul>" +
					"<li>Data Parser</li>" +
					"<li>Rating Function</li>" +
					"<li>HTML output module</li>" +
					"<li>User Interface, responsive page design</li>" +
					"<li>Service Worker for offline access</li>" +
				"</ul>"

}, {

	title:      "<b>PQdex</b>",
	thumbnail:  "./img/PQdex.png",
	languages:  "html",
	desc:       "A pokedex for the spinoff game <i>Pokemon Quest</i>.",
	links:      {
		Website: "https://hidden50.github.io/pq/",
		Github:  "https://github.com/Hidden50/pq"
	},
	work:       "<ul>" +
					"<li>Recipe generator</li>" +
					"<li>Recipe compression to shorten the resulting list</li>" +
					"<li>Stoneslot probability calculator</li>" +
				"</ul>",

}, {

	title:      "<b>Scrappie</b>",
	thumbnail:  "./img/scrappie.png",
	languages:  "node.js",
	desc:       "Pokemon Showdown Node Bot, forked from Ecuacion.",
	links:      {
		Github:  "https://github.com/Hidden50/Pokemon-Showdown-Node-Bot"
	},
	work:       "<ul>" +
					"<li>Chatroom Statistics, Average daily activity curve<span class='hoverimage'><img src='./img/scrappie-roomstats-2.png'></span></li>" +
					"<li>Message History<span class='hoverimage'><img src='./img/scrappie-roomstats-1.png'></span></li>" +
					"<li>Auction script<span class='hoverimage'><img src='./img/Scrappie-auction.png'></span></li>" +
					"<li>Reddit-like nested conversations<span class='hoverimage'><img src='./img/scrappie-conversations.png'></span></li>" +
				"</ul>",

}, {

	title:      "<b>Sweeper</b>",
	thumbnail:  "./img/sweeper.png",
	languages:  "delphi",
	desc:       "Minesweeper clone, with solver.",
	links:      {
		Forum:   "https://www.entwickler-ecke.de/viewtopic.php?t=111763"
	},
	work:       `<ul>
					<li>Click on numbers to make the solver digest their information</li>
					<li>the solver generates all possible mine positions that don't contradict the information it has</li>
					<li>if all possible positions have a mine somewhere, it becomes flagged. Otherwise you can calculate the probability of it being a mine.</li>
				</ul>`,

}];
