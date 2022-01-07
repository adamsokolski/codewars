public class createPhoneNumber {
    public static String createPhoneNumber(int[] numbers) {
        String returnString = "";
        for (int i = 0; i < numbers.length; i++) {
            if (i == 0) returnString += "(";
            if (i == 3) returnString += ") ";
            if (i == 6) returnString += "-";

            returnString += numbers[i];
        }
        return returnString;
    }
}
