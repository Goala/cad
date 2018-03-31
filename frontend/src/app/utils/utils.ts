export default class Utils {
  private static audioFormats: Array<string> = ['MP3', 'WMA', 'OGG', 'ACC'];
  private static imageFormats: Array<string> = ['JPG', 'JPEG', 'GIF', 'BMP', 'TIFF', 'PNG'];
  private static videoFormats: Array<string> = ['MPG', 'MP4', 'AVI', 'MOV', 'FlV', 'SWF', 'RM'];
  private static types = ['AUDIO', 'IMAGE', 'VIDEO'];

  static checkFormat(val: string): string {
    if (this.imageFormats.indexOf(val.toUpperCase()) > -1) {
      return(this.types[1]);
    } else if (this.videoFormats.indexOf(val.toUpperCase()) > -1) {
      return(this.types[2]);
    } else if (this.audioFormats.indexOf(val.toUpperCase()) > -1) {
      return(this.types[0]);
    }
    return '';
  }
}
