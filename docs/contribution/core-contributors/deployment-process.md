# Deployment process

## Create a release

OfficeLife uses [semantic-release](https://semantic-release.gitbook.io/semantic-release/) to manage releases.
It allows to create new releases based on the history of modifications since last release, and create a patch/minor/major release depending on some rules.

To create a new release there is 2 ways: create a pre-release or an official release.

### Create a pre-release

You can create a pre-release by pushing the main branch to one of these breanches:
  - next
  - next-major
  - beta
  - alpha

This will create a new GitHub pre-release.


### Create an official release

To create an official release (on main branch), go to [`Actions` > `Release`](https://github.com/officelifehq/officelife/actions/workflows/release.yml), then run the workflow:

![Run workflow](run-release-workflow.png)


## Steps

When a new release is created, semantic-release rules describied in the [`.releaserc`](https://github.com/officelifehq/officelife/blob/main/.releaserc) files are applied.

| Plugin | Description |
|--------|-------------|
| `@semantic-release/commit-analyzer` | Analyse commit history to determine the next release version. |
| `@semantic-release/release-notes-generator` | Generates the release note content. |
| `@semantic-release/changelog` | Write down the release note in the `CHANGELOG.md` file. |
| `semantic-release-github-pullrequest` | Create a pull request on the main branch to update the updated `CHANGELOG.md` file.|

The actions that will be run by the whole workflow are:

1. semantic-release creates a new release in GitHub
2. a pull request is created on the `main` branch the update the `CHANGELOG.md` file
3. a package is build with all dependencies, and built assets, and uploaded as release's assets file

