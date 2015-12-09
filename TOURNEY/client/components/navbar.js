/**
 * Created by Chunmeista on 12/8/2015.
 */

Template.navbar.events({

});

//http://stackoverflow.com/questions/10677491/how-to-get-meteor-call-to-return-value-for-template
//http://stackoverflow.com/questions/15252754/if-statements-in-handlebars

Template.navbar.helpers({
    admin: function() {
        Meteor.call("isAdmin", Meteor.userId(), function(error, data) {
            if (error) {
                console.log(error);
            }
            Session.set('userType', data);
        });

        var type = Session.get('userType');
        if (type === "admin") {
            return true;
        } else {
            return false;
        }
    }
});

/*
 "click .tourney" : function() {
 template.$('.tourney').css("background-color", "orange");
 template.$('.addadmin').css("background-color", "white");
 },
 "click .addadmin" : function() {
 template.$('.addadmin').css("background-color", "orange");
 template.$('.tourney').css("background-color", "white");
 }
 */