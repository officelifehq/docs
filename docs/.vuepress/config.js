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
                text: 'Manage',
                link: '/documentation/manage/overview'
              },
              {
                text: 'Operate',
                link: '/documentation/operate/project-management'
              },
              {
                text: 'Communicate',
                link: '/documentation/communicate/recent-ships'
              },
              {
                text: 'Grow',
                link: '/documentation/grow/e-coffee'
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
        ['developers/guidelines', 'Guidelines'],
      ]
    },
    {
      title: '👻 Core contributors',
      collapsable: false,
      children: [
        ['core-contributors/installation', 'Installation'],
        ['core-contributors/deployment-process', 'Deployment'],
      ]
    }
  ]
}

function getDocumentationSidebar() {
  return [
    {
      title: '🐄 OfficeLife',
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
        ['manage/employee-management', 'Employee management'],
        ['manage/team-management', 'Team management'],
        ['manage/company-management', 'Company management'],
        ['manage/group-management', 'Group management'],
      ]
    },
    {
      title: '🤖 Operate',
      collapsable: false,
      children: [
        ['operate/project-management', 'Project management'],
        ['operate/time-tracking', 'Time tracking'],
        ['operate/expenses', 'Expenses'],
        ['operate/hardware', 'Hardware management'],
      ]
    },
    {
      title: '🛰 Communicate',
      collapsable: false,
      children: [
        ['communicate/recent-ships', 'Recent ships'],
        ['communicate/worklogs', 'Work logs'],
        ['communicate/get-to-know-your-colleagues', 'Get to know your colleagues'],
      ]
    },
    {
      title: '🧚‍♀️ Grow',
      collapsable: false,
      children: [
        ['grow/e-coffee', 'e-Coffees'],
        ['grow/one-on-ones', '1-on-1’s'],
        ['grow/rate-your-manager', 'Rate your manager'],
        ['grow/skills', 'Skills'],
      ]
    }
  ]
}
