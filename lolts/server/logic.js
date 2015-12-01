/**
 * Created by Chunmeista on 12/1/2015.
 */
/**
 * @author Barryn Chun, Erik Huang
 * @type {string[]}
 *
 * Contains server-side value translation and team seeding methods.
 */

var tier_alpha = ["Unranked", "Bronze", "Silver", "Gold", "Platinum", "Diamond", "Master", "Challenger"];
var tier_value = [1, 2, 3, 4, 5, 6, 7, 8];

var rank_alpha = ["V", "IV", "III", "II", "I"];
var rank_value = [0.0, 0.2, 0.4, 0.6, 0.8];

var teamsize_alpha = ["5v5", "4v4", "3v3", "2v2"];
var teamsize_value = [5, 4, 3, 2];

Meteor.methods({
   //translate

    retrieve : function(sname, stier, srank) {
        //console.log(sname + stier + srank);
        var name = sname;
        var tier = translate(stier, "tier");
        var rank = translate(srank, "rank");

        Meteor.npmRequire('ip');
        //console.log(ip.address());
    },
    translate : function(data, type) {
        if (type === "tier") {

        } else if (type === "rank") {

        } else if (type === "team_size") {

        }
    }
});