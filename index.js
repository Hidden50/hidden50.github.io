import * as ui from "./js/ui.js";

(function startup () {
	window.project = { ui };

	window.addEventListener('load', () => {
		ui.listeners.init();
	
		let [, urlparam, iframeparams] = location.hash.match(/^#([^#]*)(?:(#.*))?$/) || [];
		ui.displayTabContent(urlparam || "Portfolio", iframeparams);
	});
})();
