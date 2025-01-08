import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="display flex-wrap justify-between gap-5">
        <p>KOhalpur-6, Shivanagar, Nepal</p>
        <p>+977984235852</p>
        <p>
          <a className="no-underline decoration-white text-base transition-colors hover:bg-sky-700">
            info@tourTravel.com.np
          </a>
        </p>
      </div>

      <div className="border-y-4 my-5 py-3 flex justify-between items-center flex-wrap text-xs hover:bg-orange-500">
        <p className="bg-black hover:bg-orange-400">
          {" "}
          2025 Tour Management. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
