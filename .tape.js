module.exports = {
	'postcss-fiber': {
		'basic': {
			message: 'supports basic usage',
			options: {
				sequence: {
					units: [
				        {
				            abbr: 'gu',
				            pattern: 'n * 4',
				            output: 'px'
				        }
				    ]
				}
			}
		}
	}
};
