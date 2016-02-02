//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

    /* Imports */
    var Meteor = Package.meteor.Meteor;
    var Mongo = Package.mongo.Mongo;

    /* Package-scope variables */
    var Gym_info;

    (function () {
        //Custom collection
        Gym_info = new Mongo.Collection('gym_info');

    }).call(this);
    /* Exports */
    if (typeof Package === 'undefined') Package = {};
    Package['gymapp-collection'] = {
        Gym_info: Gym_info
    };

})();
/* Imports for global scope */

Gym_info = Package['gymapp-collection'].Gym_info;

