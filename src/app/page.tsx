import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="Love Economy Church Logo" className={styles.actualLogo} />
        </div>
      </header>

      <section className={styles.titleSection}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>THE GOSPEL</h1>
        </div>
        <div className={styles.subtitleRibbon}>
          <h2>GOD&apos;S LOVE STORY FOR ME</h2>
        </div>
      </section>

      <section className={styles.content}>
        <p>
          <strong>God</strong> created you for a <span className={styles.markOrange}>relationship with <strong>Him</strong></span>. But something went wrong.
        </p>

        <p>
          You and I have all chosen our own way instead of <strong>God&apos;s</strong> way. The Bible says,<br/>
          &ldquo;For all have sinned and fall short of the glory of God.&rdquo; (Romans 3:23)
        </p>

        <p>
          <span className={styles.markOrange}>Sin has a cost</span>. It separates us from <strong>God</strong> and <span className={styles.markOrange}>leads to death</span>, both now and forever.<br/>
          &ldquo;For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our <strong>Lord</strong>.&rdquo; (Romans 6:23)
        </p>

        <p>
          But <strong>God</strong> <span className={styles.markOrange}>didn&apos;t leave</span> us there.
        </p>

        <p>
          Even when we were far from <strong>Him</strong>, <span className={styles.markOrange}>He showed His</span> love in a powerful way:<br/>
          &ldquo;But God demonstrates His own love for us in this: While we were still sinners, Christ died for us.&rdquo; (Romans 5:8)
        </p>

        <p>
          <span className={styles.markOrange}>Jesus took the punishment</span> we deserved so we could be made right with <strong>God</strong>.
        </p>

        <p>
          Now you have a choice.
        </p>

        <p>
          <strong>God</strong> offers you a new life, a <span className={styles.markOrange}>restored</span> relationship with <strong>Him</strong> if you respond; by <span className={styles.markCyan}>admitting</span> you&apos;re a sinner, <span className={styles.markCyan}>believing</span> Jesus died and rose again for you, and <span className={styles.markCyan}>confessing</span> <strong>Him</strong> as your <strong>Lord</strong> and <strong>Saviour</strong>.<br/>
          &ldquo;If you declare with your mouth, &apos;Jesus is Lord,&apos; and believe in your heart that God raised Him from the dead, you will be saved.&rdquo; (Romans 10:9&ndash;10)
        </p>

        <p className={styles.notReligion}>
          <span className={styles.markOrange}>This is not about religion</span>. It&apos;s about <span className={styles.markOrange}>trusting Jesus</span> and turning to <strong>Him</strong>.
        </p>

        <div className={styles.links}>
          <a href="https://www.youtube.com/@bishopisaacotiboateng" target="_blank" rel="noopener noreferrer" className={styles.link}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="none" className={styles.youtubeIcon}>
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" fill="#FF0000"/>
              <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#FFFFFF"/>
            </svg>
            @bishopisaacotiboateng
          </a>
          <span className={styles.separator}>|</span>
          <a href="https://pastoroti.org/audiopodcast/" target="_blank" rel="noopener noreferrer" className={styles.link}>
            Website / Podcast
          </a>
        </div>
      </section>

      <section className={styles.prayerWrapper}>
        <div className={styles.prayerSpeechBubbleArrow}></div>
        <div className={styles.prayerBox}>
          <div className={styles.prayerContent}>
            <p className={styles.sayThisPrayer}>Say this prayer:</p>
            <p className={styles.prayerText}>
              Lord Jesus,<br/>
              I come before You. I admit that I am a sinner.<br/>
              I believe You died for me and rose again.<br/>
              Please forgive my sins and change my life.<br/>
              I turn from my old ways.<br/>
              I confess You as my Lord and Saviour.<br/>
              Thank You for saving me.<br/>
              Amen.
            </p>
          </div>
          <div className={styles.illustrationWrapper}>
            <img src="/illustration.png" alt="Jesus holding a lamb" className={styles.illustration} />
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <h2>CALL: <span>055 332 1139</span></h2>
      </footer>
    </main>
  );
}
