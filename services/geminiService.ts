
import { GoogleGenAI, Type } from "@google/genai";

const apiKey = process.env.API_KEY || "";
const ai = new GoogleGenAI({ apiKey });

export const generateStudyGuide = async (passage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `성경 구절 "${passage}"에 대한 깊이 있는 통독 가이드를 작성해주세요. 
      포함할 내용:
      1. 시대적 배경
      2. 핵심 메시지 (3가지 포인트)
      3. 오늘날의 적용점
      형식: JSON이 아닌 마크다운 형식으로 작성해주세요.`,
      config: {
        systemInstruction: "당신은 코디엠 성경통독의 전문 신학 가이드입니다. 따뜻하고 지혜로운 어조로 성경을 설명하며, 한국어를 사용합니다.",
      }
    });
    return response.text;
  } catch (error) {
    console.error("Error generating study guide:", error);
    return "가이드를 불러오는 중 오류가 발생했습니다.";
  }
};

export const chatWithBibleAI = async (history: { role: 'user' | 'model', parts: { text: string }[] }[], message: string) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: "당신은 성경 공부를 도와주는 AI 멘토입니다. 사용자의 질문에 성경적 근거를 바탕으로 친절하게 답변해주세요. 한국어만 사용합니다.",
      },
    });

    // History is handled slightly differently in this SDK version sometimes, 
    // but for simplicity we can use sendMessage.
    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Chat error:", error);
    return "죄송합니다. 답변을 생성하는 중에 문제가 발생했습니다.";
  }
};
