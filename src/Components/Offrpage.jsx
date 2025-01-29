import React, { useState } from "react";
import { Data } from "../data/Data"; 
import GiftVoucher from "./Voucher";
import ReactDOM from "react-dom/client";

const CategoryDisplay = () => {
   const [expandedCategories, setExpandedCategories] = useState({});

   const toggleCategory = (category) => {
     setExpandedCategories((prev) => ({
       ...prev,
       [category]: !prev[category],
     }));
   };
     const handlePrint = () => {
   
       // Open the Invoice component in a new tab
       const newTab = window.open("", "_blank");
   
       // Use `createRoot` instead of `render`
       const root = ReactDOM.createRoot(newTab.document.body);  // Create root
       root.render(
         <GiftVoucher />
       );
   
       // Wait for the new tab to load, then trigger the print for the invoice
       newTab.onload = () => {
         // Now, in the new tab, we only print the invoice
         newTab.print();
         // Close the new tab after printing to avoid keeping an empty tab open
         newTab.close();
       };
     }

   return (
     <div style={{ padding: "20px" }}>
       <h1>OFFERS</h1>
       {Object.entries(Data).map(([categoryName, items]) => (
         <div key={categoryName} style={{ marginBottom: "40px" }}>
           <h2 style={{ textTransform: "capitalize", marginBottom: "20px" }}>
             {categoryName}
           </h2>

           <div
             style={{
               display: "grid",
               gridTemplateColumns: "repeat(4, 1fr)",
               gap: "20px",
               marginBottom: "20px",
             }}
           >
             {(expandedCategories[categoryName]
               ? items
               : items.slice(0, 4)
             ).map((item) => (
               <div
                 key={item.id}
                 style={{
                   border: "1px solid #ddd",
                   borderRadius: "8px",
                   overflow: "hidden",
                   transition: "transform 0.2s",
                   ":hover": { transform: "translateY(-5px)" },
                 }}
               >
                 <img
                   src={item.image[0]}
                   alt={item.title}
                   style={{
                     width: "100%",
                     height: "200px",
                     objectFit: "cover",
                   }}
                 />
                 <div style={{ padding: "15px" }}>
                   <h3 style={{ margin: "0 0 10px 0" }}>{item.title}</h3>
                   <button
                     style={{
                       padding: "8px 16px",
                       backgroundColor: "#007bff",
                       color: "white",
                       border: "none",
                       borderRadius: "4px",
                       cursor: "pointer",
                     }}
                     onClick={handlePrint}
                   >
                     View Offer
                   </button>
                 </div>
               </div>
             ))}
           </div>

           {items.length > 4 && (
             <button
               onClick={() => toggleCategory(categoryName)}
               style={{
                 display: "block",
                 margin: "0 auto",
                 padding: "10px 20px",
                 backgroundColor: "#28a745",
                 color: "white",
                 border: "none",
                 borderRadius: "4px",
                 cursor: "pointer",
               }}
             >
               {expandedCategories[categoryName] ? "See Less" : "See More"}
             </button>
           )}
         </div>
       ))}
     </div>
   );
};

export default CategoryDisplay;
