import { ProviderContext } from "contexts/provider";
import { useContext, useEffect } from "react";
import useDialog from "ui-kit/widgets/Dialog/useDialog";
import DialogComponent from "ui-kit/widgets/Dialog/DialogComponent";
import { isValidChainId } from "utils/chain";

export const useChangeChainDialog = (
  onChangeFallback?: (error: string) => void
) => {
  const { props } = useContext(ProviderContext);

  const [openDialogSwitchChain] = useDialog(
    <DialogComponent
      title="Incorrect chain"
      description="Please switch your chain"
    />,
    true,
    "dialog-change-chain"
  );

  useEffect(() => {
    if (!isValidChainId(props.network)) {
      openDialogSwitchChain();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.network]);
};
