import { GiRolledCloth, GiClothes, GiClothespin } from "react-icons/gi";
import wrokImage1 from "../assets/work1.jpeg";
import wrokImage2 from "../assets/work2.jpeg";
import wrokImage3 from "../assets/work3.jpeg";
import year2014 from "../assets/year2014.jpeg";
import year2015 from "../assets/year2015.jpeg";
import year2016 from "../assets/year2016.jpeg";
import store1 from "../assets/store1.jpeg"
import store2 from "../assets/stroe2.jpeg"
import store3 from "../assets/store3.jpeg"

export const links = [
    {
        id: 1,
        text: "home",
        url: "/",
    },
    {
        id: 2,
        text: "about",
        url: "/about",
    },
    {
        id: 3,
        text: "shop",
        url: "/shop",
    },
    {
        id: 4,
        text: "contact",
        url: "/contact",
    },
];

export const services = [
    {
        id: 1,
        icon: <GiRolledCloth />,
        title: "Pattern",
        text: "Lorem ipsum, dolor sit ame",
        src: wrokImage1,
    },
    {
        id: 2,
        icon: <GiClothes />,
        title: "Fabric",
        text: "Lorem ipsum, dolor sit amet ",
        src: wrokImage2,
    },
    {
        id: 3,
        icon: <GiClothespin />,
        title: "Design",
        text: "Lorem ipsum, dolor sit amet ",
        src: wrokImage3,
    },
];

export const years = [
  { id: 3, name: 2016, text: "2016 best cut", image: year2016 },
  { id: 2, name: 2015, text: "2015 best cut", image: year2015 },
  { id: 1, name: 2014, text: "2014 best cut", image: year2014 },
];
export const storesData = [
    {id:1,name:"동대문 매장",text:"contact 010-1231-1232",image:store1},
    {id:2,name:"잠실 매장",text:"contact 010-1231-1232",image:store2},
    {id:3,name:"인천 매장",text:"contact 010-1231-1232",image:store3},
]