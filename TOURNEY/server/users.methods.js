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
        if (x === "admin") {
            return true;
        } else {
            return false;
        }
    },
    emailExists : function(email) {
        var user = Meteor.users.findOne({"emails.0.address": email});
        var return_status = "DEFAULT";

        if (user === undefined) {
            return_status = "USER_NOT_FOUND";
        } else {
            if (user.type === "admin") {
                return_status = "USER_ALREADY_ADMIN";
            } else {
                return_status = "USER_PROMOTED"
                Meteor.users.update(user, {$set: {type: "admin"}});
            }
        }
        console.log("DEBUG: For given email: " + email);
        console.log("DEBUG: result: " + return_status);
        return return_status;
    }
});