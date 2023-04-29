import { Header } from "../../components/Header";
import { BannerHome } from "../../components/BannerHome";

export function Home() {

  /*
  let isLogin = true //FIXME 

  return (
    <>
      <body className="body-home">
        <div className="p-12">
          <Header />
          {
          isLogin ? <Login /> : <BannerHome/>
          }
          <div className="h-screen"></div>
        </div>
      </body>
    </>
  )
  */

  return (
    <>
      <div className="body-home">
        <div className="p-12">
          <Header />
          <BannerHome/>
        </div>
      </div>
    </>
  )
}