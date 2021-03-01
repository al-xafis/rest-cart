import React, { useEffect } from 'react';

const Copyright = () => {

  useEffect(() => {
    const year = document.getElementById('year');
    year.textContent = new Date().getFullYear();
  }, []);

  return (
    <div className="copyright">
      Copyright <span id="year"></span> <span className="copyright--black">Zotac.</span>
    </div>
  )
};

export default Copyright;