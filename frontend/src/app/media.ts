export class Media {
  id?: number;
  type: string;
  fileEnding: string;
  description: string;
  fileUrl: string;
  fileBase64: string;
}

export class MediaDto extends Media {
  base64: string;
}