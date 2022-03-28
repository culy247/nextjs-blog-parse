import Link from 'next/link';
import { useEffect, useState } from 'react';

const Tags = ({ post }: { post: any }) => {

  const [tags, setTags] = useState<any[]>([]);

  useEffect( () => {
    setTags( post ? post.get('tags') : [] );
  }, [post])
  
  return (
    <>
      {tags && tags.map((tag, index) => (
          <Link href={`/tags/` + tag.get('name')} key={`post-tags-${index}`}>
            <a
              className='font-bold text-red-500 px-1 py-1 uppercase'
            >
              { tag.get('name') }
            </a>
          </Link>
        ))}
    </>
  )
}

export default Tags
