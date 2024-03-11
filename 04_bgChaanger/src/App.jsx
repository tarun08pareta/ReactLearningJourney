import { useState } from "react";

function App() {
  const [colors, setColors] = useState("backgroundColor");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: colors }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-20">
          <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColors("Red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColors("Blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "Blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColors("Pink")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "Pink" }}
            >
              Pink
            </button>
            <button
              onClick={() => setColors("Black")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "Black" }}
            >
              Black
            </button>
            <button
              onClick={() => setColors("Green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "Green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColors("White")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "White" }}
            >
              White
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
