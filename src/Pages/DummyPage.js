import React from 'react';
import ProfileEdit from '../components/ProfileComponents/Profile';
import DetailCard from '../components/ProfileComponents/DetailCard';
import LinkCard from '../components/ProfileComponents/LinkCard';
import ChatCrad from '../components/Chat/ChatCrad';
import ColoredCard from '../components/Common/ColoredCard';
import FeedCard from '../components/Home/FeedCard';
import PackageCard from '../components/Store/PackageCard';
import Selectdate from '../components/date/Selectdate';

export default function DummyPage() {
  return (
    <>
    
    <div className="box m-2" style={{width:"95%"}}>

   <ProfileEdit  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgRaiDIE1jEHrWg-y50UELzoiISog-vKfjbw&usqp=CAU"/>
    
    <DetailCard label="Gender" value="Female" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThS3ER3aKSP3Hb2IsbxPWQmgSsHNlIhqKm7g&usqp=CAU"/>
    <DetailCard label="Date of birth" value="12-12-1998" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThS3ER3aKSP3Hb2IsbxPWQmgSsHNlIhqKm7g&usqp=CAU"/>
    <DetailCard label="Nationality" value="Indian" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThS3ER3aKSP3Hb2IsbxPWQmgSsHNlIhqKm7g&usqp=CAU"/>
    <DetailCard label="Timezone" value="(GMT+5:30) Chennai, Kolkata, Mumbai, New Delhi" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThS3ER3aKSP3Hb2IsbxPWQmgSsHNlIhqKm7g&usqp=CAU"/>
    <LinkCard label="Preference" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThS3ER3aKSP3Hb2IsbxPWQmgSsHNlIhqKm7g&usqp=CAU"/>
    <LinkCard label="QR Code" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThS3ER3aKSP3Hb2IsbxPWQmgSsHNlIhqKm7g&usqp=CAU"/>
    
    <ChatCrad heading="Janet Fowler" subHeading="I’m going to San Francisco ..." time="16:15" unReadText="2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xdxVILjN9aYnozgR6l5Y3eF6DWxi0Z_l0w&usqp=CAU"/>
    <ChatCrad heading="Janet Fowler" subHeading="I’m going to San Francisco ..." time="16:15" unReadText="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xdxVILjN9aYnozgR6l5Y3eF6DWxi0Z_l0w&usqp=CAU"/>
    
    <div className="row text-center">
        <div className="col-3 p-1"><ColoredCard value="40" text="Calories"/></div>
        <div className="col-3 p-1"><ColoredCard value="0.19g" text="Fat"/></div>
        <div className="col-3 p-1"><ColoredCard value="40" text="Carbs"/></div>
        <div className="col-3 p-1"><ColoredCard value="1.91g" text="Protein"/></div>
      
    </div>
   
    <FeedCard heading="Jack" subHeading="image posted on 31 mar" story="A trusted approach to losing weight and a healthy lifestyle. Understanding the basics" storyHeading="Revive Health Package" likes="247 Highfive" comments="5 Comment" UserImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xdxVILjN9aYnozgR6l5Y3eF6DWxi0Z_l0w&usqp=CAU" feedImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6O0W2cft7YL6MyazvHkPCns7Ry85gw1gjew&usqp=CAU"/>
   <div className=''>

    <PackageCard label="Johnny Depp" body="10 Packages" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6O0W2cft7YL6MyazvHkPCns7Ry85gw1gjew&usqp=CAU"/>
   </div>
    </div>

    <div className="row">
      <div className="col-2 "> <Selectdate/></div>
      <div className="col-2 "> <Selectdate/></div>
      <div className="col-2 "> <Selectdate/></div>
      <div className="col-2 "> <Selectdate/></div>
      <div className="col-2 "> <Selectdate/></div>
      <div className="col-2 "> <Selectdate/></div>
     
    </div>
   
    </>
  )
}
