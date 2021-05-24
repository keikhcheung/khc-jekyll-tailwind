const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: [`_site/**/*.html`],
  theme: {
    extend: {
      fontFamily: {
        'sign': '"Space Grotesk", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      },
      lineHeight: {
        'extra-loose': '2.75',
        '12': '3rem',
      },
      // Change headings font to as defined by `sign`
      typography: theme => ({
        DEFAULT: {
          css: {
            h1: {
              fontFamily: `${theme('fontFamily.sign')}`,
              fontWeight: "900",
              letterSpacing: "-0.02em",
            },
            h2: {
              fontFamily: `${theme('fontFamily.sign')}`,
            },
            h3: {
              fontFamily: `${theme('fontFamily.sign')}`,
            },
            h4: {
              fontFamily: `${theme('fontFamily.sign')}`,
            },
          }
        }
      })
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    // Add `before:content` & `after:content` pseudo classes for ::before and ::after
    // Working with data-content pseudo classes
    plugin(({ addVariant, e }) => {
      addVariant('before', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`before${separator}${className}`)}::before`;
        });
      });
      addVariant('after', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`after${separator}${className}`)}::after`;
        });
      });
    }),
    plugin(({ addUtilities }) => {
      const contentUtilities = {
        '.content': {
          content: 'attr(data-content)',
        },
        '.content-before': {
          content: 'attr(data-before)',
        },
        '.content-after': {
          content: 'attr(data-after)',
        },
      };
      addUtilities(contentUtilities, ['before', 'after']);
    }),
  ],
};
