import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount((count: number) => count + 1);
    };

    return (
        <div className="container mx-auto bg-gray-800 rounded p-4 m-4">
            <p className="text-3xl text-center text-white">
                React + Tailwind CSS + Typescript + Linting Starter{" "}
            </p>
            <div className="mx-auto text-center m-4 p-4 w-64 bg-black text-white">
                <span className="text-3xl">{count}</span>
                <br />
                <button
                    type="button"
                    onClick={handleClick}
                    className="bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded"
                >
                    Click Me
                </button>
            </div>
        </div>
    );
}

export default App;
