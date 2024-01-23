import { useState } from "react"
function Box() {

    var [fruitInput, setfruitInput] = useState('')
    var [fruits, setfruits] = useState([
      {
        id: 1,
        fruitName: "Apple"
      },
      {
        id: 2,
        fruitName: "orange"
      },
    ])
  
    var deleteBtn = (deleteId) => {
      var updateFruit = fruits.filter(
        (fruit) => {
          if (deleteId == fruit.id) {
            return false
          }
          else {
            return true
          }
        }
      )
  
      setfruits(updateFruit)
    }
  
    const addFruit = () => {
      setfruits([...fruits, {
        id: (fruits.length)+1,
        fruitName: fruitInput
      }])
  
    }
    return (
      <div className="p-6">
  
        <h1 className="text-2xl font-medium">To do List</h1>
        <input type="text" placeholder="Enter the Value" className="border-solid	border-2 border-red-500" value={fruitInput} onChange={(evnt) => setfruitInput(evnt.target.value)}></input>
        <button className="border-solid border-2  border-red-500  rounded-md" onClick={addFruit}>Add Data <i className="icon-address-book-lite"></i></button>
  
        {
          fruits.map((fruit, index) => {
            return (
              <div key={index}>
                <span>{fruit.fruitName}</span>
                <button style={{ cursor: "pointer" }} onClick={() => deleteBtn(fruit.id)}>delete</button>
                
              </div>
            )
          })
        }
      </div>
    )
  }
  export default Box