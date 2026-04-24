import articleSections, {
  type ArticleSection,
} from "@/components/Articles/Links/articleSections";
import { navigate } from "astro:transitions/client";

const PROJECTS_SECTION = "/#projects";

class ArticleNavigator {
  #articleSections: ArticleSection[];

  constructor() {
    this.#articleSections = Object.values(articleSections);
  }

  findChapterIndex(pathname: string): number {
    return this.#articleSections.findIndex((section) => {
      return section.href === pathname;
    });
  }

  async navigatePrev(pathname: string) {
    const chapterIndex = this.findChapterIndex(pathname);

    const CHAPTER_NOT_FOUND = -1;

    if (chapterIndex === CHAPTER_NOT_FOUND) {
      await navigate(PROJECTS_SECTION);
      return;
    }

    const FIRST_CHAPTER_INDEX = 0;
    if (chapterIndex === FIRST_CHAPTER_INDEX) {
      await navigate(PROJECTS_SECTION);
      return;
    }

    const prevChapter = this.#articleSections[chapterIndex - 1];

    await navigate(prevChapter.href);
  }
}

export default ArticleNavigator;
