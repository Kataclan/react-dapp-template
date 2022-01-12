import { FC } from "react";
import { BrowserRouter } from "react-router-dom";

import { ConfigProvider } from "./contexts/config";
import { ProviderContextProvider as Web3Provider } from "./contexts/provider";
import { NotificationsProvider } from "./contexts/notifications";
import { BlockProvider } from "./contexts/block";
import DialogProvider from "ui-kit/widgets/Dialog/DialogContext";

const ContextProviders: FC = ({ children }) => (
  <BrowserRouter>
    <NotificationsProvider>
      <DialogProvider>
        <ConfigProvider>
          <Web3Provider>
            <BlockProvider>{children}</BlockProvider>
          </Web3Provider>
        </ConfigProvider>
      </DialogProvider>
    </NotificationsProvider>
  </BrowserRouter>
);

export default ContextProviders;
