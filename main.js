import * as ui from "./js/ui.js";

(function startup () {
	window.project = { ui };

	window.addEventListener('load', () => {
		ui.listeners.init();
	
		const [, urlparam, iframeparams] = location.hash.match(/^#([^#]*)(?:(#.*))?$/) || [];
		ui.displaytab(urlparam || "Portfolio", iframeparams);
	});
})();
