import { logRoles } from '@testing-library/react'
import {SiOpenaigym} from 'react-icons/si'
import {SiMusicbrainz} from 'react-icons/si'




export const links = [
    {
        name:'Home',
        path:'#home'
    },
    {
        name:'About',
        path: '#about'
    },
    {
        name:'Lessons',
        path: '#lessons'
    },
    {
        name:'Contact',
        path: '#contact'
    },
]

export const Programs = [
    {
        id:1,
        icons:<SiMusicbrainz/>,
        title:"Beginners",
        info:"This is a little more information about the Beginners lessons offered here in our school for talented musicians",
        path:"/lessons/1"
    },
    {
        id:2,
        icons:<SiMusicbrainz/>,
        title:"Intermidiate",
        info:"This is a little more information about the Intermidiate lessons offered here in our school for talented musicians",
        path:"/lessons/2"
    },
    {
        id:3,
        icons:<SiMusicbrainz/>,
        title:"Advanced",
        info:"This is a little more information about the Advanced lessons offered here in our school for talented musicians",
        path:"/lessons/3"
    },
    {
        id:4,
        icons:<SiMusicbrainz/>,
        title:"Others",
        info:"This is a little more information about the Others lessons offered here in our school for talented musicians",
        path:"/lessons/4"
    },
    {
        id:5,
        icons:<SiMusicbrainz/>,
        title:"Covers",
        info:"This is a little more information about the Others lessons offered here in our school for talented musicians",
        path:"/lessons/5"
    },
]

export const Prices = [
    {
        id:1,
        icon:<SiOpenaigym/>,
        title:"value one",
        desc:" typy and add the text myself inorder to have something to work with for this demo/dummy react website"
    },
    {
        id:2,
        icon:<SiOpenaigym/>,
        title:"value two",
        desc:" typy and add the text myself inorder to have something to work with for this demo/dummy react website"
    },
    {
        id:3,
        icon:<SiOpenaigym/>,
        title:"value three",
        desc:" typy and add the text myself inorder to have something to work with for this demo/dummy react website"
    },
    
    
]
export const testimonial = [
    {
        id:1,
        name: "Lorem, ipsum dolor.",
        avatar:require("./images/avatar.jpg"),
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus placeat laborum debitis esse eligendi, facere unde harum nam aliquam dolore?"
    },
    {
        id:2,
        name: "Lorem, ipsum dolor.",
        avatar:require("./images/9.jpg"),
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus placeat laborum debitis esse eligendi, facere unde harum nam aliquam dolore?"
    },
    {
        id:3,
        name: ", ipsum dolor Lorem.",
        avatar:require("./images/A1.jpg"),
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus placeat laborum debitis esse eligendi, facere unde harum nam aliquam dolore?"
    },
    {
        id:4,
        name: "Loremipsum dolor.",
        avatar:require("./images/avatar2.jpg"),
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus placeat laborum debitis esse eligendi, facere unde harum nam aliquam dolore?"
    },
    {
        id:5,
        name: "Loum dolor.",
        avatar:require("./images/6.jpg"),
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus placeat laborum debitis esse eligendi, facere unde harum nam aliquam dolore?"
    },
    {
        id:6,
        name: "Lopsum dlor.",
        avatar:require("./images//CT2.jpg"),
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus placeat laborum debitis esse eligendi, facere unde harum nam aliquam dolore?"
    },
    {
        id:7,
        name: "ipsu dol.",
        avatar:require("./images/4.jpg"),
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus placeat laborum debitis esse eligendi, facere unde harum nam aliquam dolore?"
    },
    {
        id:8,
        name: "orem, dl r.",
        avatar:require("./images/F2.jpg"),
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus placeat laborum debitis esse eligendi, facere unde harum nam aliquam dolore?"
    }
]