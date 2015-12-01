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
        console.log(sname + stier + srank);
    },

    translate : function(test, test2) {
        //console.log(tier_alpha);
        console.log(test);
        console.log(test2);
        console.log(Users.find());
    }
});