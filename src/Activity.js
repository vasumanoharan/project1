import { useState } from "react"
function Activity() {
    var activity = [
        {
            id: 1,
            work: "Go for a walk"
        }
    ]

    var [fruitInput, setfruitInput] = useState('')
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
            id: (fruits.length) + 1,
            work: fruitInput
        }])

    }

    return (
        <div className="flex gap-4">
            <div className="bg-[#BDB4EA] grow rounded-lg p-10">
                <h1 className="text-4xl font-bold">Todays Activity</h1>
                {
                    fruits.map(
                        (data) => {
                            return (
                                <div>
                                    <span>{data.id}.{data.work}</span>
                                </div>
                            )
                        }
                    )
                }
            </div>
            <div className="p-6 bg-red-500 rounded-lg">

                <h1 className="text-2xl font-medium">To do List</h1>
                <input type="text" placeholder="Enter the Value" className="border-solid	border-2 border-red-500" value={fruitInput} onChange={(evnt) => setfruitInput(evnt.target.value)}></input>
                <button className="border-solid border-2  border-red-500  rounded-md" onClick={addFruit}>Add Data <i className="icon-address-book-lite"></i></button>

                {
                    fruits.map((fruit, index) => {
                        return (
                            <div key={index}>
                                <span>{fruit.work}</span>
                                <button style={{ cursor: "pointer" }} onClick={() => deleteBtn(fruit.id)}>delete</button>

                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}








export default Activity