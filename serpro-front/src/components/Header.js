import { Link } from "react-router-dom";

export function Header() {
  
  return (
    <header className="container flex items-center justify-between mx-auto bg-[#00000041] p-3 px-12 rounded-3xl blur-image">
      <Link to="/"><img src="https://www.serpro.gov.br/++resource++serpro.portalserprotema/img/logo-serpro.png" alt="" /></Link>
      <div className="hidden md:flex text-x1 gap-12">
        <span>Sobre Nós</span>
        <span>Dúvidas</span>
      </div>

      <Link to="/login">
        <div className="md:flex gap-5">
          <span>Login</span>
        </div>
      </Link>
    </header>
  );
}