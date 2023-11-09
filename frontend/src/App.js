import { Nav } from "./Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./Main";
import {Articles} from "./Articles";

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/articles" element={<Articles/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// Create a div element for the circle cursor
const circleCursor = document.createElement("div");
circleCursor.style.position = "fixed";
circleCursor.style.top = "0";
circleCursor.style.left = "0";
circleCursor.style.width = "20px";
circleCursor.style.height = "20px";
circleCursor.style.borderRadius = "50%";
circleCursor.style.backgroundColor = "grey";
circleCursor.style.pointerEvents = "none";
circleCursor.style.zIndex = "9999"; // ensure the circle is on top of other elements
document.body.appendChild(circleCursor);

// Hide the normal mouse cursor
document.body.style.cursor = "none";

// Update the circle cursor position on every mouse move event
document.addEventListener("mousemove", (event) => {
  circleCursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
});

// Add event listeners to components that should trigger the circle cursor
const components = document.querySelectorAll(".circle-cursor");
components.forEach((component) => {
  component.addEventListener("mouseenter", () => {
    circleCursor.style.backgroundColor = "red"; // change the circle color on hover
  });
  component.addEventListener("mouseleave", () => {
    circleCursor.style.backgroundColor = "grey"; // change the circle color back on mouse leave
  });
  component.addEventListener("click", () => {
    circleCursor.style.backgroundColor = "green"; // change the circle color on click
  });
});




export default App;
