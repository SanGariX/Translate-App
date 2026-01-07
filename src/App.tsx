import { Suspense, useEffect } from "react";
import "./App.scss";
import Loading from "./components/Loading/Loading.tsx";
import Container from "./components/Container/Container.tsx";
import Header from "./components/Header/Header.tsx";
import Main from "./components/Main/Main.tsx";
import Footer from "./components/Footer/Footer.tsx";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./store/store.ts";
import Popups from "./components/Popups/Popups.tsx";
import { recoverLocalStorage } from "./store/slices/transpateSlice.ts";

function App() {
  const { theme } = useSelector((state: RootState) => state.changeSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  useEffect(() => {
    dispatch(recoverLocalStorage());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Suspense fallback={<Loading />}>
        <Container className="container">
          <Header></Header>
          <Main></Main>
          <Footer></Footer>
        </Container>
        <Popups></Popups>
      </Suspense>
    </div>
  );
}

export default App;
