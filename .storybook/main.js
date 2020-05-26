const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.js', '../src/**/*.stories.tsx'],
    addons: [
        '@storybook/preset-create-react-app',
        '@storybook/addon-links',
        '@storybook/addon-notes',
        '@storybook/addon-actions',
        '@storybook/addon-knobs',
        '@storybook/addon-storysource'
    ],
    //https://storybook.js.org/docs/configurations/custom-webpack-config/
    webpackFinal: async (config, { configType }) => {
        // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
        // You can change the configuration based on that.
        // 'PRODUCTION' is used when building the static version of storybook.

        //SCSS
        config.module.rules.push({
            test: /\.scss$/,
            use: [
                {
                    loader: "style-loader"
                },
                {
                    loader: "css-loader"
                },
                {
                    loader: "sass-loader",
                    options: {
                        javascriptEnabled: true
                    }
                }
            ],
            include: path.resolve(__dirname, '../'),
        });

        //TSX
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            loader: require.resolve('babel-loader'),
            options: {
                presets: [['react-app', { flow: false, typescript: true }]],
            },
        })
        /*
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve('ts-loader'),
                },
                // Optional
                {
                    loader: require.resolve('react-docgen-typescript-loader'),
                },
            ],
        });
        */
        config.resolve.extensions.push('.ts', '.tsx');

        // Return the altered config
        return config;
    },
};
