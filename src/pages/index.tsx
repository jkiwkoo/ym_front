import Image from 'next/image';

const Home = () => {
  return (
    <>
      <div className="pt-[104px] pc:pt-[189px] w-full flex flex-col items-center font-notoSans">
        <div className="h-[110px] pc:h-[200px] flex flex-col items-center justify-center">
          <div className="text-[10px] pc:text-[14px] text-ym-gray tracking-[6px]">
            INTRODUCTION
          </div>
          <div className="text-[28px] pc:text-[50px] text-ym-blue-2 font-semibold">
            병원장 소개
          </div>
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
        <div className="relative w-[7.2px] pc:w-[11px] h-[85px] pc:h-[130px]">
          <Image src={`/images/LineBlue.png`} fill alt="Line" />
        </div>
        <div className="h-[110px] pc:h-[200px] flex flex-col items-center justify-center">
          <div className="text-[10px] pc:text-[14px] text-ym-gray tracking-[6px]">
            MEDIA
          </div>
          <div className="text-[28px] pc:text-[50px] text-ym-blue-2 font-semibold">
            온라인 · 방송
          </div>
        </div>
        <div className="w-[100vw] pc:w-[72.917vw] flex flex-col items-center">
          <div className="w-[100vw] pc:w-[72.917vw] h-[50px] pc:h-[77px] bg-ym-blue flex justify-center items-center text-[18px] pc:text-[28px] gap-[10px]">
            <div className="text-white">매일 경제 TV</div>
            <div className="text-ym-green">건강백세</div>
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
          <div className="w-[100vw] pc:w-[72.917vw] h-[50px] pc:h-[77px] bg-ym-blue flex justify-center items-center text-[18px] pc:text-[28px] gap-[10px]">
            <div className="text-white">팟빵</div>
            <div className="text-ym-green">변춘애의 건강솔까말</div>
          </div>
          <div className="w-[100vw] pc:w-[72.917vw] h-[111.2vw] pc:h-[14.6vw] bg-white flex flex-col pc:flex-row justify-center items-center mb-[30px] pc:mb-[70px] gap-[30px] pc:gap-[70px]">
            <div className="relative w-[71.25vw] pc:w-[12.34vw] h-[71.25vw] pc:h-[12.34vw]">
              <Image
                className="pt-[15px] pc:pt-0"
                src={`/images/BC.png`}
                fill
                alt="변춘애"
                quality={100}
                priority
              />
            </div>
            <div className="flex text-black text-[16px] pc:text-[20px] gap-[10px] mr-[8vw] ml-[8.65vw] pc:mx-0">
              <div className="font-bold">·</div>
              <div>
                제62회 "포경 수술 할까말까? 최욱과 비뇨기과 전문의 김정민원장의
                솔직토크"
              </div>
            </div>
          </div>
          <div className="w-[100vw] pc:w-[72.917vw] h-[50px] pc:h-[77px] bg-ym-blue flex justify-center items-center text-[18px] pc:text-[28px] gap-[10px]">
            <div className="text-white">언론매체</div>
            <div className="text-ym-green">연재한 칼럼</div>
          </div>
          <div className="w-[100vw] pc:w-[72.917vw] h-[215vw] pc:h-[700px] bg-white pc:flex mb-[85px] pc:mb-[150px]">
            <div className="pc:w-[30vw] flex justify-center mb-[250px] pc:mb-0">
              <div className="absolute pc:mt-[2.6vw] pc:ml-[4vw] ml-[5vw] mt-[30px]">
                <div className="relative w-[188px] pc:w-[14.531vw] h-[63px] pc:h-[4.843vw] z-20">
                  <Image src={`/images/Column1.png`} fill alt="column" />
                </div>
              </div>
              <div className="absolute pc:mt-[8.6vw] pc:mr-[2vw] mr-[150px] mt-[100px]">
                <div className="relative w-[174px] pc:w-[13.437vw] h-[62px] pc:h-[4.792vw] z-10">
                  <Image src={`/images/Column2.png`} fill alt="column" />
                </div>
              </div>
              <div className="absolute pc:mt-[11.05vw] pc:ml-[8vw] ml-[150px] mt-[90px]">
                <div className="relative w-[130px] pc:w-[10.052vw] h-[130px] pc:h-[10.052vw]">
                  <Image src={`/images/Column3.png`} fill alt="column" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start w-full text-black text-[16px] pc:text-[20px] gap-[20px] font-normal mt-[60px] ml-[20px] pc:ml-0 pr-[30px] pc:pr-0">
              <div className="text-[18px] pc:text-[24px] font-bold text-ym-blue-3">
                서울파이낸스 및 언론 매체 다수 연재
              </div>
              <div className="flex gap-[10px]">
                <div className="font-bold">·</div>
                <div>솔직한性 당당한性</div>
              </div>
              <div className="flex gap-[10px]">
                <div className="font-bold">·</div>
                <div>전립선염 탈출, 좌욕이나 반신욕으로</div>
              </div>
              <div className="flex gap-[10px]">
                <div className="font-bold">·</div>
                <div>'정관수술' 성기능과는 아무런 관련 없어</div>
              </div>
              <div className="flex gap-[10px]">
                <div className="font-bold">·</div>
                <div>
                  '의도적 부부생활' 남성호르몬 분비 증가로 성욕저하증에 효과
                </div>
              </div>
              <div className="flex gap-[10px]">
                <div className="font-bold">·</div>
                <div>
                  전립선암, '암 조기발견시 10년 생존율이 80%' 조기발견과 예방이
                  중요
                </div>
              </div>
              <div className="flex gap-[10px]">
                <div className="font-bold">·</div>
                <div>확대효과 탁월하며 영구적인 음경확대술로 만족</div>
              </div>
              <div className="flex gap-[10px]">
                <div className="font-bold">·</div>
                <div>[100세 청춘] 무기력한 당신 혹시 갱년기?</div>
              </div>
              <div className="flex gap-[10px]">
                <div className="font-bold">·</div>
                <div>고환염, 방치하다 불임 가능성 키워</div>
              </div>
              <div className="flex gap-[10px]">
                <div className="font-bold">·</div>
                <div>굵기나 길이보다 중요한 테크닉</div>
              </div>
              <div className="flex gap-[10px]">
                <div className="font-bold">·</div>
                <div>[性생활 이야기] 휘어진 음경</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-ym-blue h-[1050px] pc:h-[1500px] flex flex-col items-center text-white text-[16px] pc:text-[20px]">
          <div className="relative w-[7.2px] pc:w-[11px] h-[85px] pc:h-[130px]">
            <Image src={`/images/LineWhite.png`} fill alt="Line" />
          </div>
          <div className="mt-[10px] pc:mt-[24px] text-[10px] pc:text-[14px] text-ym-green tracking-[6px]">
            HISTORY
          </div>
          <div className="text-[28px] pc:text-[50px] font-bold">
            김정민 원장님
          </div>
          <div className="px-[13.74vw] pc:px-[150px]">
            <div className="pc:flex mt-[40px] pc:mt-[120px]">
              <div className="text-[18px] pc:text-[36px] pc:w-[250px] text-ym-green mb-[4px] pc:mb-0">
                1993
              </div>
              <div className="flex gap-[10px] items-center">
                <div className="font-bold">·</div>
                <div className="pc:w-[700px] flex items-center">
                  연세대학교 의과대학교 및 동 대학원
                </div>
              </div>
            </div>
            <div className="pc:flex mt-[40px] pc:mt-[60px]">
              <div className="text-[18px] pc:text-[36px] pc:w-[250px] text-ym-green mb-[4px] pc:mb-0">
                1994
              </div>
              <div className="pc:w-[700px] flex flex-col pc:py-[20px] gap-[9px] pc:gap-[20px]">
                <div className="flex gap-[10px]">
                  <div className="font-bold">·</div>
                  <div>세브란스병원 전공의 수료/의학박사</div>
                </div>
                <div className="flex gap-[10px]">
                  <div className="font-bold">·</div>
                  <div>비뇨기과 전문의</div>
                </div>
                <div className="flex gap-[10px]">
                  <div className="font-bold">·</div>
                  <div>대한비뇨기과학회 정회원</div>
                </div>
                <div className="flex gap-[10px]">
                  <div className="font-bold">·</div>
                  <div>미국비뇨기과학회 정회원</div>
                </div>
                <div className="flex gap-[10px]">
                  <div className="font-bold">·</div>
                  <div>대한남성과학회 정회원</div>
                </div>
                <div className="flex gap-[10px]">
                  <div className="font-bold">·</div>
                  <div>대한소아비뇨기과학회 정회원</div>
                </div>
                <div className="flex gap-[10px]">
                  <div className="font-bold">·</div>
                  <div>대한전립선학회 정회원</div>
                </div>
                <div className="flex gap-[10px]">
                  <div className="font-bold">·</div>
                  <div>
                    대한비뇨기종양학회 정회원 대한배뇨장애및요실금학회 정회원
                  </div>
                </div>
                <div className="flex gap-[10px]">
                  <div className="font-bold">·</div>
                  <div>요로생식기감염학회 정회원</div>
                </div>
                <div className="flex gap-[10px]">
                  <div className="font-bold">·</div>
                  <div>APSIR (아시아태평양성기능학회) 준회원</div>
                </div>
              </div>
            </div>
            <div className="pc:flex mt-[40px] pc:mt-[60px]">
              <div className="text-[18px] pc:text-[36px] pc:w-[250px] text-ym-green mb-[4px] pc:mb-0">
                1994 ~ 2001
              </div>
              <div className="flex gap-[10px] items-center">
                <div className="font-bold">·</div>
                <div className="pc:w-[700px] flex items-center">
                  연세의대 비뇨기과 외래교수
                </div>
              </div>
            </div>
            <div className="pc:flex mt-[40px] pc:mt-[60px]">
              <div className="text-[18px] pc:text-[36px] pc:w-[250px] text-ym-green mb-[4px] pc:mb-0">
                2003
              </div>
              <div className="flex gap-[10px] items-center">
                <div className="font-bold">·</div>
                <div className="pc:w-[700px] flex items-center">
                  유로메디컬센터 비뇨기과 대표원장
                </div>
              </div>
            </div>
            <div className="pc:flex mt-[40px] pc:mt-[60px]">
              <div className="text-[18px] pc:text-[36px] pc:w-[250px] text-ym-green mb-[4px] pc:mb-0">
                2006
              </div>
              <div className="flex gap-[10px] items-center">
                <div className="font-bold">·</div>
                <div className="pc:w-[700px] flex items-center">
                  연세우노비뇨기과 대표원장
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-ym-gray-3 flex flex-col items-center justify-center">
          <div className="relative w-[7.2px] pc:w-[11px] h-[85px] pc:h-[130px]">
            <Image src={`/images/LineBlue.png`} fill alt="Line" />
          </div>
          <div className="mt-[20px] pc:mt-[24px] h-[110px] pc:h-[200px] flex flex-col items-center justify-center">
            <div className="text-[10px] pc:text-[14px] text-ym-gray tracking-[6px]">
              CONTACT
            </div>
            <div className="text-[28px] pc:text-[50px] text-ym-blue-2 font-semibold mb-[25px] pc:mb-[50px]">
              온라인 상담
            </div>
            <div className="flex">
              <div>이름</div>
              <div>입력칸</div>
            </div>
            <div>신청하기</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
