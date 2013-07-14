/*---------------------
	:: Home 
	-> controller
---------------------*/
var HomeController = {

    index: function (req, res) {
        var layout = typeof req.headers['x-pjax'] !== 'undefined' && req.headers['x-pjax'];
        
        res.view({
            pageTitle: 'About',
            layout: !layout
        });
    }

};
module.exports = HomeController;