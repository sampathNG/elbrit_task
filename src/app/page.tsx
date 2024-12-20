import Image from "next/image";
import Header from "./component/Header";
import Explore from "./component/Explore";
import Ingredients from "./component/Ingredients";
import Footer from "./component/Footer";
export default function Home() {
  return (
    <div>
      <Header />
      <Explore />
      <Ingredients />
      <Footer />
    </div>
  );
}
