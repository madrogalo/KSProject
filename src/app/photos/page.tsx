import Layout from "../../components/layout";
import Image from "next/image";
import PhotoCard from "../../components/PhotoCard";

async function getPhotos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Photos() {
  const photos = await getPhotos();
  const partOfPhotos = photos.slice(0, 10);

  return (
    <Layout>
      <h1 className="text-2xl font-semibold text-gray-900">Photos</h1>
      <ul role="list" className="divide-y divide-gray-100">
        {partOfPhotos.slice(3).map((photo: any) => (
          <PhotoCard key={photo.id} {...photo} />
        )
        )}
      </ul>
    </Layout>
  );
}
