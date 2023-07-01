const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disenablePrevent = () =>
    window.removeEventListener("beforeunload", listener);
  return { enablePrevent, disenablePrevent };
};

export default usePreventLeave;
