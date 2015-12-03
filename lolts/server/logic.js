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
    /**
     *
     * @param user or user tied to player
     * @param name - player name
     * @param tier - player tier
     * @param rank - player rank
     * @param total - numerical value of tier + rank
     * @param created - date created
     */
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
    /**
     * Called when a user submits a player entry
     *
     * @param sname
     * @param stier
     * @param srank
     * @param suser
     */
    retrieve : function(sname, stier, srank, suser) {
        console.log("Player " + sname + ' (' + stier + ' ' + srank + ") has joined!");

        var total = translate(stier, "tier") + translate(srank, "rank");

        add_participant(suser, sname, stier, srank, total);

        console.log("DEBUG: name:" + name + ' tier:' + tier + ' rank:' + rank + ' total:' + total);
        //Meteor.npmRequire('ip');
        //console.log(ip.address());
    },

    /**
     * Called when an admin creates teams
     *
     * @param team_size
     */
    create_teams : function (team_size) {
        console.log("An admin is starting a " + team_size + " match!");
        var size = translate(team_size, "team_size");
        console.log("DEBUG: team_size:" + size);



        //check if there are enough participants
            //if so, set polling: closed

            //check if the remainder of participants === 0
            //if there are leftover

    },

    is_admin : function () {
        //TODO Complete
        return false;
    },

    get_ip : function () {
        //TODO Complete
        return "0.0.0.0:3000";
    }
});