import Simpson from "../simpson/Simpson"






 const SimpsonFunc = ({simpson}) => {


    return (
        simpson.map((value, index) => (<Simpson simpson={value} key={index}/>))
    )


}
export default SimpsonFunc




