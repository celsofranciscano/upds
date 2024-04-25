function UiNodo({ valor}) {
  return (
    <div className="bg-blue-500 w-16 h-8 flex items-center justify-center rounded-l-md ">
      <span className="text-white text-lg font-bold">{valor}</span>
    </div>
  );
}

export default UiNodo;
