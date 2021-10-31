import React, {
  useEffect,
  useRef,
  useState,
  useContext,
  useCallback,
} from "react";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";
import { Down, Search } from "@bigbinary/neeto-icons";
import { Input, Button } from "@bigbinary/neetoui/v2";
import { globalDataContext } from "../../../App";
import axios from "axios";
import Loader from "../../Loader";
import { useHistory } from "react-router-dom";

import { FilterContext } from "../../../App";

import { debounce } from "lodash";

const SearchModal = ({ show, setShowValue }) => {
  const allNewsCategory = [
    "all",
    "science",
    "business",
    "national",
    "sports",
    "world",
    "technology",
    "politics",
    "startup",
    "entertainment",
    "miscellaneous",
    "automobile",
  ];
  const [globalData, setGlobalData] = useContext(globalDataContext);
  const { searchAllData = [] } = globalData || {};
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [FilterCategories, setFilterCategories] = useContext(FilterContext);
  const { categories = [], isToday = false } = FilterCategories || {};
  const [searchValue, setSearchValue] = useState("");
  let history = useHistory();

  const debounceLoadData = useCallback(
    debounce((e, list) => handleSearch(e, list), 100),
    []
  );

  function handleFilterChange(event) {
    const { value } = event.target;

    setSearchValue(value);
    debounceLoadData(value, searchAllData);
  }

  const newsApi = async (item) => {
    try {
      const news = await axios.get(
        `https://inshortsapi.vercel.app/news?category=${item}`
      );
      return news?.data;
    } catch (error) {
      setLoading(false);
    }
  };

  const handleSearch = (props, list) => {
    let temp = [];
    list.map((item) => {
      if (categories?.length > 0) {
        item.value.map((news) => {
          if (news?.title?.includes(props) && categories.includes(item.key)) {
            temp.push({ category: item.key, data: news });
          }
        });
      } else {
        item.value.map((news) => {
          if (news?.title?.includes(props)) {
            temp.push({ category: item.key, data: news });
          }
        });
      }
    });

    setSearchResult(temp);
  };

  const init = async () => {
    setLoading(true);
    let tempAll = [];
    await axios.all(
      allNewsCategory?.map(async (item) => {
        let response = await newsApi(item);
        response.data.forEach((e) => {
          e.id = `${response.category}-${e.url.slice(-13)}`;
        });
        tempAll.push({ key: response.category, value: response.data });
      })
    );
    setGlobalData({ ...globalData, searchAllData: tempAll });
    setLoading(false);
  };

  useEffect(() => {
    searchAllData?.length === 0 && init();
  }, []);

  return (
    <div className="flex flex-row items-center justify-start space-x-6">
      <div
        className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-70 overflow-y-auto h-full w-full"
        onClick={(e) => {
          setShowValue(false);
        }}
      >
        {loading ? (
          <div>
            <Loader />
          </div>
        ) : (
          <div
            className="flex-col w-1/2"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Input
              prefix={<Search size={16} />}
              className="w-auto"
              suffix={<Down size={16} />}
              onChange={(e) => handleFilterChange(e)}
            />
            {searchValue?.length > 0 && searchResult?.length === 0 ? (
              <div
                className="flex text-black py-2 bg-gray-100 px-1 border-b-2"
                onClick={(e) => {
                  setShowValue(false);
                }}
              >
                No Result Found!
              </div>
            ) : (
              searchResult.map(
                (item, index) =>
                  index < 6 && (
                    <div
                      key={index}
                      to={`/article/${item.category}/${item.data.id}`}
                      className="flex text-black py-2 bg-gray-100 px-1 border-b-2"
                      onClick={() => {
                        setShowValue(false);
                        history.push({
                          pathname: `/article/${item.category}/${item.data.id}`,
                          state: {
                            id: 7,
                            color: "green",
                          },
                        });
                      }}
                    >
                      {item.data.title}
                    </div>
                  )
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default SearchModal;
