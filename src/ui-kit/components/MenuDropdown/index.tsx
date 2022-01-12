import { FC, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

import MenuLink from "ui-kit/components/Links/MenuLink";
import { menuTransition } from "config/constants/cssTransitions";
import classname from "utils/classname";

export interface DropdownMenuItem {
  title: string;
  href: string;
  className?: string;
  disabled?: boolean;
}

interface PropsType {
  title: string;
  items: DropdownMenuItem[];
}

const MenuDropdown: FC<PropsType> = ({ title, items }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          {title}
          <ChevronDownIcon
            className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter={menuTransition.enter}
        enterFrom={menuTransition.enterFrom}
        enterTo={menuTransition.enterTo}
        leave={menuTransition.leave}
        leaveFrom={menuTransition.leaveFrom}
        leaveTo={menuTransition.leaveTo}
      >
        <Menu.Items className="flex flex-col absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {items.map((item, index) => {
            return (
              <Menu.Item
                key={`${title}-menu-item-${index}`}
                disabled={item.disabled}
              >
                {({ active }) =>
                  item.disabled ? (
                    <span className="opacity-75">{item.title}</span>
                  ) : (
                    <MenuLink
                      className={classname(
                        item.className,
                        `${
                          !active && "text-gray-900"
                        } flex items-center w-full px-2 py-2 text-sm`
                      )}
                      to={item.href}
                      active={active}
                    >
                      {item.title}
                    </MenuLink>
                  )
                }
              </Menu.Item>
            );
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default MenuDropdown;
