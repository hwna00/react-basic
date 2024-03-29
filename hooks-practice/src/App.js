import { useEffect, useState } from "react";
import defaultAxios from "axios";

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({ loading: true, err: null, data: null });
  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now());
  };

  useEffect(() => {
    if (!opts.url) {
      return;
    }
    axiosInstance(opts)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((err) => {
        setState({
          ...state,
          loading: false,
          err,
        });
      });
  }, [trigger, axiosInstance, opts, state]);

  return { ...state, refetch };
};

function App() {
  const { loading, err, data, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });
  console.log(loading, data, err);
  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
}

export default App;
