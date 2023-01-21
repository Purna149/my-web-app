import React, { useState } from 'react';
import './HomeEventListStyles.css';
import { BsFillPinMapFill } from "react-icons/bs";
import { GiAmericanFootballPlayer } from "react-icons/gi";
import { BiFilm } from "react-icons/bi";
import { BiCalendar } from "react-icons/bi";
import { BiMusic } from "react-icons/bi";
import Home from './Home';
import { useNavigate } from 'react-router-dom';

export const getCategoryIcon = (category)=> {
  switch (category) {
    case 'MOVIE':
      return <BiFilm />;
    case 'SPORT':
      return <GiAmericanFootballPlayer />;
    case 'MUSIC':
      return <BiMusic />
    default:
      return <GiAmericanFootballPlayer />
  }

}

export const getFormateDateWithOutYear = (date) => {
  const d = new Date(date);
  return d.toLocaleDateString('en', { weekday: "long", day: 'numeric', month: 'long' });
}

export const getFormateDateWithYear = (DateYear) => {
  const dy = new Date(DateYear);
  return dy.toLocaleDateString('en', { weekday: 'long', day: "2-digit", month: 'long', year: 'numeric' })
}

const eventsList = [
  {
    eventId: '0',
    date: '07/12',
    name: 'Aneean sed suscipit risus',
    DateYear: "07/12/2022",
    discription: 'Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.',
    discriptionNextpage: 'Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.',
    img: 'https://cdn.business2community.com/wp-content/uploads/2018/02/community-events.jpeg',
    img1: 'https://www.telanganaindia.in/uploads/0000/1/2022/09/06/penguin-lake-side-camping-ananthagirihills-vikarabad-3.jpg',
    img2: "https://www.telanganaindia.in/uploads/0000/1/2022/09/06/penguin-lake-side-camping-ananthagirihills-vikarabad-9.jpg",
    img3: 'https://www.telanganaindia.in/uploads/0000/1/2022/09/06/penguin-lake-side-camping-ananthagirihills-vikarabad-4.jpg',
    location: "COVENTRY",
    category: "MOVIE",
    Status: 'Completed',
    details: "ENENTS DETAILS",
    price: "PRICE INFORMATION",
    costChildren: "20$ - childrens",
    costAdults: "40$ - adults",
    bookingURL: "External Event URL",
    registationLink: "Visit the website of this",
    destinationDegtails: "Event Location",
    destinationLocation1: "Dolor sit pub",
    destinationLocation2: 'Holbeck',
    destinationLocation3: 'Leeds'

  },
  {
    eventId: '1',
    date: '01/29',
    name: 'Etiam tristique eget',
    DateYear: "01/29/1998",
    discription: 'Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.',
    discriptionNextpage: 'Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.',
    img: 'https://cdn.business2community.com/wp-content/uploads/2018/02/community-events.jpeg',
    img1: 'https://www.telanganaindia.in/uploads/0000/1/2022/09/06/penguin-lake-side-camping-ananthagirihills-vikarabad-3.jpg',
    img2: "https://www.telanganaindia.in/uploads/0000/1/2022/09/06/penguin-lake-side-camping-ananthagirihills-vikarabad-9.jpg",
    img3: 'https://www.telanganaindia.in/uploads/0000/1/2022/09/06/penguin-lake-side-camping-ananthagirihills-vikarabad-4.jpg',
    location: " LONDON ",
    category: "SPORT",
    Status: 'Inprogress',
    details: "ENENTS DETAILS",
    price: "PRICE INFORMATION",
    costChildren: "20$ - childrens",
    costAdults: "40$ - adults",
    bookingURL: "External Event URL",
    registationLink: "Visit the website of this",
    destinationDegtails: "Event Location",
    destinationLocation1: "Dolor sit pub",
    destinationLocation2: 'Holbeck',
    destinationLocation3: 'Leeds'

  },
  {
    eventId: '2',
    date: '05/25',
    name: ' eget',
    DateYear: "05/25",
    discription: 'Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.',
    discriptionNextpage: 'Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.',
    img: 'https://cdn.business2community.com/wp-content/uploads/2018/02/community-events.jpeg',
    img1: 'https://www.telanganaindia.in/uploads/0000/1/2022/09/06/penguin-lake-side-camping-ananthagirihills-vikarabad-3.jpg',
    img2: "https://www.telanganaindia.in/uploads/0000/1/2022/09/06/penguin-lake-side-camping-ananthagirihills-vikarabad-9.jpg",
    img3: 'https://www.telanganaindia.in/uploads/0000/1/2022/09/06/penguin-lake-side-camping-ananthagirihills-vikarabad-4.jpg',
    location: " LONDON ",
    category: " MUSIC ",
    Status: 'NotStarted',
    details: "ENENTS DETAILS",
    price: "PRICE INFORMATION",
    costChildren: "20$ - childrens",
    costAdults: "40$ - adults",
    bookingURL: "External Event URL",
    registationLink: "Visit the website of this",
    destinationDegtails: "Event Location",
    destinationLocation1: "Dolor sit pub",
    destinationLocation2: 'Holbeck',
    destinationLocation3: 'Leeds'

  },
  {
    eventId: '3',
    date: '05/02',
    name: 'iaculis',
    DateYear: "05/02/1975",
    discription: 'Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.',
    discriptionNextpage: 'Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.',
    img: 'https://cdn.business2community.com/wp-content/uploads/2018/02/community-events.jpeg',
    img1: 'https://www.telanganaindia.in/uploads/0000/1/2022/09/06/penguin-lake-side-camping-ananthagirihills-vikarabad-3.jpg',
    img2: "https://www.telanganaindia.in/uploads/0000/1/2022/09/06/penguin-lake-side-camping-ananthagirihills-vikarabad-9.jpg",
    img3: 'https://www.telanganaindia.in/uploads/0000/1/2022/09/06/penguin-lake-side-camping-ananthagirihills-vikarabad-4.jpg',
    location: " LONDON ",
    category: "MUSIC",
    Status: 'Completed',
    details: "ENENTS DETAILS",
    price: "PRICE INFORMATION",
    costChildren: "20$ - childrens",
    costAdults: "40$ - adults",
    bookingURL: "External Event URL",
    registationLink: "Visit the website of this",
    destinationDegtails: "Event Location",
    destinationLocation1: "Dolor sit pub",
    destinationLocation2: 'Holbeck',
    destinationLocation3: ''

  },
  {
    eventId: '4',
    date: '11/12',
    name: 'Nam iaculis ipsum',
    DateYear: "11/12/1990",
    discription: 'Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.',
    discriptionNextpage: 'Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.',
    img: 'https://cdn.business2community.com/wp-content/uploads/2018/02/community-events.jpeg',
    img1: 'https://www.telanganaindia.in/uploads/0000/1/2022/09/06/penguin-lake-side-camping-ananthagirihills-vikarabad-3.jpg',
    img2: "https://www.telanganaindia.in/uploads/0000/1/2022/09/06/penguin-lake-side-camping-ananthagirihills-vikarabad-9.jpg",
    img3: 'https://www.telanganaindia.in/uploads/0000/1/2022/09/06/penguin-lake-side-camping-ananthagirihills-vikarabad-4.jpg',
    location: " TEXAS ",
    category: 'SPORT',
    Status: 'NotStarted',
    details: "ENENTS DETAILS",
    price: "PRICE INFORMATION",
    costChildren: "20$ - childrens",
    costAdults: "40$ - adults",
    bookingURL: "External Event URL",
    registationLink: "Visit the website of this",
    destinationDegtails: "Event Location",
    destinationLocation1: "",
    destinationLocation2: 'Holbeck',
    destinationLocation3: 'Leeds'
  }, {
    eventId: '5',
    date: '09/11',
    name: ' suscipit risus',
    DateYear: "04/09/1992",
    discription: 'Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.',
    discriptionNextpage: 'Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.',
    img: 'https://cdn.business2community.com/wp-content/uploads/2018/02/community-events.jpeg',
    img1: 'https://www.telanganaindia.in/uploads/0000/1/2022/09/06/penguin-lake-side-camping-ananthagirihills-vikarabad-3.jpg',
    img2: "https://www.telanganaindia.in/uploads/0000/1/2022/09/06/penguin-lake-side-camping-ananthagirihills-vikarabad-9.jpg",
    img3: 'https://www.telanganaindia.in/uploads/0000/1/2022/09/06/penguin-lake-side-camping-ananthagirihills-vikarabad-4.jpg',
    location: "COVENTRY",
    category: "MOVIE",
    Status: 'NotStarted',
    details: "ENENTS DETAILS",
    price: "PRICE INFORMATION",
    costChildren: "20$ - childrens",
    costAdults: "40$ - adults",
    bookingURL: "External Event URL",
    registationLink: "Visit the website of this",
    destinationDegtails: "Event Location",
    destinationLocation1: "Dolor sit pub",
    destinationLocation2: 'Holbeck',
    destinationLocation3: 'Leeds'
  },
  {
    eventId: '6',
    date: '08/02',
    name: 'Eti eget',
    DateYear: "09/24/2023",
    discription: 'Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.',
    discriptionNextpage: 'Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.',
    img: 'https://cdn.business2community.com/wp-content/uploads/2018/02/community-events.jpeg',
    img1: 'https://www.telanganaindia.in/uploads/0000/1/2022/09/06/penguin-lake-side-camping-ananthagirihills-vikarabad-3.jpg',
    img2: "https://www.telanganaindia.in/uploads/0000/1/2022/09/06/penguin-lake-side-camping-ananthagirihills-vikarabad-9.jpg",
    img3: 'https://www.telanganaindia.in/uploads/0000/1/2022/09/06/penguin-lake-side-camping-ananthagirihills-vikarabad-4.jpg',
    location: " LONDON ",
    category: "SPORT",
    Status: 'Inprogress',
    details: "ENENTS DETAILS",
    price: "PRICE INFORMATION",
    costChildren: "20$ - childrens",
    costAdults: "40$ - adults",
    bookingURL: "External Event URL",
    registationLink: "Visit the website of this",
    destinationDegtails: "Event Location",
    destinationLocation1: "Dolor sit pub",
    destinationLocation2: 'Holbeck',
    destinationLocation3: 'Leeds'

  },
  {
    eventId: '7',
    date: '05/25',
    name: ' eget',
    DateYear: "05/25",
    discription: 'Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.',
    discriptionNextpage: 'Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.',
    img: 'https://cdn.business2community.com/wp-content/uploads/2018/02/community-events.jpeg',
    img1: 'https://www.telanganaindia.in/uploads/0000/1/2022/09/06/penguin-lake-side-camping-ananthagirihills-vikarabad-3.jpg',
    img2: "https://www.telanganaindia.in/uploads/0000/1/2022/09/06/penguin-lake-side-camping-ananthagirihills-vikarabad-9.jpg",
    img3: 'https://www.telanganaindia.in/uploads/0000/1/2022/09/06/penguin-lake-side-camping-ananthagirihills-vikarabad-4.jpg',
    location: " LONDON ",
    category: " MUSIC ",
    Status: 'NotStarted',
    details: "ENENTS DETAILS",
    price: "PRICE INFORMATION",
    costChildren: "20$ - childrens",
    costAdults: "40$ - adults",
    bookingURL: "External Event URL",
    registationLink: "Visit the website of this",
    destinationDegtails: "Event Location",
    destinationLocation1: "Dolor sit pub",
    destinationLocation2: 'Holbeck',
    destinationLocation3: 'Leeds'

  },
  {
    eventId: '8',
    date: '05/02',
    name: 'iaculis',
    DateYear: "05/02/1975",
    discription: 'Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.',
    discriptionNextpage: 'Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.',
    img: 'https://cdn.business2community.com/wp-content/uploads/2018/02/community-events.jpeg',
    img1: 'https://www.telanganaindia.in/uploads/0000/1/2022/09/06/penguin-lake-side-camping-ananthagirihills-vikarabad-3.jpg',
    img2: "https://www.telanganaindia.in/uploads/0000/1/2022/09/06/penguin-lake-side-camping-ananthagirihills-vikarabad-9.jpg",
    img3: 'https://www.telanganaindia.in/uploads/0000/1/2022/09/06/penguin-lake-side-camping-ananthagirihills-vikarabad-4.jpg',
    location: " LONDON ",
    category: "MUSIC",
    Status: 'Completed',
    details: "ENENTS DETAILS",
    price: "PRICE INFORMATION",
    costChildren: "20$ - childrens",
    costAdults: "40$ - adults",
    bookingURL: "External Event URL",
    registationLink: "Visit the website of this",
    destinationDegtails: "Event Location",
    destinationLocation1: "Dolor sit pub",
    destinationLocation2: 'Holbeck',
    destinationLocation3: ''

  },
  {
    eventId: '9',
    date: '11/12',
    name: 'culis ipsum',
    DateYear: "05/18/2000",
    discription: 'Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.',
    discriptionNextpage: 'Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.Nullam cursus nibh quis felis posuere, eu efficitur mauris semper, mMauris faucibus dolor orci, vitae utrices nulla venenatis vitae. Nulla in vehicula libero. Mauris id nisi volutput, mattis mauris ac, vestibulum eros. Duis mollis elit et risus arnare, ac tempor nibh commodo.',
    img: 'https://cdn.business2community.com/wp-content/uploads/2018/02/community-events.jpeg',
    img1: 'https://www.telanganaindia.in/uploads/0000/1/2022/09/06/penguin-lake-side-camping-ananthagirihills-vikarabad-3.jpg',
    img2: "https://www.telanganaindia.in/uploads/0000/1/2022/09/06/penguin-lake-side-camping-ananthagirihills-vikarabad-9.jpg",
    img3: 'https://www.telanganaindia.in/uploads/0000/1/2022/09/06/penguin-lake-side-camping-ananthagirihills-vikarabad-4.jpg',
    location: " TEXAS ",
    category: 'MOVIE',
    Status: 'Inprogress',
    details: "ENENTS DETAILS",
    price: "PRICE INFORMATION",
    costChildren: "20$ - childrens",
    costAdults: "40$ - adults",
    bookingURL: "External Event URL",
    registationLink: "Visit the website of this",
    destinationDegtails: "Event Location",
    destinationLocation1: "",
    destinationLocation2: 'Holbeck',
    destinationLocation3: 'Leeds'
  }
]

