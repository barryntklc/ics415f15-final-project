/**
 * Created by Chunmeista on 11/24/2015.
 */

/*$('.teams_button').mouseover(function() {
    console.log("teamsbutton");
    //$(this).css("background-color", "blue");
});*/

/*
$('.teams_button').mouseover(function() {
    console.log("teams_button mouseover");
});
$('.go_button').mouseover(function() {
    console.log("go_button mouseover");
});*/

/*
$('*').mouseover(function() {
    console.log("moused over");
});
*/

Template.admin.events({
    "click .teams_button": function() {
        console.log("teamsButton clicked!");
    }
    /*"mouseover .teams_button": function() {
        console.log("teamsButton moused over!");
        $(this._id).css('background-color', 'grey');
    }*/
});

Meteor.methods({
});