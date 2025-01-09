import './Menu.css';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const Menu = () => {
  const links = [
    { link: 'home', title: 'Domov', bg: 'bg-green-300 hover:bg-green-400' },
    { link: 'projects', title: 'Projekty', bg: 'bg-amber-300 hover:bg-amber-400' },
    { link: 'about', title: 'O mne', bg: 'bg-red-300 hover:bg-red-400' },
    { link: 'contact', title: 'Kontakt', bg: 'bg-blue-300 hover:bg-blue-400' },
  ];

  const scrollIn = (e) => {
    e.preventDefault();
    const target = e.currentTarget.getAttribute('href').replace('#', '');
    const section = document.getElementById(target);

    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ul className="main-menu absolute bottom-1/3 block w-screen text-right z-0">
      {links.map((el, i) => (
        <li className={`menu-item w-screen mt-3 ${el.bg}`} key={i}>
          <a
            onClick={scrollIn}
            href={`#${el.link}`} // Kotva pre identifikáciu sekcie
            className="block w-screen px-5 py-3 text-white font-light hover:text-white uppercase tracking-wide"
          >
            {el.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
