

export const Preloader = ()=>{
  
  const removePreloader = ()=>{
    const preloader = document.querySelector('#preloader');
    if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
    }
  }
  
    return(
        <div id="preloader" onLoad={removePreloader}></div>
    )
}