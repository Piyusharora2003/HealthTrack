import { keys } from "../data";

function MeasurementScale({forr}) {
    const key = keys.find(key => key.name === forr);
    return (
        <span className='text-xs italic ps-1 text-gray-400'>{key.scale}</span>
    )
}

export function UserDataBlock({userData}) {
    return (
        <div
            className='w-[300px] m-3 p-4 rounded-lg bg-sky-900 '
            id="PersonalInfo"
        >
            <div className='w-full text-center text-xl font-bold'>
                Personal Info
            </div>
            {
                Object.keys(userData).map(( ObjKey, index)=>{
                    return (
                        <div key={index} className='font-bold flex justify-between m-3'>
                            <div>{ObjKey} : </div>
                            <div>{userData[ObjKey]} 
                                <MeasurementScale forr = {ObjKey}/>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
