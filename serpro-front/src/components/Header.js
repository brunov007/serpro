import avatarWoman from '../assets/avatar-woman.svg'
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="container flex items-center justify-between mx-auto bg-[#00000041] p-3 px-12 rounded-3xl blur-image">
      <Link to="/"><img src="https://www.serpro.gov.br/++resource++serpro.portalserprotema/img/logo-serpro.png" alt="" /></Link>
      <div className="hidden md:flex text-x1 gap-12">
        <span>Sobre Nós</span>
        <span>Dúvidas</span>
      </div>

      <div className="md:flex gap-5">
        <span className="mt-3">Login</span>
        <img
          className="h-8 w-8  md:w-12 md:h-12 cursor-pointer"
          src={avatarWoman}
          alt='foto do usuario'
        />
      </div>
    </header>
  );
}