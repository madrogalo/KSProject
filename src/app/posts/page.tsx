import Layout from "../../components/layout";
import Image from "next/image";
import PostCard from "../../components/PostCard";

type PostProps = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}


export default async function Posts() {
  const posts = await getPosts();

  return (
    <Layout>
      <h1 className="text-2xl font-semibold text-gray-900">Posts</h1>
      <ul role="list" className="divide-y divide-gray-100">
      {posts.map((post: PostProps) => (
        <PostCard key={post.id} {...post} />
      ))}
      </ul>
    </Layout>
  );
}
