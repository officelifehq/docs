# Guidelines

Are you interested in giving a hand? We can't be more excited about it. Thanks in advance!

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
