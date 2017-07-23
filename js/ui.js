(function(){

window.project = window.project || {};
let ui = project.ui = project.ui || {};
let data = ui.data = ui.data || {};

ui.init = window.onload = function init () {
	document.querySelector(".projectlist").innerHTML = ui.outputProjectlist();
};

ui.outputProjectlist = function outputProjectlist () {
	return data.projectlist.map( item => {
		let linktable = Object.keys(item.links).map(
			title => ui.outputLink(item.links[title], title)
		).join(" ");
		return (
			`<div class="project">` +
				`<img class="thumbnail" src="${item.thumbnail}">` +
				`<div class="projectdesc">${item.title}` +
					`<span class="languages">${item.languages}</span>` +
					`<span class="linktable">${linktable}</span>` +
					`<hr><p>${item.desc}</p><p>${item.work}</p>` +
				`</div>` +
			`</div>`
		);
	}).join("");
};

ui.outputLink = function outputLink (target, title) {
	let logo = data.linkLogos[target] || data.linkLogos[title] || "";
	logo = logo && `<img class="favicon" src="${logo}">`;
	return `${logo}<a target="_blank" href="${target}">${title || target}</a>`;
};

})();