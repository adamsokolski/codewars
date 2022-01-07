public class Main {
    // TODO: import functions form separate files
    public static void main(String[] args) {
        System.out.println(createPhoneNumber(new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 0}));
    }
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
