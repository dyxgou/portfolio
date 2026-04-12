export type Sections = "introduction" | "requirements" | "resp" | "token";

export type ArticleSection = {
  chapter: number;
  title: string;
  href: string;
  subtitle: string;
};

const getRedisHREF = (href: Sections) => {
  const REDIS_HREF = "/projects/redis";

  return `${REDIS_HREF}/${href}`;
};

const articleSections: Record<Sections, ArticleSection> = {
  introduction: {
    chapter: 1,
    title: "Introduction",
    href: "/projects/redis/",
    subtitle: "Brief look onto the Redis Clone",
  },
  requirements: {
    chapter: 2,
    title: "Requirements",
    href: getRedisHREF("requirements"),
    subtitle: "Defining the Basic architecture of Redis",
  },
  token: {
    chapter: 3,
    title: "How we Communicate with Redis?",
    href: getRedisHREF("token"),
    subtitle: "Understanding how Redis Communicates",
  },
  resp: {
    chapter: 3,
    title: "The Redis Serialization Protocol",
    href: getRedisHREF("resp"),
    subtitle: "Defining the Basic architecture of Redis",
  },
};

export default articleSections;
