// ==UserScript==
// @name         Shikimori Search
// @version      1.4
// @description  Поиска на animelib.
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
					let name = $('.head > h1').text().split("/")[1];
					$(".watch-online-placeholer").append(
					"<div class='block animelib'><a target=_blank href='https://animelib.me/anime-list?name=" + name + "' class='b-link_button dark watch_link '>Поиск на AnimeLib</a></div>"
                    );

				}
			}
		}, 200);
	}
}

$(document).ready(start);
$(document).on('page:load', start);
$(document).on('turbolinks:load', start);
