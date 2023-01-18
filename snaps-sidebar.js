/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 The sidebars can be generated from the filesystem, or explicitly defined here.
 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebar = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // snapsSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  snapsSidebar: [
    'index',
    {
      type: "category",
      label: "How To",
      link: { type: "generated-index" },
      items: [
        "how-to/guide",
        "how-to/patching-dependencies",
      ]
    },
    {
      type: "category",
      label: "Reference",
      link: { type: "generated-index" },
      items: [
        "reference/rpc-api",
        "reference/permissions",
        "reference/exports"
      ]
    }
  ]
};

module.exports = sidebar;