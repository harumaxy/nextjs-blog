import Link from "next/link";

export type NavItem = {
  title: string;
  route: string;
};

export const Navigation: React.FC<{ items: Array<NavItem> }> = (props) => (
  <nav>
    <ul className="flex space-x-4">
      {props.items.map((item) => (
        <li
          key={item.title}
          className="flex bg-green-500 text-white font-bold rounded-full hover:bg-green-300"
        >
          <Link href={item.route}>
            <a className="px-6 py-4">{item.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
