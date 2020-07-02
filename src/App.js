import React, {useEffect, useState} from 'react';
import './App.css';
import useIsMounted from "./useIsMounted";

function colorCodedCSSClass(isMounted) {
    return isMounted ? 'safe' : 'warning';
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const someAsyncService = async () => {
    await delay(3000);
    return 'Data fetched';
}

function App() {
    const isMounted = useIsMounted();
    const [data, setData] = useState('Fetching data');

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
            <p className={colorCodedCSSClass(isMounted.current)}>
                {data}
            </p>
        </div>
    );
}

export default App;
