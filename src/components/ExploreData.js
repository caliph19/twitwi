import { GiVacuumCleaner } from "react-icons/gi";
import { IoBulbOutline } from "react-icons/io5";
import exploreimg1 from '../images/c1.png'
import exploreimg2 from '../images/c2.png'
import exploreimg3 from '../images/c3.png'
import exploreimg4 from '../images/c4.png'
import exploreimg5 from '../images/c5.png'
import { MdPlumbing } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";

 const ExploreData = [
{
    id:1,
    icon: <GiVacuumCleaner />,
    title: 'Cleaning',
    service: 'Deep clean, End-of-lease',
    explorebtncolor: "linear-gradient( #FFECD6, #F9F9F9)",
    exploreiconcolor:'#000',
    explorecardbg:'#fff',
    images: [exploreimg1, exploreimg2, exploreimg3, exploreimg4],

},
{
    id:2,
    icon: <IoBulbOutline />,
    title: 'Electrician',
    service: 'Lights, switches, more',
    explorebtncolor: '#fff',
    exploreiconcolor:'#fff',
    explorecardbg:'#000',
    explortitlecolor:'#fff',
    images: [exploreimg1,exploreimg4],
    
},
{
    id:3,
    icon:<BsBoxSeam />,
    title: 'Moving Help',
    service: 'Packing, heavy lifting',
    explorebtncolor: '#fff',
    exploreiconcolor:'#fff',
    explorecardbg:'#000',
    explortitlecolor:'#fff',
    images: [exploreimg1,exploreimg4,exploreimg5],
    
},
{
    id:4,
    icon: <MdPlumbing />,
    title: 'Plumbing',
    service: 'Leaks, clogs, installs',
    explorebtncolor: "linear-gradient( ##DAFFEB, ##F9F9F9)",
    exploreiconcolor:'#000',
    explorecardbg:'#fff',
    images: [exploreimg1, exploreimg2, exploreimg3, exploreimg4],

},
{
    id:5,
    icon: <MdPlumbing />,
    title: 'Gardening',
    service: 'Lawn care, trimming',
    explorebtncolor: "linear-gradient( #FFECD6, #F9F9F9)",
    exploreiconcolor:'#000',
    explorecardbg:'#fff',
    images: [exploreimg5, exploreimg2,  exploreimg4],

}



]

export default ExploreData;