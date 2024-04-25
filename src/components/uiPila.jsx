function UiPila({index, item}) {
  return (
    <button key={index} className="px-8 py-2 bg-blue-500 text-white font-bold">
      {item}
    </button>
  );
}

export default UiPila;
