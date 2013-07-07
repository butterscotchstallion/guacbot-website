/*---------------------
	:: Plugin 
	-> controller
---------------------*/
var fs = require('fs');

var PluginController = {

    index: function (req, res) {
        res.view();
    },
    
    details: function (req, res) {
        var name = req.param('name');
        var path = process.cwd() + '/views/plugin/details/' + name + '.ejs';
        
        fs.exists(path, function (exists) {
            if (exists) {
                res.view(path, {
                    plugin: name
                });
            } else {
                res.send('No', 404);
            }
        });
    }

};

module.exports = PluginController;