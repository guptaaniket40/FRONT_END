import React from 'react'




 function Anav({title,name}) {
  return (
    <div>
       <div>
     {/* Header Start */}
<div className="container-fluid bg-breadcrumb">
  <div className="container text-center py-5" style={{maxWidth: 900}}>
    <h3 className="text-white display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s"> {title}</h3>
    <ol className="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
      <li className="breadcrumb-item"><a href="index.html">Home</a></li>
      <li className="breadcrumb-item"><a href="#">Pages</a></li>
      <li className="breadcrumb-item active text-primary">{name}</li>
    </ol>    
  </div>
</div>
{/* Header End */}

    </div>
    </div>
  )
}

export default Anav
