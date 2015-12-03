Template.body.helpers({
    participants: function () {
        return Participants.find({}, {sort: {created: -1}});
    }
});

Template.admin.events({
    "click .delete": function() {
        console.log("DEBUG: delete clicked!");

    }
});