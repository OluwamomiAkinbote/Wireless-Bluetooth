import Home from "./components/Home"; // Import the Home component
import WhatsApp from "../src/components/Whatsapp"; // Import the WhatsApp button

function App() {
  return (
    <>
      <Home /> {/* Home component */}
      <WhatsApp /> {/* Floating WhatsApp button */}
    </>
  );
}

export default App;
