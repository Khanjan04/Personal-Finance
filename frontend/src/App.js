import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="container">
        <h1 className="title">Personal Finance</h1>
        <div>
            <button className="button">Income</button>
        </div>
        <div>
            <button className="button">Expense</button>
        </div>
        <div>
            <button className="button">Bank Account</button>
        </div>
        <div>
            <button className="button">Investment</button>
        </div>
        <div>
            <button className="button">Summary</button>
        </div>
      </div>
    </div>
  );
}

export default App;
