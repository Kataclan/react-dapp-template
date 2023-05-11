import { Transition } from "@headlessui/react";
import { FC, Fragment } from "react";
import { Dialog } from "@headlessui/react";

import {
  backgroundOverlayTransition,
  modalPanelTransition,
} from "../../constants/cssTransitions";

import { DialogProps } from "./types";
import classname from "utils/classname";

const DialogComponent: FC<DialogProps> = ({
  children,
  title,
  open = false,
  description = "",
  onClose = () => null,
  actions = [],
  closeOnOverlayClick = true,
}) => {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog
        onClose={onClose}
        className="fixed z-10 inset-0 flex items-center justify-center min-h-screen"
      >
        <Transition.Child
          as={Fragment}
          enter={backgroundOverlayTransition.enter}
          enterFrom={backgroundOverlayTransition.enterFrom}
          enterTo={backgroundOverlayTransition.enterTo}
          leave={backgroundOverlayTransition.leave}
          leaveFrom={backgroundOverlayTransition.leaveFrom}
          leaveTo={backgroundOverlayTransition.leaveTo}
        >
          <Dialog.Overlay
            className={classname(
              "fixed inset-0 backdrop-blur-xs",
              !closeOnOverlayClick && "pointer-events-none"
            )}
          />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter={modalPanelTransition.enter}
          enterFrom={modalPanelTransition.enterFrom}
          enterTo={modalPanelTransition.enterTo}
          leave={modalPanelTransition.leave}
          leaveFrom={modalPanelTransition.leaveFrom}
          leaveTo={modalPanelTransition.leaveTo}
        >
          <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
            <div>
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-600">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  stroke="white"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <div className="mt-3 text-center sm:mt-5">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  {title}
                </h3>
                <div className="mt-2">
                  {description !== "" ? (
                    <p className="text-sm text-gray-500">{description}</p>
                  ) : (
                    children
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-center space-x-8 mt-5 sm:mt-6"></div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default DialogComponent;
