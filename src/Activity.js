import { useState } from "react"
function Activity() {
    // var activity = [
    //     {
    //         id: 1,
    //         work: "Go for a walk"
    //     }
    // ]
    
    // value input using usestate
    var [fruitInput, setfruitInput] = useState('')

    // Array input
    var [fruits, setfruits] = useState([
        {
            id: 1,
            work: "Go for a walk"
        }
        // {
        //     id: 1,
        //     fruitName: "Apple"
        // },
        // {
        //     id: 2,
        //     fruitName: "orange"
        // },
    ])

    // delete button created pass deletedID as ID
    var deleteBtn = (deleteId) => {
        // filter used if false wont return, true it return
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
            // finally update the deleted one (taken from usestate)
        setfruits(updateFruit)
    }

    // Adding fruits (...) ID and Work is input is added
    const addFruit = () => {
        setfruits([...fruits, {
            id: (fruits.length) + 1,
            work: fruitInput
        }])

    }

    return (
        <div className="flex gap-4">
            <div className="bg-[#BDB4EA] grow rounded-lg p-10">
                <h1 className="text-4xl font-bold">Todays Activity</h1>
                {
                    // mapping is used for print and loop for showing
                    fruits.map(
                        (data) => {
                            return (
                                <div>
                                    <span>{data.id}.{data.work}</span>
                                    <button style={{ cursor: "pointer",backgroundColor:'black',color:'white',padding:'4px',marginLeft:'10px',marginTop:'10px',borderRadius:'5px'}} onClick={() => deleteBtn(data.id)}>delete</button>
                                </div>
                            )
                        }
                    )
                }
            </div>


            <div className="p-6 bg-red-500 rounded-lg">

                <h1 className="text-2xl font-medium">To do List</h1>
                <input type="text" placeholder="Enter the Value" className="border-solid	border-2 border-red-500" value={fruitInput} onChange={(evnt) => setfruitInput(evnt.target.value)}></input>
                <button className="border-solid border-2  border-black-500  rounded-md bg-black text-white p-[2px] ml-2 " onClick={addFruit}>Add Data <i className="icon-address-book-lite"></i></button>

                {
                    fruits.map((fruit, index) => {
                        return (
                            <div key={index}>
                                <span>{fruit.work}</span>
                                <button style={{ cursor: "pointer",backgroundColor:'black',color:'white',padding:'4px',marginLeft:'10px',marginTop:'10px',borderRadius:'5px'}} onClick={() => deleteBtn(fruit.id)}>delete</button>

                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}








export default Activity