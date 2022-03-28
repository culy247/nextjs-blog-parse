import PostSummary from '@/components/PostSummary'

const PostList = ({ posts }: { posts: any[] }) => {
  return (
    <>
      {posts.map((post: any, index: number) => (
        <PostSummary post={post} index={index} key={index} />
      ))}
    </>
  )
}

export default PostList
