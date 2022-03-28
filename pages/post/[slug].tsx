import { ParsedUrlQuery } from 'querystring'

import SinglePost from '@/components/SinglePost'
import Spinner from '@/components/Spinner'
import useParse from '@/hooks/useParse'
import config from '@/config'

interface Params extends ParsedUrlQuery {
  slug: string
}

const SinglePostPage = ({ query }: { query: any }) => {
  const  { useParseQuery } = useParse()
  const { 
    isLoading,
    results,
  } = useParseQuery(query, { 
    enableLiveQuery: true
  });

  return (
    <>
      { isLoading ? <Spinner /> : <SinglePost post={results && results[0] ? results[0] : null  } />}
    </>
  )
}

export async function getServerSideProps(context : any) {
  const params = context.params! as Params
  const  { Parse, encodeParseQuery } = useParse()
  const query = new Parse.Query(config.POST_OBJECT);
  query.include(['author', 'attachments', 'tags', 'thumbnail', 'comments']);
  query.equalTo('slug', params.slug)
  return {
    props: {
      query: await encodeParseQuery(query),
    }
  };
}

export default SinglePostPage
