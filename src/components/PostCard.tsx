import React from 'react';

type PostProps = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

const PostCard: React.FC<PostProps> = ({ id, userId, title, body }) => {
  return (
    <div className="border rounded-md p-4 shadow-md bg-white my-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{body}</p>
      <div className="mt-4 text-sm text-gray-500">
        <span>Post ID: {id}</span>
        <span className="ml-4">User ID: {userId}</span>
      </div>
    </div>
  );
};

export default PostCard;
