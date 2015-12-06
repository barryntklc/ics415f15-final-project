Template.pollForm.events({

  // handle the form submission
  'submit form': function(event) {

    // stop the form from submitting
    event.preventDefault();

    // get the data we need from the form
    var newPoll = {
      question: event.target.sname.value,
      choices: [
        {  text: event.target.tier.value},
        {  text: event.target.rank.value}
      ]
    };

    // create the new poll
    Polls.insert(newPoll);
  }
});