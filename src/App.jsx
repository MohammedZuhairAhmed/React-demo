// import React from "react";
import { createRoot } from "react-dom/client";
import CreateSearch from "./CreateSearch";
// import Pet from "./Pet";

// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, props.name),
//     React.createElement("h2", {}, props.animal),
//     React.createElement("h2", {}, props.breed),
//   ]);
// };

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Luna",
  //     animal: "Dog",
  //     breed: "Havanese",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Pepper",
  //     animal: "Bird",
  //     breed: "Cockatiel",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Doink",
  //     animal: "Cat",
  //     breed: "Mix",
  //   }),
  // ]);

  // return (
  //   <div>
  //     <h1>Adopt Me!</h1>
  //     <Pet name="luna" animal = "dog" breed = "Havanese" />
  //     <Pet name="Pepper" animal = "Bird" breed = "Cockatiel" />
  //     <Pet name="Doink" animal = "Cat" breed = "Mix" />
  //   </div>
  // )

  return (
    <div>
      <h1>Adopt ME!</h1>
      <CreateSearch />
    </div>  
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
