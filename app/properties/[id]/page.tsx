import React from 'react'
import Description from '@/Components/Description/Description';
const page=({ params }: { params: { id: string } })=> {
const id=params.id;
  return (
    <div>
<Description id={id}/>
    </div>
  )
}
export default page;