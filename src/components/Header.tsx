import Image from 'next/image';
import { useRouter } from 'next/router';

export const Header = () => {
  const router = useRouter();

  return (
    <div className="fixed w-full z-50">
      <div className="h-[54px] pc:h-[100px] flex items-center justify-center bg-ym-blue">
        <div className="absolute invisible pc:visible">
          <Image
            className="hover:cursor-pointer"
            src={`/images/BannerPC.png`}
            width={336}
            height={48}
            alt="Banner"
            onClick={() => {
              router.push('/');
            }}
          />
        </div>
        <div className="absolute visible pc:invisible">
          <Image
            className="hover:cursor-pointer"
            src={`/images/Banner.png`}
            width={173}
            height={26}
            alt="Banner"
            onClick={() => {
              router.push('/');
            }}
          />
        </div>
      </div>
      <div className="h-[50px] pc:h-[89px] flex items-center justify-center bg-white border-b border-b-ym-border">
        <div className="flex justify-between w-[90vw] pc:w-[50vw] gap-[10px] pc:gap-[3.125vw] pc:text-[20px] text-[14px]">
          <div className="group h-[50px] pc:h-[89px] pc:w-full flex flex-col items-center hover:cursor-pointer">
            <div className="h-[50px] pc:h-[89px] flex items-center">
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
          <div className="group h-[50px] pc:h-[89px] pc:w-full flex flex-col items-center hover:cursor-pointer">
            <div className="h-[50px] pc:h-[89px] flex items-center">
              전립선 치료
            </div>
            <div
              className={`border ${
                router.asPath === '/c'
                  ? 'border-black'
                  : 'group-hover:border-black border-transparent'
              } w-full pc:w-[115px]`}
            ></div>
          </div>
          <div className="group h-[50px] pc:h-[89px] pc:w-full flex flex-col items-center hover:cursor-pointer">
            <div className="h-[50px] pc:h-[89px] flex items-center">
              갑상선 치료
            </div>
            <div
              className={`border ${
                router.asPath === '/c'
                  ? 'border-black'
                  : 'group-hover:border-black border-transparent'
              } w-full pc:w-[115px]`}
            ></div>
          </div>
          <div className="group h-[50px] pc:h-[89px] pc:w-full flex flex-col items-center hover:cursor-pointer">
            <div className="h-[50px] pc:h-[89px] flex items-center">
              오시는 길
            </div>
            <div
              className={`border ${
                router.asPath === '/c'
                  ? 'border-black'
                  : 'group-hover:border-black border-transparent'
              } w-full pc:w-[115px]`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
