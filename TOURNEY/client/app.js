/**
 *
 *
 * @author Erik Huang, Barryn Chun
 * @date 12/08/2015
 */

Template.body.helpers({

    participants: function() {
        return Participants.find({}, {sort: {created: -1}});
    },
});

// adds index to each item
UI.registerHelper('indexedArray', function(context, options) {
    if (context) {
        return context.map(function(item, index) {
            item._index = index;
            return item;
        });
    }
});