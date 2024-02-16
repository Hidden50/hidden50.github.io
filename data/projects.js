export const linkLogos = {
	"https://hidden50.github.io/brmt/": "https://hidden50.github.io/brmt/img/favicon.ico",
	"https://hidden50.github.io/pq/":   "https://hidden50.github.io/pq/favicon.ico",
	Github:                             "https://www.google.com/s2/favicons?sz=18&domain=github.com",
	Forum:                              "https://www.google.com/s2/favicons?sz=18&domain=entwickler-ecke.de"
};

export const projectlist = [{

	title:      "BreakMyTeam",
	thumbnail:  "./img/tmb/brmt.png",
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

	title:      "PQdex",
	thumbnail:  "./img/tmb/PQdex.png",
	languages:  "html",
	desc:       "Pokedex for the spinoff game <i>Pokemon Quest</i>.",
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

	title:      "Scrappie",
	thumbnail:  "./img/tmb/scrappie.png",
	languages:  "node.js",
	desc:       "Pokemon Showdown Node Bot, forked from Ecuacion.",
	links:      {
		Github:  "https://github.com/Hidden50/Pokemon-Showdown-Node-Bot"
	},
	work:       "<ul>" +
					"<li>Chatroom Statistics, Average daily activity curve</li>" +
					"<li>Message History</li>" +
					"<li>Auction script</li>" +
					"<li>Reddit-like nested conversations</li>" +
				"</ul>",

}, {

	title:      "Sweeper",
	thumbnail:  "./img/tmb/sweeper.png",
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
