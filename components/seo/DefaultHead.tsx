import { ArticleJsonLd } from "next-seo";

function DefaultHead() {
  return (
    <ArticleJsonLd
      type="BlogPosting"
      headline="Park Changeun's Portfolio"
      description="프론트엔드 개발자 박찬근의 포트폴리오 사이트입니다."
      url="https://parkchangeun.com"
      image="https://parkchangeun.com/site-image.png"
      datePublished="2026-04-19"
      dateModified="2026-04-20"
      author={[
        {
          "@type": "Person",
          name: "Park Changeun",
          url: "https://parkchangeun.com",
        },
      ]}
      publisher={{
        "@type": "Organization",
        name: "Park Changeun",
        logo: {
          "@type": "ImageObject",
          url: "https://parkchangeun.com/Logo.png",
        },
      }}
    />
  );
}

export default DefaultHead;
