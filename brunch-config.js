// See http://brunch.io for documentation.
exports.files = {
    javascripts: {
        joinTo: {
            'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
            'app.js': ['app/main.js']
        }
    },
    stylesheets: {
        joinTo: {
            'app.css': [
                'app/css/normalize.scss',
                'app/css/bootstrap-grid.css',
                'app/css/defaults.scss',
                'app/css/a11y.scss',
                'app/css/definitions.scss',
                'app/css/typography.scss',
                'app/css/elements.scss',
                'app/css/queries.scss',
                'app/css/print.scss'
            ]
        }
    }
};

exports.plugins = {
    babel: {presets: ['latest']},
    "static": {
        processors: [
            require('html-brunch-static')({
                handlebars: {enableProcessor: true},
                processors: [
                    require('marked-brunch-static')(),
                    require('jade-brunch-static')({pretty: true})
                ],
                defaultContext: {},
                // partials: "",
                // layouts: "",
                minify: ""
            })
        ]
    }

};
