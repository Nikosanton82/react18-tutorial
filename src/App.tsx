import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Athens", "Beijing", "London"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
