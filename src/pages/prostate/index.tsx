import Image from 'next/image';

const Prostate = () => {
  return (
    <>
      <div className="pt-[104px] pc:pt-[189px] w-full flex flex-col items-center font-notoSans">
        <div className="relative w-[100vw] h-[73.79vw] pc:h-[29.69vw] border border-transparent">
          <Image
            className="block pc:hidden"
            src={`/images/Prostate.png`}
            fill
            alt="Prostate"
            quality={100}
            priority
          />
          <Image
            className="hidden pc:block"
            src={`/images/ProstatePC.png`}
            fill
            alt="Prostate"
            quality={100}
            priority
          />
          <div className="absolute text-white flex flex-col items-center justify-center w-full h-full">
            <div className="text-[20px] pc:text-[50px] font-semibold mb-[30px] pc:mb-[3.125vw]">
              전립선 비대증이란?
            </div>
            <div className="text-[14px] pc:text-[24px] pc:mb-[0.5vw]">
              전립선 비대증은 40대 이후부터 서서히 나타날 수 있으며
            </div>
            <div className="text-[14px] pc:text-[24px] pc:mb-[0.5vw]">
              60대 남성은 60~70%가 겪는 흔한 질병으로
            </div>
            <div className="text-[14px] pc:text-[24px] pc:mb-[0.5vw]">
              배뇨장애를 동반하는 것이 일반적인데,
            </div>
            <div className="text-[14px] pc:text-[24px]">
              이를 노화 현상으로 착각하여 치료를 미루는 경우가 많습니다.
            </div>
          </div>
        </div>
        <div className="h-[465px] pc:h-[881px] text-black">
          <div className="relative flex justify-center mt-[50px] pc:mt-[118px] w-[304px] pc:w-[788px] h-[161px] pc:h-[417px]">
            <Image src={`/images/Hyperplasia.png`} fill alt="Hyperplasia" />
          </div>
          <div className="flex gap-[54px] pc:gap-[130px] text-[18px] pc:text-[24px] font-bold mt-[20px] pc:mt-[26px] mb-[33px] pc:mb-[56px]">
            <div className="flex justify-center w-[125px] pc:w-[329px] h-[36px]">
              [정상]
            </div>
            <div className="flex justify-center w-[125px] pc:w-[329px] h-[36px]">
              [전립선비대증]
            </div>
          </div>
          <div className="flex justify-center text-[14px] pc:text-[24px]">
            <div className="block pc:hidden">
              <div className="flex justify-center">
                전립선이 비대해지며 요도를 누르면서
              </div>
              <div className="flex justify-center">
                소변의 배출을 방해하는 질병입니다.
              </div>
              <div className="flex justify-center">
                소변을 보더라도 시원하게 보지 못하게 되며
              </div>
              <div className="flex justify-center">
                심한경우 소변이 역류하여 신장에 악영향을
              </div>
              <div className="flex justify-center">미칠 수 있습니다.</div>
            </div>
            <div className="hidden pc:block">
              <div className="flex justify-center">
                전립선이 비대해지며 요도를 누르면서 소변의 배출을 방해하는
                질병입니다.
              </div>
              <div className="flex justify-center">
                소변을 보더라도 시원하게 보지 못하게 되며
              </div>
              <div className="flex justify-center">
                심한경우 소변이 역류하여 신장에 악영향을 미칠 수 있습니다.
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white flex flex-col items-center">
          <div className="relative w-[7.2px] pc:w-[11px] h-[85px] pc:h-[130px]">
            <Image src={`/images/LineBlue.png`} fill alt="Line" />
          </div>
          <div className="h-[110px] pc:h-[200px] flex flex-col items-center justify-center">
            <div className="text-[10px] pc:text-[14px] text-ym-gray tracking-[6px]">
              CAUSE
            </div>
            <div className="text-[28px] pc:text-[50px] text-ym-blue-2 font-semibold">
              전립선 비대증 원인
            </div>
          </div>
          <div className="text-ym-blue-3 text-[14px] pc:text-[24px] mb-[20px] flex flex-col font-bold">
            <div className="hidden pc:block">
              <div className="flex justify-center">
                전립선비대증의 원인은 노화, 유전, 체질, 식생활 , 호르몬 , 인종
                간의 차이 등
              </div>
              <div className="flex justify-center">
                여러가지 이론이 있지만 명확하게 규정되지 않고 있습니다.
              </div>
            </div>
            <div className="block pc:hidden">
              <div className="flex justify-center">
                전립선비대증의 원인은 노화, 유전, 체질,
              </div>
              <div className="flex justify-center">
                식생활 , 호르몬 , 인종 간의 차이 등
              </div>
              <div className="flex justify-center">
                여러가지 이론이 있지만 명확하게 규정되지
              </div>
              <div className="flex justify-center">않고 있습니다.</div>
            </div>
          </div>
          <div className="text-black text-[14px] pc:text-[22px] flex flex-col mb-[15px] pc:mb-[90px]">
            <div className="hidden pc:block">
              <div className="flex justify-center">
                다만, 주로 50대 ~ 70대 연령대가 높은 분들에게 주로 발생하고 있는
                점을 비추어 보아
              </div>
              <div className="flex justify-center">
                남성 호르몬이나 노화가 밀접한 관계가 있다는 것이 유력한 학설로
                보고 있습니다.
              </div>
              <div className="flex justify-center">
                동반 질환으로 당뇨병, 고혈압 또는 심질환자에서 빈도가 높고
                간경화증에서는 낮은 편입니다.
              </div>
            </div>
            <div className="block pc:hidden">
              <div className="flex justify-center">
                다만, 주로 50대 ~ 70대 연령대가 높은 분들에게
              </div>
              <div className="flex justify-center">
                주로 발생하고 있는 점을 비추어 보아
              </div>
              <div className="flex justify-center">
                남성 호르몬이나 노화가 밀접한 관계가 있다는 것이
              </div>
              <div className="flex justify-center">
                유력한 학설로 보고 있습니다.
              </div>
              <div className="flex justify-center">
                동반 질환으로 당뇨병, 고혈압 또는 심질환자에서
              </div>
              <div className="flex justify-center">
                빈도가 높고 간경화증에서는 낮은 편입니다.
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white flex justify-center">
          <div className="grid grid-cols-2 pc:grid-cols-4 mb-[75px] pc:mb-[150px] gap-[1.27vw] pc:gap-[1.3vw] w-[82.15vw] pc:w-[72.66vw] text-white font-bold">
            <div className="relative w-[40.71vw] pc:w-[17.19vw] h-[40.71vw] pc:h-[17.19vw] flex justify-center items-center">
              <Image src={`/images/Cause1.png`} fill alt="Cause" />
              <div className="absolute text-[18px] pc:text-[26px]">노화</div>
            </div>
            <div className="relative w-[40.71vw] pc:w-[17.19vw] h-[40.71vw] pc:h-[17.19vw] flex justify-center items-center">
              <Image src={`/images/Cause2.png`} fill alt="Cause" />
              <div className="absolute text-[18px] pc:text-[26px]">호르몬</div>
            </div>
            <div className="relative w-[40.71vw] pc:w-[17.19vw] h-[40.71vw] pc:h-[17.19vw] flex justify-center items-center">
              <Image src={`/images/Cause3.png`} fill alt="Cause" />
              <div className="absolute text-[18px] pc:text-[26px]">
                유전적 영향
              </div>
            </div>
            <div className="relative w-[40.71vw] pc:w-[17.19vw] h-[40.71vw] pc:h-[17.19vw] flex justify-center items-center">
              <Image src={`/images/Cause4.png`} fill alt="Cause" />
              <div className="absolute text-[18px] pc:text-[26px]">기타</div>
            </div>
          </div>
        </div>
        <div className="relative w-[7.2px] pc:w-[11px] h-[85px] pc:h-[130px]">
          <Image src={`/images/LineBlue.png`} fill alt="Line" />
        </div>
        <div className="h-[110px] pc:h-[200px] flex flex-col items-center justify-center">
          <div className="text-[10px] pc:text-[14px] text-ym-gray tracking-[6px]">
            SYMPTOM
          </div>
          <div className="text-[28px] pc:text-[50px] text-ym-blue-2 font-semibold">
            전립선 비대증 증상
          </div>
        </div>
        <div className="bg-white w-[73vw] pc:w-[976px] shadow-xl mb-[100px] flex flex-col items-center justify-center py-[60px]">
          <div className="flex flex-col items-start justify-start mb-[50px] px-[30px] pc:px-[100px] w-full">
            <div className="border-b border-dashed w-full pc:py-[20px] flex flex-col pc:flex-row items-center justify-center pc:justify-start gap-[10px] pc:gap-[20px]">
              <div className="hidden pc:block">
                <Image
                  src={`/images/Check.png`}
                  width={32}
                  height={28}
                  alt="Check"
                />
              </div>
              <div className="text-ym-blue-3 text-[14px] pc:text-[22px] flex items-center font-bold mt-[30px] pc:mt-[0px] pc:w-[70px]">
                야간뇨
              </div>
              <div className="text-black text-[14px] pc:text-[18px] flex items-center pc:mt-[5px] mb-[20px] pc:mb-[0px]">
                <div className="hidden pc:block">
                  자다가 소변이 마려워서 자주깸 잠을 잘수가 없음
                </div>
                <div className="block pc:hidden">
                  <div>자다가 소변이 마려워서</div>
                  <div>자주깸 잠을 잘수가 없음</div>
                </div>
              </div>
            </div>
            <div className="border-b border-dashed w-full pc:py-[20px] flex flex-col pc:flex-row items-center justify-center pc:justify-start gap-[10px] pc:gap-[20px]">
              <div className="hidden pc:block">
                <Image
                  src={`/images/Check.png`}
                  width={32}
                  height={28}
                  alt="Check"
                />
              </div>
              <div className="text-ym-blue-3 text-[14px] pc:text-[22px] flex items-center font-bold mt-[30px] pc:mt-[0px] pc:w-[70px]">
                잔뇨
              </div>
              <div className="text-black text-[14px] pc:text-[18px] flex items-center pc:mt-[5px] mb-[20px] pc:mb-[0px]">
                <div className="hidden pc:block">
                  소변후 방광에 소변이남아있어 잔뇨감이 계속 있음 소변을 봐도
                  시원하지 않음
                </div>
                <div className="block pc:hidden">
                  <div>소변후 방광에 소변이남아있어 잔뇨감이</div>
                  <div>계속 있음 소변을 봐도 시원하지 않음</div>
                </div>
              </div>
            </div>
            <div className="border-b border-dashed w-full pc:py-[20px] flex flex-col pc:flex-row items-center justify-center pc:justify-start gap-[10px] pc:gap-[20px]">
              <div className="hidden pc:block">
                <Image
                  src={`/images/Check.png`}
                  width={32}
                  height={28}
                  alt="Check"
                />
              </div>
              <div className="text-ym-blue-3 text-[14px] pc:text-[22px] flex items-center font-bold mt-[30px] pc:mt-[0px] pc:w-[70px]">
                빈뇨
              </div>
              <div className="text-black text-[14px] pc:text-[18px] flex items-center pc:mt-[5px] mb-[20px] pc:mb-[0px]">
                화장실을 2시간이내에 한번씩 계속감
              </div>
            </div>
            <div className="w-full pc:py-[20px] flex flex-col pc:flex-row items-center justify-center pc:justify-start gap-[10px] pc:gap-[20px]">
              <div className="hidden pc:block">
                <Image
                  src={`/images/Check.png`}
                  width={32}
                  height={28}
                  alt="Check"
                />
              </div>
              <div className="text-ym-blue-3 text-[14px] pc:text-[22px] flex items-center font-bold mt-[30px] pc:mt-[0px] pc:w-[70px]">
                급박뇨
              </div>
              <div className="text-black text-[14px] pc:text-[18px] flex items-center pc:mt-[5px] mb-[20px] pc:mb-[0px]">
                급하게 소변이 마렵고 참을수가 없음
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-[14px] pc:text-[22px]">
            <div className="hidden pc:block">
              <div className="flex justify-center">
                전립선 비대증은 소변 배출을 방해하는 질병으로
              </div>
              <div className="flex justify-center">
                <nav className="font-bold">
                  방치시 신장/방광에 문제가 되서 합병증
                </nav>
                <nav>을 일으킬수 있습니다.</nav>
              </div>
            </div>
            <div className="block pc:hidden">
              <div className="flex justify-center">
                전립선 비대증은 소변 배출을
              </div>
              <div className="flex justify-center">방해하는 질병으로</div>
              <div className="flex justify-center font-bold">
                방치시 신장/방광에 문제가 되서 합병증
              </div>
              <div className="flex justify-center">을 일으킬수 있습니다.</div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white flex flex-col items-center">
          <div className="relative w-[7.2px] pc:w-[11px] h-[85px] pc:h-[130px]">
            <Image src={`/images/LineBlue.png`} fill alt="Line" />
          </div>
          <div className="h-[110px] pc:h-[200px] flex flex-col items-center justify-center">
            <div className="text-[10px] pc:text-[14px] text-ym-gray tracking-[6px]">
              UROLIFT
            </div>
            <div className="text-[28px] pc:text-[50px] text-ym-blue-2 font-semibold">
              유로리프트
            </div>
            <div>사진</div>
            <div>사진</div>
            <div className="text-[28px] pc:text-[50px] text-ym-blue-2 font-semibold">
              유로리프트 원리
            </div>
          </div>
        </div>
        <div className="text-[28px] pc:text-[50px] text-ym-blue-2 font-semibold">
          유로리프트 장점
        </div>
      </div>
    </>
  );
};

export default Prostate;
