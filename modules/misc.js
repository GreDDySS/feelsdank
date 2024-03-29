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

const humanizeDuration = (ms) => {
  const options = {
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
      units: ['y', 'd', 'h', 'm', 's'],
      largest: 3,
      round: true,
      conjunction: '',
      spacer: '',

  }
  return humanize(ms, options);
};

const randomConnectEmote = () => {
  const emote = ["modCheck", "meow", "Lurk", "NaN", "peepoArrive", "ppHopper", "WatchingStream"]
  const random = Math.floor(Math.random() * emote.length)
  return emote[random]
}

const random = (num) => {
  const result = Math.floor(Math.random() * num) +1;
  return result
}

const randomArg = (arg) => {
  const result = Math.floor(Math.random() * arg.length)
  return arg[result]
}

const logError = (name, reason, stack) => {
  const Error = new feelsdank.DB.Error({
    name: name,
    message: reason,
    stack: stack,
  })
  Error.save()
}

module.exports = { uptime, humanizer, timeDelta, humanizeDuration, randomConnectEmote, random, randomArg, logError}