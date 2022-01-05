import "./styles.scss";
import { Transition } from "@headlessui/react";

import {
  backgroundOverlayTransition,
  modalPanelTransition,
} from "config/constants/cssTransitions";
import React, { FC, Fragment } from "react";
import { Dialog } from "@headlessui/react";

export type ModalProps = {
  open: boolean;
  title: string;
  content: string | JSX.Element;
  onClose: () => void;
  actions: React.ReactNode[];
};

const Modal: FC<ModalProps> = ({ open, title, content, onClose, actions }) => {
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
          <Dialog.Overlay className="fixed inset-0 backdrop-blur-xs" />
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
                  <p className="text-sm text-gray-500">{content}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center space-x-8 mt-5 sm:mt-6">
              {actions}
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default Modal;
