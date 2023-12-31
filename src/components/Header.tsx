import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const Header = () => {
  const router = useRouter();

  const [popupIsOpen, setPopupIsOpen] = useState(true);

  useEffect(() => {
    const escKeyModalClose = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setPopupIsOpen(false);
      }
    };
    window.addEventListener('keydown', escKeyModalClose);
    return () => window.removeEventListener('keydown', escKeyModalClose);
  }, []);

  return (
    <div className="fixed w-full z-50 text-ym-gray-2">
      <div className="h-[54px] pc:h-[100px] flex items-center justify-center bg-ym-blue">
        <div className="hidden pc:block">
          <Image
            className="hover:cursor-pointer"
            src={`/images/BannerPC.png`}
            width={336}
            height={48}
            alt="Banner"
            onClick={() => {
              router.push('/').then(() => {
                setPopupIsOpen(false);
              });
            }}
          />
        </div>
        <div className="block pc:hidden">
          <Image
            className="hover:cursor-pointer"
            src={`/images/Banner.png`}
            width={173}
            height={26}
            alt="Banner"
            onClick={() => {
              router.push('/').then(() => {
                setPopupIsOpen(false);
              });
            }}
          />
        </div>
      </div>
      <div className="h-[50px] pc:h-[89px] flex items-center justify-center bg-white border-b border-b-ym-border">
        <div className="flex justify-between w-[90vw] pc:mx-[25vw] gap-[10px] pc:gap-[3.125vw] pc:text-[20px] text-[14px]">
          <div
            className="group h-[50px] pc:h-[89px] pc:w-full flex flex-col items-center hover:cursor-pointer"
            onClick={() => {
              router.push('/').then(() => {
                setPopupIsOpen(false);
              });
            }}
          >
            <div
              className={`h-[50px] pc:h-[89px] flex items-center ${
                router.asPath === '/' ? 'text-black' : 'group-hover:text-black'
              }`}
            >
              병원 소개
            </div>
            <div
              className={`border ${
                router.asPath === '/'
                  ? 'border-black'
                  : 'group-hover:border-black border-transparent'
              } w-full pc:w-[115px]`}
            ></div>
          </div>
          <div
            className="group h-[50px] pc:h-[89px] pc:w-full flex flex-col items-center hover:cursor-pointer"
            onClick={() => {
              router.push('/prostate').then(() => {
                setPopupIsOpen(false);
              });
            }}
          >
            <div
              className={`h-[50px] pc:h-[89px] flex items-center ${
                router.asPath === '/prostate'
                  ? 'text-black'
                  : 'group-hover:text-black'
              }`}
            >
              전립선 치료
            </div>
            <div
              className={`border ${
                router.asPath === '/prostate'
                  ? 'border-black'
                  : 'group-hover:border-black border-transparent'
              } w-full pc:w-[115px]`}
            ></div>
          </div>
          {/* <div
            className="group h-[50px] pc:h-[89px] pc:w-full flex flex-col items-center hover:cursor-not-allowed"
            onClick={() => {
              // router.push('/thyroid');
            }}
          >
            <div
              className={`h-[50px] pc:h-[89px] flex items-center ${
                router.asPath === '/thyroid'
                  ? 'text-black'
                  : 'group-hover:text-black'
              }`}
            >
              갑상선 치료
            </div>
            <div
              className={`border ${
                router.asPath === '/thyroid'
                  ? 'border-black'
                  : 'group-hover:border-black border-transparent'
              } w-full pc:w-[115px]`}
            ></div>
          </div> */}
          <div
            className="group h-[50px] pc:h-[89px] pc:w-full flex flex-col items-center hover:cursor-pointer"
            onClick={() => {
              router.push('/directions').then(() => {
                setPopupIsOpen(false);
              });
            }}
          >
            <div
              className={`h-[50px] pc:h-[89px] flex items-center ${
                router.asPath === '/directions'
                  ? 'text-black'
                  : 'group-hover:text-black'
              }`}
            >
              오시는 길
            </div>
            <div
              className={`border ${
                router.asPath === '/directions'
                  ? 'border-black'
                  : 'group-hover:border-black border-transparent'
              } w-full pc:w-[115px]`}
            ></div>
          </div>
        </div>
      </div>
      <div
        className={`hidden ${
          popupIsOpen ? 'pc:block' : ''
        } mt-[70px] ml-[340px] w-[600px] h-[800px] z-30`}
      >
        <div
          className="absolute z-20 h-[46px] bottom-[43px] left-[380px] w-[204px] hover:cursor-pointer"
          onClick={() => {
            router.push('/prostate').then(() => {
              setPopupIsOpen(false);
            });
          }}
        ></div>
        <div
          className="absolute z-20 w-[23px] h-[23px] bottom-[760px] left-[900px] border hover:cursor-pointer flex items-center justify-center text-white"
          onClick={() => {
            setPopupIsOpen(false);
          }}
        >
          <Image src={'/images/Close.png'} width={17} height={17} alt="Close" />
        </div>
        <Image src={'/images/Popup.png'} width={600} height={800} alt="Popup" />
      </div>
    </div>
  );
};
