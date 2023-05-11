import "../src/index.css";
import React from "react";
import DialogProvider from "../src/ui-kit/widgets/Dialog/DialogContext";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const globalDecorator = (StoryFn) => (
  <DialogProvider>
    <StoryFn />
  </DialogProvider>
);

export const decorators = [globalDecorator];
