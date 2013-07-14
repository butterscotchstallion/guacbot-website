/*---------------------
	:: Plugin 
	-> controller
---------------------*/
var fs = require('fs');

var PluginController = {

    index: function (req, res) {
        var layout = typeof req.headers['x-pjax'] !== 'undefined' && req.headers['x-pjax'];
        
        res.view({
            pageTitle: 'Plugins',
            layout: !layout
        });
    },
    
    details: function (req, res) {
        var name = req.param('name');
        var path = process.cwd() + '/views/plugin/details/' + name + '.ejs';
        var layout = typeof req.headers['x-pjax'] !== 'undefined' && req.headers['x-pjax'];
        
        fs.exists(path, function (exists) {
            if (exists) {
                res.view(path, {
                    plugin: name,
                    pageTitle: name,
                    layout: !layout
                });
            } else {
                res.send('No', 404);
            }
        });
    }

};

module.exports = PluginController;