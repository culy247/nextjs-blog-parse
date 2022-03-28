import Link from 'next/link'
import useParse from '@/hooks/useParse'
import config from '@/config'
import Spinner from '@/components/Spinner'

const Tags = ({ query }: { query: any }) => {

  const  { useParseQuery } = useParse()
  const { 
    isLoading,
    results,
  } = useParseQuery(query, { 
    enableLiveQuery: true
  });

  return (
    <>
      <div className='bg-white w-full'>
        <div className='px-5 py-1'>
          <h3 className='font-bold text-xs'>TAGS</h3>

          <div className='my-2 flex flex-wrap'>
            { isLoading ? <Spinner /> : (
              <>
                {results && results.map((tag: any) => (
                  <Link href={`/tags/${tag.get('name') }`} key={`tag-item-${tag.id}`}>
                    <a>
                      <span className='m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer uppercase'>
                        #{ tag.get('name') }
                      </span>
                    </a>
                  </Link>
                ))}
              </>
            )}
            
          </div>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const  { Parse, encodeParseQuery } = useParse()
  const query = new Parse.Query(config.TAG_OBJECT);
  
  return {
    props: {
      query: await encodeParseQuery(query),
    }
  };
};

export default Tags
