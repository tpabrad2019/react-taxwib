module.exports = function (api) {
    api.cache(true);
  
    const presets = ["@babel/preset-react", "@babel/preset-env"];
    const plugins = [ "@babel/transform-runtime", "@babel/plugin-proposal-class-properties" ];
  
    return {
      presets,
      plugins
    };
  }