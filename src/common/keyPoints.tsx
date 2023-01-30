import AppSpan from "./AppSpan";

const KeyPoints = (params: any) => {
    const {icon, title} = params
    return (
        <div className={"keyPoints"}>
            <img src={icon} alt={"icons"} width={30}/>
            <AppSpan className={"keyPointsDescription"} dataItem={title}/>
        </div>
    )
}
export default KeyPoints