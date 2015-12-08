/**
 *
 *
 * @author Erik Huang, Barryn Chun
 * @date 12/08/2015
 */

Meteor.startup(function() {
    Session.setDefault("templateName", "input");
});

Template.body.helpers({

    participants: function() {
        return Participants.find({}, {sort: {created: -1}});
    },
    page: function() {
        return Session.get("templateName");
    }
});

Template.body.events({
    "click .addadmin" : function () {
        Session.set("templateName", "addadmin");
        //document.$('.addadmin').css("background-color", "orange");
        //.$('.tourney').css("background-color", "white");
    },
    "click .tourney" : function () {
        Session.set("templateName", "input");
        //template.$('.tourney').css("background-color", "orange");
        //template.$('.addadmin').css("background-color", "white");
    }
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