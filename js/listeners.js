import * as ui from "./ui.js";

export function init () {
	// toggle compact mode on and off
	const mainAnchor = document.querySelector(".sidebar > h1 > a");
	mainAnchor.addEventListener( 'click', e => {
		e.preventDefault();
		document.body.classList.toggle('compactview');
		document.body.click();
	});
	
	// load sidebar links inline
	for (const anchor of document.querySelectorAll(".sidebar > nav a")) {

		const caption = anchor.innerText.toLowerCase();
		ui.htmlNodes.links[caption] = anchor;
		
		if (!anchor.href || anchor.href.indexOf('#') === -1) continue;

		anchor.addEventListener( 'click', e => {
			e.preventDefault();
			ui.displayTabContent(anchor.innerText);
		});
	}
}

// https://felix-kling.de/blog/2011/01/06/how-to-detect-history-pushstate/

export function addPushStateEventTrigger (aWindow) {
	const pushState = aWindow.history.pushState;

	aWindow.history.pushState = function() {
		const oldUrl = aWindow.location.toString();
		const oldHash = aWindow.location.hash;
		const result = pushState.apply(aWindow.history, arguments);

		if (oldHash !== aWindow.location.hash) {
			const e = new HashChangeEvent('hashchange', {
				oldURL: oldUrl,
				newURL: aWindow.location.toString(),
			});
			aWindow.dispatchEvent(e);
		}
		return result;
	}
}
