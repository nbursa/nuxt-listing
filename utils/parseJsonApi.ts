import type { Winner } from "@/types/winner";

export const parseJsonApi = (data: any): Winner[] => {
  return data.map((item: any) => ({
    id: item.id,
    name: item.attributes.winnerName,
    photo: item.attributes.winnerPhoto,
    scholarship: item.attributes.scholarshipTitle,
    awardedAt: item.attributes.wonAt,
    video: item.attributes.testimonialVideo,
    testimonial: item.attributes.testimonialText,
    amount: item.attributes.amountWon,
  }));
};
