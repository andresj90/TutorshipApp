

exports.homePageCtrl = function (route) {
    route.get('/', (req, res) => {
        res.render('home')
    })
}