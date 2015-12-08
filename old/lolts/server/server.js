//http://stackoverflow.com/questions/23507384/adding-more-fields-to-meteor-user-accounts


//Accounts.onCreateUser(function (options, user) {
  //  alert("hello");
    /*alert(options);
    user.profile['type'] = "user";

    return user;*/
//});


//http://stackoverflow.com/questions/16605549/cant-add-user-attribute-using-accounts-oncreateuser
Accounts.onCreateUser(function(options, user) {

    user.type = 'user';
    user.accounts = [];
    //accounts.add('test');

    if (options.profile)
        user.profile = options.profile;
    return user;
});

/*Test serverside methods*/
Meteor.startup(function () {
    Meteor.methods({
        addAccount: function () {
            if (Meteor.userId() === false) {
                throw new Meteor.Error("not-authorized");
            }
        },
        verifyAdmin: function () {
            console.log(Meteor.user().type);
            if (Meteor.user().type = 'admin') {
                return true;
            } else {
                return false;
            }
        }
    })
});

Meteor.publish("participants", function () {
    return Participants.find();
});

/*
Meteor.methods({
    addTask: function (text) {
        if (! Meteor.userId()) {
            throw new Meteor.Error("not-authorized");
        }


        Tasks.insert({
            text: text,
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username
        });


        console.log("hello");
        Meteor.users.find();
    }
});*/

//Meteor.publish("users", function () {
  //  return Meteor.user();//{
        //$or: [
        //    {private: {$ne: true}},
        //    {owner: this.userId}
        //]
    //});
//});