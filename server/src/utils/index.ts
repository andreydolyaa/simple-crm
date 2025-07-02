// type ResponseSchemaType = { type: string; data: any };

// export const responseSchema = (
//   responseName: string,
//   data: any
// ): ResponseSchemaType => {
//   return { type: responseName, data };
// };

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
