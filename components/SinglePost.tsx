import AuthorName from '@/components/post/AuthorName';
import Avatar from '@/components/post/Avatar';
import CreatedAt from '@/components/post/CreatedAt';
import Tags from '@/components/post/Tags';
import Thumbnail from '@/components/post/Thumbnail';
import PostText from '@/components/post/PostText';

const SinglePost = ({ post }: { post: any }) => {
  
  return (
    <>
      <article className='bg-white rounded shadow p-6 md:p-7 lg:p-9 min-h-screen'>
        <Tags post={post} />
        <h1 className='font-black text-xl sm:text-2xl md:text-3xl lg:text-5xl mt-2'>
          <PostText post={ post} field={`title`} short={ false } />
        </h1>
        <div className='mt-4 mb-3 text-sm text-gray-700 flex items-center'>
          <Avatar post={post} />
          <a href='#' className='font-bold text-gray-600'>
            <AuthorName post={ post } />
          </a>
          <span className='ml-3'>
            <i className='far fa-clock px-2'></i>
            <CreatedAt post={ post } />
          </span>
        </div>
        <div className='prose prose-sm sm:prose lg:prose-lg mx-auto mt-4 md:mt-6'>
          <Thumbnail post={post} />
          <p><PostText post={ post} field={`description`} short={ false } /></p>
        </div>
      </article>
    </>
  )
}

export default SinglePost
