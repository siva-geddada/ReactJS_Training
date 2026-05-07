import { useRef, useState } from 'react';
import PropTypes from 'prop-types';

function Child({ userData }) {
    const inputRef = useRef(null);

    const userDataFromLocal = JSON.parse(localStorage.getItem('userData'));
    const [data, setData] = useState(userDataFromLocal ?? userData);

    // Filter the data based on the Given input
    const checkUser = () => {
        const inputVal = inputRef.current.value.trim();
        const fallback = userDataFromLocal ?? userData;
        const filtered = fallback.filter((item) =>
            item.name
                .toLocaleLowerCase()
                .includes(inputVal.toLocaleLowerCase()),
        );
        setData(inputVal.length >= 1 ? filtered : fallback);
    };

    const addUser = () => {
        const userName = inputRef.current.value.trim();
        if (!userName) return;
        const newUser = { id: Date.now(), name: userName };
        const updated = [...data, newUser];
        setData(updated);
        localStorage.setItem('userData', JSON.stringify(updated));
        inputRef.current.value = '';
    };

    const removeItem = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    return (
        <div className="w-1/4">
            <h2 className="text-2xl font-bold mb-4">User List</h2>
            <div className="flex gap-2 mb-4">
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Enter User Name"
                    className="border border-gray-300 rounded-md px-2 py-1 flex-1"
                    onInput={checkUser}
                    onKeyDown={(e) => e.key === 'Enter' && checkUser()}
                />
                <button
                    onClick={addUser}
                    className="px-4 py-1 bg-red-700 text-white rounded-md hover:bg-red-600"
                >
                    +
                </button>
                <button
                    onClick={checkUser}
                    className="px-4 py-1 bg-green-700 text-white rounded-md hover:bg-green-600"
                >
                    Check
                </button>
            </div>
            <ul className="space-y-2">
                {data.map((item) => (
                    <li
                        key={item.id}
                        className="flex justify-between items-center bg-white px-3 py-2 rounded shadow-sm"
                    >
                        <span>{item.name}</span>
                        <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700 text-sm"
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

Child.propTypes = {
    userData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        }),
    ).isRequired,
};

export default Child;
