export type Sections =
  | "introduction"
  | "requirements"
  | "resp"
  | "token"
  | "lexer";

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
  lexer: {
    chapter: 4,
    title: "Programming a Lexer",
    href: getRedisHREF("lexer"),
    subtitle: "Transforming Raw Commands into Tokens with a Lexer",
  },
  resp: {
    chapter: 3,
    title: "The Redis Serialization Protocol",
    href: getRedisHREF("resp"),
    subtitle: "Understanding the Redis Serialization Protocol",
  },
};

export default articleSections;
