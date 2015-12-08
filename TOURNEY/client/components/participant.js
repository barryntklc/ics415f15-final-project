/**
 *
 *
 * @author Erik Huang, Barryn Chun
 * @date 12/08/2015
 */

// attach events to our poll template
Template.participant.events({
    "click .delete" : function () {
        Participants.remove(this._id);
    }
});
