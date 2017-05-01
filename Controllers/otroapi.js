/**
 * Created by sky_k on 01/05/2017.
 */
let unirest = require('unirest');

function init(req,res,next) {


    res.redirect('/');
}

module.exports = {
    init
}