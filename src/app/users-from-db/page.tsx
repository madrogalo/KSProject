import Layout from "../../components/layout";
import Image from "next/image";

type PersonType = {
  id: number,
  name: string,
  email: string,
  date_registered: string,
};


async function getUsersFromDb() {
  const { signal } = new AbortController()
  const res = await fetch('http://localhost:8080/users', { cache: 'no-store' })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}


export default async function UsersFromDb() {
  const users = await getUsersFromDb();

  console.log(users);


  return (
    <Layout>
      <h1 className="text-2xl font-semibold text-gray-900">Users From Db</h1>
      {users.map((person: PersonType) => (
        <div key={person.id} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <Image
              className="h-12 w-12 flex-none rounded-full bg-gray-50"
              src="/images/placeholder.jpg"
              alt=""
              width={48}
              height={48}
            />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {person.name}
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                {person.email}
              </p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">{person.date_registered}</p>
          </div>
        </div>
      ))}
    </Layout>
  );
}
