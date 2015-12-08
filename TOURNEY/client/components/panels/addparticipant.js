/**
 *
 *
 * @author Barryn Chun, Erik Huang
 * @date 12/08/2015
 */

Template.addparticipant.events({
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
    },
    "mousedown .go_button": function(event, template) {
        template.$('.go_button').css("background-color", "#b37300");
    },
    "mouseup .go_button": function(event, template) {
        template.$('.go_button').css("background-color", "#ffc04d");

        var newParticipant = {
            participant_name: template.$('#sname').val(),
            participant_tier: template.$('#stier').val(),
            participant_rank: template.$('#srank').val(),
            created: new Date()
        };

        if (newParticipant.participant_name.trim() != "") { //if name is not null
            Participants.insert(newParticipant);
        } else {
            alert("ERROR: Please enter a summoner name!");
        }

    },
    "mouseenter .go_button": function(event, template) {
        template.$('.go_button').css("background-color", "#ffc04d");
    },
    "mouseleave .go_button": function(event, template) {
        template.$('.go_button').css("background-color", "#ffa500");
    }
});

/*
'submit form': function(event) {

    // stop the form from submitting
    event.preventDefault();

    // get the data we need from the form
    var newPoll = {
        participant_name: event.target.sname.value,
        participant_tier: event.target.tier.value,
        participant_rank: event.target.rank.value,
        created: new Date()
    };

    // create the new poll
    Polls.insert(newPoll);
}


 var sname = template.$('#sname').val();
 var stier = template.$('#stier').val();
 var srank = template.$('#srank').val();
*/