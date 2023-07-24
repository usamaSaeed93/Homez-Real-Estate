import React from 'react'
import OptionTile from './OptionTile'
import OptionTab from './OptionTab'
const Options:React.FC=()=> {
    // const [selectedItem, setSelectedItem] = useState<string>("Buy");
    // const handleClick = (item: string) => {
    //     setSelectedItem(item);
    // };
  return (
    <div className='flex flex-row justify-evenly max-w-[900px] m-auto'>
<OptionTile />
{
    [1,2,3,4].map(item=>{
        return <OptionTab />
    })
}
       

    </div>
  )
}
export default Options;