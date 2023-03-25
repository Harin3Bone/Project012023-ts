import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGooglePlusG, faLinkedin } from "@fortawesome/free-brands-svg-icons";

//ref https://www.youtube.com/watch?v=zdA3qZNH1vc
//ref https://codepen.io/foxbeefly/pen/dyWbQgJ

function Footer() {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className='w-full mt-8 bg-[#121212] text-white'>
      <div className='flex justify-center flex-col items-center py-8'>
        <div className='md:w-1/2 lg:w-[34%] text-center mx-4 md:mx-0'>
          <h3 className='py-2 text-3xl'>Test e-commerce</h3>
          <p>
            project012023-ts was developed to study and understand the working process of e-commerce
            websites. without looking for implementation in the actual production system.
          </p>
        </div>
        <ul className='flex items-center justify-between mt-4 w-28'>
          <li>
            <a href='https://github.com/zombox0633' target={"_blank"} rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faGithub} size='xl' />
            </a>
          </li>
          <li>
            <div className='relative'>
              <button onClick={() => copyToClipboard("chayathorn.meesil@gmail.com")}>
                <FontAwesomeIcon icon={faGooglePlusG} size='xl' />
              </button>
              {copySuccess && (
                <div
                  className='absolute bottom-10 -right-4 px-3 py-2 rounded-2xl bg-blue-500
                after:absolute after:top-8 after:right-7 after:w-2.5 after:h-2.5 after:rotate-45 after:bg-blue-500'
                >
                  <span> Copied</span>
                </div>
              )}
            </div>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/chayathorn-meesil'
              target={"_blank"}
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faLinkedin} size='xl' />
            </a>
          </li>
        </ul>
      </div>
      <div className='flex justify-center items-center py-2 bg-black cursor-pointer select-none'>
        <p className='mr-4'>© 2023 zombox0633.</p>
        <p>All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
//rel ในคุณสมบัติของแท็ก <a> เป็นตัวย่อของคำว่า "relationship" หรือ "ความสัมพันธ์"  ใช้ในการระบุความสัมพันธ์ระหว่างหน้าปัจจุบันและหน้าที่ลิงก์นำไป
//rel="noopener noreferrer
//noopener คือ คุณสมบัตินี้ป้องกันการเข้าถึงหน้าต้นฉบับผ่าน window.opener จากหน้าที่เปิดในแท็บใหม่ นำไปสู่การป้องกันการโจมตีด้านความปลอดภัยที่เรียกว่า Tabnabbing โดยป้องกันหน้าที่เปิดใหม่จากการ
//noreferrer สามารถป้องกันปัญหาด้านความปลอดภัยและความเป็นส่วนตัวของผู้ใช้ ทำให้ไม่สามารถระบุได้ว่าผู้ใช้เข้าถึงหน้านั้นมาจากหน้าใด นอกจากนี้ การใช้ noreferrer ยังช่วยป้องกันการเปิดแท็บใหม่จากการเข้าถึง window.opener
