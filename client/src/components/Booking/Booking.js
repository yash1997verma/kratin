export default function Booking({bookingData}){
    // Function to format the date
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };
    return (
       <div className="flex flex-col gap-2 items-center font-mySans font-bold border-2 border-slate-50 my-4 p-2  rounded-md shadow-md  ">
            <div className="mx-auto">
                <p className=" text-slate-400 inline">Booking type : </p>
                <p className="text-center inline"> {bookingData.type} </p>
            </div>
            <div className="mx-auto">
                <p className=" text-slate-400 inline">Date : </p>
                <p className="text-center inline"> {formatDate(bookingData.date)} </p>
            </div>
            {/* <p> {bookingData.date}</p> */}
       </div>
    )
}