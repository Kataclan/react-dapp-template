import { ModalProps } from ".";
import { Modals } from "./types";

export const CHANGE_CHAIN_MODAL = {
  title: "Wrong chain",
  content: "It looks like you are not connected to the Polygon blockchain",
};

export const MODALS: {
  [key in Modals]: Pick<ModalProps, "title" | "content">;
} = {
  [Modals.CHANGE_CHAIN]: CHANGE_CHAIN_MODAL,
};
