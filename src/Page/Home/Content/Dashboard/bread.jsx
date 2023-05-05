import Search from "./Svg/search.svg";
import Card from "../../../../Component/Card/index.jsx";
import { useEffect, useRef, useState } from "react";
import "./index.js";
import restClient from "./index.js";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { debounce } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { setCartsAction, setPramsAction } from "../../../../Redux/action";

export default function Dashboard(props) {
  const dispatch = useDispatch();
  const { carts, params } = useSelector((state) => state.Carts);
  const [originalCarts, setOriginalCarts] = useState([]);
  // const [searchText, setSearchText] = useState("")
  // const [valueSort, setValueSort] = useState("")
  const [currentPage, setCurrentPage] = useState();
  const inputRef = useRef();

  useEffect(() => {
    fetchCarts(params);
  }, [params]);

  async function fetchCarts(meta) {
    try {
      const response = await restClient("get", "carts", meta);
      dispatch(setCartsAction(response.data.data));
      dispatch(setPramsAction(response.data.pagination));
      setOriginalCarts(response.data.data); // carts ban dau (nguyen ban)
      setCurrentPage(params._page);
    } catch (error) {
      console.log(error);
    }
  }

  const handleChangePage = (page) => {
    dispatch(
      setPramsAction({
        ...params,
        _page: page,
      })
    );
    fetchCarts({
      ...params,
      _page: page,
    });
  };

  const handleSearch = debounce(async (e) => {
    // setSearchText(e.target.value)
    try {
      const search = e.target.value;
      const searchParams = {
        ...params,
        search: search,
      };

      const response = await restClient(
        "get",
        `carts?title_like=${search}&_sort=price&_order=${params.sort}`,
        searchParams
      );
      dispatch(setCartsAction(response.data.data));
      dispatch(setPramsAction(response.data.pagination));
    } catch (error) {
      console.log(error);
    }
  }, 500);

  const handleSort = async (e) => {
    // setValueSort(value)
    try {
      const sort = e.target.value;
      const sortParams = {
        ...params,
        sort: sort,
      };

      const response = await restClient(
        "get",
        `carts?_sort=price&_order=${sort}`,
        sortParams
      );
      dispatch(setCartsAction(response.data.data));
      dispatch(setPramsAction(response.data.pagination));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="w-full">
        <div className="py-2 px-4 flex items-start text-primary">
          Dashboard /<p className="text-p">bread-{params._page}</p>
        </div>
        <div className="flex w-full border-grey border-y">
          <div className="py-[22px] items-center px-6 w-6/12 flex  border-grey border-r">
            <img className="mr-2.5 w-6 h-6" src={Search} alt="..." />
            <input
              className="w-full outline-none"
              ref={inputRef}
              onChange={(e) => handleSearch(e)}
              type="text"
              placeholder="Search Menu..."
            />
            <select onChange={(e) => handleSort(e)} name="" id="">
              <option value="">All</option>
              <option value="asc">Asc</option>
              <option value="desc">Desc</option>
            </select>
          </div>
          <div className="w-6/12 py-4 px-6 flex justify-between whitespace-nowrap">
            <div className="px-4 py-2 text-[14px] rounded-[40px] text-primary bg-[#FFF5EE] border-[#FF5C00] border flex-center">
              <span>All</span>
            </div>
            <div className="dashboard-menu">
              <span>Chicken</span>
            </div>
            <div className="dashboard-menu">
              <span>bread</span>
            </div>
            <div className="dashboard-menu">
              <span>Pasta</span>
            </div>
            <div className="dashboard-menu">
              <span>Rice bowl</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container bg-[#f8f9fd] p-4 ">
          <div className="justify-between grid gap-4 grid-cols-4 grid-rows-3">
            {carts.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
          <div className="text-center mt-12 ">
            {[...Array(Math.ceil(params._totalRows / params._limit))].map(
              (item, index) => (
                <NavLink
                  className="p-2 mr-1 bg-slate-200 rounded-[4px] hover:bg-primary/10"
                  to={`/Home/bread/${index + 1}`}
                  onClick={() => handleChangePage(index + 1)}
                  key={index}
                >
                  {index + 1}
                </NavLink>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
