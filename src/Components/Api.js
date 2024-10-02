import { useDispatch } from "react-redux";
import { setdata } from "../Features/SettingSlice";

const ApiData = async()=>{
    // const dispatch = useDispatch();
    const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
    const data = await response.json();
    console.log(data);
    // dispatch(setdata(data))
    return  data;
}
export default ApiData;