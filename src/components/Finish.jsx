import React from "react";
import thankYou from '/assets/images/icon-thank-you.svg';

function Finish({className}) {
  return (
    <div className={`flex flex-col items-center justify-center text-center py-10 ${className} xl:w-[521px] xl:h-full`}>
      
      <div className=" bg-gray-200 rounded-full mb-6 flex items-center justify-center">
        <img src={thankYou}/>
      </div>

      <h2 className="text-2xl font-bold title">Thank you!</h2>
      <p className=" mb-6 font-medium text-lg info">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at:
        {" "}
        <a href="mailto:support@loremgaming.com" className="text-blue-600 hover:underline">
          support@loremgaming.com
        </a>.
      </p>
    </div>
  );
}

export default Finish;