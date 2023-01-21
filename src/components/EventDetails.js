import React from 'react';
import { useLocation } from 'react-router-dom';
import './EventDetailsStyles.css';
import { BiCalendar } from 'react-icons/bi'
import { getFormateDateWithYear } from './EventList.js'
import { getCategoryIcon } from './EventList.js'

export default function EventDetails() {

    const location = useLocation();
    console.log(location);
    const eventDetails = location.state?.eventDetails;

    if (!eventDetails.eventId) return <div>Pnpm startlease selcet event to display its details</div>

    return (

        <div className='body'>

            <div className='colunmPart1'>

                <img className='ImageEnevtDetails' alt={'sorry img is not availble'} src={eventDetails.img} />
                <img className='smallImages' alt={'sorry img is not availble'} src={eventDetails.img1} />
                <img className='smallImages' alt={'sorry img is not availble'} src={eventDetails.img2} />
                <img className='smallImages' alt={'sorry img is not availble'} src={eventDetails.img3} />

                <ol className='cost' ><span className='firstLetter'>.</span> {eventDetails.price}
                    <li>{eventDetails.costChildren}</li>
                    <li>{eventDetails.costAdults}</li>
                </ol>

                <div className='urlHead'><span className='firstLetter'>. </span>{eventDetails.bookingURL}</div>
                <div className='urlLink'>{eventDetails.registationLink}</div>

                <ol> <span className='firstLetter'>. </span> {eventDetails.destinationDegtails}
                    <li>{eventDetails.destinationLocation1}</li>
                    <li>{eventDetails.destinationLocation2}</li>
                    <li>{eventDetails.destinationLocation3}</li>
                </ol>

            </div>

            <div className='colunmPart2'>

                <h3> {eventDetails.name} </h3>
                <div className='date'> <BiCalendar /> {getFormateDateWithYear(eventDetails.DateYear)}</div>
                <div className='nameOfEvent'>{getCategoryIcon(eventDetails.category)} {eventDetails.category}</div>
                <div className='totalDiscription'> {eventDetails.discriptionNextpage} </div>

            </div>

        </div>
    )
}