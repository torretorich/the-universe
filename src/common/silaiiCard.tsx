const SilaiiCard = (params: any) => {
    const {data, index} = params
    return (
        <div className={index ? "cardLastImage" : "cardImage"}>
            <img src={data} alt={"newLaunch"} width={"100%"} style={{borderRadius: "5px"}}/>
        </div>
    )
}
export default SilaiiCard