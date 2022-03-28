import { useEffect, useState } from 'react';

const AuthorName = ({ post }: { post: any }) => {

  const [author, setAuthor] = useState<any>();
  const [name, setName] = useState('');

  useEffect( () => {
    setAuthor( post.get('author') );
  }, [post])

  useEffect( () => {
    setName( author ? author.get('displayName') : '' );
  }, [author])
  
  return (
    <>
      { name }
    </>
  )
}

export default AuthorName
