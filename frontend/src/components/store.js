var globalstore = null;
var hooks = new Set();

export default function Store(p) {
  const [data, setData] = p;
  if (null == globalstore) {
    globalstore = JSON.stringify(data);
  }
  hooks.add(setData);
  console.log("store: " + globalstore);
  console.log("hooks size: " + hooks.size);
  return [
    JSON.parse(globalstore),
    d => {
      globalstore = JSON.stringify(d);
      [...hooks].map(sd => {
        sd(JSON.parse(globalstore));
      });
    }
  ];
}
