import useKamera from "./useKamera";




function App() {

  const {vidyoRef, takepicture, imgs, setImg, download}=useKamera();

  function Hendl(){
    if (imgs) {
      setImg(null)
    }else {takepicture()}
  }


  return (
    <div>
      <div className="rasm">
       {imgs ? <img src={imgs} alt="" className="rs" /> :  <video ref={vidyoRef} className="ras"></video> }

        <div className="btn">
        <button className="bt1" onClick={Hendl}>{!imgs ? 'Rasmga olish': 'Ortga qaytish'}</button>
        {imgs ?         <button className="bt1" onClick={download}>Yuklash</button>: ''}
        </div>
      </div>
        <div className="hdn">
        <canvas id="cns"></canvas>
        </div>

    </div>
  )
}

export default App