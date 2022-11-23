// variable name with namespace, config object
wp.blocks.registerBlockType("infoplugin/infoblock", {
  title: "Info Block",
  icon: "smiley",
  category: "common",
  //   This is to connect edit and save
  //   By default, they are stored in html comments.
  //   Source and selector let it be stored in the text itself.
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
  //   The new way - this will use PHP, and won't require update whenever you change the way it's displayed.
  save: function () {
    return null;
  },
});

// How to get jsx to work?
// install node
// npm init
// npm i @wordpress/scripts -D
// Add build commands
// npm run start
