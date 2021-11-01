import React from "react";
import NewsContent from "./NewsContent";
import NoNews from "./NoNews";

function LandingPage({ newsData }) {
  return (
    <div className="flex flex-col w-3/4 justify-center mx-auto mt-10">
      {newsData?.length > 0 ? (
        newsData.map((newsItem) => (
          <NewsContent category={newsItem.key} data={newsItem.value} />
        ))
      ) : (
        <NoNews />
      )}
    </div>
  );
}

export default LandingPage;
