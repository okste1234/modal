import "./App.css";
import Pop from "./Popup";

const App = () => {
  const data = Array.from({ length: 10 }, (_, i) => (<input type='text' placeholder='Enter something...' className="w-full border border-gray-300 rounded px-4 py-2" />))

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <Pop input={data} />
    </div>
  );
};

export default App;
