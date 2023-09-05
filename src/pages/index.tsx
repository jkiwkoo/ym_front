import Image from 'next/image';

const Home = () => {
  return (
    <>
      <div className="pt-[104px] pc:pt-[189px] w-full flex flex-col items-center">
        <div className="h-[110px] pc:h-[200px] flex flex-col items-center justify-center">
          <div className="text-[10px] pc:text-[14px]">인트로</div>
          <div className="text-[28px] pc:text-[50px]">병원장소개</div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative hidden pc:block w-[100vw] h-[52vw]">
            <Image
              src={`/images/MainPC.png`}
              fill
              alt="Main"
              quality={100}
              priority
            />
          </div>
          <div className="relative block pc:hidden w-[100vw] h-[215vw]">
            <Image
              src={`/images/Main.png`}
              fill
              alt="Main"
              quality={100}
              priority
            />
          </div>
        </div>
        <div>ㅣ</div>
        <div className="h-[110px] pc:h-[200px] flex flex-col items-center justify-center">
          <div className="text-[10px] pc:text-[14px]">미디어</div>
          <div className="text-[28px] pc:text-[50px]">온라인 · 방송</div>
        </div>
        <div className="w-[100vw] pc:w-[72.917vw] flex flex-col items-center">
          <div className="w-[100vw] pc:w-[72.917vw] h-[50px] pc:h-[77px] bg-ym-blue flex justify-center items-center">
            <div>매일경제</div>
            <div>어쩌고</div>
          </div>
          <div className="grid grid-cols-2 pc:grid-cols-4 mb-[30px] pc:mb-[70px]">
            <div className="relative w-[50vw] pc:w-[18.23vw] h-[39.95vw] pc:h-[18.583vw]">
              <Image
                src={`/images/TV1.png`}
                fill
                alt="TV"
                quality={100}
                priority
              />
            </div>
            <div className="relative w-[50vw] pc:w-[18.23vw] h-[39.95vw] pc:h-[18.583vw]">
              <Image
                src={`/images/TV2.png`}
                fill
                alt="TV"
                quality={100}
                priority
              />
            </div>
            <div className="relative w-[50vw] pc:w-[18.23vw] h-[39.95vw] pc:h-[18.583vw]">
              <Image
                src={`/images/TV3.png`}
                fill
                alt="TV"
                quality={100}
                priority
              />
            </div>
            <div className="relative w-[50vw] pc:w-[18.23vw] h-[39.95vw] pc:h-[18.583vw]">
              <Image
                src={`/images/TV4.png`}
                fill
                alt="TV"
                quality={100}
                priority
              />
            </div>
          </div>
          <div className="w-[100vw] pc:w-[72.917vw] h-[50px] pc:h-[77px] bg-ym-blue flex justify-center items-center">
            <div>매일경제</div>
            <div>어쩌고</div>
          </div>
          <div className="w-[100vw] pc:w-[72.917vw] h-[111.2vw] pc:h-[280px] bg-white flex justify-center items-center mb-[30px] pc:mb-[70px]">
            <div>사진</div>
            <div>어쩌고</div>
          </div>
          <div className="w-[100vw] pc:w-[72.917vw] h-[50px] pc:h-[77px] bg-ym-blue flex justify-center items-center">
            <div>매일경제</div>
            <div>어쩌고</div>
          </div>
          <div className="w-[100vw] pc:w-[72.917vw] h-[185.24vw] pc:h-[700px] bg-white flex justify-center items-center mb-[85px] pc:mb-[150px]">
            <div>사진</div>
            <div>어쩌고</div>
          </div>
        </div>
        <div className="w-full bg-ym-blue h-[1050px] pc:h-[1500px]"></div>
      </div>
    </>
  );
};

export default Home;
