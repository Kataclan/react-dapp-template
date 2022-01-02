import { FC } from "react";
import { BrowserRouter } from "react-router-dom";

import { ConfigProvider } from "contexts/config";
import { ProviderContextProvider } from "contexts/provider";
import { NotificationsProvider } from "contexts/notifications";
import { BlockProvider } from "contexts/block";

const ContextProviders: FC = ({ children }) => (
  <NotificationsProvider>
    <ConfigProvider>
      <ProviderContextProvider>
        <BlockProvider>
          <BrowserRouter>{children}</BrowserRouter>
        </BlockProvider>
      </ProviderContextProvider>
    </ConfigProvider>
  </NotificationsProvider>
);

export default ContextProviders;
