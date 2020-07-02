import React, {useEffect, useState} from 'react';
import './App.css';
import useIsMounted from "./useIsMounted";

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const someAsyncService = async () => {
    await delay(3000);
    return 'IS initialized';
}

function App() {
    const isMounted = useIsMounted();
    const [data, setData] = useState('NOT initialized');

    useEffect(() => {
        (async function () {
            const resultData = await someAsyncService();
            if (isMounted.current) {
                setData(resultData);
            }
        })()
    }, [isMounted]);

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    {data}
                </p>
            </header>
        </div>
    );
}

export default App;
