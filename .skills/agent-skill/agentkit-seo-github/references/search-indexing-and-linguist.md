# GitHub search, indexing, and Linguist

## Use this reference for

- searchability issues
- GitHub code-search repository reviews
- code-search limitations
- language-bar fixes

## Code-search basics

- public code search depends on the default branch
- private repositories may be indexed for authorized users, but not for public recruiter discovery
- searchability is constrained by documented limits such as:
  - file size limits
  - searchable byte limits per file
  - repository file-count limits
  - archive status
  - fork-specific search restrictions

## Stable search rules

- keep the default branch non-empty
- keep showcase repositories mildly active over time
- use clear file names, symbol names, and directory names
- remember that archived repositories are not searchable
- understand that untouched forks are poor portfolio anchors because fork visibility in search is constrained

## Linguist rules

- GitHub language stats are based on Linguist and can be skewed by vendored, generated, or data-heavy files
- use `.gitattributes` to mark generated, vendored, or documentation-heavy files correctly
- do not mark first-party source as vendored just to change the bar
- use Linguist overrides to correct representation, not to hide real source

## Important caution

Some Linguist overrides affect search visibility. Marking files as generated or vendored can remove them from parts of code search. Use these flags only where they are semantically correct.

## Agent output standard

When reviewing a repository for discoverability:

1. check public visibility and default-branch health
2. inspect metadata and README quality
3. inspect whether language stats misrepresent the real stack
4. suggest minimal `.gitattributes` fixes only where justified
