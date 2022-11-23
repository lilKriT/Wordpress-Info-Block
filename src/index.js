// variable name with namespace, config object
wp.blocks.registerBlockType("quizplugin/quizblock", {
  title: "Gutenberg Quiz",
  icon: "smiley",
  category: "common",
  //   This is to connect edit and save
  //   By default, they are stored in html comments.
  attributes: {
    skyColor: { type: "string" },
    grassColor: { type: "string" },
  },
  edit: function (props) {
    function updateSkyColor(e) {
      props.setAttributes({ skyColor: e.target.value });
    }

    function updateGrassColor(e) {
      props.setAttributes({ grassColor: e.target.value });
    }

    return (
      <div>
        <input
          type="text"
          placeholder="Sky Color"
          onChange={updateSkyColor}
          value={props.attributes.skyColor}
        />
        <input
          type="text"
          placeholder="Grass Color"
          onChange={updateGrassColor}
          value={props.attributes.grassColor}
        />
      </div>
    );
  },
  save: function (props) {
    return (
      <p>
        Today the sky is {props.attributes.skyColor} and grass is{" "}
        {props.attributes.grassColor}
      </p>
    );
  },
});

// How to get jsx to work?
// install node
// npm init
// npm i @wordpress/scripts -D
// Add build commands
// npm run start
