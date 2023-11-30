import React from 'react'
import { Link } from 'react-router-dom'

const BoardList = ({ boardList }) => {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th align='100'>번호</th>
                    <th align='100'>제목</th>
                    <th align='100'>작성자</th>
                    <th align='100'>등록일자</th>
                </tr>
            </thead>
            <tbody>
                { boardList.map((board) => (
                    <tr>
                        <td align="center">{board.no}</td>
                        <td align='left'>
                            <Link to={`/boards/${board.no}`}>{board.title}</Link>
                        </td>
                        <td align='center'>{board.writer}</td>
                        <td align='center'>{board.regDate}</td>
                    </tr>
                ))}
                {/* {}로 쓰면 return을 적어줘야 함 */}
            </tbody>
        </table>
    </div>
  )
}

export default BoardList