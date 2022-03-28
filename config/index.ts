export type PostType = {
    id: number
    title: string
    slug: string
    author: string
    author_profile?: string
    image_field: string
    tags: Array<TagType>
    width_field: number
    height_field: number
    image_alt: string
    reading_time: string
    short_summary: string
    content: string
    draft: Boolean
    created_at: string
    updated_at: string
}

export type TagType = {
    tag: string
}

export default {
    PARSE_SERVER_URL: process.env.NEXT_PUBLIC_PARSE_SERVER_URL || 'http://localhost:1337/parse',
    PARSE_APP_ID: process.env.NEXT_PUBLIC_PARSE_APP_ID || 'app_id',
    PARSE_JAVASCRIPT_KEY: process.env.NEXT_PUBLIC_PARSE_JAVASCRIPT_KEY || 'javascript_key',
    NUMBER_POST_PER_PAGE:  (process.env.NEXT_PUBLIC_NUMBER_OF_POSTS_PER_PAGE || 10) as number,
    POST_OBJECT: 'Posts',
    TAG_OBJECT: 'Tags',
    COMMENT_OBJECT: 'Comments'
}


  