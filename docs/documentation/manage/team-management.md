# Management of teams

## Overview

A team is a group of people. This is vague on purpose. It’s up to you to decide whether a team is a department, a separate business entity or a team within another bigger team. Employees can be part of one or more teams. When they are part of a team, employees have access to a new tab on their dashboard to see what’s going on this team.

Teams are public. It’s part of the philosophy of OfficeLife to encourage trust, transparency and collaboration. That means everyone in the company knows who is part of which team, what the team does, and what the people inside this team do.

## Creating a team

Adding a team, like adding a new employee in the system, can only be done in Adminland.

::: tip Rules
* A team can only be created, renamed and deleted in Adminland by someone with either the HR or administrator role.
* A team shall have a unique name in the company.
* The same applies for the team’s audit logs.
:::

## Team description

Teams have several elements that help different people in the company: description and useful links.

The description is all about what the team does. It should be a simple sentence, or can contain interesting facts about the team. Useful links are links that help understand how the team works. They could be a link to a JIRA instance, to a private Slack channel,...

Having those two concepts help different kind of people:

* new team members can quickly have a glance of what the team does and how it operates,
* members from other teams, especially in larger organizations, can understand why the team exists and how it can help them.

::: tip Rules
* Can be viewed by anyone in the company.
* Can be edited by any members of the team (regardless of their roles).
* Can be edited by employees with HR and administrator roles.
* Description can contain up to 65 535 characters and supports the Markdown format.
:::

## Team leader

A team has the concept of team leads. This information is useful, mainly, to understand the hierarchy of a team, and also to know who to contact when important information needs to be shared. However, there can only be one team leader per team.

::: tip Rules
* Everyone in the company can become a team lead.
* An employee can be a team lead of multiple teams.
* A team can only have one lead.
* When a team lead is assigned to the team, if that’s not already the case, (s)he will become part of the team.
* However, when a team lead is unassigned, (s)he will remain in the team until (s)he’s manually removed.
* Anyone in the company can see who is the team leader of a team.
* Once an employee becomes a team lead, this information appears on the employee’s profile page.
* Assigning a team lead can be done by employees with either the HR or the administrator roles.
:::

Here are the notifications that the Team Lead feature triggers:

* when an employee becomes a team lead, a notification is made for this employee,
* when a team lead is removed from this position in a team, a notification is also created for this employee.

## Team news

Every team can have a dedicated set of news, called Team News. These news appear at two places:

* on the team’s page,
* on the employee’s dashboard page, in the Team tab.

These news serve as a way to inform all team members about important events or information that members should care about.

News are public in the entire company.

::: tip Rules
* Everyone in the company can read all the team news.
* By default, only the 3 latest news are displayed on the team page, but there is a link to read all the news on a dedicated page.
* Creating a team news is restricted to team members, and employees with the HR or administrator roles.
* Updating and deleting a news can be done by anyone in the company, regardless of their roles. That will change in the future.
:::

## Team useful links

A team has a life on its own. There are many online places that are useful to a particular team: a dedicated Slack channel, a mailing list name, a private joke... Because each team is unique, it deserves its own set of links.

A team can have multiple links, called "useful links". Those links are public in the sense that anyone can see them, or click on them (although accessing the content of those links themselves is out of our control – a protected Google Docs for instance, couldn't be accessed without proper access).

::: tip Rules
* Anyone on the team, and employees with the HR or administrator roles, can add, edit or remove these links.
* A link has a type. Right now we support only Slack, emails and external urls.
* When creating a link, the label is optional, whereas the URL itself is mandatory. If a label is added, this will be the text that will displayed to the user for the given link. Otherwise, the URl will be displayed instead.
:::
