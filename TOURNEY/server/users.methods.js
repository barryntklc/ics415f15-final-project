/**
 *
 *
 * @author Erik Huang, Barryn Chun
 * @date 12/08/2015
 */

Meteor.methods({
    /**
     * isAdmin
     * @return true if the current user is an admin, false otherwise
     */
    isAdmin : function(user) {
        var x = Meteor.users.findOne({_id: user}).type;
        console.log(x);
        return x;
    }
});