/**
 * Created by karlos on 25/04/2017.
 */
let client = require('guidebox')
let Guidebox = new client('afa2abc6dd945d98a3c1590deae1d12d571dfbf9', 'CO');
let moviesOnePage = Guidebox.movies.list({ sources: 'netflix',limit: 5});
let regions = Guidebox.regions.list();


function init(req,res,next) {
    console.log('entro');
    console.log(moviesOnePage);
    res.render('index', { title: 'Express' });
}



module.exports = {
    init
};