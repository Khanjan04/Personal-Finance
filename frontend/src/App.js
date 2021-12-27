import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="container">
        <h2>Personal Finance</h2>
        <div className="button">
            <button type="button" class="btn btn-outline-primary">Income</button>
        </div>
        <div className="button">
            <button type="button" class="btn btn-outline-primary">Expense</button>
        </div>
        <div className="button">
            <button type="button" class="btn btn-outline-primary">Bank Account</button>
        </div>
        <div className="button">
            <button type="button" class="btn btn-outline-primary">Investment</button>
        </div>
        <div className="button">
            <button type="button" class="btn btn-outline-primary">Summary</button>
        </div>
      </div>
    </div>
  );
}

export default App;
