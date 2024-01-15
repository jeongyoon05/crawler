import { load } from "cheerio";

export const extract = (html: string) => {
  if (html === "") return [];
  const $ = load(html);
  const crawledRealtimeKeywords = $(
    ".ah_roll_area.ㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇPM_CL_realtimeKeyword_rolling ul > li span.ah_k"
  );
  const keywords: string[] = $(crawledRealtimeKeywords)
    .map((i, ele): string => {
      return $(ele).text();
    })
    .get();
  return keywords;
};
