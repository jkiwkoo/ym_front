import Image from 'next/image';

const Directions = () => {
  return (
    <>
      <div className="pt-[104px] pc:pt-[189px] w-full flex flex-col items-center font-notoSans text-black">
        <div className="h-[110px] pc:h-[200px] flex flex-col items-center justify-center">
          <div className="text-[10px] pc:text-[14px] text-ym-gray tracking-[6px]">
            DIRECTIONS
          </div>
          <div className="text-[28px] pc:text-[50px] text-ym-blue-2 font-semibold">
            오시는 길
          </div>
        </div>
        <div className="text-[16px] pc:text-[24px] text-black font-semibold mb-[13px] pc:mb-[72px]">
          서울 강남구 테헤란로 121 원빌딩 6F
        </div>
        <div className="relative w-[94.14vw] pc:w-[66.67vw] h-[42.8vw] pc:h-[32.4vw] mb-[30px] pc:mb-[72px]">
          <Image
            className="block pc:hidden"
            src={`/images/Map.png`}
            fill
            alt="Map"
            quality={100}
            priority
          />
          <Image
            className="hidden pc:block"
            src={`/images/Map.png`}
            fill
            alt="Map"
            quality={100}
            priority
          />
        </div>
        <div className="flex flex-col pc:flex-row justify-center items-center pc:items-start gap-[13px] pc:gap-0 mb-[40px]">
          <div className="flex justify-center pc:justify-start w-[220px] text-[16px] pc:text-[20px] font-bold">
            지하철 이용 시
          </div>
          <div className="flex justify-start pc:w-[30.2vw] mx-[36px] text-[12px] pc:text-[20px]">
            <div>
              <span className="font-bold text-ym-green-2">2호선, </span>
              <span className="font-bold text-ym-red">신분당선 </span>
              <span>강남역 12번 출구로 나와서 200m 직진(도보 3분 거리)</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col pc:flex-row justify-center items-center pc:items-start gap-[13px] pc:gap-0 mb-[40px]">
          <div className="flex justify-center pc:justify-start w-[220px] text-[16px] pc:text-[20px] font-bold">
            자가용 이용 시
          </div>
          <div className="flex justify-start pc:w-[30.2vw] mx-[36px] text-[12px] pc:text-[20px]">
            테헤란로를 따라사 들어오시다가 국기원입구에서 우회전으로 들어가서
            원빌딩(오피스디포 건물) 주차장 입구로 오시면 됩니다.
          </div>
        </div>
        <div className="flex flex-col pc:flex-row justify-center items-center pc:items-start gap-[13px] pc:gap-0 mb-[40px] w-full">
          <div className="flex justify-center pc:justify-start w-[220px] text-[16px] pc:text-[20px] font-bold">
            버스 이용 시
          </div>
          <div className="flex justify-start pc:w-[30.2vw] mx-[36px] text-[12px] pc:text-[20px]">
            <div className="flex flex-col gap-[17px] pc:gap-[24px] w-full items-start">
              <div className="flex flex-col pc:flex-row items-start justify-start pc:mx-0">
                <div className="mb-[7px] pc:mb-0 pc:mr-[20px] w-[40px] text-ym-blue-4">
                  간선
                </div>
                <div>
                  <div className="flex items-start justify-start pc:w-[30.2vw]">
                    <div className="w-[50px] pc:w-[70px] text-ym-blue-4">
                      N13
                    </div>
                    <div className="">
                      신논현역, 구교보타워사거리 - 강남역 12번 출구 - 역삼역
                    </div>
                  </div>
                  <div className="flex items-start justify-start pc:w-[30.2vw]">
                    <div className="w-[50px] pc:w-[70px] text-ym-blue-4">
                      N61
                    </div>
                    <div className="">
                      강남역, 강남역사거리 - 강남역 12번 출구 - 역삼역
                    </div>
                  </div>
                  <div className="flex items-start justify-start pc:w-[30.2vw]">
                    <div className="w-[50px] pc:w-[70px] text-ym-blue-4">
                      146
                    </div>
                    <div className="">
                      강남역, 강남역사거리 - 강남역 12번 출구 - 역삼역
                    </div>
                  </div>
                  <div className="flex items-start justify-start pc:w-[30.2vw]">
                    <div className="w-[50px] pc:w-[70px] text-ym-blue-4">
                      740
                    </div>
                    <div className="">
                      강남역, 강남역사거리 - 강남역 12번 출구 - 역삼역
                    </div>
                  </div>
                  <div className="flex items-start justify-start pc:w-[30.2vw]">
                    <div className="w-[50px] pc:w-[70px] text-ym-blue-4">
                      341
                    </div>
                    <div className="">
                      강남역, 강남역사거리 - 강남역 12번 출구 - 역삼역
                    </div>
                  </div>
                  <div className="flex items-start justify-start pc:w-[30.2vw]">
                    <div className="w-[50px] pc:w-[70px] text-ym-blue-4">
                      360
                    </div>
                    <div className="">
                      신논현역, 구교보타워사거리 - 강남역 12번 출구 - 역삼역
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col pc:flex-row items-start justify-start pc:mx-0">
                <div className="mb-[7px] pc:mb-0 pc:mr-[20px] w-[40px] text-ym-red-2">
                  광역
                </div>
                <div>
                  <div className="flex items-start justify-start pc:w-[30.2vw]">
                    <div className="w-[50px] pc:w-[70px] text-ym-red-2">
                      3600
                    </div>
                    <div className="">
                      신논현역, 구교보타워사거리 - 강남역 12번 출구 - 역삼역
                    </div>
                  </div>
                  <div className="flex items-start justify-start pc:w-[30.2vw]">
                    <div className="w-[50px] pc:w-[70px] text-ym-red-2">
                      1100
                    </div>
                    <div className="">
                      신논현역, 구교보타워사거리 - 강남역 12번 출구 - 역삼역
                    </div>
                  </div>
                  <div className="flex items-start justify-start pc:w-[30.2vw]">
                    <div className="w-[50px] pc:w-[70px] text-ym-red-2">
                      2000-1
                    </div>
                    <div className="">
                      서초동삼호아파트 - 강남역 12번 출구 - 역삼역
                    </div>
                  </div>
                  <div className="flex items-start justify-start pc:w-[30.2vw]">
                    <div className="w-[50px] pc:w-[70px] text-ym-red-2">
                      1700
                    </div>
                    <div className="">
                      강남역, 강남역사거리 - 강남역 12번 출구 - 역삼역
                    </div>
                  </div>
                  <div className="flex items-start justify-start pc:w-[30.2vw]">
                    <div className="w-[50px] pc:w-[70px] text-ym-red-2">
                      2000
                    </div>
                    <div className="">
                      강남역, 강남역사거리 - 강남역 12번 출구 - 역삼역
                    </div>
                  </div>
                  <div className="flex items-start justify-start pc:w-[30.2vw]">
                    <div className="w-[50px] pc:w-[70px] text-ym-red-2">
                      7007
                    </div>
                    <div className="">
                      강남역, 강남역사거리 - 강남역 12번 출구 - 역삼역
                    </div>
                  </div>
                  <div className="flex items-start justify-start pc:w-[30.2vw]">
                    <div className="w-[50px] pc:w-[70px] text-ym-red-2">
                      8001
                    </div>
                    <div className="">
                      신논현역, 구교보타워사거리 - 강남역 12번 출구 - 역삼역
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Directions;
