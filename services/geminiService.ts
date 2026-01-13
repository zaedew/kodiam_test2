
import { GoogleGenAI } from "@google/genai";

// API Key는 process.env.API_KEY에서 직접 가져옴
const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const generateStudyGuide = async (passage: string) => {
  try {
    const ai = getAI();
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `성경 구절 "${passage}"에 대한 깊이 있는 통독 가이드를 작성해주세요. 
      포함할 내용:
      1. 시대적 배경
      2. 핵심 메시지 (3가지 포인트)
      3. 오늘날의 적용점
      형식: 마크다운 스타일로 가독성 있게 작성해주세요.`,
      config: {
        systemInstruction: "당신은 코디엠 성경통독의 전문 신학 가이드입니다. 신뢰감 있고 따뜻한 어조로 성경을 설명하며, 한국어를 사용합니다.",
      }
    });
    
    return response.text || "가이드를 생성할 수 없습니다.";
  } catch (error) {
    console.error("Study Guide Error:", error);
    return "가이드를 불러오는 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
  }
};

export const chatWithBibleAI = async (history: any[], message: string) => {
  try {
    const ai = getAI();
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: "당신은 성경 공부를 도와주는 AI 멘토입니다. 질문에 대해 성경적 근거를 바탕으로 친절하게 답변해주세요. 한국어만 사용합니다.",
      },
    });

    const response = await chat.sendMessage({ message });
    return response.text || "죄송합니다. 답변을 생성할 수 없습니다.";
  } catch (error) {
    console.error("Chat API Error:", error);
    return "연결 상태가 불안정합니다. 다시 질문해주세요.";
  }
};
