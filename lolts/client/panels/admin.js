/**
 * Created by Chunmeista on 11/24/2015.
 */

Template.admin.events({
    "click .teams_button": function(event, template) {
        console.log("DEBUG: teams_button clicked!");

        var team_size = template.$('#team_size').val();

        Meteor.call("create_teams", team_size);

        //console.log("Detected " + team_size);

    }
    /*"mouseover .teams_button": function() {
        console.log("teamsButton moused over!");
        $(this._id).css('background-color', 'grey');
    }*/
});

Meteor.methods({
});