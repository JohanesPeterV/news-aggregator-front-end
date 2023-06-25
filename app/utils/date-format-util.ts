export default class DateFormatUtil {
  static parseShortDateIntoReadableDateWithoutYear(shortDate: string) {
    const date = new Date(shortDate);
    const readableDate = date.toDateString();
    return readableDate;
  }
}
