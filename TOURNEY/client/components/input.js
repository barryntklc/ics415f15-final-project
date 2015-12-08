/**
 *
 *
 * @author Erik Huang, Barryn Chun
 * @date 12/08/2015
 */

Template.pollForm.events({

  // handle the form submission
  'submit form': function(event) {

    // stop the form from submitting
    event.preventDefault();

    // get the data we need from the form
    var newParticipant = {
      participant_name: event.target.sname.value,
      participant_tier: event.target.tier.value,
      participant_rank: event.target.rank.value,
      created: new Date()
    };

    // create the new poll
    Participants.insert(newParticipant);
  }
});