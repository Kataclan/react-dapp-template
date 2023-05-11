import { ProviderContext } from "contexts/provider";
import { useCallback, useContext } from "react";
import useDialog from "ui-kit/widgets/Dialog/useDialog";
import { browserHasInjectedProvider } from "utils/web3";
import DialogComponent from "ui-kit/widgets/Dialog/DialogComponent";

export const useConnectWallet = (
  onConnectFailCallback: (error: string) => void
) => {
  const { connect } = useContext(ProviderContext);

  const [openDialogWalletNotFound] = useDialog(
    <DialogComponent
      title="Wallet not found"
      description="Install metamask or other "
    />,
    false,
    "dialog-wallet-not-found"
  );

  const handleConnect = useCallback(async () => {
    if (!browserHasInjectedProvider()) {
      openDialogWalletNotFound();
    } else {
      try {
        await connect();
      } catch (e: any) {
        onConnectFailCallback(e);
      }
    }
  }, [connect, openDialogWalletNotFound, onConnectFailCallback]);

  return [handleConnect];
};
