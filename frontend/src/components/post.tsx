import { useGetPostQuery, useGetPostsQuery } from "../generated/graphql";

export const Post = (props: { id: number }) => {
  const { id } = props;
  const { data, loading, error } = useGetPostQuery({ variables: { id } });

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const post = data?.post;
  if (post == null) {
    return <div>post not found</div>;
  }

  return (
    <div>
      <div>{post.title}</div>
    </div>
  );
};

export const Posts = () => {
  const { data, loading, error } = useGetPostsQuery();

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const posts = data?.posts;
  if (posts == null || posts.length === 0) {
    return <div>post not found</div>;
  }

  return (
    <ul>
      {posts.map((title) => {
        return <li>{title.title}</li>;
      })}
    </ul>
  );
};
