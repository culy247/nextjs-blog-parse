import Parse from 'parse'
import { useParseQuery, encodeParseQuery } from '@parse/react-ssr'

export default function useParse() {
    return {
        Parse,
        useParseQuery,
        encodeParseQuery
    }
}
