import Routes from "@routes";
import "./App.scss";
import ErrorBoundary from "@/pages/ErrorBoundary";
function App() {
  return (
    <>
      <ErrorBoundary>
        <Routes />
      </ErrorBoundary>
    </>
  );
}

export default App;
