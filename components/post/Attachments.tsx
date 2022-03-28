import { useEffect, useState } from 'react';

const Attachments = ({ post }: { post: any }) => {

  const [atatchments, setAttachments] = useState<any>();

  useEffect( () => {
    setAttachments( post.get('atatchments') );
  }, [post])

  
  return (
    <>
      {atatchments  ? (
            <img
              src={atatchments._url }
              className='rounded-full w-7 h-7 inline mr-2'
            />
          ) : (
            ''
          )}
    </>
  )
}

export default Attachments
