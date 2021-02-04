module.exports = {
  title: 'OfficeLife Documentation Portal',
  description: 'Everything you need to know about OfficeLife.',
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
                link: '/documentation/'
              },
              {
                text: 'Manage',
                link: '/documentation/manage/overview'
              },
              {
                text: 'Operate',
                link: '/documentation/operate/project-management'
              },
              {
                text: 'Communicate',
                link: '/documentation/'
              },
              {
                text: 'Grow',
                link: '/documentation/'
              }
            ]
          }
        ]
      },
      {
        text: 'Developers',
        link: '/contribution/overview'
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
      '/contribution/': getContributionSidebar(),
      '/documentation/': getDocumentationSidebar(),
    },
    plugins: [
      '@vuepress/active-header-links',
      '@vuepress/medium-zoom'
    ]
  }
}

function getContributionSidebar() {
  return [
    {
      title: 'Introduction',
      collapsable: false,
      children: [
        'overview',
      ]
    },
    {
      title: '👩‍🌾 Developers',
      collapsable: false,
      children: [
        ['core-contributors/deployment-process', 'Deployment'],
      ]
    },
    {
      title: '👻 Core contributors',
      collapsable: false,
      children: [
        ['core-contributors/project-management', 'Project management'],
      ]
    }
  ]
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
