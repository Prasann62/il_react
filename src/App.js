import logo from "./logo.svg";

function App() {
  return (
    <>
      <div class="position-absolute top-50 start-50 translate-middle">
        <button type="button" class="btn btn-outline-primary me-2">
          select{" "}
        </button>
        <button type="button" class="btn btn-outline-info me-2" href="">
          insert
        </button>
        <button type="button" class="btn btn-outline-success me-2">
          update
        </button>
        <button type="button" class="btn btn-outline-danger me-2">
          delete
        </button>
      </div>
    </>
  );
}

export default App;
