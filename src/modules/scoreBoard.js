import Data from './data'

const Board = (function() {
  'use strict';



  const sortData = (data) =>{
    let arr = data
    let len = arr.length
    for (var i = 0; i < len; i++) {
      for (var j = 0; j < len - 1; j++) {
        if (arr[j].score < arr[j + 1].score) {
          let tmp = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = tmp
        }
      }
    }
    return arr
  }

  const board = (arr) => {
    let grid = document.querySelector(".grid")

    arr.slice(0,5).forEach((item, i) => {
      let ranking = document.createElement("span", {class: "ranking"})
      let name = document.createElement("span", {class: "name"})
      let score = document.createElement("span", {class: "score"})
      ranking.textContent = i + 1;
      name.textContent = item.user
      score.textContent = item.score
      grid.appendChild(ranking)
      grid.appendChild(name)
      grid.appendChild(score)

    });
  }

  const create = () => {
    let data
    Data.get().then(res => {
      data = sortData(res.result)

      board(data)
    })
  }

  return {create}
}());

export default Board
