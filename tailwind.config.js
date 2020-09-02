const { colors } = require('tailwindcss/defaultTheme');

/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
    },
    theme: {
        extend: {
            colors: {
                blue: {
                    ...colors.blue,
                    dark: '#131C21',
                },
                gray: {
                    ...colors.gray,
                    lightest: '#262D31',
                    lighter: '#B1B3B5',
                    light: '#2A2F32',
                    dark: '#090E11',
                    darker: '#30383d',
                },
                green: {
                    ...colors.green,
                    light: '#00AF9C',
                }
            },
            maxWidth: {
                '64': '16rem'
            },
            minWidth: {
                '16': '4rem',
                '64': '16rem',
                '128': '32rem',
            },
            minHeight: {
                '16': '4rem',
                '64': '16rem',
            },
            scale: {
                '-100': '-1',
            }
        }
    },
    variants: {},
    plugins: [],
    purge: {
        // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
        enabled: process.env.NODE_ENV === 'production',
        content: [
            'components/**/*.vue',
            'layouts/**/*.vue',
            'pages/**/*.vue',
            'plugins/**/*.js',
            'nuxt.config.js'
        ]
    }
}
