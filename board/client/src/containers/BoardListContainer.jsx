import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import * as boards from '../apis/boards'
import BoardList from '../components/BoardList'

// 게시글 목록
const BoardListContainer = () => {

  // State 설정
  const [boardList, setBoardList] = useState([])

  // 게시글 목록 데이터
  const getBoardList = async() => {
    const response = await boards.List();
    const data = await response.data;
    setBoardList(data);
  };

  useEffect( () => {
    getBoardList();

  }, [])

  return <BoardList boardList={boardList}></BoardList>
}

export default BoardListContainer