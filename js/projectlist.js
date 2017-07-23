(function(){

window.project = window.project || {};
let ui = project.ui = project.ui || {};
let data = ui.data = ui.data || {};

data.linkLogos = {
	Github:                             "https://github.com/favicon.ico",
	"http://hidden50.github.io/brmt/":  "http://hidden50.github.io/brmt/favicon.ico",
	"http://play.pokemonshowdown.com/": "http://play.pokemonshowdown.com/favicon.ico",
	Forum:                              "https://www.entwickler-ecke.de/favicon.ico"
};

data.projectlist = [{
	title:      "<b>BreakMyTeam</b>",
	thumbnail: "./img/brmt.png",
	languages:  "html",
	desc:       "Threatlist generator for Pokémon Teams.",
	links:      {
		Website: "http://hidden50.github.io/brmt/",
		Github:  "https://github.com/Hidden50/brmt"
	},
	work:       "My biggest project, recently rewritten."
}, {
	title:      "<b>Scrappie</b>",
	thumbnail: "./img/scrappie.png",
	languages:  "node.js",
	desc:       "Pokemon Showdown Node Bot, forked from Ecuacion.",
	links:      {
		Github:  "https://github.com/Hidden50/Pokemon-Showdown-Node-Bot"
	},
	work:       "Own work includes: <ul>" +
					"<li>Statistics<ul>" +
						"<li>list the 200 most active users in a chatroom</li>" +
						"<li>list a user's last 200 messages accross multiple rooms. (You can specify keywords to filter them)</li>" +
						"<li>view a user's average daily activity curve to gauge their time zone</li>" +
					"</ul></li>" +
					"<li>Auction feature: lets several parties bid on a number of items or players</li>" +
					"<li>Discussion feature: reddit-like nested conversations</li>" +
				"</ul>"
}, {
	title:      "<b>Pokemon Showdown</b>",
	thumbnail: "./img/pokemonshowdown.png",
	languages:  "node.js",
	desc:       "Online Pokemon battle simulator with 5 million visits per month, created by Guangcong Luo.",
	links:      {
		Website: "http://play.pokemonshowdown.com/",
		Github:  "https://github.com/Zarel/Pokemon-Showdown/commits?author=Hidden50"
	},
	work:       "Position: Policy / Tech Leader."
}, {
	title:      "<b>Sweeper</b>",
	thumbnail: "./img/sweeper.png",
	languages:  "Delphi",
	desc:       "Minesweeper clone, with solver.",
	links:      {
		Forum:   "https://www.entwickler-ecke.de/viewtopic.php?t=111763"
	},
	work:       ""
}];

})();