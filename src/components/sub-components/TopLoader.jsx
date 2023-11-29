import NextTopLoader from "nextjs-toploader";

export default function TopLoader() {
  return (
    <>
      <NextTopLoader
        color="#FFC800"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={false}
        easing="ease"
        speed={200}
        showAtBottom={false}
      />
    </>
  );
}
