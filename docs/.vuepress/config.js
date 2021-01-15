module.exports = {
  title: 'OfficeLife Documentation',
  description: 'Everything you need to know how your company is doing.',
  themeConfig: {
    logo: '/vuepress-logo.png',
    lastUpdated: 'Last updated',
    repo: 'officelifehq/docs',
    docsDir: 'docs',
    docsBranch: 'main',
    // docsDir: 'docs',
    editLinks: true,
    sidebarDepth: 3,
    editLinkText: 'Found a typo? An error? Edit this page',
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
                link: '/section/'
              },
              {
                text: 'Manage',
                link: '/section/'
              },
              {
                text: 'Operate',
                link: '/section/'
              },
              {
                text: 'Communicate',
                link: '/section/'
              },
              {
                text: 'Grow',
                link: '/section/'
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
    },
    {
      title: '🤖 Operate',
      collapsable: false,
      children: [
        ['operate/project-management', 'Project management'],
        ['operate/time-tracking', 'Time tracking']
      ]
    }
  ]
}
