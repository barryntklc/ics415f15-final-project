/**
 * Created by Chunmeista on 11/24/2015.
 */

Template.user.events({
    "click .go_button": function(event, template) {
        console.log("goButton clicked!");

        var sname = template.$('#sname').val();
        var stier = template.$('#stier').val();
        var srank = template.$('#srank').val();

        console.log(sname + ' : ' + stier + ' ' + srank);
    }
});

Meteor.methods({

});