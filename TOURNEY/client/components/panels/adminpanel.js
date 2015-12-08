/**
 *
 *
 * @author Barryn Chun, Erik Huang
 * @date 12/08/2015
 */

Template.adminpanel.events({
    "click .teams_button": function(event, template) {
        console.log("DEBUG: teams_button clicked!");

        var team_size = template.$('#team_size').val();

        Meteor.call("createTeams", team_size); //TODO not defined in server yet

        //console.log("Detected " + team_size);
    },

    "mousedown .teams_button": function(event, template) {
        template.$('.teams_button').css("background-color", "#b37300");
        //template.$('.teams_button').css("box-shadow", "");
    },
    "mouseup .teams_button": function(event, template) {
        template.$('.teams_button').css("background-color", "#ffc04d");
        //template.$('.teams_button').css("box-shadow", "0px 0px 25px #ffc04d;");
    },
    "mouseenter .teams_button": function(event, template) {
        template.$('.teams_button').css("background-color", "#ffc04d");
        //template.$('.teams_button').css("box-shadow", "0px 0px 25px #ffc04d;");
    },
    "mouseleave .teams_button": function(event, template) {
        template.$('.teams_button').css("background-color", "#ffa500");
        //template.$('.teams_button').css("box-shadow", "");
    }
});