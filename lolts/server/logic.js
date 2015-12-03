/**
 * Created by Chunmeista on 12/1/2015.
 */
/**
 * @author Barryn Chun, Erik Huang
 * @type {string[]}
 *
 * Contains server-side value translation and team seeding methods.
 */

    //translation values
var tier_alpha = ["Unranked", "Bronze", "Silver", "Gold", "Platinum", "Diamond", "Master", "Challenger"];
var tier_value = [1, 2, 3, 4, 5, 6, 7, 8];

var rank_alpha = ["NO RANK", "V", "IV", "III", "II", "I"];
var rank_value = [0.0, 0.2, 0.4, 0.6, 0.8, 1.0];

var teamsize_alpha = ["5v5", "4v4", "3v3", "2v2"];
var teamsize_value = [5, 4, 3, 2];

translate = function(data, type) {
    if (type === "tier") {
        return tier_value[tier_alpha.indexOf(data)];
    } else if (type === "rank") {
        return rank_value[rank_alpha.indexOf(data)];
    } else if (type === "team_size") {
        return teamsize_value[teamsize_alpha.indexOf(data)];
    } else {
        //future: throw exception instead
        return 0;
    }
}

add_participant = function(suser, sname, stier, srank, stotal) {
    Participants.insert({
        user: suser,
        name: sname,
        tier: stier,
        rank: srank,
        total: stotal,
        created: new Date()
    });
}

Meteor.methods({
   //translate
    retrieve : function(sname, stier, srank, suser) {
        console.log("Player " + sname + ' (' + stier + ' ' + srank + ") has joined!");

        var name = sname;
        var tier = translate(stier, "tier");
        var rank = translate(srank, "rank");
        var total = tier + rank;

        add_participant(suser, name, tier, rank, total);

        console.log("DEBUG: name:" + name + ' tier:' + tier + ' rank:' + rank + ' total:' + total);
        //Meteor.npmRequire('ip');
        //console.log(ip.address());
    },
    create_teams : function (team_size) {
        console.log("An admin is starting a " + team_size + " match!");
        var size = translate(team_size, "team_size");
        console.log("DEBUG: team_size:" + size);

        //check if there are enough players

        //check if the remainder of players === 0
    },
    is_admin : function () {
        return false;
    }
});