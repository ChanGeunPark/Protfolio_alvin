"use client";
import AlvinBadge from "@/components/common/badge/alvinBadge";
import React from "react";

function Career() {
  return (
    <section className="bg-[#28292D] relative min-h-screen py-20">
      <div className="container px-3 mx-auto">
        <h2 className="text-white text-2xl font-bold">커리어</h2>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 z-30 mt-8">
          <div className="text-zinc-100 relative z-10">
            <h3 className="font-bold text-lg mb-4 text-approveSub">(주)오지</h3>
            <p className="opacity-80 leading-relaxed">
              스타트업에서 프로젝트를 처음부터 끝까지 만들고 운영하면서
              프론트엔드 구조 설계, 상태 관리, API 연동, 실서비스 운영 경험을
              깊게 쌓았다. AI 캐릭터 채팅 시스템을 도입하여 일 10만 회 이상의
              대화 요청을 안정적으로 처리했습니다.
            </p>

            <div className="flex gap-2 mt-4">
              <AlvinBadge BadgeStyle="BLACK" BadgeSize="SMALL">
                2022.09 ~ 2026.02
              </AlvinBadge>
              <AlvinBadge BadgeStyle="BLACK" BadgeSize="SMALL">
                프론트엔드
              </AlvinBadge>
            </div>
          </div>
          <div className="text-zinc-100 relative z-10">
            <h3 className="font-bold text-lg mb-4 text-approveSub">
              (주)에듀에듀
            </h3>
            <p className="opacity-80 leading-relaxed">
              교육 플랫폼과 서비스 구축 과정에서 기획, 디자인, 퍼블리싱,
              프론트엔드, 데이터베이스 설정까지 경험하며 비즈니스 전반의 개발
              플로우를 익혔습니다.
            </p>

            <div className="flex gap-2 mt-4">
              <AlvinBadge BadgeStyle="BLACK" BadgeSize="SMALL">
                2020.10 ~ 2022.06
              </AlvinBadge>
              <AlvinBadge BadgeStyle="BLACK" BadgeSize="SMALL">
                풀스택
              </AlvinBadge>
              <AlvinBadge BadgeStyle="BLACK" BadgeSize="SMALL">
                디자인
              </AlvinBadge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Career;
