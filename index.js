// tooling
const postcss = require('postcss');

// plugins by name
const plugins = {
	sequence: require('postcss-sequence'),
	negativePadding: require('postcss-negative-padding'),
	layouts: require('postcss-layouts'),
	exactWidth: require('postcss-exact-width'),
	gutters: require('postcss-gutters')
};

// plugin
export default postcss.plugin('postcss-fiber', (rawopts) => {
	// options
	const opts = Object.assign({}, rawopts);

	// cached processor
	const processor = postcss();

	// for each plugin
	Object.keys(plugins).forEach(
		(name) => {
			// plugin options by name
			const pluginOpts = Object.assign({
				disable: opts[name] === false
			}, opts[name]);

			// if the plugin is not disabled
			if (!pluginOpts.disable) {
				// use the plugin
				processor.use(
					plugins[name](pluginOpts)
				);
			}
		}
	);

	return processor;
});
