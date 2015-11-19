/**
 * Created by Chunmeista on 11/10/2015.
 */

/*
Deps.autorun(function(){
    Meteor.subscribe('userData');
});
*/

Meteor.call('verifyAdmin', function(err, data) {
    if (err) {
        console.log(err);
    }
    console.log(data);
});

Accounts.onLogin(Meteor.call

);

/*
Template.hello.greeting = function() {
  return Session.get('q');
};

console.log(Meteor.call('isAdmin'));
console.log(hello.greeting);
    */