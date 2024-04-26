import Nav from "./components/nav";
import Row from "./components/row";
import Banner from "./components/banner";

import { requestUrl } from "./requests";

const Moviesnu = () => {
  return (
    <div>
      <Banner />
      <Nav />
      <Row type="Action" fetchUrl={requestUrl.fetchAction} />
      <Row type="Adventure" fetchUrl={requestUrl.fetchAdventure} />
      <Row type="Animation" fetchUrl={requestUrl.fetchAnimation} />
      <Row type="Fantasy" fetchUrl={requestUrl.fetchFantasy} />
      <Row type="Documentary" fetchUrl={requestUrl.fetchDocumentary} />
    </div>
  );
};

export default Moviesnu;
