import "./App.css";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import styled from "styled-components";

const FullPage = styled.div`
display: flex;
flex-direction: column;
`
function App() {
  return (
    <FullPage>
      <Header />
      <HomePage />
    </FullPage>
  );
}

export default App;
