const tests = [
  [
    `React.createElement("div", {
      class: "hi"
    }, "Some styled text"));`,
    `React.createElement("div", {
      className: "hi"
    }, "Some styled text"));`,
  ],
  [
    `React.createElement("div", {
      style: {},
      className: "hi"
    }, "Some styled text"));`,
    `React.createElement("div", {
      style: {},
      className: "hi"
    }, "Some styled text"));`,
  ],
  [
    `function Component({
      count
    }) {
      return /* @__PURE__ */React.createElement("div", {
        class: "App"
      }, count, /* @__PURE__ */React.createElement("div", {
        style: {},
        class: "hi"
      }, "Some styled text"));
    }`,
    `function Component({
      count
    }) {
      return /* @__PURE__ */React.createElement("div", {
        className: "App"
      }, count, /* @__PURE__ */React.createElement("div", {
        style: {},
        className: "hi"
      }, "Some styled text"));
    }`,
  ],
];

module.exports = tests;