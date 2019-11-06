var globalstore = null;
var hooks = new Set();

export default function Store(p) {
  const [data, setData] = p;
  if (null == globalstore) {
    globalstore = JSON.parse(JSON.stringify(data));
  }
  hooks.add(setData);
  console.log("hooks size: " + hooks.size);
  return [
    globalstore,
    d => {
      globalstore = JSON.parse(JSON.stringify(d));
      [...hooks].map(sd => {
        sd(JSON.parse(JSON.stringify(d)));
      });
    }
  ];
}
