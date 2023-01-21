import React from 'react'
import './HomeEventListStyles.css'
import { AiOutlineFilter } from "react-icons/ai";

export default function Home(props) {

    const onHandelAllEvents = (ev) => {
        // console.log(ev.target.value);
        const allEvents = ev.target.value
        props.showAllEvents(allEvents)
    }

    const handelCategoryChange = (e) => {
        // console.log(e.target.value);
        const selectedCatagory = e.target.value;
        props.onCategoryChange(selectedCatagory);
    }

    const handelStatusChange = (eve) => {
        //console.log(eve.target.value);
        const selectedStatus = eve.target.value;
        props.onStatusChange(selectedStatus);
    }

    const onHandelFilter = () => {
        props.handelFilter()
    }

    return (
        <>
        <div>

            <div className='heading'> <span className='headingFirstLetter'>.</span> WEEKLY EVENTS 22-28 JANUARY 2018 </div>

            <div className='containerHead'>
                &nbsp;
                <select className='categoryDropDown' onChange={handelCategoryChange} value={props.cgName}>
                    <option value="">All Categories</option>
                    <option value="MOVIE">MOVIE</option>
                    <option value="SPORT">SPORT</option>
                    <option value="MUSIC">MUSIC</option>
                </select>

                <select className='statusDropDown' onChange={handelStatusChange} value={props.stName}>
                    <option value="">Status</option>
                    <option value="Completed"> Completed </option>
                    <option value="Inprogress"> Inprogress </option>
                    <option value="NotStarted"> NotStarted </option>
                </select>

                <button className='filterButton' onClick={onHandelFilter}> <AiOutlineFilter /> Filter</button>
                <div className='ShowallEventsParent'>

                    <button onClick={onHandelAllEvents} className='showallevents'>SHOW ALL ENENTS</button>

                </div>

            </div>

        </div>
        </>

    )
}


