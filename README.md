# MetaMask developer documentation

This is the new MetaMask developer documentation repository.
It's built on [Docusaurus](https://docusaurus.io/), a static site generator purpose-built for
technical documentation.

> This documentation site is in alpha and is published temporarily at
[metamask.github.io/mm-docs-v2/staging](https://metamask.github.io/mm-docs-v2/staging/).

## Contribute

All the documentation is in the form of Markdown files located in the `wallet` and `snaps` directories.
To add a new document:

1. Search for an existing issue.
2. Clone this repository to your computer.
3. Create a topic branch.
4. In a text editor, create the `.md` file in an appropriate location in the `wallet` or `snaps` directory, and add
   your content.
   Edit the `wallet-sidebar.js` or `snaps-sidebar.js` file to add the document to its appropriate
   place in the sidebar.
5. Preview your changes locally.
6. C

### Preview builds

Generate a preview build of a PR by making a comment starting with `@metamaskbot publish-preview`.
The contents of the PR are published as a preview, then linked in a PR comment.

Note that this feature is only available for branches on this repository.
If you're working from a fork, you must build locally to preview your work.

### Preview locally

- Install [Node.js](https://nodejs.org) version 16.
  - If you're using [nvm](https://github.com/creationix/nvm#installation) (recommended) running
    `nvm use` automatically chooses the right Node.js version for you.
- Install [Yarn v3](https://yarnpkg.com/getting-started/install).
- Run `yarn install` to install dependencies and run any required post-install scripts.

Run locally

`yarn start`

## Style guide

See the Microsoft style guide.

## Markdown guide

### Tabs

Tabs are documented here: https://docusaurus.io/docs/markdown-features/tabs

#### Markdown in tabs

One thing that's not documented is how to properly do Markdown inside tabs.
For example, to properly embed a list inside a tab item, one has to skip lines around the JSX tags,
and un-indent the list.
Otherwise, the four spaces are mistaken as the start of a pre-formatted block:

```jsx
<Tabs>
  <TabItem value="apple" label="Apple" default>

- This is a markdown apple 🍎
- This is **meow**


  </TabItem> {/* notice **two** skipped lines above*/}
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    This is a banana 🍌
  </TabItem>
</Tabs>
```

### Live code blocks

Rather than implementing our own live code blocks, we use the
[`remark-codesandbox`](https://github.com/kevin940726/remark-codesandbox/) Remark plugin.
This allows us to define a code block to be loaded live in a CodeSandbox iframe, by adding a meta to
the code block, such as ` ```javascript codesandbox=vanilla`

This allows us to keep our code blocks versioned and in our codebase, while giving us the full power
of CodeSandbox to showcase any example we want, with any dependency we want.

The plugin allows for simple codeblocks where the content of the block replaces the CodeSandbox
entry point, or more complex examples that can be loaded directly from the filesystem, by using
`codesandbox=file:./example-folder`, as detailed in the plugin's documentation.

## Design guide

In this repository, we use design tokens [implemented here](https://github.com/MetaMask/design-tokens).
These design tokens are available as CSS variables, which makes it easy for developers to use them
in their code.

By using design tokens, we ensure consistency in the design of the Metamask user interface across
different platforms and devices.
To use the design tokens in your code, simply reference the CSS variables in your styles.

For example, to use the primary color of the Metamask design, you would use the following CSS code:

```css
color: var(--color-text-default);
```

You can refer to all design tokens in the
[design-tokens](https://github.com/MetaMask/design-tokens/blob/main/src/css/design-tokens.css) repository.
