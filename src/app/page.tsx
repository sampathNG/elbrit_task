import Header from "./component/Header";
import Explore from "./component/Explore";
import Ingredients from "./component/Ingredients";
import Footer from "./component/Footer";
import Services from "./component/Services";
import Blog from "./component/Blog";
export default function Home() {
  return (
    <div>
      <Header />
      <Explore />
      <Services />
      <Ingredients />
      <Blog />
      <Footer />
    </div>
  );
}
