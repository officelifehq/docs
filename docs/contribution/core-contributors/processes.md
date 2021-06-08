# All our internal processes

## Overview

OfficeLife becomes more complex every day. This page documents how we, the OfficeLife team, work and which tools we use.

## Our stack

### Infrastructure

* Our code is publically available on GitHub.
* We run two applications that are synced with the `main` branch:
  * [https://beta.officelife.io](https://beta.officelife.io)
  * [https://demo.officelife.io](https://demo.officelife.io)
* Those two applications are hosted on Fortrabbit, a PAAS specialized in PHP.
  * [Fortrabbit login portal](https://dashboard.fortrabbit.com/)
* All files (documents + avatars + logo) are uploaded on Uploadcare, which stores files on S3 itself.
  * [Uploadcare login](https://uploadcare.com/dashboard/)
* Mails are sent with Sendgrid.
  * [Sendgrid login](https://app.sendgrid.com/login)

### Marketing site

[The marketing website (https://officelife.io)](https://officelife.io) currently is a static website.

It is hosted [on Netlify](https://app.netlify.com/teams/officelife/overview). Right now, only Regis has access to it and should log in with GitHub.

Each commit on the `main` branch of [the Github repository](https://github.com/officelifehq/marketing) automatically deploys a new version on Netlify.

### Documentation website

Our [documentation website](https://docs.officelife.io/) uses VuePress.

It is also hosted [on Netlify](https://app.netlify.com/teams/officelife/overview). Right now, only Regis has access to it and should log in with GitHub.

The documentation portal is updated automatically on each commit on the `main` branch.

Search inside the documentation website is done with Algolia, on the Free plan ([quick link to admin panel](https://www.algolia.com/apps/BH4D9OD16A/dashboard)).

### Support

All support emails are sent from `support@officelife.io`.

Support is done with the tool called Freshdesks ([Freshdesk login panel](https://officelifehq.freshdesk.com/a/dashboard/default)).
