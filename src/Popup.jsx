import { useState } from 'react';
import Popup from 'reactjs-popup';

const Pop = ({ input }) => {
    const [winner, setWinner] = useState(false);

    return (
        <>
            <Popup
                closeOnDocumentClick={true}
                open={winner}
                closeOnEscape={true}
                contentStyle={{ width: '80%', maxWidth: '500px', height: "300px", background: '#f0f0f0', borderRadius: '10px', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)' }}
            >

                <div className="w-full p-8">
                    <h1 className="font-bold text-2xl mb-4 text-center">Header</h1>
                    {input}
                </div>

            </Popup>

            <div className="text-center bg-blue-500">
                <div
                    onClick={() => setWinner(!winner)}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-md transition duration-300"
                >
                    Pop Here
                </div>
            </div>
        </>
    );
};

export default Pop;
