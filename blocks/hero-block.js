const { registerBlockType } = wp.blocks;
const { createElement: el } = wp.element;
const { MediaUpload, MediaUploadCheck } = wp.blockEditor;
const { Button } = wp.components;

registerBlockType("norbert-academy/hero", {
  apiVersion: 3,
  title: "NA Hero Section",
  icon: "format-image",
  category: "widgets",

  attributes: {
    images: { type: "array", default: [] }, // renamed attribute
  },

  edit: function (props) {
    const { attributes, setAttributes } = props;
    const { images } = attributes;

    return el(
      "div",
      { className: "na-hero-section" },

      // Image picker
      el(
        MediaUploadCheck,
        {},
        el(MediaUpload, {
          onSelect: (media) => setAttributes({ images: media }),
          allowedTypes: ["image"],
          multiple: true,
          render: ({ open }) =>
            el(
              Button,
              { onClick: open, isPrimary: true },
              images && images.length ? "Change Images" : "Select Images",
            ),
        }),
      ),

      // Display images in editor as small previews
      images && images.length
        ? el(
            "div",
            { className: "na-hero-collage-editor" },
            images.map((img) =>
              el("img", {
                src: img.url,
                key: img.id,
                style: { width: "100px", margin: "5px" },
              }),
            ),
          )
        : null,
    );
  },

  save: function (props) {
    const { images } = props.attributes;

    return el(
      "div",
      { className: "na-hero-section" },
      images && images.length
        ? el(
            "div",
            { className: "na-hero-collage" },
            images.map((img) =>
              el("img", {
                class: "na-hero-skill-image",
                key: img.id,
                src: img.url,
                alt: img.alt || "",
                style: {
                  width: "30%",
                  margin: "1%",
                  float: "left",
                  objectFit: "cover",
                  position: "absolute",
                  top: "25%",
                  left: "35%",
                },
              }),
            ),
          )
        : null,
    );
  },
});
