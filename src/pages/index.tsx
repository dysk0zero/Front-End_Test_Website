// src/pages/index.tsx

import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
    return  (
        <div className={styles.container}>
            <Head>
                <title>Home Page</title>
                <meta name="description" content="Welcome to my Next.js website!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Hello World UwU
                </h1>
                <p className={styles.description}>
                    Yay wassup maniggis!
                    <code className={styles.code}>src/pages/index.tsx</code>
                </p>
            </main>
            <footer className={styles.footer}>
                {/* add footer here! */}
            </footer>
        </div>
    );

};

export default Home;