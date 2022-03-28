import Link from 'next/link'
import { default as config } from '@/config'
import useParse from '@/hooks/useParse'

import PostList from '@/components/PostList'
import Spinner from '@/components/Spinner'

export async function getServerSideProps() {
  const  { Parse, encodeParseQuery } = useParse()
  const query = new Parse.Query(config.POST_OBJECT);
  query.include(['author', 'attachments', 'tags', 'thumbnail']);
  query.descending('createdAt');
  query.limit(config.NUMBER_POST_PER_PAGE);

  return {
    props: {
      query: await encodeParseQuery(query),
    }
  };
};

const Home = ({query} :any) => {

  const  { useParseQuery } = useParse()
  const { 
    isLoading,
    results,
  } = useParseQuery(query, { 
    enableLiveQuery: true
  });

  return (
    <>
      <div className='min-h-screen'>
        { !isLoading && results ? <PostList posts={results} /> : <Spinner /> }
      </div>
      <div className='text-center mt-4 md:mt-5'>
        <Link href={'/post/'}>
          <a className='inline-block text-white bg-red-500 hover:bg-red-600 rounded font-bold py-3 px-7'>
            Load more
          </a>
        </Link>
      </div>
    </>
  )
}

export default Home
