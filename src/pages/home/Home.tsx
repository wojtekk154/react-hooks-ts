import React, { useEffect, useState } from "react";

const Home: React.FC = () => {
    const [data, setData] = useState("");

    useEffect(() => {
        console.log("test");
        // fetch('https://swapi.co/api/planets/1/')
        //     .then(response => response.json())
        //     .then(data => setData(data));
    });
    return (
        <div>
            Welcome
            <button onClick={() => setData("test")}>TTTT</button>
            <pre>
                {data && data}
            </pre>
        </div>
    );
};

export default Home;
