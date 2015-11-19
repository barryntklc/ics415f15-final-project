//http://stackoverflow.com/questions/23507384/adding-more-fields-to-meteor-user-accounts


//Accounts.onCreateUser(function (options, user) {
  //  alert("hello");
    /*alert(options);
    user.profile['type'] = "user";

    return user;*/
//});


//http://stackoverflow.com/questions/16605549/cant-add-user-attribute-using-accounts-oncreateuser
Accounts.onCreateUser(function(options, user) {

    //test attributes
    /*
    user.permission = 'default';
    user.hello = '';
    user.a = '';
    user.b = '';
    user.lol = '';
    */

    user.type = 'user';
    user.accounts = [];

    if (options.profile)
        user.profile = options.profile;
    return user;
});

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


//Meteor.publish("users", function () {
  //  return Meteor.user();//{
        //$or: [
        //    {private: {$ne: true}},
        //    {owner: this.userId}
        //]
    //});
//});