module.exports = {
  title: 'VuePress Starter Kit',
  description: 'This is your page description.',
  themeConfig: {
    logo: '/vuepress-logo.png',
    lastUpdated: 'Last updated',
    repo: 'https://github.com/bencodezen/vuepress-starter-kit',
    // docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Recommend a change',
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Documentation',
        items: [
          {
            text: 'Getting started',
            items: [
              {
                text: 'What is OfficeLife',
                link: '/documentation/introduction'
              },
              {
                text: 'What’s new',
                link: '/section/#some-more-content'
              },
              {
                text: 'Release note',
                link: '/section/#some-more-content'
              },
            ],
          },
          {
            text: 'Domains',
            items: [
              {
                text: 'Recruit',
                link: '/section/#some-more-content'
              },
              {
                text: 'Manage',
                link: '/section/#some-more-content'
              },
              {
                text: 'Operate',
                link: '/section/#some-more-content'
              },
              {
                text: 'Communicate',
                link: '/section/#some-more-content'
              },
              {
                text: 'Grow',
                link: '/section/#some-more-content'
              }
            ]
          }
        ]
      },
      {
        text: 'Contributing guide',
        items: [
          {
            text: 'New to OfficeLife?',
            link: '/section/#section-introduction'
          },
          {
            text: 'What’s new',
            link: '/section/#some-more-content'
          },
          {
            text: 'Recruit',
            link: '/section/#some-more-content'
          },
          {
            text: 'Manage',
            link: '/section/#some-more-content'
          },
          {
            text: 'Operate',
            link: '/section/#some-more-content'
          },
          {
            text: 'Communicate',
            link: '/section/#some-more-content'
          },
          {
            text: 'Grow',
            link: '/section/#some-more-content'
          }
        ]
      },
      {
        text: 'Links',
        items: [
          {
            text: 'Marketing site',
            link: 'https://officelife.io'
          },
          {
            text: 'GitHub repository',
            link: 'https://github.com/officelifehq/officelife'
          },
          {
            text: 'Email',
            link: 'mailto:hello@officelife.io'
          }
        ]
      },
    ],
    sidebar: {
      '/documentation/': getDocumentationSidebar('Guide', 'Advanced'),
    },
    plugins: ['@vuepress/active-header-links']
  }
}

function getDocumentationSidebar(groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        'introduction',
        'installation',
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'frontmatter',
        'permalinks',
        'markdown-slot',
        'global-computed'
      ]
    }
  ]
}
