import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { Container } from "./components/Styles/Container.styled";
import GlobalStyles from "./components/Styles/GlobalStyled";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
// import { Products } from "./components/Products";
import Footer from "./components/Footer";
import Shop from "./components/shop/Shop";

const theme = {
  colors: {
    header: "#E4C2B8",
    body: "#fff",
    footer: "#E4C2B8",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <>
          <GlobalStyles />
          <Header />
          {/* <Hero /> */}
          {/* <Container> */}
          <Routes>
            <Route path="/" exact element={<Hero />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/cart" element={<Cart />} /> */}
            <Route path="/shop" element={<Shop />} />
          </Routes>
          {/* </Container> */}
          <Footer />
        </>
      </Router>
    </ThemeProvider>
  );
}

export default App;
