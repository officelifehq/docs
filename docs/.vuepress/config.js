module.exports = {
  title: 'VuePress Starter Kit',
  description: 'This is your page description.',
  themeConfig: {
    logo: '/vuepress-logo.png',
    lastUpdated: 'Last updated',
    repo: 'https://github.com/bencodezen/vuepress-starter-kit',
    // docsDir: 'docs',
    editLinks: true,
    sidebarDepth: 3,
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
            text: 'Introduction',
            items: [
              {
                text: 'Getting started',
                link: '/documentation/introduction'
              },
              {
                text: 'Installation',
                link: '/documentation/installation'
              },
              {
                text: 'Core concepts',
                link: '/documentation/core-concepts'
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
        text: 'Contribute',
        link: '/contribution'
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
      '/documentation/': getDocumentationSidebar(),
    },
    plugins: [
      '@vuepress/active-header-links',
      '@vuepress/medium-zoom'
    ]
  }
}

function getDocumentationSidebar() {
  return [
    {
      title: 'Setup',
      collapsable: false,
      children: [
        'introduction',
        'installation',
        'core-concepts',
      ]
    },
    {
      title: '👩‍🏫 Manage',
      collapsable: false,
      children: [
        ['manage/overview', 'Overview'],
        ['manage/employee-management', 'Employee management']
      ]
    }
  ]
}
