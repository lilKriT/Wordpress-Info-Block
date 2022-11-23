// variable name with namespace, config object
wp.blocks.registerBlockType("quizplugin/quizblock", {
  title: "Gutenberg Quiz",
  icon: "smiley",
  category: "common",
  edit: function () {
    return <h3>This is h3 from JSX.</h3>;
  },
  save: function () {
    return wp.element.createElement("h1", null, "This is the frontend");
  },
});

// How to get jsx to work?
// install node
// npm init
// npm i @wordpress/scripts -D
// Add build commands
// npm run start
