export const backgroundOverlayTransition = {
  enter: "ease-out duration-300",
  enterFrom: "opacity-0",
  enterTo: "opacity-100",
  leave: "ease-in duration-200",
  leaveFrom: "opacity-100",
  leaveTo: "opacity-0",
};

export const modalPanelTransition = {
  enter: "ease-out duration-300",
  enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
  enterTo: "opacity-100 translate-y-0 sm:scale-100",
  leave: "ease-in duration-200",
  leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
  leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
};

export const menuTransition = {
  enter: "transition ease-out duration-100",
  enterFrom: "transform opacity-0 scale-95",
  enterTo: "transform opacity-100 scale-100",
  leave: "transition ease-in duration-75",
  leaveFrom: "transform opacity-100 scale-100",
  leaveTo: "transform opacity-0 scale-95",
};
