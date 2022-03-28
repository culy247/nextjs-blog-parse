import { useEffect, useState } from 'react';

const Title = ({ post }: { post: any }) => {

  const [title, setTitle] = useState('');

  useEffect( () => {
    setTitle( post.get('title') );
  }, [post])
  
  return (
    <>
      {title}
    </>
  )
}

export default Title
