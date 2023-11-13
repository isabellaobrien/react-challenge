import React from 'react';
import css from "./css/Sidebar.module.css";
function Sidebar() {
  return (
    <div className={css.sidebar}>
        <a href="#." target= "_blank">MyPhotos</a>
        <a href="#." target= "_blank">MyIllustrations</a>
        <a href="#." target= "_blank">MyPaintings</a>
    </div>
  )
}

export default Sidebar