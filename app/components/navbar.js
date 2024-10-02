"use client"

import React from "react";
import { useState,useEffect } from "react";
import {
  Typography,
} from "@material-tailwind/react";


    export function Navbar() {
      
    
      return (
        <>
        <div className="border-0 flex sticky top-0 z-50">
        <div className="full flex items-start justify-start bg-black opacity-80">
        <Typography  className="text-lg font-bold ml-8 text-white">
        My Web Portofolio
        </Typography>
        
        <div className="hidden items-center gap-2 lg:flex">
        
        </div>
        
        </div>
        </div>
        </>
      );
    }
    
    export default Navbar;