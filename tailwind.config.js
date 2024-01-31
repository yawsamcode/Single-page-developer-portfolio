module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        SpaceGrotesk: ["Space Grotesk", "sans-serif;"],
      },
      colors: {
        PortBlack: "#151515",
        PortGreen: "#4EE1A0",
        DarkGray: "#242424",
        LightGray: "#242424",
        PortWhite: "#FFFFFF",
      },
      backgroundImage: {
        "fem-icon": "url('./images/icon-frontend-mentor.svg')",
        "github-icon": "url('./images/icon-github.svg')",
        "linkedin-icon": "url('./images/icon-linkedin.svg')",
        "twitter-icon": "url('./images/icon-twitter.svg')",
        "pattern-circle": "url('./images/pattern-circle.svg')",
        "pattern-rings": "url('./images/pattern-rings.svg')",
        "profile-img-desktop": "./url('images/image-profile-desktop.webp')",
        "profile-img-mobile": "url('./images/image-profile-mobile.webp')",
        "profile-img-tablet": "url('./images/image-profile-tablet.webp')",
        "images-thumbnail-project-1-large":
          "url('./images/thumbnail-project-1-large.webp')",
        "images-thumbnail-project-1-small":
          "url('./images/thumbnail-project-1-small.webp')",
        "images-thumbnail-project-2-large":
          "url('./images/thumbnail-project-2-large.webp')",
        "images-thumbnail-project-2-small":
          "url('./images/thumbnail-project-2-small.webp')",
        "images-thumbnail-project-3-large":
          "url('./images/thumbnail-project-3-large.webp')",
        "images-thumbnail-project-3-small":
          "url('./images/thumbnail-project-3-small.webp')",
        "images-thumbnail-project-4-large":
          "url('images/thumbnail-project-4-large.webp')",
        "images-thumbnail-project-4-small":
          "url('images/thumbnail-project-4-small.webp')",
        "images-thumbnail-project-5-large":
          "url('images/thumbnail-project-5-large.webp')",
        "images-thumbnail-project-5-small":
          "url('images/thumbnail-project-5-small.webp')",
        "images-thumbnail-project-6-large":
          "url('images/thumbnail-project-6-large.webp')",
        "images-thumbnail-project-6-small":
          "url('images/thumbnail-project-6-small.webp')",
      },
    },
  },
  plugins: [],
};
