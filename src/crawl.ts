import request from "request";

export const crawl = () =>
  new Promise<string>((resolve, reject) => {
    request.get("https://naver.com", (err, res) => {
      if (err) reject(err);
      ㅁㅇㄴㄹ머ㅏㅇㄴ로ㅓㅁㅇㄴㅎ로ㅓㄴㅁ유럼ㅇ나ㅠ로ㅓㅁ뉴ㅏㅓ
      resolve(res.body);
    });
  });
