import React from "react";
import LogoutButton from "../atoms/Button/LogoutButton";

// The function below displays the side navigation on wide screens.
function SidebarDashboard() {
  return (
    <div className=" fixed top-0 flex font-normal pb-28 pt-20  text-gray-400 text-sm w-56 p-4 justify-center">
        <ul className="font-campton">
            <li className=" absolute top-0 pt-24 text-[16px] font-semibold w-56 pl-11 p-4 text-blue-800 bg-gray-200">Menu</li>
            <li className="flex font-medium text-[18px] w-56 pl-11 p-4 bg-gray-200 gap-2 items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.5 10.9V4.1C21.5 2.6 20.86 2 19.27 2H15.23C13.64 2 13 2.6 13 4.1V10.9C13 12.4 13.64 13 15.23 13H19.27C20.86 13 21.5 12.4 21.5 10.9Z" fill="#A1A4B6"/>
              <path d="M11 13.1V19.9C11 21.4 10.36 22 8.77 22H4.73C3.14 22 2.5 21.4 2.5 19.9V13.1C2.5 11.6 3.14 11 4.73 11H8.77C10.36 11 11 11.6 11 13.1Z" fill="#A1A4B6"/>
              <path d="M21.5 19.9V17.1C21.5 15.6 20.86 15 19.27 15H15.23C13.64 15 13 15.6 13 17.1V19.9C13 21.4 13.64 22 15.23 22H19.27C20.86 22 21.5 21.4 21.5 19.9Z" fill="#A1A4B6"/>
              <path d="M11 6.9V4.1C11 2.6 10.36 2 8.77 2H4.73C3.14 2 2.5 2.6 2.5 4.1V6.9C2.5 8.4 3.14 9 4.73 9H8.77C10.36 9 11 8.4 11 6.9Z" fill="#A1A4B6"/>
            </svg>
            </li>
            <li className="flex font-medium text-[17px] w-56 pl-11 p-4 bg-gray-50 text-blue-700 gap-2 items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.5 10.9V4.1C21.5 2.6 20.86 2 19.27 2H15.23C13.64 2 13 2.6 13 4.1V10.9C13 12.4 13.64 13 15.23 13H19.27C20.86 13 21.5 12.4 21.5 10.9Z" fill="#3A4EC9"/>
                <path d="M11 13.1V19.9C11 21.4 10.36 22 8.77 22H4.73C3.14 22 2.5 21.4 2.5 19.9V13.1C2.5 11.6 3.14 11 4.73 11H8.77C10.36 11 11 11.6 11 13.1Z" fill="#3A4EC9"/>
                <path d="M21.5 19.9V17.1C21.5 15.6 20.86 15 19.27 15H15.23C13.64 15 13 15.6 13 17.1V19.9C13 21.4 13.64 22 15.23 22H19.27C20.86 22 21.5 21.4 21.5 19.9Z" fill="#3A4EC9"/>
                <path d="M11 6.9V4.1C11 2.6 10.36 2 8.77 2H4.73C3.14 2 2.5 2.6 2.5 4.1V6.9C2.5 8.4 3.14 9 4.73 9H8.77C10.36 9 11 8.4 11 6.9Z" fill="#3A4EC9"/>
              </svg>
              Dashboard
            </li>
            <li className="flex font-medium text-[17px] w-56 pl-11 p-4 bg-gray-200 gap-2 items-center">
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 10.015C0.5 4.74712 4.71 0 10.52 0C16.2 0 20.5 4.65699 20.5 9.98498C20.5 16.1642 15.46 20 10.5 20C8.86 20 7.04 19.5593 5.58 18.698C5.07 18.3876 4.64 18.1572 4.09 18.3375L2.07 18.9384C1.56 19.0986 1.1 18.698 1.25 18.1572L1.92 15.9139C2.03 15.6034 2.01 15.2729 1.85 15.0125C0.99 13.4301 0.5 11.6975 0.5 10.015ZM9.2 10.015C9.2 10.7261 9.77 11.2969 10.48 11.307C11.19 11.307 11.76 10.7261 11.76 10.025C11.76 9.31397 11.19 8.74311 10.48 8.74311C9.78 8.7331 9.2 9.31397 9.2 10.015ZM13.81 10.025C13.81 10.7261 14.38 11.307 15.09 11.307C15.8 11.307 16.37 10.7261 16.37 10.025C16.37 9.31397 15.8 8.74311 15.09 8.74311C14.38 8.74311 13.81 9.31397 13.81 10.025ZM5.87 11.307C5.17 11.307 4.59 10.7261 4.59 10.025C4.59 9.31397 5.16 8.74311 5.87 8.74311C6.58 8.74311 7.15 9.31397 7.15 10.025C7.15 10.7261 6.58 11.2969 5.87 11.307Z" fill="#A1A4B6"/>
            </svg>
              Messages
            </li>
            <li className="flex font-medium text-[17px] w-56 pl-11 p-4 bg-gray-200 gap-2 items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.1 6.94C20.1 7.48 19.81 7.97 19.35 8.22L17.61 9.16L16.13 9.95L13.06 11.61C12.73 11.79 12.37 11.88 12 11.88C11.63 11.88 11.27 11.79 10.94 11.61L4.65002 8.22C4.19002 7.97 3.90002 7.48 3.90002 6.94C3.90002 6.4 4.19002 5.91 4.65002 5.66L6.62002 4.6L8.19002 3.75L10.94 2.27C11.6 1.91 12.4 1.91 13.06 2.27L19.35 5.66C19.81 5.91 20.1 6.4 20.1 6.94Z" fill="#A1A4B6"/>
              <path d="M9.89997 12.7899L4.04997 9.8699C3.59997 9.6399 3.07997 9.6699 2.64997 9.9299C2.21997 10.1899 1.96997 10.6499 1.96997 11.1499V16.6799C1.96997 17.6399 2.49997 18.4999 3.35997 18.9299L9.20997 21.8499C9.40997 21.9499 9.62997 21.9999 9.84997 21.9999C10.11 21.9999 10.37 21.9299 10.6 21.7799C11.03 21.5199 11.28 21.0599 11.28 20.5599V15.0299C11.29 14.0799 10.76 13.2199 9.89997 12.7899Z" fill="#A1A4B6"/>
              <path d="M22.03 11.1499V16.6799C22.03 17.6299 21.5 18.4899 20.64 18.9199L14.79 21.8499C14.59 21.9499 14.37 21.9999 14.15 21.9999C13.89 21.9999 13.63 21.9299 13.39 21.7799C12.97 21.5199 12.71 21.0599 12.71 20.5599V15.0399C12.71 14.0799 13.24 13.2199 14.1 12.7899L16.25 11.7199L17.75 10.9699L19.95 9.86988C20.4 9.63988 20.92 9.65988 21.35 9.92988C21.77 10.1899 22.03 10.6499 22.03 11.1499Z" fill="#A1A4B6"/>
              <path d="M17.61 9.16L16.13 9.95L6.62 4.6L8.18999 3.75L17.37 8.93C17.47 8.99 17.55 9.07 17.61 9.16Z" fill="#A1A4B6"/>
              <path d="M17.75 10.97V13.24C17.75 13.65 17.41 13.99 17 13.99C16.59 13.99 16.25 13.65 16.25 13.24V11.72L17.75 10.97Z" fill="#A1A4B6"/>
            </svg>
              Products
            </li>
            <li className="flex font-medium text-[17px] w-56 p-4 pl-11 bg-gray-200 gap-2 items-center">
            <img src="/src/assets/icons/wishlist.png" alt="" />
              Wishlist
            </li>
            <li className="flex font-medium text-[17px] w-56 pl-11 p-4 bg-gray-200 gap-2 items-center">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="13" cy="13" r="12" fill="#A1A4B6" stroke="#A1A4B6" stroke-width="2"/>
              <path d="M13.567 15.048V14.668C13.567 12.312 17.139 12.198 17.139 9.291C17.139 7.125 15.6 6.08 13.168 6.08C10.318 6.08 8.361 7.828 8.608 10.241L10.413 11.533C10.128 9.215 11.325 8.113 13.016 8.113C14.27 8.113 14.84 8.664 14.84 9.5C14.84 11.419 11.553 11.609 11.553 14.497V15.048H13.567ZM13.757 19V16.302H11.325V19H13.757Z" fill="#FAFAFB"/>
            </svg>
              Help & Support
            </li>
            <li className=""><LogoutButton /></li>
        </ul>
    </div>
  )
}

export default SidebarDashboard;