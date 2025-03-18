import { IoIosBusiness } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { IoMail } from "react-icons/io5";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

import { MdScreenSearchDesktop } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { MdDesignServices } from "react-icons/md";
import { TbSeo } from "react-icons/tb";

export const navLinks = [{
    title: 'Notre Agence',
    icon: React.createElement(IoIosBusiness, null),
    url: '/notre-societe'
    }, {
    title: 'Nos Services',
    icon: React.createElement(FaClipboardList,{size:"12"}, null),
    url: '/nos-services'
    
    }, {
    title: 'Formation',
    icon:   React.createElement(FaGraduationCap, null),
    url: '/formations'
    }, {
    title: 'Nos Réussites',
    icon: React.createElement(GrProjects,{size:"11"}, null),
    url: '/nos-reussites'
    }, {
    title: 'Contact',
    icon: React.createElement(IoMail, null),
    url: '/contact'
}]

export const serviceList = [{
    icon: React.createElement(FaChalkboardTeacher, null),
    title: "Formation & conseil",
    url: '/formations',
    description: "Nous vous conseillons pour optimiser vos site Internet, vos applications Web ou Mobile. Nous auditons votre site actuel pour améliorer le référencement SEO. Nous apportons également tous les conseils nécéssaires pour votre communication (identité graphique, site, application Web)."
},{
    icon: React.createElement(TbSeo, null),
    title: "Référencement Web",
    url: '/nos-services',
    description: "Le référencement naturel (SEO) est un vrai challenge. C'est aussi une des clés essentielles à la réussite économique d'un projet web."
},{
    icon: React.createElement(TbDeviceDesktopCode, null),
    title: "Création Site Internet",
    url: '/nos-services',
    description: "Création ou refonte de site, On réunit tous les atouts pour donner à votre entreprise une image en adéquation avec vos ambitions et pour en améliorer les performances."
},{
    icon: React.createElement(MdDesignServices, null),
    title: "Création Graphique",
    url: '/nos-services',
    description: "La corrélation indéniable entre le design fonctionnel et la réussite commerciale. Le but d’une conception graphique est d’abord de communiquer le message du client."
}
]


export const clientList = [{
    name: 'Aymane bachar',
    job: 'Developer',
    company: 'Google',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    image: '/client1.jpg'
},{
    name: 'Ahmed magdi',
    job: 'Designer',
    company: 'Facebook',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    image: '/client2.jpg'
},{
    name: 'John Smith',
    job: 'CEO',
    company: 'Amazon',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    image: '/client3.jpeg'
},{
    name: 'Jef bezos',
    job: 'Founder',
    company: 'Microsoft',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    image: '/client1.jpg'
}]

export const socialLinks=[
    {
        icon:React.createElement(FaFacebookSquare,null),
        url:"/"
    },
    {
        icon:React.createElement(FaSquareInstagram,null),
        url:"/"
    },
    {
        icon:React.createElement(FaLinkedin,null),
        url:"/"
    },
]

export const footerServicesList =[
    {
        title:"Création de Site Web Marrakech",
        url:"/nos-services"

    },
    {
        title:"Référéencement Web SEO Marrakech",
        url:"/nos-services"

    },
    {
        title:"Développement sur Mesure",
        url:"/nos-services"

    },
    {
        title:"Animation des Réseaux Sociaux",
        url:"/nos-services"

    },
    {
        title:"Création Graphique",
        url:"/nos-services"

    },
    {
        title:"Conseil et Formation",
        url:"/formations"

    },
    {
        title:"Création Site Web Tourisme Marrakech",
        url:"/nos-services"

    },
    {
        title:"Développement web Marrakech",
        url:"/nos-services"

    },
    {
        title:"Hébergement web Marrakech Marralech",
        url:"/nos-services"

    },
    {
        title:"Développement mobile Marrakech",
        url:"/nos-services"

    },
    {
        title:"Création de Site Internet Ecommerce",
        url:"/nos-services"

    },
    {
        title:"création des sites vitrines Marrakech",
        url:"/nos-services"

    },
    {
        title:"Création site WordPress MARRAKECH",
        url:"/nos-services"

    },
    {
        title:"Création Applications Mobile Marrakech",
        url:"/nos-services"

    },
    {
        title:"Ads marrakech",
        url:"/nos-services"

    }
]