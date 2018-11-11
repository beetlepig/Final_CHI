/**
 * Created by karlos on 02/05/2017.
 */



function renderIndex(req, res, next) {

   // res.render('main', { title: 'Express' });
    res.redirect('/Maqueta');

}


module.exports = {
  renderIndex
};
