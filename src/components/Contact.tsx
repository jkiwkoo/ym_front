import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

export const Contact = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed z-50 pc:w-[140px] pc:h-[390px] bg-transparent pc:bg-white flex flex-col items-center justify-between bottom-[25px] pc:bottom-[70px] right-[25px] pc:right-[100px] text-[16px] text-ym-gray-2 font-apple">
      <div className={`${isOpen ? 'block' : 'hidden pc:block'}`}>
        <div className="flex flex-col items-center justify-center h-[40px] pc:h-[130px] w-[40px] pc:w-[140px] pc:border pc:border-ym-gray-4 mb-[10px] pc:mb-0">
          <div
            className="w-[40px] pc:w-[57px] h-[40px] pc:h-[57px] rounded-full overflow-hidden bg-ym-gray-2 flex items-center justify-center pc:mb-[12px] hover:cursor-pointer"
            onClick={() => {
              router.push('/').then(() => {
                window.scrollTo(0, 300000);
              });
            }}
          >
            <Image
              className="hidden pc:block"
              src={'/images/Online.png'}
              width={38}
              height={28}
              alt="Online"
            />
            <Image
              className="block pc:hidden"
              src={'/images/Online.png'}
              width={23}
              height={17}
              alt="Online"
            />
          </div>
          <div className="hidden pc:block">온라인 상담</div>
        </div>
        <div className="flex flex-col items-center justify-center h-[40px] pc:h-[130px] w-[40px] pc:w-[140px] pc:border-x pc:border-ym-gray-4 mb-[10px] pc:mb-0">
          <div
            className="w-[40px] pc:w-[57px] h-[40px] pc:h-[57px] rounded-full overflow-hidden bg-ym-yellow flex items-center justify-center pc:mb-[12px] hover:cursor-pointer"
            onClick={() => {
              window.open('https://open.kakao.com/o/srL8BUFf');
            }}
          >
            <Image
              className="hidden pc:block"
              src={'/images/Kakao.png'}
              width={27}
              height={25}
              alt="Kakao"
            />
            <Image
              className="block pc:hidden"
              src={'/images/Kakao.png'}
              width={19}
              height={18}
              alt="Kakao"
            />
          </div>
          <div className="hidden pc:block">카카오 상담</div>
        </div>
        <div className="flex flex-col items-center justify-center h-[40px] pc:h-[130px] w-[40px] pc:w-[140px] pc:border pc:border-ym-gray-4 mb-[10px] pc:mb-0">
          <div
            className="w-[40px] pc:w-[57px] h-[40px] pc:h-[57px] rounded-full overflow-hidden bg-ym-blue-3 pc:bg-ym-blue-5 flex items-center justify-center pc:mb-[11px] hover:cursor-pointer"
            onClick={() => {
              console.log('TODO');
            }}
          >
            <Image
              className="hidden pc:block"
              src={'/images/Call.png'}
              width={27}
              height={27}
              alt="Call"
            />
            <Image
              className="block pc:hidden"
              src={'/images/Call.png'}
              width={18}
              height={18}
              alt="Call"
            />
          </div>
          <div className="hidden pc:block">상담전화</div>
          <div className="text-[12px] text-ym-blue-5 hidden pc:block">
            010-5883-0348
          </div>
        </div>
      </div>
      <div
        className={`w-[40px] h-[40px] rounded-full ${
          isOpen ? 'bg-ym-blue-3' : 'bg-ym-blue-6'
        } flex items-center justify-center pc:hidden`}
        onClick={() => {
          toggle();
        }}
      >
        +
      </div>
    </div>
  );
};
