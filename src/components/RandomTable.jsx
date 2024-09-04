const RandomTable = ({ numbers }) => {
    return (
        <table className="table-auto mt-4 w-full border-collapse border border-gray-300 shadow-lg rounded-lg">
            <thead>
                <tr className="bg-gray-200 text-left text-gray-600">
                    <th className="border-b p-3">Index</th>
                    <th className="border-b p-3">Number</th>
                </tr>
            </thead>
            <tbody>
                {numbers.map((num, index) => (
                    <tr
                        key={index}
                        className={`${index % 2 === 0
                            ? "bg-white"
                            : "bg-gray-100"
                            } hover:bg-blue-50 transition-colors`}
                    >
                        <td className="border-t p-3">{index + 1}.</td>
                        <td className="border-t p-3">{num}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default RandomTable;
