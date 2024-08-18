import { useSnackbar } from "notistack";

const NotificationUtils = () => {
  const { enqueueSnackbar } = useSnackbar();

  const showSuccess = (message) => {
    enqueueSnackbar(message, { variant: "success", autoHideDuration: 5000 });
  };

  const showError = (message) => {
    enqueueSnackbar(message, { variant: "error", autoHideDuration: 5000 });
  };

  const showInfo = (message) => {
    enqueueSnackbar(message, { variant: "info", autoHideDuration: 5000 });
  };

  return { showSuccess, showError, showInfo };
};

export default NotificationUtils;
