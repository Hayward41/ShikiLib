// ==UserScript==
// @name         Shikimori x Lib and others
// @version      1.8.2
// @description  Поиска аниме.
// @author       hayward
// @updateURL    https://raw.githubusercontent.com/Hayward41/ShikiLib/main/ShikiLib.js
// @downloadURL  https://raw.githubusercontent.com/Hayward41/ShikiLib/main/ShikiLib.js
// @match https://shikimori.me/*
// @match http://shikimori.me/*

// ==/UserScript==

function start(){
	if (window.location.href.indexOf("https://shikimori.me/animes/") !== -1) {
		setTimeout(function () {
			if (!$(".watch-online-placeholer").length) {
				$(".c-info-right").append("<div class='watch-online-placeholer'></div>");
			}

			if ($(".watch-online-placeholer .block:last-child")) {
				$(".watch-online-placeholer .block:last-child").remove();
			}

			if (!$(".watch_link").length) {
				if (!$(".AnimeSearch").length) {
					let name = $('.head > h1').text().split("/ ")[1];
                    if (name == undefined) {name = $('.head > h1').text()}
					$(".watch-online-placeholer").append(
					"<div class='block animelib'><a target=_blank href='https://animelib.me/anime-list?name=" + name + "' class='b-link_button dark watch_link '>Поиск на AnimeLib</a></div>"
                    );
					$(".watch-online-placeholer").append(
					"<div class='block darklibria'><a target=_blank href='https://darklibria.it/search?find=" + name + "' class='b-link_button dark watch_link '>Поиск на DarkLibria</a></div>"
					);
					$(".watch-online-placeholer").append(
					"<div class='block nyaasi'><a target=_blank href='https://nyaa.si/?f=0&c=1_0&q=" + name + "' class='b-link_button dark watch_link '>Поиск на Nyaa.si</a></div>"
					);
					$(".watch-online-placeholer").append(
					"<div class='block korsars'><a target=_blank href='http://korsars.pro/tracker.php?f[]=277&f[]=278&f[]=46&f[]=95&f[]=273&f[]=301&nm=" + name + "' class='b-link_button dark watch_link '>Поиск на korsars.pro</a></div>"
					);
					$(".watch-online-placeholer").append(
					"<div class='block nnmclub'><a target=_blank href='https://nnmclub.to/forum/tracker.php?f=620,621,622,623,624,625,626,627,628,632,634,635,638,644,646&nm=" + name + "' class='b-link_button dark watch_link '>Поиск на NNM-Club</a></div>"
					);
					$(".watch-online-placeholer").append(
					"<div class='block rutracker'><a target=_blank href='https://rutracker.org/forum/tracker.php?f=1105,1106,1386,1387,1389,1390,1391,1642,2484,2491,2544,33,404,599,809,893&nm=" + name + "' class='b-link_button dark watch_link '>Поиск на RuTracker.org</a></div>"
					);
				}
			}
		}, 200);
	}

	if (window.location.href.indexOf("https://shikimori.me/ranobe/") !== -1) {
		setTimeout(function () {
			if (!$(".watch-online-placeholer").length) {
				$(".c-info-right").append("<div class='watch-online-placeholer'></div>");
			}

			if ($(".watch-online-placeholer .block:last-child")) {
				$(".watch-online-placeholer .block:last-child").remove();
			}

			if (!$(".watch_link").length) {
				if (!$(".AnimeSearch").length) {
					let name = $('.head > h1').text().split("/ ")[1];
					$(".watch-online-placeholer").append(
					"<div class='block ranobelib'><a target=_blank href='https://ranobelib.me/manga-list?name=" + name + "' class='b-link_button dark watch_link '>Поиск на ranobelib</a></div>"
                    );

				}
			}
		}, 200);
	}

	if (window.location.href.indexOf("https://shikimori.me/mangas/") !== -1) {
		setTimeout(function () {
			if (!$(".watch-online-placeholer").length) {
				$(".c-info-right").append("<div class='watch-online-placeholer'></div>");
			}

			if ($(".watch-online-placeholer .block:last-child")) {
				$(".watch-online-placeholer .block:last-child").remove();
			}

			if (!$(".watch_link").length) {
				if (!$(".AnimeSearch").length) {
					let name = $('.head > h1').text().split("/ ")[1];
					$(".watch-online-placeholer").append(
					"<div class='block remanga'><a target=_blank href='https://remanga.org/search?query=" + name + "' class='b-link_button dark watch_link '>Поиск на ReManga</a></div>"
					);
					$(".watch-online-placeholer").append(
					"<div class='block mangalib'><a target=_blank href='https://mangalib.me/manga-list?name=" + name + "' class='b-link_button dark watch_link '>Поиск на MangaLib</a></div>"
                    );
                    $(".watch-online-placeholer").append(
					"<div class='block hentailib'><a target=_blank href='https://v1.hentailib.org/manga-list?name=" + name + "' class='b-link_button dark watch_link '>Поиск на HentaiLib</a></div>"
                    )
                    $(".watch-online-placeholer").append(
					"<div class='block slashlib'><a target=_blank href='https://v1.slashlib.me/manga-list?name=" + name + "' class='b-link_button dark watch_link '>Поиск на SlashLib</a></div>"
                    );
				}
			}
		}, 200);
	}
}

$(document).ready(start);
$(document).on('page:load', start);
$(document).on('turbolinks:load', start);