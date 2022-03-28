import { ParsedUrlQuery } from 'querystring'
import { useRouter } from 'next/router'

import Spinner from '@/components/Spinner'
import PostList from '@/components/PostList'
import useParse from '@/hooks/useParse'
import config from '@/config'

interface Params extends ParsedUrlQuery {
  slug: string
}

const TagsList = ({ query }: { query: any }) => {
  const router = useRouter()
  const { slug } = router.query

  const  { useParseQuery } = useParse()
  const { 
    isLoading,
    results,
  } = useParseQuery(query, { 
    enableLiveQuery: true
  });

  return (
    <>
    { 
      isLoading ? <Spinner /> : (
        <>
          <p>
            You Filtered for{' '}
            <span className='uppercase text-red-500'>
              <strong>{slug}</strong>
            </span>
          </p>
          { results ? <PostList posts={results} /> : '' }
        </>
      )
    }
    </>
  )
}

export async function getServerSideProps({ params }: any ) {
  const  { Parse, encodeParseQuery } = useParse()
  const query = new Parse.Query(config.POST_OBJECT);
  
  query.contains('tags', params.slug || '');

  return {
    props: {
      query: await encodeParseQuery(query),
    }
  };
};

export default TagsList
