import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import BlogListPageStructuredData from '@theme/BlogListPage/StructuredData';

const SITE_DESCRIPTION =
  'Production lessons on AI engineering, architecture, testing, observability, developer experience, and technical leadership.';

const TOPICS = [
  {
    title: 'AI Engineering',
    href: '/tags/ai-engineering/',
    description: 'LLM systems, agent-readable code, and the limits that show up in production.',
  },
  {
    title: 'Architecture',
    href: '/tags/architecture/',
    description: 'Boundaries, diagrams, constraints, and decisions that outlive the sprint.',
  },
  {
    title: 'Testing',
    href: '/tags/testing/',
    description: 'Feedback loops, architecture tests, TDD, and keeping drift visible.',
  },
  {
    title: 'Observability',
    href: '/tags/observability/',
    description: 'Traces, metrics, latency, and making opaque systems explain themselves.',
  },
  {
    title: 'Developer Experience',
    href: '/tags/developer-experience/',
    description: 'Tooling and workflows that make setup, review, and delivery less theatrical.',
  },
  {
    title: 'Technical Leadership',
    href: '/tags/software-delivery/',
    description: 'Pragmatic delivery notes for teams trying to ship without lying to themselves.',
  },
];

const TERMINAL_LINES = [
  ['status', 'shipped'],
  ['tests', 'mostly green'],
  ['incidents', 'educational'],
  ['notes', 'worth writing down'],
];

const CURRENT_FOCUS = [
  'AI systems that fail in surprising ways',
  'Architecture rules that keep teams honest',
  'Testing as documentation for humans and agents',
];

// Keep this list short and intentional. Titles must match generated blog metadata.
const FEATURED_TITLES = [
  "The Classic 'Works on My Machine' — Now With Neural Networks",
  'We Spent Five Weeks Making Docling Work. Then We Deleted It.',
  'TDD Was Solving the Agent Problem Before Agents Existed',
];

