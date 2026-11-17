import { useState, useEffect } from "react";
function App() {
  const [message, setMessage] = useState();

  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await fetch(
          "http://localhost:5000/api/health"
        )
        console.log(response);
        if(!response.ok) {
          throw new Error("Error");
        }
        const data = await response.json();
        setMessage(data.message);
        } catch (error) {
          setMessage("error");
          console.error(error.message);
        }
    }
    fetchData();
  }, []);

  return (
  <div>
    <h1>Hello</h1>
    <p>{message}</p>
  </div>
)
}


export default App;