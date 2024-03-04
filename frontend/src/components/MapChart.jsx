import React from "react";
import { LiaMapPinSolid } from "react-icons/lia";
import { TbHandMove } from "react-icons/tb";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const markers = [ 
    {x:-16,y:20, markerOffset: -30,name: "INDIA",coordinates: [78.9629, 20.5937], color:"" },
    {x:-90,y:-20, markerOffset: 15, name: "SOUTH AFRICA", coordinates: [22.9375, 30.5595], color:"" },
    {x:10,y:120, markerOffset: 15, name: "UGANDA", coordinates: [32.2903, 1.3733], color:"" },
    {x:10,y:60, markerOffset: 15, name: "BANGLADESH", coordinates: [90.3563,23.6850], color:"" },
    {x:-40,y:10, markerOffset: 15, name: "GHANA", coordinates: [1.0232, 7.9465], color:"" },
    {x:80,y:30, markerOffset: 300, name: "KENYA", coordinates: [37.9062, 0.0236], color:"" },
    {x:-60,y:20, markerOffset: -30, name: "RWANDA", coordinates: [29.8739,1.9403] , color:""}    
  ];
  

const MapChart = () => {
  return (
    <div className="mt-16 py-12 text-center text-base flex flex-col item-center justify-center w-full relative lg:px-24">  
        <h1 className=' font-[InstrumentSerif] text-center text-4xl md:text-5xl m-0 py-8 font-bold uppercase text-[#00261e]'> 
                Our Reach
        </h1>     
        
        <ComposableMap className=" relative  p-2 border-2 border-green-500 rounded-xl h-[50vh] md:h-[60vh]" projection="geoMercator">
            <ZoomableGroup center={[65, 20]} zoom={2}>                
                <Geographies geography="/features.json"
                    fill="#005946"
                    stroke="#FFFFFF"
                    strokeWidth={0.2}>
                    {({ geographies }) =>
                    geographies.map((geo) => (
                        
                        <Geography key={geo.rsmKey} geography={geo}
                        // fill="#06F"
                        // stroke="#FFF"
                        // strokeWidth={2}
                        />
                    ))
                    }
                </Geographies>
                
                {/* { markers.map(({ name, coordinates, markerOffset }) => (
                    <Marker key={name} coordinates={coordinates}>
                        <g
                            fill="none"
                            stroke="#FF5533"
                            strokeWidth=".68"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            transform=" translate(-12, -24)"
                        >
                            <circle cx="12" cy="10" r="3" />
                            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                        </g> 
                                                  
                        <text 
                            textAnchor="middle"
                            y={markerOffset}
                            style={{ fontFamily: "system-ui", fill: "#FF5533" }}
                        >
                            {name}
                        </text>
                    </Marker> 
                ))} */}


                { markers.map(({ name,coordinates,x,y }) => (
                    
                    <Annotation key={name}
                        subject={coordinates}
                        dx={x}
                        dy={y}
                        connectorProps={{
                            stroke: "#FF5533" ,
                            strokeWidth: 1,
                            strokeLinecap: "round"
                        }}
                    >
                        {/* <LiaMapPinSolid/ > */}
                        <text x="0" y="4" textAnchor="end" alignmentBaseline="middle" fill="#F53">
                        {name}
                        </text>
                    </Annotation>
                    
                ))}
               
      
        </ZoomableGroup>
      </ComposableMap>
        <div className="right-2 bottom-14 md:right-[7rem] md:bottom-[4rem] absolute border-green-950 border-2 rounded-xl hover:bg-green-950 z-10">
                <TbHandMove className="p-1 md:p-2 text-green-950 hover:text-[#02da3f] h-8 w-8 md:h-14 md:w-14"/></div>
        </div>
    
  );
};

export default MapChart;