function BlogListPageMetadata({metadata}) {
  const {
    siteConfig: {title: siteTitle},
  } = useDocusaurusContext();
  const {blogTitle, permalink} = metadata;
  const isBlogOnlyMode = permalink === '/';
  const title = isBlogOnlyMode ? siteTitle : blogTitle;

  return (
    <>
      <PageMetadata title={title} description={SITE_DESCRIPTION} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

function getPostMetadata(item) {
  return item.content.metadata;
}

function formatDate(date) {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(date));
}

function formatReadingTime(readingTime) {
  if (typeof readingTime === 'undefined') {
    return null;
  }

  const rounded = Math.ceil(readingTime);
  return `${rounded} min read`;
}

function PostTags({tags}) {
  if (!tags?.length) {
    return null;
  }

  return (
    <ul className="wip-post-tags" aria-label="Post tags">
      {tags.map((tag) => (
        <li key={tag.permalink}>
          <Link className="wip-tag" to={tag.permalink}>
            {tag.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function PostCard({post, variant = 'standard'}) {
  const readingTime = formatReadingTime(post.readingTime);
  const primaryTag = post.tags?.[0];

  return (
    <article className={clsx('wip-post-card', `wip-post-card--${variant}`)}>
      <div className="wip-post-card__meta">
        {primaryTag && (
          <Link className="wip-post-card__category" to={primaryTag.permalink}>
            {primaryTag.label}
          </Link>
        )}
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        {readingTime && <span>{readingTime}</span>}
      </div>
      <h3 className="wip-post-card__title">
        <Link to={post.permalink}>{post.title}</Link>
      </h3>
      {post.description && (
        <p className="wip-post-card__description">{post.description}</p>
      )}
      <PostTags tags={post.tags} />
      <Link className="wip-read-more" to={post.permalink}>
        Read more
      </Link>
    </article>
  );
}

function TerminalCard() {
  return (
    <aside className="wip-terminal-card" aria-label="Deployment notes">
      <div className="wip-terminal-card__chrome" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <pre>
        <code>
          <span className="wip-terminal-card__prompt">$ deploy works-in-prod</span>
          {'\n\n'}
          {TERMINAL_LINES.map(([label, value]) => (
            <React.Fragment key={label}>
              <span className="wip-terminal-card__key">{label}:</span>{' '}
              <span>{value}</span>
              {'\n'}
            </React.Fragment>
          ))}
        </code>
      </pre>
    </aside>
  );
}

function HomepageHero() {
  return (
    <section className="wip-hero" aria-labelledby="homepage-title">
      <div className="wip-hero__copy">
        <p className="wip-eyebrow">Theory is easy. Prod is hard.</p>
        <h1 id="homepage-title">Works in Prod</h1>
        <p className="wip-hero__subtitle">
          Building software that survives production.
        </p>
        <p className="wip-hero__body">
          Practical notes on AI engineering, architecture, testing,
          observability, developer experience, and the awkward bits that only
          show up after something ships.
        </p>
        <p className="wip-hero__aside">
          Vibe-posted. Fact-checked. Mostly.
        </p>
        <div className="wip-hero__actions" aria-label="Primary links">
          <a className="button button--primary" href="#start-here">
            Start reading
          </a>
          <Link className="button button--secondary" to="/about/">
            About Danish
          </Link>
        </div>
      </div>
      <TerminalCard />
    </section>
  );
}

function TopicSection() {
  return (
    <section className="wip-section" aria-labelledby="topics-title">
      <div className="wip-section__header">
        <p className="wip-eyebrow">Browse by theme</p>
        <h2 id="topics-title">Topics I Write About</h2>
      </div>
      <div className="wip-topic-grid">
        {TOPICS.map((topic) => (
          <Link className="wip-topic-card" key={topic.href} to={topic.href}>
            <h3>{topic.title}</h3>
            <p>{topic.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

function FeaturedPosts({posts}) {
  if (!posts.length) {
    return null;
  }

  return (
    <section className="wip-section" id="start-here" aria-labelledby="featured-title">
      <div className="wip-section__header">
        <p className="wip-eyebrow">Start Here</p>
        <h2 id="featured-title">Featured Posts</h2>
      </div>
      <div className="wip-featured-grid">
        {posts.map((post) => (
          <PostCard key={post.permalink} post={post} variant="featured" />
        ))}
      </div>
    </section>
  );
}

function AuthorCard() {
  return (
    <section className="wip-author-card" aria-labelledby="author-title">
      <div>
        <p className="wip-eyebrow">About the author</p>
        <h2 id="author-title">Danish Javed</h2>
        <p className="wip-author-card__role">Senior Software Engineer</p>
        <p>
          Senior Software Engineer writing about the parts of software delivery
          that survive contact with production.
        </p>
      </div>
      <div className="wip-author-card__links">
        <a
          href="https://github.com/ambersariya"
          target="_blank"
          rel="noopener noreferrer">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/danish-javed/"
          target="_blank"
          rel="noopener noreferrer">
          LinkedIn
        </a>
        <a
          href="https://www.meetup.com/software-crafters-manchester/"
          target="_blank"
          rel="noopener noreferrer">
          Software Crafters Manchester
        </a>
      </div>
    </section>
  );
}

function CurrentFocusCard() {
  return (
    <section className="wip-focus-card" aria-labelledby="focus-title">
      <p className="wip-eyebrow">Current focus</p>
      <h2 id="focus-title">What keeps showing up in the work</h2>
      <ul>
        {CURRENT_FOCUS.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

function RecentPosts({posts}) {
  return (
    <section className="wip-section" aria-labelledby="latest-posts">
      <div className="wip-section__header">
        <p className="wip-eyebrow">Latest notes</p>
        <h2 id="latest-posts">Recent Posts</h2>
      </div>
      <div className="wip-recent-list">
        {posts.map((post) => (
          <PostCard key={post.permalink} post={post} />
        ))}
      </div>
    </section>
  );
}

function BlogListPageContent({metadata, items, sidebar}) {
  const posts = items.map(getPostMetadata);
  const featuredPosts = FEATURED_TITLES.map((title) =>
    posts.find((post) => post.title === title),
  ).filter(Boolean);

  return (
    <BlogLayout>
      <div className="wip-homepage-shell">
        <HomepageHero />
        <FeaturedPosts posts={featuredPosts} />
        <TopicSection />
        <div className="wip-homepage-split">
          <AuthorCard />
          <CurrentFocusCard />
        </div>
        <RecentPosts posts={posts} />
      </div>
      <BlogListPaginator metadata={metadata} />
    </BlogLayout>
  );
}

export default function BlogListPage(props) {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}>
      <BlogListPageMetadata {...props} />
      <BlogListPageStructuredData {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
