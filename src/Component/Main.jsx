const Main = (prop) => {
    return (
        <div className="p-10 rounded-lg flex-grow" style={{backgroundColor : prop.bgColor}}>
            <h2 className="text-4xl font-bold text-center">{prop.head}</h2>
            <p className="text-center">{prop.para}</p>
        </div>
    )
}

export default Main