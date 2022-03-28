import { useEffect, useState } from 'react';

const Thumbnail = ({ post }: { post: any }) => {

  const [thumbnail, setThumbnail] = useState<any>();

  useEffect( () => {
    setThumbnail( post.get('thumbnail') );
  }, [post])
  
  return (
    <>
      {thumbnail && thumbnail._url  ? (
            <img
              src={thumbnail._url }
              className='rounded-full inline mr-2'
            />
          ) : (
            ''
          )}
    </>
  )
}

export default Thumbnail
