import * as alertAction from "../reduxSlices/alert";
function alertAndLoaders(message,color,dispatch,loaderOps = true) {
  if (loaderOps) {
    dispatch(alertAction.setLoader(true));
    setTimeout(() => {
      dispatch(alertAction.setLoader(false));
      dispatch(
        alertAction.setAlertData({
          message,
          show: true,
          color,
        })
      );
    }, 2000);

    setTimeout(() => {
      dispatch(alertAction.setAlertData({ show: false }));
    }, 4000);
  } else if (loaderOps === false) {
    setTimeout(() => {
      dispatch(
        alertAction.setAlertData({
          message,
          show: true,
          color,
        })
      );
    }, 2000);

    setTimeout(() => {
      dispatch(alertAction.setAlertData({ show: false }));
    }, 4000);
  }
}

export default alertAndLoaders;
