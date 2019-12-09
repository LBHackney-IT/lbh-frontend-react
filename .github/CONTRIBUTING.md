# How to contribute

If you'd like to contribute to this repository, we would love the help!

## Prior art

This repository is intended to be a React version of the
[London Borough of Hackney's pattern library](https://github.com/LBHackney-IT/lbh-frontend),
which itself is based on the
[GOV.UK pattern library](https://github.com/alphagov/govuk-frontend). Please
refer to the existing implementations in those repositories when tackling a new
component, or adding a feature to an existing one.

Where it makes sense, we have favoured doing things in a more idiomatic React
way than the templates we are building off, so component props don't map exactly
to those templates, and that's ok.

## Branching strategy

We use a
[Git Flow](https://nvie.com/posts/a-successful-git-branching-model/)-like
branching strategy, and branches should follow a similar naming convention. If
the work you are doing relates to a ticket in Jira, feel free to use the ticket
reference as the branch prefix instead of `feature`, `fix`, `chore`, etc.

Please, never commit directly to `master`, even if you have the permissions to
do so.

## Git history

When making changes to the repository, please take care to write good commit
messages. Your commits should tell the story of the code so future developers
can understand what and why without needing to have a conversation with the
author (who likely has forgotten). See the
[GDS style guide](https://gds-way.cloudapps.digital/standards/git.html) for a
good primer.

When amending a pull request based on review comments, please make the effort to
keep your commit history clean and readable. Git rebasing will help with this.
Pull requests with very messy histories may be rejected.

## Pull requests

Please take the time to fill out the pull request template. If you are working
on a component that already exists in another pattern library, it can be helpful
to link to the source you are working from in the pull request description, so
reviewers can easily find the prior art and better understand the decisions you
have made.

## Testing

Please be sure to run the full test suite on every commit (see the readme for
instuctions on running tests). All commits in a pull request should have passing
tests, to make finding where a bug was introduced more straightforward in the
future.

## Documentation

We try to document everything we export. Please document any code you introduce,
and update the documentation when changing the functionality of existing code.
See the readme for how to build the documentation. Watch out for warnings of
missing definitions when referencing other parts of the codebase.
