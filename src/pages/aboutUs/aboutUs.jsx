import React from 'react';
import Topbar from '../../components/topbar/topbar';
import "./aboutUs.css";
import pic from "/Users/inishbashyal/Documents/FitBit_web/frontend/fitbit/src/assets/images/logo.png";

export default function AboutUs() {
  return (
    <>
    <Topbar />
    <div className='aboutUsContainer'>
          <div className='topSection'>
              About FitBit

          </div>
          <div className='bottomSection'>
              <div className='bottomLeft'>
                  <p>Welcome to FitBit - the ultimate fitness app designed to help you achieve your health and wellness goals. Our mission is to empower people to live healthier, more active lifestyles by providing innovative and easy-to-use tools that inspire and motivate.
                      <br />
                      <br />
                      At FitBit, we value health, wellness, and community. We believe that everyone should have access to the resources they need to live their best life, and we are committed to providing those resources through our app. Our team is made up of experienced fitness professionals who are passionate about helping people achieve their goals.
                      <br />
                      <br />
                      Our app offers a variety of features that can help you track your progress, stay motivated, and connect with other like-minded individuals. You can also set personalized goals and receive notifications when you reach them. Our app also includes resources like workout plans, healthy recipes, and expert advice to help you stay on track.
                      <br />
                      <br />
                      If you have any queries or feedback, we would love to hear from you. You can reach us by email at [insert email address] or connect with us on social media. Thank you for choosing FitBit - we can't wait to help you on your fitness journey!</p>
              </div>
              <div className='bottomRight'>
                  <img src={pic} alt='' />
              </div>

          </div>

      </div></>
  )
}
