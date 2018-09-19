#!/usr/bin/env node

const { argv } = process;
const options = {};

for (let i = 2; i < argv.length; i++) {
  switch (argv[i]) {
    case "-i":
    case "--improbability":
      options.improbability = argv[++i];
      break;

    case "-b":
    case "--brownian-motion-producer":
      options.brownianMotionProducer = argv[++i];
      break;

    // no default
  }
}

console.log(require(".")(options));
