import { useEffect, useState } from 'react';

const PostText = ({ post, field, short = false }: { post: any, field: string, short: boolean }) => {

  const [text, setText] = useState<any>();

  useEffect( () => {
    setText( post.get(field) );
  }, [post])
  
  return (
    <>
      { text ? text : '' }
    </>
  )
}

export default PostText
