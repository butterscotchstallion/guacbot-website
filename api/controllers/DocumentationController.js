/*---------------------
	:: Documentation 
	-> controller
---------------------*/
var DocumentationController = {

    index: function (req, res) {
        var layout = typeof req.headers['x-pjax'] !== 'undefined' && req.headers['x-pjax'];
        
        res.view({
            pageTitle: 'Documentation',
            layout: !layout
        });
    }

};
module.exports = DocumentationController;