export type Sections =
  | "introduction"
  | "requirements"
  | "token"
  | "lexer"
  | "lexer-implementation";

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
    href: "/projects/redis",
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
    title: "Understanding how a Lexer works",
    href: getRedisHREF("lexer"),
    subtitle: "Transforming Raw Commands into Tokens with a Lexer",
  },
  "lexer-implementation": {
    chapter: 5,
    title: "Implementing a Lexer in Golang",
    href: getRedisHREF("lexer-implementation"),
    subtitle: "Finally starting Coding a Lexer",
  },
};

export default articleSections;
