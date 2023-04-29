import { Link } from "react-router-dom";
import avatarWoman from '../assets/avatar-woman.svg'

export function HeaderMain() {
  
  return (
    <header className="container flex items-center justify-between mx-auto bg-[#00000041] p-3 px-12 rounded-3xl blur-image">
      <Link to="/"><img src="https://www.serpro.gov.br/++resource++serpro.portalserprotema/img/logo-serpro.png" alt="" /></Link>

      <div>
        <div className="md:flex gap-5">
        <div className="md:flex mt-2 text-white">
          <span>user-n11223j3k2n1</span>
        </div>
          <img
            className="h-8 w-8  md:w-12 md:h-12 cursor-pointer"
            src={avatarWoman}
            alt='foto do usuario'
          />
        </div>
      </div>
    </header>
  );
}