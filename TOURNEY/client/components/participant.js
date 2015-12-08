/**
 * Created by Yuantien Huang on 10/1/2015.
 */
// attach events to our poll template
Template.participant.events({
    "click .delete" : function () {
        Participants.remove(this._id);
    }
});
