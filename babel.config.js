module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          chrome: "87",
          edge: "88",
          firefox: "78",
          safari: "14",
        },
      },
    ],
  ],
};
