import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl">
        Knowledge Sharing
              </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/users" className="text-white hover:underline">
                Users
              </Link>
            </li>
            <li>
              <Link href="/posts" className="text-white hover:underline">
                Posts
              </Link>
            </li>
            <li>
              <Link href="/photos" className="text-white hover:underline">
                Photos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
