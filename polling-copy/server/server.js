/**
 * Created by Yuantien Huang on 10/1/2015.
 */


Accounts.onCreateUser(function(options, user) {

    var x = Meteor.users.find().count();

    var account_type = "user";
    //if there are no other users, change user type to admin
    if (x === 0) {
        account_type = "admin";
    }

    user.type = account_type;
    //user.accounts = [];
    //accounts.add('test');

    if (options.profile)
        user.profile = options.profile;
    return user;
});

// run this when the meteor app is started
Meteor.startup(function() {

    // if there are no polls available create sample data
    if (Polls.find().count() === 0) {

        // create sample polls
        var samplePolls = [
            {
                question: 'Is Meteor awesome?',
                choices: [
                    { text: 'Of course!', votes: 0 },
                    { text: 'Eh', votes: 0 },
                    { text: 'No. I like plain JS', votes: 0 }
                ]
            },
            {
                question: 'Is CSS3 Flexbox the greatest thing since array_slice(bread)?',
                choices: [
                    { text: '100% yes', votes: 0 },
                    { text: '200% yes', votes: 0 },
                    { text: '300% yes', votes: 0 }
                ]
            }
        ];

        // loop over each sample poll and insert into database
        _.each(samplePolls, function(poll) {
            Polls.insert(poll);
        });

    }

});