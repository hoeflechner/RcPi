import React from "react";

var globalstore = null;
var listeners = new Set();

export default function useStorage(initdata) {
  if (null == globalstore) {
    globalstore = JSON.stringify(initdata);
  }
  const [data, setData] = React.useState(globalstore);

  if (!listeners.has(setData)) {
    listeners.add(setData);
  }
  
  //console.log("store: " + globalstore);
  console.log(listeners.size+ " listeners");

  React.useEffect(() => {
    console.log("effect");
    return (function cleanup() {
      listeners.delete(setData);
      console.log("cleanup");
      setData(globalstore);
    });
  });

  return [
    JSON.parse(globalstore),
    d => {
      globalstore = JSON.stringify(d);
      [...listeners].map(sd => {
        sd(JSON.parse(globalstore));
      });
    }
  ];
}
