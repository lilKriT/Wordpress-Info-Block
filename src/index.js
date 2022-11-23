// variable name with namespace, config object
wp.blocks.registerBlockType("quizplugin/quizblock", {
  title: "Gutenberg Quiz",
  icon: "smiley",
  category: "common",
  edit: function () {
    return wp.element.createElement("h3", null, "This is a plugin - EDIT"); // type of element, attributes or classes, content or children
  },
  save: function () {
    return wp.element.createElement("h1", null, "This is the frontend");
  },
});

// How to get jsx to work?
// install node
// npm init
// npm i @wordpress/scripts -D
