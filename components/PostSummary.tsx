import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import Tags from '@/components/post/Tags';
import Thumbnail from '@/components/post/Thumbnail';
import Avatar from '@/components/post/Avatar';
import AuthorName from '@/components/post/AuthorName';
import PostText from '@/components/post/PostText';
import CreatedAt from '@/components/post/CreatedAt';

const PostSummary = ({ post, index }: { post: any, index: number }) => {
  
  const [slug, setSlug] = useState('');
  
  useEffect( () => {
    setSlug( post.get('slug') );
  }, [post])

  return useMemo( () => (
    <>
      <div className='bg-white rounded shadow flex'>
        <div className='flex-none w-full md:w-1/4 p-6 md:p-7 lg:p-9'>
          <Thumbnail post={post} />
        </div>
        <div className='flex-none md:flex-1 w-full md:w-3/4 p-6 md:p-7 lg:p-9'>
          <Tags post={post} />
          <h3 className='font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2'>
            <Link href={`/post/${slug}`}>
              <a><PostText post={ post } field={`title`} short={ false } /></a>
            </Link>
          </h3>
          <div className='mt-3 mb-3 text-sm text-gray-700 flex items-center'>
            <Avatar post={post} />
            <a href='#' className='font-bold text-gray-600'>
              <AuthorName post={post} />
            </a>
            <span className='ml-3'>
              <i className='far fa-clock px-2'></i>
              <CreatedAt post={ post } />
            </span>
          </div>
          <div className='text-base md:text-lg text-gray-500'>
            <Link href={`/post/${slug}`}>
              <a>
                <p className='leading-7 lg:leading-8'>
                  <PostText post={ post } field={`summary`} short={ true } />
                </p>
              </a>
            </Link>
          </div>
          <Link href={`/post/${slug}`}>
            <a className='mt-4 inline-block font-bold text-red-500'>
              Read more...
            </a>
          </Link>
        </div>
      </div>
    </>
  ), [post])
}

export default PostSummary
