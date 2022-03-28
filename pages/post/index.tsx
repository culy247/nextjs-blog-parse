import { useState } from 'react'

import { default as config } from '@/config'
import useParse from '@/hooks/useParse'

import Pagination from '@/components/Pagination'
import PostList from '@/components/PostList'
import Spinner from '@/components/Spinner'

const PostPage = async ({ query, queryCount } :any) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(config.NUMBER_POST_PER_PAGE)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const counter = await queryCount.count();
  const pagination = query.limit(postsPerPage).skip(indexOfFirstPost);

  const  { useParseQuery } = useParse()

  const { 
    isLoading,
    results,
  } = useParseQuery(pagination, { 
    enableLiveQuery: true 
  });

  const paginate = (pageNumber: any) => setCurrentPage(pageNumber)

  return (
    <>
      <div className='min-h-screen'>
        { !isLoading && results ? <PostList posts={results} /> : <Spinner /> }
      </div>
      {counter && counter > indexOfLastPost ? (
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={counter || 0}
          currentPage={currentPage}
          paginate={paginate}
        />
      ) : (
        ''
      )}
    </>
  )
}


export async function getServerSideProps(context : any) {
  const  { Parse, encodeParseQuery } = useParse()
  const fecth = new Parse.Query(config.POST_OBJECT).addDescending('CreatedAt');

  const query = await encodeParseQuery(fecth);

  return {
    props: {
      query: query,
      counter: query
    }
  };
}

export default PostPage
