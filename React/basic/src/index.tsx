import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

class Counter extends React.Component {
  render(): React.ReactNode {
    return <div>123</div>;
  }
}

root.render(<Counter />);
