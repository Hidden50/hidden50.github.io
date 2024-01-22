import * as data from "./../data/projects.js";
export * as listeners from "./listeners.js";

export const htmlNodes = { links: {} };
export const cache = { params: {}, data };

export function init () {
	listeners.init();
	
	const [, urlparam, iframeparams] = location.hash.match(/^#([^#]*)(?:(#.*))?$/) || [];
	displayTabContent(urlparam || "Portfolio", iframeparams);
}

export function updateLocation (tabName, params) {
	cache.tabName = tabName;

	if (tabName === "Portfolio") {
		tabName = "";
	}
	if (params === undefined) {
		params = cache.params[tabName] || "";
	}
	cache.params[tabName] = params;
	
	const hash = tabName + params;
	if (hash) {
		location.hash = hash;
	} else {
		history.pushState("", document.title, window.location.pathname + window.location.search);
	}
}

export function displayTabContent (tabName, params) {
	updateLocation(tabName, params);
	
	const anchor = htmlNodes.links[tabName.toLowerCase()];
	document.title = `Hidden50 | ${tabName}`;
	document.querySelector("header h1 > span").innerText = tabName;
	document.querySelector("header h1 > i").innerText = anchor.title;
	
	if (("ontouchstart" in window) || window.navigator.msMaxTouchPoints > 0) {
		document.body.classList.add('compactview');
	} else {
		if (tabName === "Portfolio") {
			document.body.classList.remove('compactview');
		} else document.body.classList.add('compactview');
	}
	
	// mark active tab in sidebar
	for (const a of document.querySelectorAll(".sidebar > nav a")) {
		a.classList.remove('active');
	}
	anchor.classList.add('active');
	
	// display content wrapper
	for (const tab of document.querySelectorAll("main > .tabcontent")) {
		tab.classList.remove('active');
	}
	const tabId = `tabcontent_main_${tabName.toLowerCase()}`;
	let tabContent = document.getElementById(tabId);

	if (!tabContent) {
		tabContent = document.createElement('div');
		tabContent.classList.add('tabcontent');
		tabContent.id = tabId;
		document.querySelector("main").appendChild(tabContent);

		// load content
		switch (tabName) {

			case "Portfolio": {
				tabContent.innerHTML = "<p>Hi. I'm a mathematician and programmer from Thuringa, Germany. I write both desktop and web applications. </p><p>Here's some of the work I have done:</p>" + outputProjectlist();
				break;
			}

			case "PQdex": {
				const url = `https://hidden50.github.io/pq`;
				tabContent.innerHTML = `<iframe sandbox="allow-scripts allow-top-navigation allow-popups allow-popups-to-escape-sandbox" src="${url}" scrolling="yes" frameborder="0"></iframe>`;
				break;
			}

			case "Brmt": {
				const url = `https://hidden50.github.io/brmt${params || ""}`;
				tabContent.innerHTML = `<iframe sandbox="allow-scripts allow-top-navigation allow-popups allow-popups-to-escape-sandbox" src="${url}" scrolling="yes" frameborder="0"></iframe>`;
				if (location.href && url.startsWith(location.href)) {
					let contentWindow = tabContent.firstChild.contentWindow;
					ui.listeners.addPushStateEventTrigger(contentWindow);
					contentWindow.addEventListener('hashchange', e => {
						console.log(e);
						console.log(cache.tabName);
						if (cache.tabName === "Brmt")
							ui.updateLocation("Brmt", contentWindow.location.hash);
						else cache.params["Brmt"] = contentWindow.location.hash;
					});
				}
				break;
			}

			case "Links": {
				tabContent.innerHTML = (
					`<h2>Programming</h2>` +
					`<b>Favicon Generator</b> <a href="https://antifavicon.com/" target="_blank">https://antifavicon.com/</a><br>` +
					`<b>d3 - Data Driven Documents</b> <a href="https://d3js.org/" target="_blank">https://d3js.org/</a><br>` +
					`Open Source Javascript Library for creating and animating Graphs. Examples: <a href="https://bl.ocks.org/mbostock/1256572" target="_blank">[1]</a> <a href="https://bl.ocks.org/dwtkns/4973620" target="_blank">[2]</a> <a href="https://bl.ocks.org/mbostock/3828981" target="_blank">[3]</a> <a href="https://bl.ocks.org/mbostock/7607535" target="_blank">[4]</a>` +
					`` +
					`<h3>CSS</h3>` +
					`<a href="https://howtocenterincss.com/" target="_blank">https://howtocenterincss.com/</a><br>` +
					`<a href="https://lea.verou.me/css3patterns/" target="_blank">https://lea.verou.me/css3patterns/</a><br>` +
					`<a href="https://chrispederick.com/work/web-developer/" target="_blank">https://chrispederick.com/work/web-developer/</a><br>` +
					`<a href="https://inspirationalpixels.com/tutorials/creating-tabs-with-html-css-and-jquery" target="_blank">https://inspirationalpixels.com/tutorials/creating-tabs-with-html-css-and-jquery</a><br>` +
					`<a href="https://blogs.sitepointstatic.com/examples/tech/css3-sliding-menu/index.html" target="_blank">https://blogs.sitepointstatic.com/examples/tech/css3-sliding-menu/index.html</a>` +
					`` +
					`<h3>Machine Learning</h3>` +
					`<a href="https://www.youtube.com/watch?v=cKxRvEZd3Mw" target="_blank">https://www.youtube.com/watch?v=cKxRvEZd3Mw</a><br>` +
					`<a href="https://playground.tensorflow.org" target="_blank">https://playground.tensorflow.org</a>` +
					`` +
					`` +
					`<h2>Productivity</h2>` +
					`<a href="https://habitica.com/" target="_blank">https://habitica.com/</a>` +
					`` +
					`<h3>Sequences: Less Wrong</h3>` +
					`` +
					`<h3>Rationalist Fiction</h3>` +
					`HPMoR`
				);
				break;
			}

		}
	}

	tabContent.classList.add('active');

	if (tabName !== "Brmt" && tabName !== "PQdex") {
		tabContent.classList.add('scroll');
	}
}

export function outputProjectlist () {
	return cache.data.projectlist.map( project => {

		const linktable = Object.keys(project.links).map(
			title => faviconLink(project.links[title], title)
		).join(" ");

		const thumbnail = `<img class="thumbnail" src="${project.thumbnail}">`;

		return (
			`<div class="project">` +
				thumbnail +
				`<div class="projectdesc">${project.title}` +
					`<span class="languages">${project.languages}</span>` +
					`<span class="linktable">${linktable}</span>` +
					`<hr><p>${project.desc}</p>${project.work}` +
				`</div>` +
			`</div>`
		);

	}).join("");
}

export function faviconLink (target, title) {
	let logo = cache.data.linkLogos[target] || cache.data.linkLogos[title] || "";

	logo = logo && `<img class="favicon" src="${logo}">`;

	return `${logo}<a target="_blank" href="${target}">${title || target}</a>`;
};
