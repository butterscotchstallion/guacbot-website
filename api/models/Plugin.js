/*---------------------
	:: Plugin
	-> model
---------------------*/
module.exports = {

	attributes: {

		// Simple attribute:
		// name: 'STRING',

		// Or for more flexibility:
		// phoneNumber: {
		//	type: 'STRING',
		//	defaultsTo: '555-555-5555'
		// }
        
        display_name: 'STRING',
        filename: 'STRING',
        enabled: {
            type: 'INTEGER',
            defaultsTo: 0
        },
        long_desc: 'STRING',
        short_desc: 'STRING'
		
	}

};
