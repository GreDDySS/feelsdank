const humanize = require("humanize-duration");

const shortHumanize = humanize.humanizer({
    language: "shortEn",
    languages: {
      shortEn: {
        y: () => "y",
        mo: () => "mo",
        w: () => "w",
        d: () => "d",
        h: () => "h",
        m: () => "m",
        s: () => "s",
        ms: () => "ms",
      },
    },
  });
  
  const humanizer = () => {
    return shortHumanize(ms, {
      units: ["w", "d", "h", "m", "s"],
      largest: 4,
      round: true,
      conjunction: "",
      spacer: "",
    })
  };
  
  const timeDelta = () => {
    return humanizer(new Date().getTime() - time)
  };

  const uptime = () => {
    const ms = process.uptime() * 1000;
    return shortHumanize(ms, {
      units: ["w", "d", "h", "m", "s"],
      largest: 4,
      round: true,
      conjunction: "",
      spacer: "",
    });
  };
  
  module.exports = { uptime, humanizer, timeDelta}