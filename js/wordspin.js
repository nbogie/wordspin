"use strict";

function doSpin() {
    var nouns = ["dog", "space-mobile", "potato", "pizza", "coroner", "ninja", "pirate", "shark", "playwright", "girlfriend", "submarine", "particle-accelerator", "science experiment", "theory", "screenplay", "summoning", "magician", "piano", "call-centre worker", "cowboy", "board-game reviewer", "boardgamer", "icon", "robot", "game", "rule-book", "detective", "arrest-warrant", "good-bye", "ore", "rhyme"];
    var verbs = ["fought", "betrayed", "ate", "murdered", "conceived", "hugged", "compromised", "sued", "summoned", "vanished", "coveted", "suffocated", "seduced", "invented", "programmed", "arrested", "serenaded", "kissed"];
    var adjectives = ["rusty", "immobile", "burnt-out", "sex-starved", "unconscious", "ninja", "stealthy", "obnoxious", "eloquent", "hallucinatory", "poorly-written", "dragon-borne", "golden", "mythical", "creative", "enlightened", "smelly", "pirate", "sweet", "flimsy", "tearful", "glowing", "radioactive", "giant", "miniature", "drug-addicted", "virtual", "parallel-universe"];
    $('#n1').html(_.sample(nouns, 1));
    $('#n2').html(_.sample(nouns, 1));
    $('#adj1').html(_.sample(adjectives, 1));
    $('#adj2').html(_.sample(adjectives, 1));
    $('#v1').html(_.sample(verbs, 1));
}

$(document).ready(function() {
    $('#spinButton').click(doSpin);
});
