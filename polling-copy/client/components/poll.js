/**
 * Created by Yuantien Huang on 10/1/2015.
 */
// attach events to our poll template
Template.poll.events({
    "click .delete" : function () {
        Polls.remove(this._id);
    }
});
