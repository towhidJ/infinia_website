import Head from 'next/head'


const HeadSeo = ({
    title,
    description,
    keywords,
    canonicalUrl,
    ogTwitterImage,
    ogType,
    children,
    ogImageUrl,
}) => {
    return (
        <Head>
            {/* basic metadata */}
            <title>{title} | Infinia Group</title>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            {/* witter metadata */}
            <meta name="twitter:card" content={title} />
            <meta name="twitter:site" content="" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImageUrl} />
            {/* canonical link */}
            <link rel="canonical" href={canonicalUrl} />
            {/* open graph metadata */}
            <meta property="og:locale" content="en_US" />
            <meta property="og:site_name" content="" />
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImageUrl} />
            <meta property="og:url" content={canonicalUrl} />
            {children}
        </Head>
    )
}

export default HeadSeo