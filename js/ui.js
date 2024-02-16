import * as data from "./../data/projects.js";

import * as listeners from "./listeners.js";
export * as listeners from "./listeners.js";

export const htmlNodes = { links: {} };
export const cache = { params: {}, data };

export function init () {
	listeners.init();
	
	const [, urlparam, iframeparams] = location.hash.match(/^#([^#]*)(?:(#.*))?$/) || [];
	displaytab(urlparam || "Portfolio", iframeparams);
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

export function displaytab (tabName, params) {
	updateLocation(tabName, params);
	
	const anchor = htmlNodes.links[tabName.toLowerCase()];
	document.title = `Hidden50 | ${tabName}`;
	document.querySelector("header h1").innerText = tabName;
	document.querySelector("header p").innerText = anchor.title;

	if (tabName === "Portfolio") {
		document.body.classList.add('show-navigation');
		document.body.classList.remove('hide-navigation');
	} else {
		document.body.classList.remove('show-navigation');
		document.body.classList.add('hide-navigation');
	}

	// mark active tab in sidebar
	for (const a of document.querySelectorAll(".sidebar > nav a")) {
		a.classList.remove('active');
	}
	anchor.classList.add('active');
	
	// display content wrapper
	for (const tab of document.querySelectorAll("main > .tab")) {
		tab.classList.remove('active');
	}
	const tabClass = `tab_main_${tabName.toLowerCase()}`;
	let tab = document.querySelector(`.${tabClass}`);

	if (!tab) {
		tab = document.createElement('div');
		tab.classList.add('tab', tabClass);
		document.querySelector("main").appendChild(tab);

		// load content
		switch (tabName) {

			case "Portfolio": {
				tab.innerHTML = "<p>Hi. I'm a mathematician and programmer from Thuringia, Germany. I write both desktop and web applications.</p><p>Here's some of the work I have done:</p>" + outputProjectlist();
				break;
			}

			case "PQdex": {
				const url = `https://hidden50.github.io/pq`;
				tab.innerHTML = `<iframe sandbox="allow-scripts allow-top-navigation allow-popups allow-popups-to-escape-sandbox" src="${url}" scrolling="yes" frameborder="0"></iframe>`;
				break;
			}

			case "Brmt": {
				const url = `https://hidden50.github.io/brmt${params || ""}`;
				tab.innerHTML = `<iframe sandbox="allow-scripts allow-top-navigation allow-popups allow-popups-to-escape-sandbox" src="${url}" scrolling="yes" frameborder="0"></iframe>`;
				if (location.href && url.startsWith(location.href)) {
					const contentWindow = tab.firstChild.contentWindow;
					ui.listeners.addPushStateEventTrigger(contentWindow);
					contentWindow.addEventListener('hashchange', e => {
						console.log(e);
						console.log(cache.tabName);
						if (cache.tabName === "Brmt") {
							ui.updateLocation("Brmt", contentWindow.location.hash);
						} else {
							cache.params["Brmt"] = contentWindow.location.hash;
						}
					});
				}
				break;
			}

		}
	}

	tab.classList.add('active');

	if (tabName !== "Brmt" && tabName !== "PQdex") {
		tab.classList.add('scroll');
	}
}

export function outputProjectlist () {
	return `<div class="projectlist">${
		cache.data.projectlist.map( project => {

			const linktable = Object.keys(project.links).map(
				title => favAnchor(project.links[title], title)
			).join("");

			const thumbnail = `<img class="thumbnail" src="${project.thumbnail}">`;
			// <img class="thumbnail" width="256" height="192" src="${project.thumbnail}">

			return (
				`<div class="project">
					${thumbnail}
					<div class="projectdesc">
						<div class="wrapper">
							<h2 class="project-title">${project.title}</h2>
							<p>${project.desc}</p>
							${project.work}
						</div>
					</div>
					<div class="linktable">${linktable}</div>
					<div class="languages">${project.languages}</div>
				</div>`
			);

		}).join("")
	}</div>`;
}

export function favAnchor (target, title) {
	let logo = cache.data.linkLogos[target] || cache.data.linkLogos[title] || "";
	logo = logo && `<img class="favicon" src="${logo}">`;

	return `<a class="fav-anchor" target="_blank" href="${target}">${logo}${title || target}</a>`;
};
