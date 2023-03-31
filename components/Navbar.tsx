import Image from 'next/image';
import logo from '../public/logo.svg';
import styles from '../styles/Turtlelang.module.css';
import translate from '../lib/translate.js';

async function sendCode() {
  var textarea = document.getElementById("codearea") as HTMLTextAreaElement;
  var content = textarea?.value;
  content = content.replace(/\n/g, "");
  console.log(content);
  try {
    const response = await fetch('/api/compile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(content)
    });
    const data = await response.json();
    translate();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export default function Navbar() {

  return (
    <div>
      <div className='flex flex-row ml-[4vw] mt-4 items-center gap-[0.5vw]'>
        <Image src={logo} alt="Logo" width={100} height={100} />
        <div className='font-primary text-white/80 text-[1.5vw] tracking-[2vw]'>TURTLE LANG</div>
      </div>
      <div className='mt-[10vh] font-primary text-white/80 text-[1.5vw] tracking-[0.2vw] mx-auto'>Cette plateforme est destinée à ceux qui débute la programmation et veulent s'initier aux concepts de bases de manière interactives. Le language tortue (TurtleLang) en est le moyen !</div>
      <div className='mt-[7vh] grid grid-cols-2'>
        <div className='flex flex-col gap-[2vh] items-center justify-center w-[50vw] h-[58.3vh] border-t-2 border-r-2 border-white/50'>
          <div className='grid grid-cols-3 w-[100%] justify-center items-center'>
            <div></div>
            <div className='font-primary text-white/80 text-[1.2vw] tracking-[1.5vw] text-right'>CODE</div>
            <button className={styles.run_button} onClick={sendCode}>RUN</button>
          </div>
          <textarea id='codearea' className={styles.code_box}>
          </textarea>
        </div>
        <div className='flex flex-col gap-[2vh] items-center justify-center w-[50vw] h-[58.3vh] border-t-2 border-l-2 border-white/50'>
          <div className='font-primary text-white/80 text-[1.2vw] tracking-[1.5vw]'>CANVAS</div>
          <canvas id="canva" width="500" height="500" className={styles.canvas_box}>
          </canvas>
        </div>
      </div>
    </div>
  )
}
