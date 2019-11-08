import React from "react";

var globalstore = {};
var listeners = new Set();

export default function useStorage(identifier, initdata) {
  if (!globalstore[identifier]) {
    globalstore[identifier] = JSON.parse(JSON.stringify(initdata));
  }
  const [data, setData] = React.useState(globalstore);

  if (!listeners.has(setData)) {
    listeners.add(setData);
  }

  console.log("globalstoreage");
  console.log(globalstore);
  console.log(listeners.size + " listeners");

  React.useEffect(() => {
    //console.log("effect");
    return function cleanup() {
      listeners.delete(setData);
      console.log("cleanup");
      console.log(listeners.size + " listeners");
      setData(globalstore);
    };
  });

  return [
    JSON.parse(JSON.stringify(globalstore[identifier])),
    d => {
      globalstore[identifier] = JSON.parse(JSON.stringify(d));
      [...listeners].map(sd => {
        sd(JSON.parse(JSON.stringify(globalstore[identifier])));
      });
    }
  ];
}
