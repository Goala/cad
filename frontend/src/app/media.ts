export class Media {
  id: number;
  type: string;
  description: string;
}

export class MediaDto extends Media {
  base64: string;
}