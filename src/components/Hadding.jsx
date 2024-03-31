import React from 'react'
// =======Single Color Span ======
// const Hadding = ({ text }) => {
//   let asif = text.replace("#", "<span class='one'>").replace("#", "</span>");

//   return <h1 dangerouslySetInnerHTML={{ __html: asif }}></h1>;
// };

// =======Single Color Span End======

// =======Multiple Color Span With Regex
function Hadding({ text }) {
    let pattern = /#([^#]+)#/g;
    let textWithSpans = text.replace(pattern,"<span class='one'>$1</span>");
    return <h1 dangerouslySetInnerHTML={{ __html: textWithSpans }} />;
}
export default Hadding;




// import { split } from 'postcss/lib/list';
// import React from 'react'

// const Hadding = ({className,text}) => {
  
// // console.log(text.split('#'));
// text.split(" ").map(itms=>{
//   if (itms.includes("#")){
//     let arr = itms.split("")
//     arr.shift()
//     arr.pop()
//     console.log(arr.join(""));
//   }
// })


//   return (
//    <h1 className={`${className}`}>{text}</h1>
//   )
// }

// export default Hadding
  
