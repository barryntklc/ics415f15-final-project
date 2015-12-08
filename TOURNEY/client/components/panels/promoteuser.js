/**
 *
 *
 * @author Barryn Chun, Erik Huang
 * @date 12/08/2015
 */

Template.promoteuser.events({
    "click .promote_button": function(event, template) {
        console.log("DEBUG: promote_button clicked!");

        var team_size = template.$('#team_size').val();

        //Meteor.call("createTeams", team_size); //TODO not defined in server yet

        //console.log("Detected " + team_size);
    },

    "mousedown .promote_button": function(event, template) {
        template.$('.promote_button').css("background-color", "#b37300");
    },
    "mouseup .promote_button": function(event, template) {
        template.$('.promote_button').css("background-color", "#ffc04d");
    },
    "mouseenter .promote_button": function(event, template) {
        template.$('.promote_button').css("background-color", "#ffc04d");
    },
    "mouseleave .promote_button": function(event, template) {
        template.$('.promote_button').css("background-color", "#ffa500");
    }
});