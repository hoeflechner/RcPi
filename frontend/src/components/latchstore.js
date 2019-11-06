export var globalstore = null;

export default function LatchStore(p) {
  const [data, setData] = p;
  if (null == globalstore) {
    globalstore = JSON.parse(JSON.stringify(data));
  }
  return [
    globalstore,
    d => {
      globalstore = JSON.parse(JSON.stringify(d));
      setData(JSON.parse(JSON.stringify(d)));
    }
  ];
}
