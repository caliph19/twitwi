

import { FaUserShield, FaCalendarCheck, FaRegClock } from "react-icons/fa";
import { TbRosetteDiscountCheck } from "react-icons/tb";
import { SlLocationPin } from "react-icons/sl";
import { GrSecure } from "react-icons/gr";
const BookprofessionalData = [
  {
    id: '01',
    title: 'Trusted Professionals',
    description: 'All experts are background-checked and verified for quality and reliability.',
    icon: <TbRosetteDiscountCheck />,
    iconcolor: '#ff7700',
  },
  {
    id:'02',
    title: 'Book Instantly or Schedule Ahead',
    description: 'Choose the time that works best for you right now or later.',
    icon: <FaRegClock />,
    iconcolor: '#1e232c',
  },
  {
    id: '03',
    title: 'Real-Time Updates',
    description: 'Track your bookings, chat with your pro, and stay informed at every step.',
    icon: <SlLocationPin />,
    iconcolor: '#28c66f',
  },
  {
    id: '04',
    title: 'Transparent  Payments',
    description: 'Know your costs upfront and pay only when the job is done right.',
    icon: <GrSecure />,
    iconcolor: '#1e232c',
  },
];

export default BookprofessionalData;
