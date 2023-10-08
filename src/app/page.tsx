import Layout from "../components/layout";

import Image from 'next/image'

export default function Home() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold">Knowledge Sharing</h1>
      <Image src="https://images.unsplash.com/photo-1551021794-03be4ddaf67d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" width={400} height={200} alt={""} />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, illum delectus. Sed ullam explicabo similique maxime vitae dolore consequatur nobis. Asperiores ducimus inventore corporis aliquam nobis rem, excepturi possimus accusantium.
    </Layout>
  )
}
