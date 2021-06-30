import React, { useEffect, useState, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchNewsByPage } from './redux/newsReducer'
import Table from './components/Table.jsx'
import getFormatedDate from './functions/getFormatedDate.js';

function App() {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.news);
  // const newsStatus = useSelector((state) => state.news.status);
  // const error = useSelector((state) => state.news.error);
  const [page, setPage] = useState(1)

  useEffect(() => {
    dispatch(fetchNewsByPage(page))
  }, [dispatch, page])

  const handleScroll = () => {
    setPage(page + 1)
  }

  const columns = useMemo(
    () => [
      {
        Header: "Adding Time",
        accessor: "time",
        className: "mh",
        Cell: ({ value }) => {
          return (<div className="elipsis">{getFormatedDate(value)}</div>)
        },
      },
      {
        Header: "New",
        accessor: "title",
        Cell: ({ value, row }) => {
          return (<a className="elipsis" href={row.original.url} target="blank">{value}</a>);
        },
      },
      {
        Header: "Domain",
        accessor: "domain",
        className: "mh",
        Cell: ({ value }) => {
          return (<div className="elipsis--domain">{value}</div>);
        },
      }
    ],

    []
  );
  return (
    <div className="container">
      {news.length > 0 &&
        <InfiniteScroll
          scrollThreshold={0.9}
          dataLength={news.length}
          next={handleScroll}
          hasMore={page < 10}
        >
          <Table columns={columns} data={news} />
          {/* <MobileTable news={[...news]} /> */}
        </InfiniteScroll>}
    </div >
  );
}

export default App;
