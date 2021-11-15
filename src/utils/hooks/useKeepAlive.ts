import { useState, useEffect } from 'react';
// import useLocationWithQuery from './useLocationWithQuery';
import { useLocation, history } from 'umi';

const useKeepAlive = () => {
  const [currKey, setCurrKey] = useState<string>('/');
  const [tabList, setTabList] = useState<string[]>([]);

  const location = useLocation();

  const change = (key: string) => {
    if (currKey !== key) {
      history.push(key);
    }
  };

  const remove = (key: string) => {
    //   如果是最后一条tab，则跳到首页
    if (tabList.length === 1) {
      setTabList([]);
      history.push('/');
    } else {
      const index = tabList.findIndex((tab) => tab === key);
      const newTabList = [...tabList];
      // 如果删的就是当前页，则跳转到后一条，如果后一条不存在则跳前一条
      if (currKey === key) {
        history.push(newTabList[index + 1] || newTabList[index - 1]);
      }
      newTabList.splice(index, 1);
      setTabList(newTabList);
    }
  };

  useEffect(() => {
    //   监听当前location变化。
    const key = `${location.pathname}${location.search}`;
    const index = tabList?.findIndex((tab) => tab === key);

    // 如果tabList不包含当前location，并且也不是首页，则推入tabList
    if (index === -1 && key !== '/') {
      setTabList([...tabList, key]);
    }

    setCurrKey(key);
  }, [currKey, location.pathname, location.search, tabList]);

  return {
    currKey,
    tabList,
    change,
    remove,
  };
};

export default useKeepAlive;
