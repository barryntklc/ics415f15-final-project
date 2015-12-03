/**
 * Created by Chunmeista on 11/24/2015.
 */

Template.user.events({
    "click .go_button": function(event, template) {
        console.log("DEBUG: go_button clicked!");

        var sname = template.$('#sname').val();
        var stier = template.$('#stier').val();
        var srank = template.$('#srank').val();
        var user = Meteor.user();

        if (sname.trim() != "") { //if name is not null

            Meteor.call("retrieve", sname, stier, srank, user);
        } else {
            console.log("ERROR - Please input a summoner name!");
        }
    },
    "change #stier": function(event, template) {

        if (template.$('#stier').val() === "Unranked" || template.$('#stier').val() === "Master" || template.$('#stier').val() === "Challenger") {
            template.$('#srank').prop("disabled", true);
            template.$('#srank').val("NO RANK");
        } else {
            template.$('#srank').prop("disabled", false);
            if (template.$('#srank').val() === "NO RANK") {
                template.$('#srank').val("V");
            }
        }

        //console.log("STIER VAL: " + template.$('#stier').val());
        //console.log("SRANK VAL CHANGED TO: " + template.$('#srank').val());

    },
});
