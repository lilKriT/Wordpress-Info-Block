// variable name with namespace, config object
wp.blocks.registerBlockType("quizplugin/quizblock", {
  title: "Gutenberg Quiz",
  icon: "smiley",
  category: "common",
  //   This is to connect edit and save
  //   By default, they are stored in html comments.
  //   Source and selector let it be stored in the text itself.
  attributes: {
    skyColor: { type: "string" },
    grassColor: { type: "string" },
    // skyColor: { type: "string", source: "text", selector: ".skyColor" },
    // grassColor: { type: "string", source: "text", selector: ".grassColor" },
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
        {/* The class names are mostly used as source, but they can have other purpose */}
        Today the sky is{" "}
        <span className="skyColor">{props.attributes.skyColor}</span> and grass
        is <span className="grassColor">{props.attributes.grassColor}</span>
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
