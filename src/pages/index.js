import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const collections = [
  {
    title: 'Technology & Homelab',
    href: '/docs/Work%20&%20Career/tim',
    meta: 'Servers, networking, storage, SSL, tools, and build notes',
    accent: 'teal',
  },
  {
    title: 'Personal Library',
    href: '/docs/Personal/mbti',
    meta: 'Travel, identity, hobbies, taste, and personal records',
    accent: 'plum',
  },
  {
    title: 'Home & Family',
    href: '/docs/Property/home',
    meta: 'Property, family, finance, legal, and household references',
    accent: 'gold',
  },
  {
    title: 'Reference Shelf',
    href: '/docs/Reference/cellphone',
    meta: 'Reusable guides that do not belong to one life area',
    accent: 'rust',
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroInner}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>Personal knowledge base</p>
          <Heading as="h1" className={styles.heroTitle}>
            Jun Wang&apos;s Personal Library
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              Open the library
            </Link>
            <Link className="button button--secondary button--lg" to="/blog">
              Read the blog
            </Link>
          </div>
        </div>
        <aside className={styles.statusPanel} aria-label="Site snapshot">
          <span className={styles.statusLabel}>Current shape</span>
          <strong>Docs, field notes, and household references</strong>
          <p>
            A personal place for records, ideas, setup notes, family references,
            and the small details that are easy to lose.
          </p>
          <div className={styles.statusGrid}>
            <span>Tech</span>
            <span>Personal</span>
            <span>Home</span>
            <span>Reference</span>
          </div>
        </aside>
      </div>
    </header>
  );
}

function CollectionCard({title, href, meta, accent}) {
  return (
    <Link className={`${styles.collectionCard} ${styles[accent]}`} to={href}>
      <span className={styles.cardRule} />
      <Heading as="h2">{title}</Heading>
      <p>{meta}</p>
    </Link>
  );
}

function Collections() {
  return (
    <section className={styles.collections} aria-label="Document collections">
      <div className={styles.sectionHeader}>
        <p className={styles.kicker}>Start here</p>
        <Heading as="h2">One personal library, four shelves</Heading>
      </div>
      <div className={styles.collectionGrid}>
        {collections.map((collection) => (
          <CollectionCard key={collection.title} {...collection} />
        ))}
      </div>
    </section>
  );
}

function MaintenanceNote() {
  return (
    <section className={styles.maintenance}>
      <div>
        <p className={styles.kicker}>Maintenance model</p>
        <Heading as="h2">Add notes by shelf, not by mood.</Heading>
      </div>
      <p>
        The sidebars now define stable shelves explicitly. New documents can
        land inside the nearest folder, then get added to the relevant group
        when they become useful enough to keep.
      </p>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="Jun Wang Docs"
      description="Jun Wang's personal document site, notes archive, and blog.">
      <HomepageHeader />
      <main className={styles.main}>
        <Collections />
        <MaintenanceNote />
      </main>
    </Layout>
  );
}
