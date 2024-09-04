import React, { useState } from "react";
import RandomTable from "./RandomTable";

const TabPanel = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [numberA, setNumberA] = useState(null);
    const [randomNumbers, setRandomNumbers] = useState([]);
    const [smallestMissingNumber, setSmallestMissingNumber] = useState(null);
    const [showResult, setShowResult] = useState(false);

    const handleTab1Submit = (e) => {
        e.preventDefault();
        setActiveTab(2);
    };

    const generateRandomNumbers = () => {
        const newNumbers = Array.from({ length: numberA }, () =>
            Math.floor(Math.random() * 2000001) - 1000000
        );
        setRandomNumbers(newNumbers);
        setShowResult(false); // Reset result visibility when new numbers are generated
    };

    const findSmallestMissingNumber = () => {
        const positiveNumbers = randomNumbers.filter((n) => n > 0);
        if (positiveNumbers.length === 0) {
            return 0;
        }
        const smallestPositive = Math.min(...positiveNumbers);
        return smallestPositive - 1;
    };

    const handleFindSmallestMissingNumber = () => {
        const result = findSmallestMissingNumber();
        setSmallestMissingNumber(result);
        setShowResult(true);
    };

    return (
        <div className="max-w-md p-6 mx-auto mt-10 bg-gray-100 rounded-lg shadow-lg">
            <div className="flex mb-4 space-x-2">
                <button
                    className={`px-4 py-2 rounded-lg font-semibold ${activeTab === 1
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-600 cursor-not-allowed"
                        }`}
                    onClick={() => setActiveTab(1)}
                    disabled={activeTab !== 1}
                >
                    Tab 1
                </button>
                <button
                    className={`px-4 py-2 rounded-lg font-semibold ${activeTab === 2
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-600 cursor-not-allowed"
                        }`}
                    onClick={() => setActiveTab(2)}
                    disabled={activeTab !== 2}
                >
                    Tab 2
                </button>
                <button
                    className={`px-4 py-2 rounded-lg font-semibold ${activeTab === 3
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-600 cursor-not-allowed"
                        }`}
                    onClick={() => setActiveTab(3)}
                    disabled={activeTab !== 3}
                >
                    Tab 3
                </button>
            </div>

            {activeTab === 1 && (
                <form onSubmit={handleTab1Submit} className="mt-4">
                    <label className="block mb-2 text-gray-700">
                        Masukkan Bilangan (1-10000):
                    </label>
                    <input
                        type="number"
                        min="1"
                        max="10000"
                        value={numberA || ""}
                        onChange={(e) =>
                            setNumberA(parseInt(e.target.value))
                        }
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full p-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-500"
                    >
                        Submit
                    </button>
                </form>
            )}

            {activeTab === 2 && (
                <div className="mt-4">
                    <button
                        onClick={generateRandomNumbers}
                        className="w-full p-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500"
                    >
                        {randomNumbers.length > 0
                            ? "Hasilkan nomer acak lainnya"
                            : "Hasilkan nomer acak"
                        }
                    </button>

                    {randomNumbers.length > 0 && (
                        <RandomTable numbers={randomNumbers} />
                    )}
                    <button
                        onClick={() => setActiveTab(3)}
                        className="w-full p-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-500"
                    >
                        Next to Tab 3
                    </button>
                </div>
            )}

            {activeTab === 3 && (
                <div className="mt-4">
                    <button
                        className="w-full p-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500"
                        onClick={handleFindSmallestMissingNumber}
                    >
                        Cari bilangan bulat positif terkecil
                    </button>
                    {showResult && (
                        <div className="mt-4">
                            <div className="flex flex-col items-center">
                                <p className="w-full p-2 text-center bg-white border border-gray-300 rounded-lg">
                                    {randomNumbers.length > 0
                                        ? smallestMissingNumber
                                        : "N/A"}
                                </p>
                                {randomNumbers.length === 0 && (
                                    <span className="mt-2 text-sm italic text-red-600">
                                        *Anda belum menghasilkan nomer acak pada tab 2
                                    </span>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default TabPanel;
