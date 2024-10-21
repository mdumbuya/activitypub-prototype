import { configure, getConsoleSink } from "@logtape/logtape";

await configure({
  sinks: {
    console: getConsoleSink(),
  },
  filters: {},
  loggers: [
    { category: "activitypub-prototype", level: "debug", sinks: ["console"] },
    { category: "fedify", level: "info", sinks: ["console"] },
    { category: "logtape", level: "warning", sinks: ["console"] },
  ],
});
