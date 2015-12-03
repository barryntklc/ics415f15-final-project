/**
 * Created by Chunmeista on 11/10/2015.
 * @author Barryn Chun, Erik Huang
 */

Accounts.onLogin(Meteor.call
);


Template.body.events({});

Template.body.helpers({
    participants: function () {
        return Participants.find({}, {sort: {created: -1}});
    }
});