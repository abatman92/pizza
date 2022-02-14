import React from "react"
import ContentLoader from "react-content-loader"

const PizzaLoader = (props) => (
  <ContentLoader 
    rtl
    speed={2}
    width={280}
    height={459}
    viewBox="0 0 280 459"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="10" y="275" rx="0" ry="0" width="230" height="24" /> 
    <circle cx="140" cy="131" r="120" /> 
    <rect x="0" y="320" rx="0" ry="0" width="270" height="85" /> 
    <rect x="171" y="414" rx="0" ry="0" width="93" height="40" /> 
    <rect x="7" y="414" rx="0" ry="0" width="142" height="39" />
  </ContentLoader>
)

export default PizzaLoader