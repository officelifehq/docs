# Guidelines

Are you interested in giving a hand? We can't be more excited about it. Thanks in advance!

## Contributor License Agreement (CLA)

Before we can accept your contribution, we will ask you to sign a Contributor License Agreement during the Pull request process. We are sorry we have to do this and for any inconvenience.

A Contributor License Agreement is peace of mind for us. It will ensure that you will not sue us in the future for any reason because we've accepted your pull request. There might so many reasons why people would want to sue, and we live in a crazy world. Even though our project is open source with a very permissive license, we can't afford being sued because someone wanted to contribute. So, we've put in place this automatic process to  make sure everyone is covered in this project - legally speaking.

## Our values as developers

### Simplicity

We think that nothing is more important than to have a codebase that is simple to understand, well documented and easy to maintain. We do not want any kind of complexity in the codebase. The more complex the code, the harder it is to move forward fast.

### Reduce the use of dependencies when we can

Dependencies are great because they let us not reinvent the wheel and move faster. However, they can have pretty nasty side effects:

* sometimes, a dependency has a lot of dependencies as well. This could drastically increase the chance of introducing bugs or break things in your own app, simply because down the line, one small library broke and the entire dependency chain breaks because of that.
* the more dependencies we have, the larger our app will be. It might not be a big thing to introduce a 2kb library in our app. But a hundred of small dependencies would increase our overall app size, asking users to download more data and slowing down the app, increasing our Docker image size, and so on.
* if our framework upgrades to a new major version, dependencies also have to be updated to match this version. External packages rarely get updated quickly. So you are left with a choice: either wait for the upgrade of those packages, or fork the dependency and upgrade it yourself. In both cases, this is a terrible waste of time.

So, what should we do about adding an external package to the codebase?

* Can we do it ourself? If it's not too much work, we should own everything and write our own solution instead.
* Is the package maintained? This is really important so we know that future love will be given to the package.
* Does the package have an MIT license? We should never take any other type of softwares.

### Do not waste time doing refactors

Sometimes, refactors are essential because of the technical debt, or because we did something that we could have done better and it bites us in the butt.

But most of the time, refactors are a waste of time that don't bring value to the customer. Customers don't care about a great API method that does 50% less calls. They just care about great products. We know - great products are the addition of small adjustments like these. But refactors are distractions and are rarely correctly timeboxed, leading to delays and eternal debates.

### Do not use fancy new tech if you can avoid it

We believe that boring technologies make great softwares. Boring technologies are battle tested. Boring technologies are predictable. They are familiar to most people.

## General information

### Timezones and time management

Like every software, at some point, we need to display dates. As a software that serves distributed teams, chances are users will be from all around the world - therefore we need to take timezones into account every time we display dates to the users.

::: warning
Dates currently, and always always should, be stored in UTC. The worst you can do in life as a software engineer, is to store dates in another timezone. UTC, always.
:::

Every date that is displayed to users, should pass through the `DateHelper` helper.
