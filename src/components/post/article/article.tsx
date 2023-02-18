import Head from 'next/head'
import styles from '@/components/post/article/article.module.css'

export default function Article() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/public/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className={styles.author}>
                    <div className={styles.info}>
                        <img src="https://miro.medium.com/freeze/fit/c/176/176/1*pvaJlwES-gx2itutOSb12w.gif"/>
                        <div>
                            <p>Author</p>
                            <p>Date</p>
                        </div>
                    </div>
                    <div className={styles.share}>
                        <i className="fa-brands fa-twitter" />
                        <i className="fa-solid fa-link" />
                    </div>
                </div>
                <div className={styles.header}>
                    <h1 className={styles.title}>Title</h1>
                    <h2 className={styles.subtitle}>Subtitle</h2>
                    <p className={styles.content}>Content</p>
                </div>
            </main>
        </>
    )
}