import { useEffect, useState } from 'react';

const CreatedAt = ({ post }: { post: any }) => {

  const [createdAt, setCreatedAt] = useState<Date>();

  useEffect( () => {
    setCreatedAt( post.get('createdAt') );
  }, [post])
  
  return (
    <>
      { createdAt ? createdAt.toLocaleString() : '' }
    </>
  )
}

export default CreatedAt
