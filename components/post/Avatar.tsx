import { useEffect, useState } from 'react';

const Avatar = ({ post }: { post: any }) => {

  const [author, setAuthor] = useState<any>();
  const [avatar, setAvatar] = useState<any>();

  useEffect( () => {
    setAuthor( post.get('author') );
  }, [post])

  useEffect( () => {
    setAvatar( author ? author.get('avatar') : null );
  }, [author])
  
  return (
    <>
      {avatar  ? (
            <img
              src={avatar._url }
              className='rounded-full w-7 h-7 inline mr-2'
            />
          ) : (
            ''
          )}
    </>
  )
}

export default Avatar