export default function EventList() {

  const [events, setEvents] = useState(eventsList);
  const [cgName, setCgName] = useState('')
  const [stName, setStName] = useState('')

  const showAllEvents = () => {
    setEvents(eventsList);
    setCgName('');
    setStName('');
  }

  const onCategoryChange = (categoryName) => {
    // console.log("eventList" + categoryName);
    // setEvents(filteredEvents);
    //  console.log(filteredEvents);
    //   setEvents(eventsList);
    // }
    setCgName(categoryName);
  }

  const onStatusChange = (statusName) => {
    // const filtredStatus = eventsList.filter(function (event) {
    //   return (event.Status === statusName && event.category === cgName)
    // })
    // setEvents(filtredStatus);   
    // if(statusName === "" && cgName === ""){
    //   setEvents(eventsList);
    // }
    setStName(statusName);
  }

  const handelFilter = () => {
    let finalArry = []
    if (cgName !== "" && stName !== "") {
      finalArry = eventsList.filter(function (event) {
        return (event.category === cgName && event.Status === stName)
      })
    }
    else if (cgName === "" && stName !== "") {
      finalArry = eventsList.filter(function (event) {
        return (event.Status === stName)
      })
    }
    else if (cgName !== "" && stName === "") {
      finalArry = eventsList.filter(function (event) {
        return (event.category === cgName)
      })
    }
    else if (cgName === "" && stName === "") {
      finalArry = eventsList;
    }
    setEvents(finalArry);
  }

  const navigate = useNavigate();
  const eventclickHandler = (e) => {
    const selectedEventDetails = eventsList[e.target.id]
    navigate('/event-details', {
      state: {
        eventDetails: selectedEventDetails,
      }
    }); // console.log(navigate);
  }
  // console.log("finalevents",events)

  return (
    <div>

      <Home showAllEvents={showAllEvents} handelFilter={handelFilter} onCategoryChange={onCategoryChange} onStatusChange={onStatusChange} stName={stName} cgName={cgName} />
    
      {
        events.map((event, index) => {
          return (
            <div className='bodyContainer' key={index}>

              <div className='dateImageParent'>
                <h4 className='dateONImageTOP' key={index}>{getFormateDateWithOutYear(event.date)}</h4>
                <img className='Image' alt={'sorry img is not availble'} src={event.img} />
              </div>

              <div className='contentParent'>

                <h4>{event.name}</h4>

                <h6 className='dateAtContent'>
                  <BiCalendar /> {getFormateDateWithYear(event.DateYear)}
                </h6>

                <div className='discription'>
                  {event.discription}
                </div>

                <div className='LocationCategoryEventDetailsParent'>

                  <div className='LocationCategory'>
                    <BsFillPinMapFill /> {event.location} &nbsp; / &nbsp;{getCategoryIcon(event.category)} {event.category} &nbsp; || {event.Status}
                  </div>

                  <div className='eventDetailsParent'>
                    <button id={event.eventId} onClick={eventclickHandler} className='eventDetails'>{event.details}</button>
                  </div>

                </div>

              </div>

            </div>

          )
        })
      }
    </div>
  )
}







// export class Event_List extends Component {
//   const items = [
//     {name:'', date:'12-12-2022', description:'', location:'', img:'https://cdn.business2community.com/wp-content/uploads/2018/02/community-events.jpeg' }
//   ]
//  render(){

//   return <div>
//     {
//       items.map((val,index)=>{
//       return <>
//       <img style={{width:"500px",height:'300px', marginLeft:'20px'}} src={val.img} />
//       <h1 className='head' key={index} ></h1>
//       </>
//       })
//     }
//   </div>
//  }
// }

// {const EventDate=({StartDate})=>{
//   const D = new Date(StartDate)
// }}