import { useState } from "react";
function ColasOne() {
    const [cola, setCola] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    return (
        <div className="border-t-4 border-b-4 border-blue-500 min-h-12 min-w-12 w-fit flex flex-wrap gap-4 p-1">
            {
                cola.map((item, index) => (
                    <button key={index} className="bg-blue-500 text-white font-bold px-6 py-2 rounded-md">{item}</button>
                ))
            }
            
           
        </div>
      );
}

export default ColasOne;