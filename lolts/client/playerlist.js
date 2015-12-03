/**
 * Created by Chunmeista on 12/3/2015.
 */
Template.body.helpers({
    participants: function () {
        return Participants.find({}, {sort: {created: -1}});
    }
});